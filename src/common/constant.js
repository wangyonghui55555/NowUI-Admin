import ActiveType from "../emun/ActiveType";

export default {
    active: ActiveType.PROD,

    host: 'http://megoapi.jibaiexpress.com:8088',
    imageHost: 'http://megoapi.jibaiexpress.com:8088',
     //host: 'http://118.31.229.16:8080',
   /* host: 'http://localhost:8080',
    imageHost: 'http://localhost:10040',*/
    //imageHost: 'http://megofileapi.jibaiexpress.com:8088',

    appId: 'df2078d6c9eb46babb0df957127273ab',
    path:'http://megoapi.jibaiexpress.com:10110',
    //path:'http://localhost:10110',
    platform: 'PC',
    version: '1.010040.0',
    pageSize: 10,
    name: '美狗配送总控后台',
    shortName: 'Wawi',
    index: '/dashboard/index',
    login: '/admin/admin/v1/login',
    success: '操作成功',
    failure: '操作失败',
    error: '网络有问题',
    menuList: [/*{
        id: '1',
        name: '页面管理',
        icon: 'tag',
        children: [{
            id: '11',
            name: '页面信息',
            icon: 'layout',
            url: '/page/index'
        }, {
            id: '12',
            name: '页面分类信息',
            icon: 'layout',
            url: '/page/category/index'
        }]
    },*/{
        id: '2',
        name: '客户信息管理',
        icon: 'tag',
        children: [{
            id: '21',
            name: '客户信息管理',
            icon: 'layout',
            url: '/customer/index'
        },{
            id: '22',
            name: '客户门店信息管理',
            icon: 'layout',
            url: '/customer/provider/index'
        },{
            id: '23',
            name: 'KPI考核类型设置',
            icon: 'layout',
            url: '/customer/kpiset/index'
        },{
            id: '24',
            name: '客户结算设置',
            icon: 'layout',
            url: '/customer/settlementset/index'
        },{
            id: '25',
            name: '客户KPI设置',
            icon: 'layout',
            url: '/customer/kpi/map/index'
        }]
    },{
        id: '3',
        name: '公司信息管理',
        icon: 'tag',
        children: [{
            id: '31',
            name: '公司基本信息管理',
            icon: 'layout',
            url: '/company/index'
        }, {
            id: '32',
            name: '公司账户信息管理',
            icon: 'layout',
            url: '/companyAccountDetail/index'
        }]
    },{
        id: '4',
        name: '分公司信息管理',
        icon: 'tag',
        children: [{
            id: '41',
            name: '分公司基本信息管理',
            url: '/branch/company/index'
        },{
            id: '42',
            name: '分公司账户明细',
            url: '/branch/company/account/detail/branchAccountIndex'
        },{
            id: '43',
            name: '分公司收益设置',
            url: '/branch/company/dividend/index'
        },]
    },{
        id: '5',
        name: '门店信息管理',
        icon: 'tag',
        children: [{
            id: '51',
            name: '门店基本信息管理',
            url: '/customer/provider/index'
        }, {
            id: '52',
            name: '门店账户信息管理',
            url: '/customer/provider/account/detail/index2'
        }]
    },{
        id: '6',
        name: '站点信息管理',
        icon: 'tag',
        children: [{
            id: '61',
            name: '站点基本信息管理',
            url: '/site/index'
        },{
            id: '62',
            name: '站点账户信息管理',
            url: '/site/company/account/detail/index'
        },{
            id: '63',
            name: '站点收益系数设置',
            url: '/site/dividend/index'
        },{
            id: '64',
            name: '站点门店设置',
            url: '/site/provider/map/index'
        }]
    },{
        id: '7',
        name: '订单信息管理',
        icon: 'tag',
        children: [{
            id: '71',
            name: '配送订单信息',
            url: '/distribution/order/index'
        },{
            id: '72',
            name: '待调度订单',
            url: '/distribution/order/map'
        },{
            id: '73',
            name: '即将超时',
            url: '/distribution/order/index2'
        }]
    },{
        id: '8',
        name: '骑手信息管理',
        icon: 'tag',
        children: [{
            id: '81',
            name: '骑手信息管理',
            url: '/rider/index'
        },{
            id: '82',
            name: '骑手等级信息管理',
            url: '/rider/level/index'
        },{
            id: '83',
            name: '骑手收益设置',
            url: '/rider/dividend/index'
        },{
            id: '84',
            name: '骑手账户信息管理',
            url: '/rider/account/detail/index'
        }]
    } , {
        id: '9',
        name: '结算管理',
        icon: 'tag',
        children: [{
            id: '91',
            name: '客户结算管理',
            url: '/customer/OrderTotalReport'
        },{
            id: '92',
            name: '站点结算管理',
            url: '/site/SiteTotalReport'
        },{
            id: '93',
            name: '骑手结算管理',
            url: '/rider/RiderOrderTotalReport'
        }]
    }],
    roleMenuMap:[{
        roleCode: 'SD00001',
        menuList:[{
            id: '7',
            name: '订单信息管理',
            icon: 'tag',
            children: [{
                id: '71',
                name: '配送订单信息',
                url: '/distribution/order/index'
            },{
                id: '72',
                name: '待调度订单',
                url: '/distribution/order/map'
            }]
        },{
            id: '8',
            name: '骑手信息管理',
            icon: 'tag',
            children: [{
                id: '81',
                name: '骑手信息管理',
                url: '/rider/index'
            }]
        } ]
    }],
    userSiteMap:[{
        userAccount: 'yangsheng',
        siteCode: 'SHPDXQ0001',
    },{
        userAccount: 'liuyipeng',
        siteCode: 'SHQPQ0001',
    }]
};