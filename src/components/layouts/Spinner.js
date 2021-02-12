import React from 'react'
import git from './spinner.gif'

const Spinner = ()=>{

    const style ={
        marginTop:'15rem'
    }

    return(
        <div className="text-center" style={style}>
           <img style={{width:'200px',height:'220px'}} src={git} alt=""/>
        </div>
    )

   

}



export default Spinner