// 依赖css
// require('../css/normal.css')
require('./css/normal.css')
require( './css/special.less')
// require('./img/1.PNG')
document.writeln("<div ><h2>我是中国人</h2></div>")

// 使用vue进行开发
import Vue from 'vue'

const app = new Vue({
    el:'#app',
    data:{
        message:'你好webpack'
    }
})