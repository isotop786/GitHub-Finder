import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import YImg from './img/yeamna.jpg'
import Nehal from './img/Nehal.jpg'
import Maruf from './img/Maruf.png'
import './App.css';

class Yeamna extends Component {
    // name = 'Yeamna Khan';
    // age = 11;
    // class = 6;
    // birthday = '30th August'
    // photo = YImg

    data = [
        {
            name:'Yeamna',
            age:11,
            photo:YImg
        },
        {
            name:'Nehal',
            age:18,
            photo:Nehal
        },
        {
            name:'Maruf',
            age:24,
            photo:Maruf
        }
    ]


    render(){
        return(
            <div className="container">
            <div className="row">
            {this.data.map((d,i)=>{
                 return(
                     <div key={i} className="col">
                        <p>Name:{d.name}</p>
                        <p>Age:{d.age}</p>
                        <img style={{width:'200px',height:'240px', borderRadius:'50%'}} src={d.photo} alt=""/>
                     </div>
                 )
             })}
            </div>
             
             
            </div>
        )
    }
}

export default Yeamna