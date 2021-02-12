import React,{Component} from 'react'
import UserItem from './UserItem'
import Spinnner from '../layouts/Spinner'
import PropTypes from 'prop-types'

const User  = ({user,loading})=>{
   
    if(loading){
       return(<Spinnner/>) 
    }else{
        return(
            
            <div style={userStyle}>
             { user.map(e=>(
                          <UserItem key={e.id} user={e} />
  
              ))
          }  
              </div>

          )
      }
  
    }

   
User.propTypes = {
    user: PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired
}

       
const userStyle = {
    display:'grid',
    gridTemplateColumns:'repeat(3, 1fr)',
    gridGap: '1.5rem'
}

export default User;