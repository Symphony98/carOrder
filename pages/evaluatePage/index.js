Page({
    data: {
        storeDetail: '',
        radioList: [{
                label: '1.靠（离）泊计划执行',
                id: 'a',
                radio: ""
            },
            {
                label: '2.拖轮协助靠离',
                id: 'b',
                radio: ""
            },
            {
                label: '3.作业计划执行',
                id: 'c',
                radio: ""
            },
            {
                label: '4.船舶靠好后首开工时间',
                id: 'd',
                radio: ""
            },
            {
                label: '5.交接班过程开收工点',
                id: 'e',
                radio: ""
            },
            {
                label: '6.昼夜效率',
                id: 'f',
                radio: ""
            },
            {
                label: '7.作业方案沟通',
                id: 'g',
                radio: ""
            },
            {
                label: '8.作业规范执行',
                id: 'h',
                radio: ""
            },
            {
                label: '9.清舱等辅助作业',
                id: 'i',
                radio: ""
            },
            {
                label: '10.安全措施',
                id: 'j',
                radio: ""
            },
            {
                label: '11.质量措施',
                id: 'k',
                radio: ""
            },
            {
                label: '12.意见、建议处理及反馈',
                id: 'l',
                radio: ""
            },
            {
                label: '13.通关、通检手续办理',
                id: 'm',
                radio: ""
            },
            {
                label: '14.单船指导员',
                id: 'n',
                radio: ""
            },
            {
                label: '15.理货人员',
                id: 'o',
                radio: ""
            },
            {
                label: '16.品牌经理',
                id: 'p',
                radio: ""
            },
            {
                label: '17.其他相关人员',
                id: 'q',
                radio: ""
            }
        ]
    },
    onPageScroll: function (e) {},
    radioChange: function (e) {
        const id = e.target.dataset.id
        const index = this.data.radioList.findIndex(el => el.id == id)
        this.setData({
            ["radioList[" + index + "].radio"]: e.detail
        })
    },
    enterTap: function (e) {
        console.log(this.data.radioList);
        for (let item of this.data.radioList) {
            if (item.radio == "") {
                this.setData({
                    storeDetail: item.id,
                })
                // 有一项未填写跳转后不进入下一次循环
                return
            }
        }

    }
})