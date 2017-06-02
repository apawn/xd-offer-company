<template>
    <div class="student-list">
        <i-table :columns="studentColumn"
                 :data="studentData"
                 :content="self"
                 width="100%"></i-table>
    </div>
</template>

<script>
import { routerGo, getCurrentStudentPage, getStudentsCount, setCurrentActiveKey, getInvitedStudents, setSignInModal, getCurrentStudentDetail } from '../../vuex/actions.js'
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
            }]
        }
    },
    computed: {
        studentData: function () {
            return this.invitedStudents.map(item => {
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
        if (!this.session) {
            this.setSignInModal(true);
        }


    },
    vuex: {
        getters: {
            invitedStudents: state => state.invitedStudents || [],
            session: state => state.session,

        },
        actions: {
            setSignInModal,
            routerGo,
            setCurrentActiveKey,
            getInvitedStudents,
            getCurrentStudentDetail
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