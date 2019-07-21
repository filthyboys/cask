import React from 'react';

export class MediaInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.info.name,
            date: this.props.info.date,
            description: this.props.info.description
        }
    }
    render(){
        return(
            <div className='mediaBox'>
                <h1>{this.state.name}</h1>
                <p>{this.state.date}</p>
                <p>{this.state.description}</p>
            </div>
        )
    }
}