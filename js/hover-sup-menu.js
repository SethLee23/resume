!function(){
    var view = View('nav')
    var controller = {
        view: null,
        init: function(view){
            this.view = view
            this.bindEvents()
        },
        bindEvents: function(){
            var view = this.view
            let liTags = this.view.querySelectorAll('.tiggerwrapper')
            for (let i = 0; i < liTags.length; i++) {
                liTags[i].onmouseenter = function (y) {
                    y.currentTarget.classList.add('active')
                }
                liTags[i].onmouseleave = function (y) {
                    y.currentTarget.classList.remove('active')
                }
            }
        }
    }
   controller.init(view)
   }.call()