const app = getApp()
Component({
    properties: {
        show: {
            type: Boolean
        }
    },
    data: {
        navBarHeight: app.globalData.navBarHeight, //导航栏高度
        oneShow: true, // 显示基础还是其他
        popup: false,
        active: 0, // 当前步骤条
        steps: [{
                text: '填写',
                inactiveIcon: 'circle',
                activeIcon: 'success',
            },
            {
                text: '提交',
                inactiveIcon: 'circle',
                activeIcon: 'success',
            },
            {
                text: '审核',
                inactiveIcon: 'circle',
                activeIcon: 'success',
            },
            {
                text: '完成',
                inactiveIcon: 'circle',
                activeIcon: 'success',
            },
        ],
        val1: '',
        err1: '',
        val2: '',
        err2: '',
        val3: '',
        err3: '',
        val4: '',
        err4: '',
        val5: '',
        err5: '',
        val6: '',
        err6: '',
        val7: '',
        err7: '',
        val8: '',
        err8: '',
        val9: '',
        err9: '',
        val10: '',
        err10: '',
        val11: '',
        err11: '',
        val12: '',
        val13: '',
        val14: '',
        val15: '',
        val16: '',
        val17: '',
        val18: '',
    },
    methods: {
        goBack() {
            this.triggerEvent('handleClose')
        },
        nextPage() {
            if (this.data.oneShow === true) {
                // for (let i = 1; i < 12; i++) {
                //     if (this.data['val' + i] == "") {
                //         this.setData({
                //             ['err' + i]: "请输入数据",
                //         })
                //         return
                //     } else {
                //         this.setData({
                //             ['err' + i]: "",
                //         })
                //     }
                // }
                this.setData({
                    oneShow: false
                })
            } else {
                // 提交操作
                this.setData({
                    popup: true,
                    active: 1
                })
            }
        },
        hidePopup() {
            this.setData({
                popup: false,
            })
        },
        // 子组件确定提交操作
        submitConfirm() {
            this.setData({
                active: 3
            })
        }
    }
})