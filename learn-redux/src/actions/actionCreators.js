// increment
function increament(index){
    return {
        type:'INCREMENT_LIKES',
        index: index, 
    }
}

// add comment
function addComment(postId, author, comment){
    return {
        type:'ADD_COMMENT',
        postId :postId,
        author :author,
        comment :comment,
    }
}

// remove comment
function removeComment(postId, i){
    return {
        type:'REMOVE_COMMENT',
        i : i,
        postId :postId,
    }
}