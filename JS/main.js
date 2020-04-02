import $ from 'jquery'
import marked from 'marked'

let renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
    let link = marked.Renderer.prototype.link.call(this, href, title, text);
    return link.replace("<a","<a target='_blank' ");
};

marked.setOptions({
    renderer: renderer
});

let resume = `# 谭题伶
1511-8911-908 | tiling.tan@foxmail.com | 英语水平: CET-4 | 广州
作品集: https://tiling-tan.github.io/CSS_resume/index.html
博客: https://www.jianshu.com/u/1def2c00aff6
GitHub: https://github.com/tiling-Tan
2018届本科网络工程专业毕业 | 23岁 | 应聘前端开发工程师

## 专业技能
- HTML5 && CSS3 
    - 熟练 \`HTML\`、\`DIV + CSS\` 的 \`页面布局\`，能根据设计图像素级完成页面制作
    - 熟悉 \`HTML5 及语义化\`，了解 \`Canvas\` 动画制作，
    - 掌握 \`CSS 3 动画\`、\`过渡效果\`、\`弹性盒子布局\`、\`媒体查询\`等响应式设计常用技术
- JavaScript
    - 熟悉原生 JavaScript，会使用 \`ES6\` 常用规范，了解 \`jQuery\` 常用 API 
    - 能够使用原生 JavaScript 独立制作精美网页
- Vue
    - 熟悉 Vue 常用功能，理解 \`生命周期、组件、数据响应式\`等概念，拥有使用 vue 开发项目经历
    - 掌握 \`组件及组件间数据传递的使用\`、\`响应式原理\`、\`路由\`和 \`Vuex\` 的使用等
- 移动端开发
    - 会使用 \`REM、vw/ vh、媒体查询\`等技术制作适配手机设备的页面
- 其他
    - 熟悉 \`Git\` 常用命令、代码仓库协同工作流程等
    - 熟悉 jQuery 常用 API ，如 DOM 操作、特效、事件等。\`曾使用原生 JavaScript 封装简易版的 $.ajax()\`
    - 掌握 \`Scss 、 Less\` 的使用，理解嵌套规则、父选择器 & 、变量、混合等的使用
    - 理解 \`MVC 、 MVVM\` 思想，掌握 \`HTTP\` 基础等
    - 熟悉模块化、工程化开发流程，使用 \`Webpack\` 、 \`parcel\`打包项目的经验
    - 了解 \`Node.js\`，能够开发简单的后台服务器
    
## 项目经验
### 一个用Vue造的轮子-Twheels UI
- 关键词：\`Vue.js\`、\`VuePress\`、\`ES6\`、\`Parcel\`、\`Npm Scripts\`、\`Mocha\`、\`SCSS\`、\`TravisCI\`
- 项目介绍：该项目是参照 Framework7、Ant Design、Element UI 等 UI 库思路，做的一个基于 Vue 的简易 \`UI 组件库\`，目前已支持按钮、输入框、网格、布局、Toast、Tabs、Popover、手风琴等组件。每个组件均经历从 \`需求分析\` 到 \`Mocha 单元测试\`，并用 \`TravisCI 实现持续集成\`，最终以 VuePress 为基础 \`制作官方文档\`，发布于 npmjs.org。完成该项目使我对 Vue 的常用特征更加熟悉，同时提升了自己对 \`前端工程化流程以及单元测试重要性的深刻理解\`，近一步开源文化。
- 预览链接：https://tiling-tan.github.io/gulu-demo/
- 项目源码：https://github.com/tiling-Tan/gulu-demo

### CNode 社区仿站
- 关键词：\`Vue CLI\`、 \`Vue2\`、 \`Vue Router\`、\`Axios\`、\`ES6\`、\`Npm\`、\`SCSS\`
- 项目介绍：该项目使用 Vue 还原 CNode 官方社区，项目调用 CNode 官方社区提供的 API，以 Vue CLI 创建项目模版，使用 Axios 获取数据，使用 Vue Router 进行前端路由的切换及传参，使用 watch 监听路由的变化，Webpack 打包。
- 预览链接：https://tiling-tan.github.io/cnode_demo/dist/index.html#/
- 项目源码：https://github.com/tiling-Tan/cnode_demo

### 动态简历生成器
- 关键词：\`JavaScript\`、\`Promise\`、\`变速\`、\`过渡动画\`、\`盒阴影\`
- 项目介绍：该项目实现了一个 Markdown 简历的制作过程，在原生 JS 中使用 Promise 处理异步操作，利用 CSS3 实现过渡、动画、阴影和弹性布局等。
- 预览链接：https://tiling-tan.github.io/demo-animation-resume/
- 项目源码：https://github.com/tiling-Tan/demo-animation-resume

### 个人在线主页
- 关键词：\`jQuery\`、\`CSS3 过渡动画\`、\`组件化思想\`、\`MVC 思想\`、\`媒体查询\`
- 项目介绍：此项目是本人的一个信息介绍页，包含基础信息、技能、项目展示以及留言板功能。有大量精美的动画，例如滚动时的导航栏及模块的浮起、导航栏 hover 动画、响应式设计等。
- 预览链接：https://tiling-tan.github.io/CSS_resume/index.html
- 项目源码：https://github.com/tiling-Tan/CSS_resume

### 灵魂画手
- 关键词：\`HTML5\`、\`Canvas\`、\`ES6\`、\`JavaScript\`
- 项目介绍：是一个使用纯原生 JS 开发的，主要利用 HTML 5 的 Canvas API ，是我在学习原生 JS 及 Canvas 过程中开发的小工具。 其提供在 PC 及手机端在线画画、橡皮擦、画笔调色、画作删除等功能，并支持画作下载。
- 预览链接：https://tiling-tan.github.io/canvas-demo/index.html
- 项目源码：https://github.com/tiling-Tan/canvas-demo

### 来画一只皮卡丘
- 关键词：\`JavaScript\`、\`CSS3\`、\`HTML5\`、\`ES6\`
- 项目介绍：是一个使用纯原生 JS 开发的，动态显示 CSS 画一个皮卡丘过程的小作品。该作品主要思路是通过间隔计时器遍历预先设置在 preview 标签内代码，将其一个个显示在页面上，并在 style 标签上作同样处理，以使代码 CSS 生效。此外，实现了 CSS 高亮效果及调速功能。
- 预览链接：https://tiling-tan.github.io/Pikachu-demo/index.html
- 项目源码：https://github.com/tiling-Tan/Pikachu-demo

## 工作经历
### 巨联科技(广州)有限公司
2018/03 - 2019/06
- 职位：物联网售前工程师

## 教育经历
### 广东东软学院
2014/09 - 2018/06
- 专业学历：网络工程  大学本科
- GPA：3.37 / 4.0
- 荣誉：东软亿达三等奖学金、校际篮球赛冠军
`


let code_ready = `/*
* 面试官你好，我叫谭题伶
* 我将以动画的形式来制作我自己的个性简历，请欣赏
* 我就以代码的形式来开始吧
* 灵感来源：http://strml.net
* 首先准备一些样式
*/

/* 添加一个过渡，使变化看起来更柔和 */
*{
  transition: all 0.5s;
}

/* 添加一个背景色 */
body{
  background: #455A64;
}

/* 给代码加一个边框 */
#code_body{
  width: 100%;
  border: 1px solid #272822;
  padding: 16px;
  overflow: auto;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  line-height: 1.5;
  word-wrap: normal;
  background: #272822;
}

/* 接下来让代码高亮起来吧 */
.token.comment{
    color: slategray;
}
.token.selector{
    color: #a6e22e;
}
.token.punctuation{
    color: #f8f8f2;
}
.token.property{
    color: #f92672;
}
.token.function{
    color: #e6db74;
}
.token.string{
    color:#f8f8f2;
}
#code_body{
    color: #f8f8f2;
}

/*
 * 给它来个3D特效吧！不要眨眼哦~
 * 让编辑框在代码输入的时候产生"呼吸"的效果
 */
.breathe{
    animation:breathe 3s ease 0s infinite;
}

/*
 * 准备工作都完成了，可以开始写简历啦！
 * 让代码框靠左缩小，在屏幕右边放上一张白纸吧
 */
.options{
    width:32%;
}
.paper{
    flex:1;
    background:#ffffff;
    margin:16px;
    overflow:auto;
    white-space:pre-wrap;
}

/* 接下来，请看右边 */
`

let code_marked = `
/*
 * 接下来我要把Markdown变成HTML了
 * 使用 marked.js 这个库
 * https://github.com/markedjs/marked
 */
`

let code_beautify_resume = `
/* 现在调整一下简历的样式，让它看起来舒服一点 */
#paper{
    white-space: unset;
    padding: 0 32px;
    font-size: 14px;
}
#paper a{
    color: #455A64;
}
#paper ul{
    padding-left: 20px;
}

/* 让每个模块的间距看起来明显一点点 */
#paper > div{
    margin: 28px 0;
}

/* 接下来进行精细调整 */

/* 先调整"基础信息"板块 */
#paper h1{
    font-size: 22px;
    margin-bottom: 10px;
}
#information{
    text-align: center;
}
#information p{
    line-height: 24px;
    white-space: pre-wrap;
}

/* 然后调整介绍模块 */

#paper h2{
    font-size: 16px;
    border-bottom: 1px solid #455A64;
    padding-bottom: 6px;
    margin-bottom: 6px;
}
#paper h3{
    display:inline-block;
    font-size: 14px;
    margin: 6px 0;
}
#skills > ul ul{
    margin: 4px 0;
}
#skills li,
#works li,
#education li{
    margin-bottom: 4px;
}
#jobs #experience{
    margin-bottom: 6px;
}

/* 调整"工作经历"和"教育经历"的内部间距 */

#jobs > #experience, #education{
    position: relative;
}
#jobs p, #education p{
    position: absolute;
    right: 0;
}
#jobs p{
    top: 6px;
}
#education p{
    top: 40px;
}
/* 
 * 期待这张面孔出现在您的面试中
 * 
 *   --谭题伶 2019/12 *^_^*
 */
`

let resumeId, codeId
let speedCode = 1
let duration = 80
let speed_text = $('.speed_text')
let speed_icon = $('.speed_icon')
$('#speed').click(() => {
    speedCode += 1
    if (speedCode > 3) {
        speedCode = 1
    }
    switch (speedCode) {
        case 1:
            speed_icon[0].innerText = '🚲'
            speed_text[0].innerText = '太慢了,开小汽车加速吧~'
            duration = 80
            break
        case 2:
            speed_icon[0].innerText = '🚗'
            speed_text[0].innerText = '还是慢,再加速！'
            duration = 30
            break
        case 3:
            speed_icon[0].innerText = '🚀'
            speed_text[0].innerText = '眼花了，慢一点吧'
            duration = 0
            break
        default:
            return 0
    }
})

writeCode('', code_ready).then(() => {
    createResume().then(() => {
        adjustResume().then(() => {
            showDownloadButton()
        }, () => {
            showFinalResume()
        })
    })
})

//把code写到#code_body和<style>里面
function writeCode(prefix, code) {
    let domCode = document.querySelector('#code_body')
    let styleTags = document.querySelector('#styleTags')
    let n = 0
    return new Promise(resolve => {
        codeId = setTimeout(write, duration)
        function write() {
            n = n + 1
            domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
            styleTags.innerHTML = prefix + code.substring(0, n)
            domCode.scrollTop = domCode.scrollHeight
            if (n === code.length) {
                window.clearTimeout(codeId)
                resolve.call(undefined)
            } else {
                window.clearTimeout(codeId)
                codeId = setTimeout(write, duration)
            }
        }
    })

}

function createResume() {
    return new Promise(resolve => {
        $('#paper').addClass('breathe')
        $('#code_body').removeClass('breathe')
        writeResume().then(resolve)
        setTimeout(() => {
            $('#skip_inputResume').show()
            $('#skip_inputResume').click(() => {
                skipResumeInput().then(resolve)
            })
        }, 1200)
    })

}

function writeResume() {
    let domPaper = document.querySelector('.paper')
    let n = 0
    return new Promise(resolve => {
        resumeId = setTimeout(write, duration)

        function write() {
            n = n + 1
            domPaper.innerHTML = resume.substring(0, n)
            domPaper.scrollTop = domPaper.scrollHeight
            if (n === resume.length) {
                window.clearTimeout(resumeId)
                resolve.call(undefined)
            } else {
                window.clearTimeout(resumeId)
                resumeId = setTimeout(write, duration)
            }
        }
    })

}

function skipResumeInput() {
    let paper = document.querySelector('.paper')
    return new Promise(resolve => {
        setTimeout(() => {
            window.clearTimeout(resumeId)
            paper.innerHTML = resume
            paper.scrollTop = paper.scrollHeight
            resolve()
            $('#skip_inputResume').remove()
        }, 0)
    })
}

function adjustResume() {
    return new Promise((resolve, reject) => {
        $('#skip_inputResume').remove()
        $('#code_body').addClass('breathe')
        $('.paper').removeClass('breathe')
        writeCode(code_ready, code_marked).then(() => {
            structureResume()
            $('.paper')[0].scrollTop = 0
            writeCode(code_ready + code_marked, code_beautify_resume).then(resolve)
            setTimeout(() => {
                $('#skip_all').show()
                $('#skip_all').click(() => {
                    skipAll().then(reject)
                })
            }, 1200)

        })
    })
}

function skipAll() {
    return new Promise(resolve => {
        setTimeout(() => {
            window.clearTimeout(codeId)
            resolve()
            $('.skip').remove()
        }, 0)
    })
}

function structureResume() {
    let paper = $('.paper')
    paper[0].innerHTML = marked(resume)
    paper.prepend('<div id="information"></div>',
        '<div id="skills"></div>',
        '<div id="works"></div>',
        '<div id="jobs"></div>',
        '<div id="education"></div>',)
    $('#information').append($('h1'), $('p').first())
    $('#skills').append($('h2:contains("技能")'), $('ul').first())
    $('#education').append($('h2:contains("教育")'), $('h3:contains("学院")'), $('p').last(), $('ul').last())
    $('#jobs').append($('h2:contains("工作")'))
    $('h3:contains("公司")').each((index, element) => {
        $('<div id="experience"></div>').append($(element), $('p').last(), $('ul').last()).appendTo($('#jobs'))
    })
    $('#works').append($('.paper').children().not($('div')))

}

function showFinalResume() {
    let paper = $('.paper')
    let code = $('#code_body')
    paper.addClass('breathe')
    code.removeClass('breathe')
    code[0].innerHTML = Prism.highlight(code_ready + code_marked + code_beautify_resume, Prism.languages.css, 'css')
    $('#styleTags')[0].innerHTML = code_ready + code_marked + code_beautify_resume
    code[0].scrollTop = code[0].scrollHeight
    $('.options').css({'width': '23%'})
    $('a.downloadResume').addClass('show')
    $('.options').append($('a.downloadResume'))
}

function showDownloadButton() {
    let paper = $('.paper')
    let code = $('#code_body')
    paper.addClass('breathe')
    code.removeClass('breathe')
    $('.options').css({'width': '23%'})
    $('a.downloadResume').addClass('show')
    $('.options').append($('a.downloadResume'))
    $('.skip').remove()
}



