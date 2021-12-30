const app = getApp()
Component({
  properties: {
    bgColor: {
      type: String
    }
  },
  data: {
    navBarHeight: app.globalData.navBarHeight, //导航栏高度
    menuRight: app.globalData.menuRight, // 胶囊距右方间距（方保持左、右间距一致）
    menuBotton: app.globalData.menuBotton,
    menuHeight: app.globalData.menuHeight
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  methods: {

  }
})