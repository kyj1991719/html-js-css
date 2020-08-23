class Index {
    $main = null
    constructor() {
        this.$main = document.getElementsByTagName('main')[0]
    }

    init() {
        var div = document.createElement('div')
        var childArr = []
        childArr.push(...this.createButton('html', 'html/HTML.html'))
        childArr.push(...this.createButton('js', 'html/js.html'))
        for(var i in childArr) {
            div.appendChild(childArr[i])   
        }
        this.$main.appendChild(div)
    }

    createButton(text, href) {
        var btn = document.createElement('input')
        btn.type = 'button'
        btn.id = text
        btn.addEventListener('click', function() {
            location.href = href
        })

        var label = document.createElement('label')
        label.setAttribute('for', text)
        label.innerText = 'go to '+text

        return [btn, label]
    }
}

document.addEventListener("DOMContentLoaded", function() {
    new Index().init()
});