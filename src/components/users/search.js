import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Search extends Component{

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers:PropTypes.func.isRequired,
        showClear:PropTypes.bool.isRequired,
        setAlert:PropTypes.func.isRequired
    }

    state = {
        text:''
    }


    onChange = e =>{
        this.setState({text:e.target.value})
    }

    onSubmit = (e)=>{
        e.preventDefault();
        // console.log(this.state.text)
        if(this.state.text ===''){
            this.props.setAlert('Please enter something','light')
        }else{
        this.props.searchUsers(this.state.text)
        this.setState({text:''})
        }
        
    }

    componentDidMount(){
        console.log('text is '+this.state.text)
    }

    disableserch = ()=>{
        if(this.state.text == ''){
           console.log('disable')
        }
    }
   

    render(){

        const {showClear,clearUsers} = this.props
        return(
            <div>
                <form className="form" 
                onSubmit={this.onSubmit}
                >
                    <input type="text" name="text"
                    value={this.state.text}
                    onChange={this.onChange}
                   
                    placeholder="Search User..."/>
                    <input

                    type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>

               {showClear && (
                   <button class="btn btn-light btn-block" type="button"
                   onClick={clearUsers}
                   >Clear</button>
               )
               
               }
                
            </div>
        )
    }
}
 
export default Search

