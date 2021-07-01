import React from 'react'
import { Link } from 'react-router-dom'
import CSSTransitionGroup from 'react-addons-css-transition-group'

class Photo extends React.Component{

    callIncrement = () => {
        //  console.log(this.props.i);
        this.props.increment(this.props.i)
        // this.props.increament.bind(null,i)
    }

    render(){
        const {post,i,comments} = this.props
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img 
                            src={post.display_src} 
                            alt={post.caption} 
                            className="grid-photo" 
                        />
                    </Link>    
                    <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        <span key={post.likes} className="likes-heart">{post.likes}</span>
                    </CSSTransitionGroup>
                </div>             
                <figcaption>    
                    <p>
                        { post.caption }
                        <div className="control-buttons">
                            <button onClick={this.callIncrement} className="likes">&hearts; {post.likes}</button>
                            <Link className="button" to={`/view/${post.code}`}>
                                <span className="comment-count">
                                    <span className="speech-bubble"></span> 
                                    { comments[post.code] ?  comments[post.code].length :0}
                                </span>
                            </Link>
                            
                        </div>
                    </p>    
                </figcaption>   
            </figure>
        );
    }
}

export default Photo;