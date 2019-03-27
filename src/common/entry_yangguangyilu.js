const list = [{
	store: require('../store/dashboard').default,
	router: require('../router/dashboard').default
},{
	store: require('../store/cms/page').default,
	router: require('../router/cms/page').default
},{
	store: require('../store/cms/pageCategory').default,
	router: require('../router/cms/pageCategory').default
}];

export default {
	list: list
};

// export default {
// 	webEntry: [
// 		require('../router/cms/page').default,
// 		require('../router/cms/pageCategory').default
// 	]
// };