!function () {

  var model = Model({resourceName:'Message'})
  var view = View('div#messageBox')
  var controller = Controller({
    init: function(view,controller){
      this.orderList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.LoadMessages()
    },
    LoadMessages: function () {
      this.model.fetch().then(
        (messages) => {
          let array = messages.map((item) => (item.attributes))
          array.forEach(element => {
            let li = document.createElement('li')
            li.innerText = `${element.name}:${element.content}`
            this.orderList.appendChild(li)
          })
        })
    },
    bindEvents: function () {

      this.form.addEventListener('submit', (e) => {
        e.preventDefault()
        this.saveMessage()
      })

    },
    saveMessage: function () {
      let myForm = this.form
      let content = myForm.querySelector('input[name=content]').value
      let name = myForm.querySelector('input[name=name]').value
      this.model.save({//将参数改为对象
        name:name,
        content:content
      }).then(function (object) {
        console.log(object)
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}:${object.attributes.content}`
        let orderList = document.querySelector('#messageList')

        orderList.appendChild(li)

        myForm.querySelector('input[name=content]').value = ''
      })
    }
  })
  controller.init(view, model)
}.call()


