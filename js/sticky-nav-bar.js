!function(){
    var view = document.querySelector('#topNavBar')
    var controller ={
        view: null,
        init: function(view){
            this.view   = view
            this.bindEvents()
            //this.bindEvents.call(this)
        },  
        bindEvents: function(){
            var view = this.view
            window.addEventListener('scroll', (x) => {
                if (window.scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
    //箭头函数没有this，this相当于变量，箭头函数内外this不变
        },
        active: function(){
            this.view.classList.add('sticky')
        },
        deactive: function(){
            this.view.classList.remove('sticky')
        }
    }
    
    controller.init(view)
    //controller.init.call(controller,view)
    //如果用对象来调用函数，那么这个对象就相当于是函数里的this
}.call()