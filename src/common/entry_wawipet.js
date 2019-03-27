const list = [{
    store: require('../store/dashboard').default,
    router: require('../router/dashboard').default
}, {
	store: require('../store/base/admin').default,
	router: require('../router/base/admin').default
}, {
    store: require('../store/base/app').default,
    router: require('../router/base/app').default
}, {
    store: require('../store/base/aliyunSms').default,
    router: require('../router/base/aliyunSms').default
}, {
    store: require('../store/cms/advertisement').default,
    router: require('../router/cms/advertisement').default
}, {
    store: require('../store/sns/forum').default,
    router: require('../router/sns/forum').default
}, {
    store: require('../store/member/member').default,
    router: require('../router/member/member').default
}, {
    store: require('../store/member/memberAuth').default,
    router: require('../router/member/memberAuth').default
}, {
    store: require('../store/member/memberBackground').default,
    router: require('../router/member/memberBackground').default
}, {
	store: require('../store/sns/memberDefaultAvatar').default,
	router: require('../router/sns/memberDefaultAvatar').default
}, {
    store: require('../store/member/memberTag').default,
    router: require('../router/member/memberTag').default
}, {
    store: require('../store/sns/pet').default,
    router: require('../router/sns/pet').default
}, {
    store: require('../store/sns/petCategory').default,
    router: require('../router/sns/petCategory').default
}, {
    store: require('../store/base/tag').default,
    router: require('../router/base/tag').default
}, {
    store: require('../store/base/tagCategory').default,
    router: require('../router/base/tagCategory').default
}, {
    store: require('../store/base/tagFrontendCategory').default,
    router: require('../router/base/tagFrontendCategory').default
}, {
    store: require('../store/base/tagFrontendCategoryTagMap').default,
    router: require('../router/base/tagFrontendCategoryTagMap').default
}, {
    store: require('../store/sns/topic').default,
    router: require('../router/sns/topic').default
}, {
    store: require('../store/sns/merchant').default,
    router: require('../router/sns/merchant').default
}, {
    store: require('../store/wechat/wechatMini').default,
    router: require('../router/wechat/wechatMini').default
}];

export default {
	list: list
};