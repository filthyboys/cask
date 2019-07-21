import React from 'react';
import ReactDOM from 'react-dom';
import {NavButton} from '../NavButton/NavButton';
import './NavBar.css';

export class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {

        const navItems = ['MENU', 'EVENTS', 'HOURS', 'ABOUT'];

        return (
                navItems.map(element => {
                    <NavButton name={element} />
                })
            )
        }
    }