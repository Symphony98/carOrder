const app = getApp()
Component({
    properties: {
        myShow: {
            type: Boolean
        }
    },
    data: {
        navBarHeight: app.globalData.navBarHeight, //导航栏高度
        active: 2,
        steps: [{
                text: '靠（离）泊服务',
                // inactiveIcon: 'location-o',
                // activeIcon: 'success',
            },
            {
                text: '装卸效率',
                // inactiveIcon: 'like-o',
                // activeIcon: 'plus',
            },
            {
                text: '作业过程控制',
                // inactiveIcon: 'star-o',
                // activeIcon: 'cross',
            },
            {
                text: '其他',
                // inactiveIcon: 'phone-o',
                // activeIcon: 'fail',
            },
        ],
        radio: '',
        value: '',
        fileList: [],
        checked: false,
        checkMsg: '匿名评价',
        popup: false,
        popup2: false,
    },
    methods: {
        goBack() {
            this.triggerEvent('handleClose')
        },
        checkChange(event) {
            this.setData({
                checked: event.detail
            })
            if (this.data.checked) {
                this.setData({
                    checkMsg: "已匿名"
                })
            } else {
                this.setData({
                    checkMsg: "匿名评价"
                })
            }
        },
        showPopup() {
            this.setData({
                popup: true
            });
        },
        hidePopup() {
            this.setData({
                popup: false,
                popup2: false,
            });
        },
        success() {
            this.setData({
                popup: false,
                popup2: true
            });
        }
    }
})