<template>
    <div class="student-list">
        <i-table :columns="studentColumn"
                 :data="studentData"
                 :content="self"
                 width="100%"></i-table>
    </div>
</template>

<script>
import { routerGo, getCurrentStudentPage, getStudentsCount, goStudentDetail, setCurrentActiveKey, getInvitedStudents, setSignInModal } from '../../vuex/actions.js'
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
                title: '投递职位',
                key: "position"
            }]
        }
    },
    computed: {
        studentData: function () {
            return this.deliveriedStudents.map(item => {
                let position = [];
                this.session.received.map(_item => {
                    if (_item.email == item.email) {
                        position.push(_item.position);
                    }
                })
                return {
                    name: item.name,
                    collage: item.collage,
                    speciality: item.speciality,
                    gender: item.gender == "male" ? '男' : '女',
                    email: item.email,
                    position: position
                }
            }) || []
        }
    },
    methods: {
    },

    created() {
        this.setCurrentActiveKey(1);
        if (!this.session) {
            this.setSignInModal(true);
        }


    },
    vuex: {
        getters: {
            deliveriedStudents: state => state.deliveriedStudents || [],
            session: state => state.session,

        },
        actions: {
            setSignInModal,
            routerGo,
            setCurrentActiveKey,
            getInvitedStudents,
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