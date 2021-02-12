import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class First extends Component{
    loading = false
    render(){
        const name = function(){
            alert('Hell0') 
        }

        if(this.loading){
            return <h4>Loading....</h4>
        }

        return(
            <div className="container">
                 <h1>Hello </h1>
            </div>
               
          
        )
    }
}

export default First;