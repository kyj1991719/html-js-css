class Page1 {
    $main = null
    constructor() {
        this.$main = document.getElementsByTagName('main')[0]
    }

    init() {
        var div = document.createElement('div')
        var childArr = []
        childArr.push(...this.createButton('page1', '#page1'))
        childArr.push(...this.createButton('page2', '#page2'))
        childArr.push(...this.createButton('page3', '#page3'))
        childArr.push(...this.createButton('page4', '#page4'))
        for(var i in childArr) {
            div.appendChild(childArr[i])
        }

        var nav = document.createElement('div')
        nav.id = 'nav'
        nav.appendChild(div)
        this.$main.appendChild(nav)

        console.log(document.getElementById('nav').offsetHeight)

        for(var i = 1; i <= 4; i++) {
            var div = document.createElement('div')
            div.id = 'page'+i
            //div.setAttribute('style', 'margin-top: '+document.getElementById("nav").offsetHeight+'px;')
            div.setAttribute('style', 'padding-top: '+document.getElementById("nav").offsetHeight+'px;')
            this.$main.appendChild(div)
        }
    }

    createButton(text, href) {
        var btn = document.createElement('input')
        btn.type = 'button'
        btn.id = 'btn_'+text
        btn.addEventListener('click', function() {
            var dest = document.getElementById(text)
            console.log(dest, dest.offsetTop,dest.offsetHeight)
            console.log(dest.getBoundingClientRect())
            console.log(dest)
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: dest.offsetTop
            })
        })

        var label = document.createElement('label')
        label.setAttribute('for', 'btn_'+text)
        //label.innerText = 'go to '+text
        var div = document.createElement('div')
        div.innerText = 'go to '+text
        label.appendChild(div)

        return [btn, label]
    }

    /*
    init() {
        var div = document.createElement('div')
        var childArr = []
        
        for(var i = 1; i <= 6; i++) {
            childArr.push(this.createHeading(i))
        }

        childArr.push(this.createP('this is p1'))
        childArr.push(this.createP('this is p2'))
        childArr.push(this.createHr())
        childArr.push(this.createP('this another p'))

        var p = this.createP()
        p.innerHTML = 'this is'+"<br />"+'also work?'
        childArr.push(p)

        for(var i in childArr) {
            div.appendChild(childArr[i])   
        }
        this.$main.appendChild(div)
    }
    */

    createHeading(depth) {
        if(depth < 1 || depth > 6) {
            return
        }
        var h = document.createElement('h'+depth)
        h.appendChild(document.createTextNode("this is h"+depth))
        return h
    }

    createP(text) {
        var p = document.createElement('p')
        p.appendChild(document.createTextNode(text))
        return p
    }

    createBr() {
        return document.createElement('br')
    }

    createHr() {
        return document.createElement('hr')
    }
}

document.addEventListener("DOMContentLoaded", function() {
    new Page1().init()
});