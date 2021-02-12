import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/layouts/navbar'
import './App.css'
// import UserItem from './components/users/UserItem'
import User from './components/users/User'
import axios from 'axios'
import Spinnner from './components/layouts/Spinner'

const data = [];
class App extends Component{

state = {
  users:[],
  loading:false
}

  componentDidMount(){
    this.setState({loading:true})
    
    axios.get('https://api.github.com/users')
    .then(res=>{
      this.setState({users:res.data})
      this.setState({loading:false})
    })
  }


  render(){
    
    return(
      <div className="">
        <Navbar title="Github Finder" icon="fab fa-github"/>

        <div className="container">
          {
            <User loading={this.state.loading} user={this.state.users}/>
          }
        </div>
      </div>
    )
  }
}

export default App