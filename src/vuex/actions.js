import { router } from '../router.js'

export const routerGo = ({ dispatch }, href, anchor) => {
    var res = dispatch('ROUTE_GO', href, anchor);
}

export const signIn = ({ dispatch }, username, password) => {
    return new Promise((resolve, reject) => {
        fetch("/api/companylogin", {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: username,
                password: password
            })
        }).then(res => res.json()).then(json => {
            if (json.ok) {
                resolve();
                dispatch('SIGN_IN', json.result);
            } else {
                reject();
                dispatch('SIGN_IN', {})
            }
        }).catch(err => {
            reject();
            dispatch('SIGN_IN', {})
        })
    })
}

export const setSignInModal = ({ dispatch }, signInModal) => {
    dispatch('SET_SIGNIN_MODAL', signInModal);
}

export const setCurrentActiveKey = ({ dispatch }, activeKey) => {
    dispatch('SET_CURRENT_ACTIVE_KEY', activeKey + '');
}




// 学生模块


export const getCurrentStudentPage = ({ dispatch }, page) => {
    return new Promise((resolve, reject) => {
        fetch('/api/getcurrentstudentpage', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                page: page
            })
        }).then(res => res.json()).then(res => {
            dispatch('SET_CURRENT_STUDENT_PAGE', page, res);
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}
export const getStudentsCount = ({ dispatch }) => {
    return new Promise((resolve, reject) => {
        fetch('/api/getstudentscount', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(res => {
            dispatch('SET_STUDENT_TOTAL_COUNT', res);
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}
export const getCurrentStudentDetail = ({ dispatch }, email) => {
    return new Promise((resolve, reject) => {
        fetch('/api/studentdetail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: email
            })
        }).then(res => res.json()).then(res => {
            dispatch('SET_CURRENT_STUDENT_DETAIL', res);
            resolve(res);
        }).catch(err => {
            dispatch('SET_CURRENT_STUDENT_DETAIL', {});
            reject(err);
        })
    })
}


// 要请相关

export const inviteStudent = ({ dispatch }, companyEmail, studentEmail) => {
    return new Promise((resolve, reject) => {
        fetch('/api/invitestudent', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                companyEmail,
                studentEmail
            })
        }).then(res => res.json()).then(res => {
            if (res.ok) {
                dispatch('UPDATE_CURRENT_STUDENT', studentEmail);
                resolve();
            } else {
                reject();
            }
        }).catch(err => {
            console.log(err);
            reject();
        })
    })
}

export const getInvitedStudents = ({ dispatch }, email) => {
    return new Promise((resolve, reject) => {
        fetch('/api/getinvitedstudents', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        }).then(res => res.json()).then(res => {
            dispatch('SET_INVITED_STUDENTS', res);
            resolve(res);
        }).catch(err => {
            dispatch('SET_INVITED_STUDENTS', []);
            reject(err);
        })
    })
}

export const getDeliveriedStudents = ({ dispatch }, email) => {
    return new Promise((resolve, reject) => {
        fetch('/api/getdeliveriedstudents', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        }).then(res => res.json()).then(res => {
            dispatch('SET_DELIVERIED_STUDENTS', res);
            resolve(res);
        }).catch(err => {
            dispatch('SET_DELIVERIED_STUDENTS', []);
            reject(err);
        })
    })
}

export const signOut = ({ dispatch }) => {
    dispatch('SIGN_OUT');
}