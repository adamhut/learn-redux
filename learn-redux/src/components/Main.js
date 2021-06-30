import React from 'react'
import { Link } from 'react-router-dom'
import PhotoGrid from './PhotoGrid'


class Main extends React.Component{

    render(){
        return (
            <div>
                <h1>
                     <Link to="/">Reduxsdtagram</Link>
                </h1>

                <PhotoGrid {...this.props}></PhotoGrid>

            </div>
        ); 
    }

}

export default Main