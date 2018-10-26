import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import  { Redirect } from 'react-router-dom'
class EditEvent extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      start: '',
      end: '',
      allday: false,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    const option = {
      method: "POST",
      url: 'http://localhost:3000/api/events/create',
      data: { events: this.state }
    }
    axios(option)
    .then((response) => {
      console.log(response.data)
      return <Redirect to='/'  />
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };




  //this.props.handleRegister
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
              Create a new Event
          </Toolbar>
        </AppBar>
        <form onSubmit={this.handleSubmit}>

          <TextField
            name = "title"
            label="Title"
            style={{ margin: 8 }}
            placeholder="Enter title of event"
            value={this.props.location.state? this.props.location.state.referrer.title : ""}
            margin="normal"
            onChange={this.handleInputChange}
          />
          <TextField
            name = "description"
            label="Description"
            style={{ margin: 8 }}
            placeholder="Enter description of event"
            value={this.props.location.state ? this.props.location.state.referrer.description : ""}
            margin="normal"
            onChange={this.handleInputChange}
          />
          <TextField
            name = "start"
            label="Start Date"
            style={{ margin: 8 }}
            placeholder="YYYY-MM-DD"
            value={this.props.location.state ? this.props.location.state.referrer.start : ""}
            margin="normal"
            onChange={this.handleInputChange}
          />
          <TextField
            name = "end"
            label="End Date"
            style={{ margin: 8 }}
            placeholder="YYYY-MM-DD"
            value={this.props.location.state ? this.props.location.state.referrer.end : ""}
            margin="normal"
            onChange={this.handleInputChange}
          />
          <InputLabel htmlFor="allday">All Day</InputLabel>
          <Select
            id="allday"
            value={this.props.location.state ? this.props.location.state.referrer.allday : ""}
            name="allday"
            onChange={this.handleInputChange}
            style={{minWidth: 120}}
          >
            <MenuItem value={'true'}>True</MenuItem>
            <MenuItem value={'false'}>False</MenuItem>
          </Select>
          <Button type="submit" color="primary">Submit</Button>
        </form>
        <Button color="primary">
            <a href="/calendar" style={{textDecoration:"none"}}>Cancel</a>
        </Button>
      </div>

    );
  }
}

export default EditEvent

