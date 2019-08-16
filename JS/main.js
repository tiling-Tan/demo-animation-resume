//把code写到#code和<style>里面
function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(function(){
        n = n + 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css, 'css');
        styleTags.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if(n >= code.length){
            window.clearInterval(id)
            fn.call()
        }
    }, 50)
}
function writeMarkdown(markdown,fn) { 
    let domPaper = document.querySelector('#paper > .content')
    let n = 0
    let id = setInterval(function(){
        n = n + 1
        domPaper.innerHTML = markdown.substring(0,n)
        domPaper.scrollTop = domPaper.scrollHeight
        if(n >= domPaper.length){
            window.clearInterval(id)
            fn.call()
        }
    }, 50)
}


var result = `/*
*面试官你好
*我叫vision
*我将以动画的形式来介绍我自己
*我就用代码来准备吧
*首先准备一些样式
*/
*{
  transition: all 0.5s;
}
html{
  background: #272822;
  font-size: 16px;
}
#code{
  border: 1px solid red;
  padding: 10px;
}

/*接下来做代码高亮*/
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

/*加点3D效果*/
#code{
    transform:rotate(360deg);
}

/*下面我来介绍一下我自己吧*/
/*我需要一张白纸*/
#code{
    position:fixed;
    left:0;
    width:50%;
    height:100%;
}
#paper{
    position:fixed;
    right:0;
    width:50%;
    height:100%;
    background:#ddd;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:16px;
}
#paper > .content{
    background:white;
    height:100%;
    width:100%;
    
}
`
var result2 = `/*接下来把Markdown变成HTML - marked.js*/
/*接下来给HTML加样式*/
/*这就是我会动的简历了
*谢谢观看
*/
`
writeCode('',result, () => { 
    createPaper(() => { 
        writeCode(result, result2, () => { 
            writeMarkdown(md)
        })
    })
    
})

var md = `#自我介绍
我叫xxx
1996年2月出生
xxx学校毕业
自学前端半年
希望应聘前端开发岗位

#技能
熟悉 HTML、css、javascript

#项目介绍
1.xxx轮播
2.xxx简历
3.xxx画板

#联系方式
微信 xxxxxxxxxxx
Email xxxxxxxxx
手机 xxxxxxxxxx
`

function createPaper(fn) { 
    let paper = document.createElement('div')
    paper.id = 'paper'
    let content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}
