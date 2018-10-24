import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Dashboard from './Dashboard.jsx'
import Register from './user/Register.jsx'
import Login from './user/login.jsx'
import ButtonAppBar from './Components/Nav.jsx'
import Calendar from './Components/Calendar.jsx'
import ChatRoom from './Components/ChatRoom.jsx'
import CreateEvent from './Components/CreateEvent.jsx'
import Home from './Components/Home.jsx'
class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      role: null,
      userid: null
    };
  }
  // componentDidMount() {
  //   const options = {
  //     method: "GET",
  //     url: 'http://localhost:3000/api/testings/index'
  //   }
  //   axios(options)
  //   .then((response) => {
  //     if (response.data) {
  //       // this.setState({message: response.data.message})
  //     }
  //   })
  // }
  handleLogout = (e) => {
    this.setState({
      username: null,
      role: null,
      userid: null
    })
  }
  handleLogin = (userInfo) => {
    this.setState({
      username: userInfo.first_name,
      role: userInfo.role,
      userid: userInfo.user_id
      });
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
<<<<<<< HEAD
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login"  component={() => <Login handleLogin={this.handleLogin} />} />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path ="/calendar/create_event" component={CreateEvent} />
            <Route exact path="/messages" component={ChatRoom} />
=======


            <Route exact path="/" render={() => (<div><ButtonAppBar /><Home /></div>)} />
            <Route exact path="/dashboard" render={() => (<div><ButtonAppBar /><Dashboard /></div>)} />
            <Route path="/register" render={() => (<div><ButtonAppBar /><Register /></div>)} />
            <Route path="/login"  render={(props) => (<div><ButtonAppBar /><Login handleLogin={this.handleLogin} /></div>) } />
            <Route path="/calendar" render={() => (<div><ButtonAppBar /><Calendar /></div>)} />
            <Route path="/messages" render={(props) => (<div><ButtonAppBar /><ChatRoom username={this.state.username} /> </div>)} />


>>>>>>> 924f8c319811fcf534c87da88e5f1f55b3547cf0
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
