import { router } from '../router.js'

export const routerGo = ({ dispatch }, href, anchor) => {
    var res = dispatch('ROUTE_GO', href, anchor);
}

export const signIn = ({ dispatch }, username, password) => {
    return new Promise((resolve, reject) => {
        fetch("/api/login", {
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
            resolve(json);
            // 在 mutations里面设置session
            dispatch('SIGN_IN', json);
        }).catch(err => {
            reject(err);
        })
    })
}

export const setSignInModal = ({ dispatch }, signInModal) => {
    dispatch('SET_SIGNIN_MODAL', signInModal);
}




export const getCurrentPage = ({ dispatch }, page) => {
    return new Promise((resolve, reject) => {
        fetch('/api/getCurrentPage', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                page: page
            })
        }).then(res => res.json()).then(res => {
            dispatch('SET_CURRENT_PAGE', page, res);
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}
export const getCompaniesCount = ({ dispatch }) => {
    return new Promise((resolve, reject) => {
        fetch('/api/getCompaniesCount', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(res => {
            dispatch('SET_TOTAL_COUNT', res);
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

export const getCurrentCompanyDetail = ({ dispatch }, companyName) => {
    return new Promise((resolve, reject) => {
        fetch('/api/companydetail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: companyName
            })
        }).then(res => res.json()).then(res => {
            dispatch('SET_CURRENT_COMPANY_DETAIL', res);
            resolve(res);
        }).catch(err => {
            dispatch('SET_CURRENT_COMPANY_DETAIL', {});
            reject(err);
        })
    })
}



export const setCurrentActiveKey = ({ dispatch }, activeKey) => {
    dispatch('SET_CURRENT_ACTIVE_KEY', activeKey + '');
}


export const removeCompanyAction = ({ dispatch }, name, email) => {
    return new Promise((resolve, reject) => {
        fetch('/api/removecompany', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        }).then(res => res.json()).then(res => {
            if (res.ok) {
                dispatch('REMOVE_COMPANY', name, email);
                resolve();
            } else {
                reject();
            }
        }).catch(err => {
            console.log(100);
            reject();
        })
    })
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

export const removeStudentAction = ({ dispatch }, email) => {
    return new Promise((resolve, reject) => {
        fetch('/api/removestudent', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        }).then(res => res.json()).then(res => {
            if (res.ok) {
                dispatch('REMOVE_STUDENT', email);
                resolve();
            } else {
                reject();
            }
        }).catch(err => {
            reject();
        })
    })
}

export const goStudentDetail = ({ dispatch }, name, email) => {
    dispatch('SET_CURRENT_STUDENT', email);
    routerGo({ dispatch }, `/students/${name}`);
}


export const getAllNews = ({ dispatch }) => {
    return new Promise((resolve, reject) => {
        fetch('/api/getallnews', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(res => {
            dispatch('SET_ALL_NEWS', res);
            resolve();
        }).catch(err => {
            dispatch('SET_ALL_NEWS', []);
            reject();
        })
    })
}



export const removeNewsAction = ({ dispatch }, id) => {
    return new Promise((resolve, reject) => {
        fetch('/api/removenews', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        }).then(res => res.json()).then(res => {
            if (res.ok) {
                dispatch('REMOVE_NEWS', id);
                resolve();
            } else {
                reject();
            }
        }).catch(err => {
            reject();
        })
    })
}

export const addNews = ({ dispatch }, news) => {
    return new Promise((resolve, reject) => {
        fetch('/api/addnews', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                news: news
            })
        }).then(res => res.json()).then(res => {
            if (res.ok) {
                dispatch('ADD_NEWS', news);
                resolve();
            } else {
                reject();
            }
        }).catch(err => {
            reject();
        })
    })
}

export const goCurrentNews = ({ dispatch }, id) => {
    setCurentNews({ dispatch }, id);
    router.go({ name: 'news-detail', params: { id: id } });
}

export const setCurentNews = ({ dispatch }, id) => {
    dispatch('SET_CURRENT_NEWS', id);
}

export const goUpdateNews = ({ dispatch }, id) => {
    setCurentNews({ dispatch }, id);
    router.go('/news/update-news');
}

export const updateNews = ({ dispatch }, news) => {
    return new Promise((resolve, reject) => {
        fetch('/api/updatenews', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                news: news
            })
        }).then(res => res.json()).then(res => {
            if (res.ok) {
                dispatch('UPDATE_NEWS', news);
                resolve();
            } else {
                reject();
            }
        }).catch(err => {
            reject();
        })
    })
}

