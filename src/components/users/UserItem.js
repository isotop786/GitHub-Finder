import React,{Component} from 'react'
import Proptype from 'prop-types'
import {Link} from 'react-router-dom'

const UserItem  = ({user: {login,avatar_url,html_url}}) =>{
 
        return(
            <div className="card text-center" >
               
                <img src={avatar_url} alt="" className="round-img"
                style={{width:'64px'}}/>
                <h3>{login}</h3>
                <div>
                    <Link to={`user/${login}`} className="btn btn-dark btn-sm my-1">View Profile</Link>
                
                </div>
            </div>
        )
    }


    UserItem.Proptype ={
    user:Proptype.object.isRequired,
}


export default UserItem