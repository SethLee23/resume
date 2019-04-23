

!function () {
    var view = View('nav')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view

            this.initAnimation()
            this.bindEvents()
        },
        initAnimation: function () {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement: function (element) {
            let top = element.offsetTop//获取距离视口顶部的距离
            //window.scrollTo(0,top - 80)//到视口顶部
            let currentTop = window.scrollY
            let targetTop = (top - 80)

            s = targetTop - currentTop
            t = Math.abs((s / 100) * 300)
            if (t > 500) {
                t = 500
            }
            console.log(t)
            var coords = { y: currentTop }; // Start
            var tween = new TWEEN.Tween(coords)
                .to({ y: targetTop }, t) // Move to (targettop) in t ms.
                .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
                .onUpdate(function () { // Called after tween.js updates 'coords'.
                    window.scrollTo(0, coords.y)
                })
                .start(); // Start the tween immediately.
        },
        bindEvents: function () {
            let aTags = this.view.querySelectorAll('nav > ul > li > a')//获取a
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = (x) => {//a被点击后获取目标href的元素距离顶部的距离
                    console.log(x)
                    x.preventDefault()
                    let a = x.currentTarget//获取被点击的a标签
                    let href = a.getAttribute('href')//获取#siteAbout,href中写的什么获取什么
                    let element = document.querySelector(href)//获取元素
                    this.scrollToElement(element)
                }
            }
        },
       
    } 

    controller.init(view)
}.call()