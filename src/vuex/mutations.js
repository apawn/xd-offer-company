import { router } from '../router.js'
import Vue from 'Vue'
export default {
    ROUTE_GO(state, href, anchorSelector = "body") {
        // router.go(href);
        router.go(href);
        setTimeout(() => {
            var anchor = document.querySelector(anchorSelector);
            if (anchor)
                document.body.scrollTop = anchor.offsetTop - 60;
        }, 0);
    },

    SIGN_IN(state, result) {
        state.session = result;
    },

    SET_CURRENT_COMPANY_DETAIL(state, currentCompany) {
        state.currentCompany = currentCompany;
    },
    // 设置登录对话框是否显示
    SET_SIGNIN_MODAL(state, signInModal) {
        state.signInModal = signInModal;
    },

    SET_CURRENT_ACTIVE_KEY(state, activeKey) {
        state.currentActiveKey = activeKey;
    },


    // 学生部分
    SET_CURRENT_STUDENT_PAGE(state, page, students) {
        state.currentStudentPage = page;
        state.currentStudents = students;
    },
    SET_STUDENT_TOTAL_COUNT(state, totalCount) {
        state.totalStudentCount = totalCount.count;
    },
    SET_CURRENT_STUDENT(state, email) {
        var student = state.currentStudents.find((item) => {
            return item.email == email
        })
        if (student) {
            state.currentStudent = student;
        }
    },

    // 邀请部分

    SET_INVITED_STUDENTS(state, students) {
        state.invitedStudents = students;
    },
    UPDATE_CURRENT_STUDENT(state, email) {
        var student = state.currentStudents.find(item => item.email === email);
        if (student) {
            state.invitedStudents.push(student);
        }

    },
    SET_DELIVERIED_STUDENTS(state, emails) {
        state.deliveriedStudents = emails
    },
    SIGN_OUT(state) {
        state.session = null;
    },
    SET_CURRENT_STUDENT_DETAIL(state, student) {
        state.currentStudent = student.student;
    }
}