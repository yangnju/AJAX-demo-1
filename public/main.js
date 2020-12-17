addCss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("get", "/style.css")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建css标签
                const style = document.createElement("style")
                //将获取的style.css里的内容添加到style标签里
                style.innerHTML = request.response
                //将style添加到head中
                document.head.appendChild(style)
            } else {
                alert('css加载失败')
            }
        }
    };
    request.send()
}
addHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("get", "/new.html")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建html标签
                const div = document.createElement("div")
                //将获取的new.html里的内容添加到div标签里
                div.innerHTML = request.response
                //将div添加到body中
                document.body.appendChild(div)
            } else {
                alert('html加载失败')
            }
        }
    };
    request.send()
}

addJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("get", "/newJS.js")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建script标签
                const script = document.createElement("script")
                //将获取的newJS.js里的内容添加到script标签里
                script.innerHTML = request.response
                //将script添加到body中
                document.body.appendChild(script)
            } else {
                alert('js文件加载失败')
            }
        }
    };
    request.send()
}

addXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("get", "/newXML.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //将获取的newXML里的内容赋值给dom
                const dom = request.responseXML
                //获取xml文件里warning标签中的内容
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())  //打出text中不包含空格的部分
            } else {
                alert('js文件加载失败')
            }
        }
    };
    request.send()
}

addJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("get", "/newJSON.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //将获取的newJSON里的内容,转化成对象，赋值给object
                const object = JSON.parse(request.response)
                console.log(typeof object)
                console.log(object)
            } else {
                alert('js文件加载失败')
            }
        }
    };
    request.send()
}
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("get", `/page${n + 1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                });
            }
            n += 1
        }
    };
    request.send()
}