import React from 'react'

class Comments extends React.Component{

    renderComment = (comment ,i)=>{
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null,this.props.postId,i)}> &times;</button>
                </p>
            </div>

        );
    };
    handleRemove = (d)=>{
        console.log(d);
    };
    
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log('submitting the form');
        const postId = this.props.postId; 
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        console.log(postId,author,comment);
        this.props.addComment(postId,author,comment);
        this.refs.commentForm.reset();
        // console.log(this.refs);
    };
    render(){
        return (
            <div className="comment">
                {
                    this.props.postComments.map(this.renderComment)
                }
                <form action="" ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>  
        );
    }

}

export default Comments;