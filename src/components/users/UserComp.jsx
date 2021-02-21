import React, { Component,Fragment } from 'react'
import {Link} from 'react-router-dom'
import Spinner from '../layouts/Spinner'
import PropTypes from 'prop-types'
import Repo from '../repos/Repos'
class UserComp extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
        this.props.getUserRepos(this.props.match.params.login)
    }

    static propTypes = {
        getUser:PropTypes.func.isRequired,
        getUserRepos:PropTypes.func.isRequired,
        repos:PropTypes.array.isRequired
    }
    render() {
        const {name,avatar_url,location,
        bio,blog,login,html_url,followers,following,
    public_repos,public_gists ,hirable} = this.props.user;

    const {loading,repos} = this.props;
        return (
            <div>
               {loading ? <Spinner/> :
                
                    
                <Fragment>
                    <Link to="/" className="btn btn-light">Back to search</Link>
                    Hireable :{' '} 
                    {hirable? <i className="fas fa-check text-success"></i> :
                    <i className="fas fa-times-circle text-danger"></i>}
                    <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" alt="" style={{width:'150px'}}/>
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                        <p>Company: {this.props.user.company}</p>
                    </div>
                    <div>
                        {bio && <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                            </Fragment>}
                            <a href={html_url} className="btn btn-primary my-1" target="_blank">View Profile on GitHub</a>
                   
                        <ul>
                            <li>{login && <Fragment>
                                <strong>{login}</strong>
                            </Fragment> }</li>
                            <li>
                                {blog && <Fragment>
                                    {blog}
                                    </Fragment>}
                            </li>
                        </ul> 
                    </div>
                    </div>

                    <div className='card text-center'>
                        <div className='badge badge-primary'>Followers: {followers}</div>
                        <div className='badge badge-success'>Followings: {following}</div>
                        <div className='badge badge-info'>Public Repos: {public_repos}</div>
                        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
                    </div>
                    <div>
                        <Repo repos={repos}/>
                    </div>
                </Fragment>
                
               }

            </div>
        )
    }
}

export default UserComp;