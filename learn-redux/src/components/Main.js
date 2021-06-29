import React from 'react'
import { Link } from 'react-router-dom'
import PhotoGrid from './PhotoGrid'


class Main extends React.Component{

    render(){
        return (
            <div>
                <h1>
                     Reduxsdtagram
                </h1>

                <PhotoGrid></PhotoGrid>

            </div>
        ); 
    }

}

export default Main