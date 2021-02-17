import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/layouts/navbar'
import './App.css'
// import UserItem from './components/users/UserItem'
import User from './components/users/User'
import axios from 'axios'
import Spinnner from './components/layouts/Spinner'
import Search from './components/users/search'
import Alert from './components/layouts/alert'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/pages/about'

const data = [];
class App extends Component{

state = {
  users:[],
  loading:false,
  alert:null
}

  componentDidMount(){
    this.setState({loading:true})
    
    axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    .then(res=>{
      this.setState({users:res.data})
      this.setState({loading:false})
    })
  }

  searchUsers = async (text)=>{
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users:res.data.items, loading:false}) 
  }

  clearUsers = ()=>{
    this.setState({users:[],loading:false})
  }

  setAlert = (msg, type)=>{
    this.setState({alert:{message:msg,type:type}})
    
    setTimeout(()=> this.setState({alert:null}),3000)
  }


  render(){
     const {users,loading} = this.state
    return(
      <Router>
      <div className="">
        <Navbar title="Github Finder" icon="fab fa-github"/>

        <div className="container">
          {this.state.alert && (
            <Alert alert={this.state.alert}/>
          )}

          <Switch>
            <Route exact path='/'
            render={props=>(
              <Fragment>
           <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}
          showClear={users.length >0 ? true: false}
          setAlert={this.setAlert}
          />
         
          
            <User loading={loading} user={users}/>
              </Fragment>
            )}
            
            />

            <Route exact path='/about' render={props =>(
              <Fragment>
                <About/>
              </Fragment>
            )}/>

          
          </Switch>
          
          
        
        </div>
      </div>
      </Router>
    )
  }
}

export default App