        //criminal dropdown component
        var CriminalDropdown = {
            props: ['isShow', "criminalTypes", "criminalTypeIdx"],
            template: "#criminalDropdownTpl",
            methods: {

                criminalTypeSelect: function(idx) {
                    if (this.criminalTypeIdx == idx) {
                        return;
                    }
                    console.log(idx);
                    console.log("hide drop down self");
                    this.$emit("on-hide-dropdown", idx);
                }
            }
        }

        new Vue({
            el: "#app",
            methods: {
                showDropdown: function() {
                    console.log("show drop down");
                    this.isShowDropdown = true;
                },
                hideDropdown: function(idx) {
                    console.log("hide drop down");
                    this.criminalTypeIdx = idx;
                    this.isShowDropdown = false;
                }
            },
            components: {
                //register CriminalDropdown component
                'criminal-dropdown': CriminalDropdown
            },
            data: {
                criminalTypeIdx: 0,
                isShowDropdown: false,
                criminalTypes: [{
                    id: 0,
                    name: "全部",
                    title: "涉罪类型"
                }, {
                    id: 1,
                    name: "网络赌博",
                    title: "网络赌博"
                }, {
                    id: 2,
                    name: "网络贩毒",
                    title: "网络贩毒",
                }, {
                    id: 3,
                    name: "恐怖融资",
                    title: "恐怖融资",
                }, {
                    id: 4,
                    name: "电信诈骗",
                    title: "电信诈骗",
                }, {
                    id: 5,
                    name: "非法传销",
                    title: "非法传销",
                }, {
                    id: 6,
                    name: "地下钱庄",
                    title: "地下钱庄"
                }, {
                    id: 7,
                    name: "走私犯罪",
                    title: "走私犯罪"
                }],
                users: [{
                    'id': '20170424050000583',
                    'time': '2017-04-24',
                    'type': '个人',
                    'name': '阿****牙',
                    'IDCard': '6****************1',
                    'ctype': '218341348020'
                }, {
                    'id': '20170424050000582',
                    'time': '2017-04-24',
                    'type': '个人',
                    'name': '阿****拉',
                    'IDCard': '6****************2',
                    'ctype': '218341348018'
                }, {
                    'id': '20170424050000581',
                    'time': '2017-04-24',
                    'type': '个人',
                    'name': '阿****提',
                    'IDCard': '6****************3',
                    'ctype': '218341348017'
                }, {
                    'id': '20170424050000580',
                    'time': '2017-04-24',
                    'type': '个人',
                    'name': '阿****江',
                    'IDCard': '6****************4',
                    'ctype': '218341348016'
                }, {
                    'id': '20170424050000579',
                    'time': '2017-04-24',
                    'type': '个人',
                    'name': '阿****班',
                    'IDCard': '6****************5',
                    'ctype': '218341348016'
                }, {
                    'id': '20170424050000578',
                    'time': '2017-04-24',
                    'type': '个人',
                    'name': '希****江',
                    'IDCard': '6****************6',
                    'ctype': '218341348015'
                }]
            }

        });