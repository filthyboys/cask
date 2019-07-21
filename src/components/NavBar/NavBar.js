import React from 'react';
import ReactDOM from 'react-dom';
import {NavButton} from '../NavButton/NavButton';


class navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state ={navItems:['MENU', 'EVENTS', 'HOURS', 'ABOUT']};


    }
    create
    render() {
        return (
            <div className='NavBar'>
            <NavButton />
            <NavButton />
            <NavButton />
            <NavButton />
            <NavButton />
            </div>
            )
        }
    }