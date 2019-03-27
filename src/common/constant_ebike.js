export default {
    active: 'dev',
    host: 'http://192.168.1.156:8080',
    // host: 'http://118.31.229.16:80',
    // imageHost: 'http://192.168.1.156:8088',
    // imageHost: 'http://118.31.229.16:80',
    appId: 'ce217abe0f4646d380c68aa179361980',
    platform: 'PC',
    version: '1.010040.0',
    pageSize: 10,
    name: 'eBike总控后台',
    shortName: 'Wawi',
    index: '/dashboard/index',
    login: '/admin/admin/login',
    success: '操作成功',
    failure: '操作失败',
    error: '网络有问题',
    menuList: [
        {
            id: '1',
            name: '微信授权管理',
            icon: 'tag',
            children: [
                {
                    id: '11',
                    name: '微信AppId管理',
                    url: '/wechat/mini/index'
                }
            ]
        }
        ,
        {
            id: '2',
            name: '用户信息管理',
            icon: 'tag',
            children: [
                {
                    id: '21',
                    name: '用户基本信息',
                    url: '/member/index'
                }, {
                    id: '23',
                    name: '用户账户信息',
                    url: '/member/account/index'
                }, {
                    id: '24',
                    name: '用户账户明细',
                    url: '/member/account/detail/index'
                }, {
                    id: '25',
                    name: '积分规则管理',
                    url: '/member/score/rule/index'
                }, {
                    id: '26',
                    name: '积分增长记录',
                    url: '/member/score/increase/index'
                }
            ]
        }
        , {
            id: '3',
            name: '运维管理',
            icon: 'tag',
            children: [{
                id: '33',
                name: '运营商信息',
                url: '/operators/index'
            }, {
                id: '32',
                name: '供应商信息',
                url: '/operators/supplier/index'
            }, {
                id: '31',
                name: '运维人员信息',
                url: '/operators/maintenance/member/index'
            }, {
                id: '30',
                name: '维保记录信息',
                url: '/operators/maintenance/record/index'
            }, {
                id: '29',
                name: '故障记录信息',
                url: '/operators/maintenance/fault/index'
            }, {
                id: '28',
                name: '故障处理记录',
                url: '/operators/maintenance/fault/handle/index'
            }]
        }, {
            id: '4',
            name: '电子围栏管理',
            icon: 'tag',
            children: [{
                id: '34',
                name: '片区信息管理',
                url: '/area/index'
            }, {
                id: '35',
                name: '网点信息管理',
                url: '/area/point/index'
            }, {
                id: '36',
                name: '电子围栏管理',
                url: '/area/point/around/index'
            }, {
                id: '37',
                name: '计费策略配置',
                url: '/area/point/strategy/price/index'
            }, {
                id: '38',
                name: '停车奖惩策略配置',
                url: '/area/point/strategy/parking/index'
            }, {
                id: '39',
                name: '电子围栏区域划分',
                url: '/area/point/around/scope/index'
            }]
        }, {
            id: '5',
            name: '车辆设施管理',
            icon: 'tag',
            children: [{
                id: '40',
                name: '车辆信息管理',
                url: '/facilities/bike/index'
            }, {
                id: '41',
                name: '现场设施管理',
                url: '/facilities/index'
            }, {
                id: '42',
                name: '设施配件配置',
                url: '/facilities/bike/parts/index'
            }, {
                id: '43',
                name: '设施配件类型',
                url: '/facilities/bike/parts/type/index'
            }]
        }, {
            id: '6',
            name: '车辆数据与订单',
            icon: 'tag',
            children: [
                {
                    id: '61',
                    name: '车辆操作记录',
                    url: '/cycling/bike/operation/index'
                }
            ]
        }
    ]
};