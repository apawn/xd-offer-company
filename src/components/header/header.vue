<template>
    <div class="header">
        <a href="">
            <h1 class="logo"><i class="fa fa-superpowers icon"></i>西电offer</h1>
        </a>
    
        <Menu mode="vertical"
              theme="light"
              :active-key="currentActiveKey">
            <Menu-item key="1"
                       @click="routerGo('/company-list')">
                公司
            </Menu-item>
            <Menu-item key="2"
                       @click="routerGo('/students')">
                毕业生
            </Menu-item>
            <Menu-item key="3"
                       @click="routerGo('/news')">
                公告
            </Menu-item>
            <Menu-item key="4"
                       @click="routerGo('/my')">
                流量情况
            </Menu-item>
        </Menu>
    </div>
</template>

<script>
import { routerGo } from '../../vuex/actions.js'
export default {
    data() {
        return {
            light: 'light'
        };
    },
    methods: {

    },

    created() {
    },
    vuex: {
        getters: {
            currentActiveKey: state => state.currentActiveKey
        },
        actions: {
            routerGo
        }
    }


}
</script>

<style lang="less">
.header {
    width: 270px;
    padding-left: 30px;
    position: relative;
    overflow: hidden;
    background-color: #fafafa;
    line-height: 80px;
    font-size: 0;
    .logo {
        display: inline;
        font-family: "Hiragino Sans GB", "Microsoft Yahei", SimSun, Arial, "Helvetica Neue", Helvetica;
        font-size: 29px;
        font-weight: 400;
        .icon {
            margin-right: 6px;
        }
    }
}
</style>