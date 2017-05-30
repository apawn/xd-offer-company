<template>
    <div class="home">
        <i-table :columns="companyColumn"
                 :data="companyData"
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
import { routerGo, getCurrentPage, getCompaniesCount, getCurrentCompanyDetail, setCurrentActiveKey, removeCompanyAction } from '../../vuex/actions.js'
export default {
    data() {
        return {
            self: this,
            companyColumn: [{
                title: '公司名称',
                key: "name",
                render: function (row, column, index) {
                    return `<a @click="routerGo('/company/${row.name}')"{>${row.name}</a>`
                }
            }, {
                title: '招聘人数',
                key: "number"
            }, {
                title: '地点',
                key: "location"
            }, {
                title: '操作',
                render: function (row, column, index) {
                    return ` <i-button type="error" size="small" @click="removeCompany('${row.name}','${row.email}')">删除</i-button>`
                }
            }]
        }
    },
    computed: {
        companyData: function () {
            return this.currentCompanies.map(item => {
                return {
                    name: item.name,
                    number: item.number,
                    location: item.location,
                    email: item.email
                }
            }) || []
        }
    },
    methods: {
        companyDetail(name) {
            this.getCurrentCompanyDetail(name).then(res => {
                this.routerGo(`/home/${name}`);
            }).catch(err => {
                return;
            })

        },
        pageChange(currentPage) {
            this.getCurrentPage(currentPage);
        },
        removeCompany(name, email) {
            this.removeCompanyAction(name, email).then(doc => {
                this.$Message.success('删除成功');
            }).catch(err => {
                this.$Message.error('删除失败');
            })
        }
    },

    created() {
        this.setCurrentActiveKey(1);
        this.getCompaniesCount().then(res => {
            if (res.count > 0) {
                this.getCurrentPage(1).catch(err => {
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
            totalCount: state => state.totalCount,
            currentPage: state => state.currentPage,
            currentCompanies: state => state.currentCompanies
        },
        actions: {
            routerGo,
            getCurrentPage,
            getCompaniesCount,
            getCurrentCompanyDetail,
            setCurrentActiveKey,
            removeCompanyAction
        }
    }

}

</script>

<style lang="less">
.home {
    padding: 30px 20px;
    .pager {
        margin-top: 30px;
        margin-bottom: 100px;
        display: flex;
        justify-content: center;
    }
}
</style>