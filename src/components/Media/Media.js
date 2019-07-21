import React from 'react';


export class Media extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imgSrc: this.props.imgSrc
        };
    }


    render() {
        return (
            <div className='imgContainer'>
                <img className='imgSize' src={this.state.imgSrc}/>
            </div>
        )
    }
}