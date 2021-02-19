import React, { Component,Fragment } from 'react'
import {Link} from 'react-router-dom'
import Spinner from '../layouts/Spinner'
class UserComp extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
    }
    render() {
        const {name,avatar_url,location,
        bio,blog,login,html_url,followers,followings,
    public_repos,public_gists ,hirable} = this.props.user;
        return (
            <div>
               {this.props.loading ? <Spinner/> :
                
                    
                <Fragment>
                    <Link to="/" className="btn btn-light">Back to search</Link>
                    Hireable :{' '}
                    {hirable? <i className="fas fa-check text-success"></i> :
                    <i className="fas fa-times-circle text-danger"></i>}
                    
                </Fragment>
                
               }

            </div>
        )
    }
}

export default UserComp;