import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../actions/actionCreators';

import Single from './Single';

// const App = connect(mapStateToProps, mapDispatchToProps);

function mapStateToProps(state){
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch);
}

const AppSingle = connect(mapStateToProps, mapDispatchToProps)(Single);

export default AppSingle;