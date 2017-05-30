export default {
    // 当前用户
    session: null,
    // 是否弹出登录对话框
    signInModal: false,
    // 招聘会信息
    meetingPlan: {
        // 标题
        columns: [
            {
                title: '公司',
                key: 'company',
                render(row, column, index) {
                    return `<a class="link" @click="routerGo('/home/${row.id}')"> ${row.company}</a> `;
                }
            },
            {
                title: '地点',
                key: 'location'
            },
            {
                title: '时间',
                key: 'time'
            }
        ],
        sorthPlan: [
            {
                id: '200',
                company: '西安软通动力技术服务有限公司',
                location: '就业中心116',
                time: '17-03-07 10:00-12:00'
            },
            {
                id: '006',
                company: '中国铁建重工集团',
                location: '就业中心116',
                time: '17-03-07 16:00-17:30'
            },
            {
                id: '007',
                company: '深圳市投控物业管理有限公司产业园分公司',
                location: 'D211',
                time: '17-03-08 10:00-12:00'
            },
            {
                id: '008',
                company: '一诺仪器（中国）有限公司',
                location: '就业中心116',
                time: '17/03/08 10:00-12:00'
            }
        ],
        northPlan: [{
            id: '005',
            company: '西安软通动力技术服务有限公司',
            location: '就业中心116',
            time: '17-03-07 10:00-12:00'
        },
        {
            id: '006',
            company: '中国铁建重工集团',
            location: '就业中心116',
            time: '17-03-07 16:00-17:30'
        },
        {
            id: '007',
            company: '深圳市投控物业管理有限公司产业园分公司',
            location: 'D211',
            time: '17-03-08 10:00-12:00'
        },
        {
            id: '008',
            company: '一诺仪器（中国）有限公司',
            location: '就业中心116',
            time: '17/03/08 10:00-12:00'
        }
        ]

    },

    //  --------公司管理 ----------
    totalCount: 0,
    currentPage: 1,
    currentCompanies: [],
    currentCompanyEmail: "",
    currentCompany: {},


    //  --------学生管理 ----------
    totalStudentCount: 0,
    currentStudentPage: 0,
    currentStudents: [],
    currentStudentEmail: '',

    currentStudent: {},

    //-----------公告管理----------
    allNews: [],
    currentNews: {},

    // --------  通用 -------------
    currentActiveKey: "1",
}

