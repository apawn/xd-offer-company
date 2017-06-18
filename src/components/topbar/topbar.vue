<template>
    <div class="topbar">
        <Row>
            <i-col span="6"
                   class="company-wrapper">
                <a class="company"
                   href="/index.html">我要求职</a>
            </i-col>
    
            <i-col span="18"
                   class="option-container">
                <a v-if="session"
                   class="option"
                   @click="this.routerGo('/invitations')">邀请记录</a>
                <a v-if="session"
                   class="option"
                   @click="this.routerGo('/received/')">收到简历</a>
                <a v-if="session"
                   class="option">{{session.name}}</a>
                <a v-if="!session"
                   class="option"
                   @click="signPop()">欢迎，请登录</a>
                <a v-if="!session"
                   class="option"
                   @click="routerGo('/sign-up')">注册</a>
                <a v-if="session"
                   class="option"
                   @click="signOut()">退出</a>
            </i-col>
            <!--登录对话框       -->
            <Modal :visible="signInModal"
                   width="350"
                   :mask-closable="false"
                   @on-ok="signInOk"
                   @on-cancel="signInCancel">
                <p slot="header"
                   class="signin-title">
                    <span class="fa fa-user-circle-o"></span>
                    <span>登录</span>
                </p>
                <div class="form">
                    <i-form :label-width="80"
                            :model="formInline"
                            :rules="ruleInline">
                        <Form-item label="公司邮箱"
                                   prop="user">
                            <i-input type="text"
                                     :value.sync="formInline.user"
                                     placeholder="请输入">
                            </i-input>
                        </Form-item>
                        <Form-item label="公司密码"
                                   prop="password">
                            <i-input :value.sync="formInline.password"
                                     type="password"
                                     placeholder="请输入">
                            </i-input>
                        </Form-item>
                        <i-form>
                </div>
    
                <div slot="footer"
                     class="signin-footer">
                    <p class="forget">
                        <a @click="routerGo('./forget')">忘记密码</a>
                    </p>
                    <i-button type="success"
                              size="large"
                              long
                              :loading="modal_loading"
                              @click="signInClick">
                        登录
                    </i-button>
                </div>
            </Modal>
        </Row>
    </div>
</template>

<script>
import {
    signIn, signOut, routerGo, setSignInModal, getInvitedStudents,
    getDeliveriedStudents,
} from '../../vuex/actions.js'
export default {
    data() {
        return {
            modal_loading: false,
            formInline: {
                user: "test2@qq.com",
                password: "hello"
            },
            ruleInline: {
                user: [
                    { required: true, message: '请填写公司邮箱', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请填写密码', trigger: 'blur' },
                ]
            },
        }
    },
    methods: {
        signPop() {
            this.setSignInModal(true);
        },
        signInClick() {

            this.modal_loading = true;
            this.signInActions(this.formInline.user, this.formInline.password).then(res => {
                this.$Message.success('登录成功');
                this.modal_loading = false;
                this.setSignInModal(false);
                this.getInvitedStudents(this.session.email);
                this.getDeliveriedStudents(this.session.email);
            }).catch(err => {
                this.$Message.error('登录失败');
                this.modal_loading = false;
            })
        },
        signInOk() {
        },
        signInCancel() {
            this.setSignInModal(false);
        }
    },

    vuex: {
        getters: {
            signInModal: state => state.signInModal,
            session: state => state.session
        },

        actions: {
            getInvitedStudents,
            getDeliveriedStudents,
            routerGo,
            signInActions: signIn,
            signOut,
            setSignInModal
        }
    }
}
</script>

<style lang="less">
.topbar {
    height: 30px;
    width: 100%;
    background: #fff;
    line-height: 30px;
    color: #000;
    clear: both;
    padding: 0 50px;
    .company-wrapper {
        >.company {
            color: #e92322;
        }
    }
    .option-container {
        text-align: right;
        >.option {
            color: #111;
            margin-left: 8px;
            &:not(:last-child) {
                border-right: 1px solid rgba(0, 0, 0, 0.3);
                padding-right: 11px;
            }
        }
    }
    .signin-title {
        font-size: 17px;
        text-align: center;
        color: #5cadff;
    }
    .ivu-modal-body {
        padding: 0 16px 0 0;
        .form {
            margin-top: 25px;
        }
    }
    .signin-footer {
        margin-top: 0px;
        margin-bottom: 10px;
        .forget {
            text-align: right;
            margin-bottom: 10px;
        }
    }
}
</style>