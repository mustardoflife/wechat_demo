// pages/shopnews/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    name:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
      onLoad:function(options){
        //页面初始化options为页面带来对应的参数
        this.setData({
          name:options.name
        })
      }
  }
})
