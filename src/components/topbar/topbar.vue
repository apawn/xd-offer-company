<template>
    <div class="topbar">
        <Row>
            <i-col offset="16"
                   span="6"
                   class="option-container">
                <span> xd-offer 后台管理系统 </span>
            </i-col>
        </Row>
    </div>
</template>

<script>
import { signIn, signOut, routerGo, setSignInModal } from '../../vuex/actions.js'
export default {
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>

<style lang="less">
.topbar {
    height: 30px;
    width: 100%;
    background: #fff;
    line-height: 30px;
    color: #000;
    clear: both;
    padding: 0 50px;
    .option-container {
        text-align: right;
        >.option {
            color: #111;
            margin-left: 8px;
            &:not(:last-child) {
                border-right: 1px solid rgba(0, 0, 0, 0.3);
                padding-right: 11px;
            }
        }
    }
}
</style>