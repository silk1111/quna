<template>
    <div class="header">
    <div class="header-left">
        <i class="iconfont">&#xe600;</i>
         </div>
    <div class="header-input">
        <i class="iconfont">&#xe601;</i>
        输入景点/城市/游玩/主题</div>
    <div class="header-right">城市
        <i class="iconfont">&#xe60a;</i>

    </div>
        
    </div>
</template>

<script>
export default {
    name: 'HomeHeader',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>
@import '~@/assets/styles/themeColor.less';
    .header {
         height: .86rem;
        line-height: .86rem;
        display: flex;
        background: @bgColor;
        color: #fff;
        font-size: 12px;
        .header-left{
             width: .64rem;
            float: left;
            text-align: center;
             .iconfont {
                font-size: .4rem;
             }
                
        }
           
           
        .header-input {
              flex: 1;
            background: #fff;
            border-radius: .1rem;
            height: .64rem;
            line-height: .64rem;
            margin: .12rem;
            padding-left: .2rem;
            color: #ccc;
            text-align: left;
        }
          
        .header-right{
             width : 1.24rem;
            float: right;
            text-align: center;
            .iconfont {
                font-size: .24rem;
                margin-left: -.04rem;
            }
                
        }
           


    }
       


</style>