// a reducer takes in two things"

// 1. the action (info about what happen)

// 2. copy of current state

function posts(state = [],action)
{
    
    switch(action.type){
        case 'INCREMENT_LIKES':
            console.log('increament likes')
            const i = action.index;
            return [
                ...state.slice(0,i),  //before the one we are updating
                {
                    ...state[i] , likes:state[i].likes+1
                },
                ...state.slice(i+1) //after the one we are updating

            ]

        default :
            return state;
        
    }
    // console.log('The post will change');
    // console.log(state,action);
    return state;
}

export default posts;