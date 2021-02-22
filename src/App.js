import React, {useState, Fragment,useEffect} from 'react'
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
import UserComp from './components/users/UserComp'



const data = [];
const App = ()=>{

  const [users,setUsers] = useState([]);
  const[user,setUser] = useState({});
  const[repos,setRepos] = useState([]);
  const[loading,setLoading] = useState(false);
  const[alert,setAlert] = useState(null)



  useEffect(()=>{
    setLoading(true);
    axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    .then(res=>{
      setUsers(res.data);
      setLoading(false);
    })
    
  },[])


  const searchUsers = async (text)=>{
    setLoading(true)
    
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
   
    setUsers(res.data.items);
    setLoading(false);
  }

  const clearUsers = ()=>{
    // this.setState({users:[],loading:false})
    setUsers([]);
    setLoading(false);
  }

  const showAlert = (msg, type)=>{
    // this.setState({alert:{message:msg,type:type}})
    setAlert({message:msg,type:type})
    
    setTimeout(()=> setAlert(null),3000);
  }

  // Get single Github user 
  const getUser = async (login) =>{
    // this.setState({loading:true})
    setLoading(true)

    const res = await axios.get(
      `https://api.github.com/users/${login}?
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
   

    // this.setState({user:res.data,loading:false})
    setUser(res.data);
    setLoading(false)

    
  }

  // Get user's repos 

  const getUserRepos = async login =>{
    setLoading(true)
    // this.setState({loading:true})
    const res = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    // this.setState({repos:res.data,loading:false});
    setRepos(res.data);
    setLoading(false);

    // console.log(this.state.repos)

  }


    return(
      <Router>
      <div className="">
        <Navbar title="Github Finder" icon="fab fa-github"/>

        <div className="container">
          {alert && (
            <Alert alert={alert}/>
          )}

          <Switch>
            <Route exact path='/'
            render={props=>(
              <Fragment>
           <Search searchUsers={searchUsers} clearUsers={clearUsers}
          showClear={users.length >0 ? true: false}
          setAlert={showAlert}
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

            <Route exact path="/user/:login" render={props=>(
              <UserComp {...props} getUser={getUser} user={user}
              getUserRepos={getUserRepos}
              repos={repos}
              loading={loading}
              />
            )}

            />
          
          </Switch>
          
          
        
        </div>
      </div>
      </Router>
    )
  
}

export default App