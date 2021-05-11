import './App.css';
import InputField from '../src/components/InputField/InputField'
import React, { Component } from 'react'
import CardList from './components/CardList/CardList';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      inputField:''
    }
  }
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=12')
      .then(response=>response.json())
      .then(data=>this.setState({users : data.results},()=>console.log(this.state.users[0].login.uuid)))
    
  }
  
  render() {
    const {users,inputField} = this.state;
    const filteredUsers = users.filter(user => user.name.first.toLowerCase().includes(inputField.toLowerCase()))
    return (
      <div>
        <div className="intro">Search For User</div>
        <InputField placeholder="search" changeHandler={(e) => this.setState({inputField:e.target.value})}></InputField>
        <CardList users={filteredUsers}/>
      </div>
    )
  }
}


