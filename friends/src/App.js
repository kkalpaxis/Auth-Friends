import React from 'react';
import './App.css';
import { Route, Link, Redirect } from 'react-router-dom'
import Login from './components/Login.js'
import Friends from './components/Friend'

const ProtectedRoute = ({component: Component, ...rest}) => {
	return <Route {...propsWithoutComponent} render={props => {
		if (localStorage.getItem('token')) {
			return <Component {...props} />;
		} else {
			<Redirect to="/login" />
		}
	}}/>;
};

const protectRoute = Component => props => {
	if(localStorage.getItem('token')) {
		return <Component {...props} />
	} else {
		return <Redirect to="/login"/>;
	}
};

const ProtectedFriends = protectRoute(Friends);
	
function App() {
	return (
	  <div className="App">
		  <Route path="/login" component={Login} />
		  <ProtectedRoute path="/friends" component={ProtectedFriends} />
	  </div>
  );
}
	
export default App;
