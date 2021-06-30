import React from 'react'
import { Link } from 'react-router-dom'
import Photo from './Photo'

class PhotoGrid extends React.Component{

    render(){
        return (
            <div className="photo-grid">
                {
                    this.props.posts.map((post,i)=>{
                        return <Photo {...this.props} key={i} i={i} post={post}></Photo>
                    })
                }
            </div>
        ); 
    }

}

export default PhotoGrid