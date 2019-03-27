import ActiveType from "../emun/ActiveType";

export default {
    active: ActiveType.PROD,
    host: 'http://localhost:8080',
    // host: 'http://118.31.229.16:80',
	imageHost: 'http://localhost:8080',
	// imageHost: 'http://118.31.229.16:80',
    appId: 'df2078d6c9eb46babb0df957127273ab',
    platform: 'PC',
    version: '1.0.0',
    pageSize: 10,
    name: 'Wawipet总控后台',
    shortName: 'Wawi',
    index: '/dashboard/index',
    login: '/admin/admin/login',
    success: '操作成功',
    failure: '操作失败',
    error: '网络有问题',
	menuList: [{
		id: 1,
		name: '圈子管理',
		icon: 'codepen-circle',
		children: [{
			id: 1.1,
			name: '圈子信息',
            icon: 'layout',
			url: '/forum/index'
		}]
	}, {
		id: 2,
		name: '动态管理',
		icon: 'form',
		children: [{
			id: 2.1,
			name: '动态信息',
            icon: 'layout',
			url: '/topic/index'
		}]
	}, {
		id: 3,
		name: '标签管理',
		icon: 'tag',
		children: [{
			id: 3.1,
			name: '标签统计分类',
            icon: 'layout',
			url: '/tag/category/index'
		}, {
			id: 3.2,
			name: '标签',
            icon: 'layout',
			url: '/tag/index'
		}, {
			id: 3.3,
			name: '前端标签分类',
            icon: 'layout',
			url: '/tag/frontend/category/index'
		}, {
			id: 3.4,
			name: '前端标签关联',
            icon: 'layout',
			url: '/tag/frontend/category/tag/map/index'
		}]
	}, {
		id: 4,
		name: '会员管理',
		icon: 'team',
		children: [{
			id: 4.1,
			name: '会员信息',
            icon: 'layout',
			url: '/member/index'
		}, {
			id: 4.2,
			name: '会员账号信息',
            icon: 'layout',
			url: '/member/auth/index'
		}, {
			id: 4.3,
			name: '会员背景信息',
            icon: 'layout',
			url: '/member/background/index'
		}, {
			id: 4.4,
			name: '会员标签信息',
            icon: 'layout',
			url: '/member/tag/index'
		}, {
			id: 4.5,
			name: '会员宠物信息',
            icon: 'layout',
			url: '/pet/index'
		}]
	}, {
		id: 5,
		name: '宠物管理',
		icon: 'camera-o',
		children: [{
			id: 5.1,
			name: '宠物分类信息',
            icon: 'layout',
			url: '/pet/category/index'
		}]
	}, {
		id: 6,
		name: '商户管理',
		icon: 'camera-o',
		children: [{
			id: 6.1,
			name: '商户信息',
            icon: 'layout',
			url: '/merchant/index'
		}]
	}, {
		id: 7,
		name: '微信管理',
		icon: 'camera-o',
		children: [{
			id: 7.1,
			name: '微信小程序',
			url: '/wechat/mini/index'
		}]
	}, {
        id: 8,
        name: '广告管理',
        icon: 'camera-o',
        children: [{
            id: 8.1,
            name: '广告信息',
            url: '/advertisement/index'
        }]
    }, {
        id: 90,
        name: '权限管理',
        icon: 'lock',
        children: [{
            id: 90.1,
            name: '管理员信息',
            url: '/admin/index'
        }]
    }]
};