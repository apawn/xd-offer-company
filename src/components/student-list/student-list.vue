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
import { routerGo, getCurrentStudentPage, getStudentsCount, goStudentDetail, setCurrentActiveKey, removeStudentAction } from '../../vuex/actions.js'
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
                    return ` <i-button type="error" size="small" @click="removeStudent('${row.email}')">删除</i-button>`
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
        removeStudent(email) {
            console.log(email);
            this.removeStudentAction(email).then(() => {
                this.$Message.success('删除成功');
            }).catch(err => {
                this.$Message.error('删除失败');
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
            totalCount: state => state.totalStudentCount,
            currentPage: state => state.currentStudentPage,
            currentStudents: state => state.currentStudents
        },
        actions: {
            routerGo,
            getCurrentStudentPage,
            getStudentsCount,
            setCurrentActiveKey,
            removeStudentAction,
            goStudentDetail
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