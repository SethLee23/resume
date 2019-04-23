//var model = Model({resourceName:'Message'})//调用方法
//model.init()
//model.save({name:name,content:content})
//model.fetch()
//model办事我放心
window.Model= function(options){

    let resourceName = options.resourceName
  return {
      //獲取數據
      init: function () {
  
          var APP_ID = '4YKHxorKTbNOdEysAAUbcdpf-gzGzoHsz'
          var APP_KEY = 'hfcKzPsTXS2rcSJd1rnqJoUd'
          AV.init({ appId: APP_ID, appKey: APP_KEY })
    
        },
        fetch: function () {
    
          var query = new AV.Query(resourceName);
          return query.find()
          
        },
       
        save: function (object) {
          var x = AV.Object.extend(resourceName);
          var x = new x();
          return x.save(object)
        }
  }
  }