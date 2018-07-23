// pages/shop/index.js
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
    commoditys:[
      {
        name:"苹果",
        num:"2",
        price:"15",
        imgurl:"../../accest/images/shopcar/tract1.png",
        minusStatus: "normal"
      }, {
        name: "草莓",
        num: "7",
        price: "18",
        imgurl: "../../accest/images/shopcar/tract2.png",
        minusStatus: "normal"
      }, {
        name: "黄瓜",
        num: "1",
        price: "3",
        imgurl: "../../accest/images/shopcar/tract3.png",
        minusStatus: "disabled"
      }, {
        name: "芒果",
        num: "3",
        price: "8",
        imgurl: "../../accest/images/shopcar/tract4.png",
        minusStatus: "normal"
      }
    ],
    //input默认值
    
    //设置样式
    
  },
  

  /**
   * 组件的方法列表
   */
  methods: {
    goshop: function () {
      wx.switchTab({
        url: '../index/index',
      })
    },
    
    /* 点击减号 */
    bindMinus: function (e) {      
      var num = e.currentTarget.dataset.itemNum;
      var id = e.currentTarget.id;
      // 如果大于1时，才可以减  
      if (num > 1) {
        num--;
      }
      // 只有大于一件的时候，才能normal状态，否则disable状态  
      var minusStatus = num <= 1 ? 'disabled' : 'normal';
      // 将数值与状态写回  
      var up = "commoditys["+id+"].num";
      var style = "commoditys[" + id + "].minusStatus"
      this.setData({
        [up]: num,
        [style]: minusStatus
      });
    },
    /* 点击加号 */
    bindPlus: function (e) {
      var num = e.currentTarget.dataset.itemNum;
      var id = e.currentTarget.id;
      // 不作过多考虑自增1  
      num++;
      // 只有大于一件的时候，才能normal状态，否则disable状态  
      var minusStatus = num < 1 ? 'disabled' : 'normal';
      var up = "commoditys[" + id + "].num";
      var style = "commoditys[" + id + "].minusStatus";
      // 将数值与状态写回  
      this.setData({
        [up]: num,
        [style]: minusStatus
      });
    },
    /* 输入框事件 */
    bindManual: function (e) {
      var num = e.detail.value;
      var id = e.currentTarget.id;
      // 将数值与状态写回  
      var minusStatus = num < 1 ? 'disabled' : 'normal';
      var up = "commoditys[" + id + "].num";
      var style = "commoditys[" + id + "].minusStatus";
      this.setData({
        [up]: num,
        [style]: minusStatus
      });
    }  
  }
})
