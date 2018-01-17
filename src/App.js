import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          
          <header className='header' >
            <nav>
              <ul>
                <li>
                  <Link to='/users'>Users</Link>
                </li>
                <li>
                  <Link to='/courses'>Courses</Link>
                </li>
              </ul>
            </nav>
          </header>

          <Switch>
            <Route path='/users' component={Users} />
            <Route path='/courses' component={Courses} />
            <Redirect from='/all-courses' to='/courses' />
            <Route render={()=>(<h1>Not Found</h1>)} />
          </Switch>
          
        </div>      
      </BrowserRouter>
      
    );
  }
}

export default App;
