export default {
    active: 'dev',
    host: 'http://192.168.1.100:8080',
    // host: 'http://118.31.229.16:80',
    imageHost: 'http://192.168.1.100:8080',
    // imageHost: 'http://118.31.229.16:80',
    appId: 'b8738e93c4134a179bcb6936c574c65d',
    platform: 'PC',
    version: '1.010040.0',
    pageSize: 10,
    name: '犁小农总控后台',
    shortName: 'Wawi',
    index: '/dashboard/index',
    login: '/admin/admin/login',
    success: '操作成功',
    failure: '操作失败',
    error: '网络有问题',
    menuList: [
        {
            id: '1',
            name: '用户信息管理',
            icon: 'tag',
            children: [
                {
                    id: '10',
                    name: '用户基本信息',
                    url: '/member/index'
                }
            ]
        },{
            id: '2',
            name: '商品管理系统',
            icon: 'tag',
            children: [
                {
                    id: '20',
                    name: '商品分类管理',
                    url: '/goods/category/index'
                },{
                    id: '21',
                    name: '商品信息管理',
                    url: '/goods/index'
                },{
                    id: '22',
                    name: '周期购商品管理',
                    url: '/goods/cycle/index'
                },{
                    id: '23',
                    name: '次日达商品管理',
                    url: '/goods/next/day/index'
                },{
                    id: '24',
                    name: '商品导航栏管理',
                    url: '/goods/navigation/index'
                }
            ]
        }
    ]
};