// a reducer takes in two things"

// 1. the action (info about what happen)

// 2. copy of current state

function postComments(state = [],action) {
    switch(action.type){
        case 'ADD_COMMENT':
            // return the neew state with the new comment
            return [...state,{
                user:action.author,
                text:action.comment,
            }];
        case 'REMOVE_COMMENT':
            // console.log('remove the comment');
            // we need to return the new state without the delete comment
            return [
                // for mth estart ot he one we want to  delete
                ...state.slice(0,action.i),
                // after the deleted one, to the end
                ...state.slice(action.i+1)
            ];
        default:
            return state;
    }
    

    return state;
}

function comments(state = [],action)
{   
    // console.log('The comment will change');
    if(typeof action.postId !== 'undefined'){
        return {
            //take the current state
            ...state,
            //overwrite this post with a new one
            [action.postId]:postComments(state[action.postId],action)

        }

    }

    // switch(action.type){
    //     case 'ADD_COMMENT':

    //     default:
    //         return state;
    // }
    // console.log(state,action);
    return state;
}

export default comments;