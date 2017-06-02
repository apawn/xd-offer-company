<template>
    <div class="student-list">
        <i-table :columns="studentColumn"
                 :data="studentData"
                 :content="self"
                 width="100%"></i-table>
        <Page :current="currentPage"
              :total="totalCount"
              :page-size="7"
              @on-change="pageChange"
              simple
              class="pager"></Page>
    </div>
</template>

<script>
import { routerGo, getCurrentStudentPage, getStudentsCount, getCurrentStudentDetail, setCurrentActiveKey, inviteStudent } from '../../vuex/actions.js'
export default {
    data() {
        return {
            self: this,
            studentColumn: [{
                title: '学生姓名',
                key: "name",
                render: function (row, column, index) {
                    return `<a @click="goStudentDetail('${row.name}','${row.email}')"{>${row.name}</a>`
                }
            }, {
                title: '学院',
                key: "collage"
            }, {
                title: '专业',
                key: "speciality"
            }, {
                title: '性别',
                key: "gender"
            }, {
                title: '操作',
                render: function (row, column, index) {
                    return ` <i-button :type="hasDeliveried('${row.email}') ? 'success' : 'success' "
                        :disabled="hasDeliveried('${row.email}')"
                     size="small" @click="invite('${row.email}')">邀请</i-button>`
                }
            }]
        }
    },
    computed: {
        studentData: function () {
            return this.currentStudents.map(item => {
                return {
                    name: item.name,
                    collage: item.collage,
                    speciality: item.speciality,
                    gender: item.gender == "male" ? '男' : '女',
                    email: item.email
                }
            }) || []
        }
    },
    methods: {
        pageChange(currentPage) {
            this.getCurrentStudentPage(currentPage);
        },

        invite(email) {
            this.inviteStudent(this.session.email, email).then(res => {
                this.$Message.success("邀请成功");
            }).catch(err => {
                console.log(err);
                this.$Message.error("邀请失败");
            })
        },
        hasDeliveried(email) {
            return !this.session || this.invitedStudents.find(item => item.email == email) != null
        },
        goStudentDetail(name, email) {
            this.getCurrentStudentDetail(email).then(res => {
                this.routerGo(`student/${name}`);
            }).catch(err => {
                console.log(err);
            })
        }
    },

    created() {
        this.setCurrentActiveKey(1);
        this.getStudentsCount().then(res => {
            if (res.count > 0) {
                this.getCurrentStudentPage(1).catch(err => {
                    console.log(err);
                    return;
                })
            }
        }).catch(err => {
            console.log(err);
            return;
        })
    },

    vuex: {
        getters: {
            session: state => state.session,
            totalCount: state => state.totalStudentCount,
            currentPage: state => state.currentStudentPage,
            currentStudents: state => state.currentStudents,
            invitedStudents: state => state.invitedStudents
        },
        actions: {
            routerGo,
            getCurrentStudentPage,
            getStudentsCount,
            setCurrentActiveKey,
            getCurrentStudentDetail,
            inviteStudent
        }
    }

}

</script>

<style lang="less">
.student-list {
    padding: 30px 20px;
    .pager {
        margin-top: 30px;
        margin-bottom: 100px;
        display: flex;
        justify-content: center;
    }
}
</style>