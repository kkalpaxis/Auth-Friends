import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Login from './components/Login.js'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friend'
	
function App() {
	return (
	  <div className="App">
	    <h1>Friends</h1>
	    <button>
	      <Link to='/login'>Login</Link>  
	    </button>
	  </div>
  )
	  // <Route path='/login' component={Login} />
	  // <PrivateRoute  exact path='/friends' component={Friends} />
  
}
	
export default App;
