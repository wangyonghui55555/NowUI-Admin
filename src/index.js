import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from "react-router-dom";
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';
import Login from './view/Login';
import Main from './view/Main';
import constant from './common/constant_jibai';
import util from './common/util';
import 'ant-design-pro/dist/ant-design-pro.css';
import 'braft-editor/dist/braft.css';
import './css/style.css';
import entry from "./common/entry_jibai";
document.getElementById("loading").remove();
util.setTitle(constant.name + '总控后台');
const reducers = {};

for (let i = 0; i < entry.list.length; i++) {
	reducers[entry.list[i].name] = entry.list[i].store;
}

const stores = createStore(
	combineReducers(Object.assign(reducers,{
		routing: routerReducer
	}))
);

const App = () =>
	<Provider store={stores}>
		<HashRouter>
			<Switch>
				<Route path="/login" exact component={Login}></Route>
				<Route path="/" component={Main}></Route>
			</Switch>
		</HashRouter>
	</Provider>

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);
