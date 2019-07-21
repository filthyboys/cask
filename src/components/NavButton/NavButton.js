import React from 'react';
import './NavButton.css';

export class NavButton extends React.Component {
    render(){
        return (
            <div className='ButtonContainer'>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}