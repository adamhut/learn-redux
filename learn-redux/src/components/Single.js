import React from 'react'
import { Link } from 'react-router-dom'
import Photo from './Photo'
import Comments from './Comments'
// import comment

class Single extends React.Component{

    render(){
        // index of the post
        const postId =this.props.match.params.postId;

        const i = this.props.posts.findIndex((post) => {
             return post.code === postId;
        })
        const post = this.props.posts[i];
        // get us the post
        const postComments = this.props.comments[postId] || [];
        
        return (
             <div>
                <h1>
                     Reduxsdtagram
                </h1>
                <div className="single-photo">
                    <Photo i={i} post={post} {...this.props}></Photo>
                    <Comments postComments = {postComments} postId = {post.code} {...this.props}></Comments>
                </div>
            </div>
        ); 
    }

}

export default Single