<template>
    <div class="news-detail">
        <h3 class="title">{{currentNews.header}}</h3>
        <p class="content">{{currentNews.content}}</p>
        <p class="date">{{currentNews.time}}</p>
    
        <div class="remove-wrapper">
            <i-button type="error"
                      @click="removeNews()">
                删除公告
            </i-button>
    
            <i-button type="success"
                      @click="goUpdateNews(currentNews.id)">
                修改公告
            </i-button>
        </div>
    </div>
</template>

<script>

import { routerGo, setCurrentActiveKey, removeNewsAction, goUpdateNews } from '../../vuex/actions.js'
export default {

    data() {
        return {}
    },
    created() {
    },
    methods: {
        removeNews() {
            this.removeNewsAction(this.currentNews.id).then(() => {
                this.$Message.success('删除成功');
                setTimeout(() => {
                    this.routerGo('/news');
                }, 200);
            }).catch(err => {
                this.$Message.error('删除失败');
            })
        }
    },
    vuex: {
        getters: {
            currentNews: state => state.currentNews
        },
        actions: {
            routerGo,
            setCurrentActiveKey,
            removeNewsAction,
            goUpdateNews
        }
    }
}
</script>

<style lang="less">
.news-detail {
    margin: 0 auto;
    margin-top: 27px;
    width: 60%;
    color: #333;
    >.title {
        font-size: 27px;
        font-weight: 300;
        color: #39f;
    }
    >.content {
        margin-top: 20px;
        line-height: 23px;
        letter-spacing: 1px;
        text-indent: 26px;
    }
    >.date {
        margin-top: 60px;
        text-align: left;
        font-size: 16px;
    }
    >.remove-wrapper {
        margin-top: 30px;
        margin-bottom: 100px;
        width: 200px;
        display: flex;
        justify-content: space-between;
    }
}
</style>