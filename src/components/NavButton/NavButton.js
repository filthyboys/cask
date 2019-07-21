import React from 'react';
import './NavButton.css';

export class NavButton extends React.Component {

    render(){
        return (
            <li className='navButton'>
                <h1>{this.props.name}</h1>
            </li>
        )
    }
}