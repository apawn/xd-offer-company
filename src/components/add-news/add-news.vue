<template>
    <div class="add-news-wrapper">
        <h2 class="title">添加公告</h2>
        <i-form v-ref:form-validate
                :model="formValidate"
                :rules="ruleValidate"
                :label-width="80">
            <Form-item label="id"
                       prop="id">
                <i-input :value.sync="formValidate.id"
                         placeholder="形如20170424的格式..."></i-input>
            </Form-item>
            <Form-item label="标题"
                       prop="header">
                <i-input :value.sync="formValidate.header"
                         placeholder="请输入标题..."></i-input>
            </Form-item>
    
            <Form-item label="内容"
                       prop="content">
                <i-input :value.sync="formValidate.content"
                         type="textarea"
                         :autosize="{minRows: 15,maxRows: 25}"
                         placeholder="请输入内容..."></i-input>
            </Form-item>
            <Form-item>
                <i-button type="primary"
                          @click="handleSubmit('formValidate')">添加</i-button>
                <i-button type="ghost"
                          @click="handleReset('formValidate')"
                          style="margin-left: 8px">重置</i-button>
            </Form-item>
        </i-form>
    </div>
</template>
<script>
import { routerGo, getAllNews, setCurrentActiveKey, removeNewsAction, setCurrentNews, addNews } from '../../vuex/actions.js'
export default {
    data() {
        return {
            self: this,
            formValidate: {
                id: '',
                header: '',
                content: '',

            },
            ruleValidate: {
                id: [{
                    required: true, message: 'Id不能为空', trigger: 'blur'
                }],
                header: [{
                    required: true, message: '标题不能为空', trigger: 'blur'
                }],
                content: [{
                    required: true, message: '内容不能为空', trigger: 'blur'
                }],

            }
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.addNews(this.formValidate).then(() => {
                        this.$Message.success('添加成功');

                        setTimeout(() => {
                            this.self.routerGo('/news');
                        }, 200);
                    }).catch(err => {
                        console.log(err);
                        this.$Message.error('添加失败');
                    })
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        }

    },
    vuex: {
        getters: {
        },
        actions: {
            routerGo,
            getAllNews,
            setCurrentActiveKey,
            removeNewsAction,
            setCurrentNews,
            addNews
        }
    }

}
</script>

<style lang="less">
.add-news-wrapper {
    width: 70%;
    margin-left: 30px;
    margin-top: 30px;
    >.title {
        position: relative;
        margin: 30px 0 30px 80px;
        font-size: 24px;
        font-weight: 300;
    }
}
</style>
