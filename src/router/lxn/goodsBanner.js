import React from 'react'
import {Route} from 'react-router-dom';

import GoodsBannerIndex from '../../view/lxn/goodsBanner/Index';
import GoodsBannerDetail from '../../view/lxn/goodsBanner/Detail';

export default [
	<Route key="GoodsBannerIndex" path="/goods/banner/index" component={GoodsBannerIndex}/>,
	<Route key="GoodsBannerAdd" path="/goods/banner/add" component={GoodsBannerDetail}/>,
	<Route key="GoodsBannerEditGoodsBannerId" path="/goods/banner/edit/:goodsBannerId" component={GoodsBannerDetail}/>
]
