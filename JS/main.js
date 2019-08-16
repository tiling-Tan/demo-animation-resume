//把code写到#code和<style>里面
function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(function(){
        n = n + 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css, 'css');
        styleTags.innerHTML = prefix + code.substring(0,n)
        if(n >= code.length){
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
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
`
var result2 = `#paper{
    width:100px;
    height:100px;
    background:red;
}`
writeCode('',result, () => { 
    createPaper(() => { 
        writeCode(result,result2)
    })
    
})


function createPaper(fn) { 
    let paper = document.createElement('div')
    paper.id = paper
    document.body.appendChild(paper)
    fn.call()
}

function f3(preResult) { 
    var result = `#paper{
    width:100px;
    height:100px;
    background:red;
}
`
    var n = 0
    var id = setInterval(function(){
        n = n + 1
        code.innerHTML = preResult + result.substring(0, n)
        styleTags.innerHTML = code.innerHTML
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
        if(n >= result.length){
            window.clearInterval(id)
        }
    }, 10)
}