import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

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

          <ol style={{textAlign: 'left'}}>
            <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
            <li>Load the "Course" component as a nested component of "Courses"</li>
            <li>Add a 404 error page and render it for any unknown routes</li>
            <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
          </ol>

          <Switch>
            <Route exact path='/users' component={Users} />
            <Route exact path='/courses' component={Courses} />
            <Route path='/courses/:id/:title' component={Course} />
          </Switch>
          

        </div>      
      </BrowserRouter>
      
    );
  }
}

export default App;
