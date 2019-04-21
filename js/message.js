!function () {

  var model = {
    //獲取數據
    init: function () {

      var APP_ID = '4YKHxorKTbNOdEysAAUbcdpf-gzGzoHsz'
      var APP_KEY = 'hfcKzPsTXS2rcSJd1rnqJoUd'
      AV.init({ appId: APP_ID, appKey: APP_KEY })

    },
    fetch: function () {

      var query = new AV.Query('Message');
      return query.find()//promise對象
      
    },
    //保存數據
    save: function (name, content) {
      var Message = AV.Object.extend('Message');
      var message = new Message();
      return message.save({

        name: name,
        content: content

      })
    }
  }
  var view = document.querySelector('div#messageBox')
  var controller = {
    view: null,
    model: null,
    orderlist: null,
    init: function (view, model) {
      this.view = view
      this.model = model
      this.orderList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.model.init()
      this.LoadMessages()
      this.bindEvents()
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
      this.model.save(name, content).then(function (object) {
        console.log(object)
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}:${object.attributes.content}`
        let orderList = document.querySelector('#messageList')

        orderList.appendChild(li)

        myForm.querySelector('input[name=content]').value = ''
      })
    }

  }

  controller.init(view, model)



}.call()


