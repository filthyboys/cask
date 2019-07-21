import React from 'react';
import {NavButton} from '../NavButton/NavButton';
import './NavBar.css';

export class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            navItems: ['MENU', 'EVENTS', 'HOURS', 'ABOUT']
        }



        this.handleElements = this.handleElements.bind(this);
    }
    

    handleElements(){
        return this.state.navItems.map(element => {
            return <NavButton name={element} />
        })
    }

    render() {
        
        
        
        return (
            <div className='NavBar'>
            <ul>
                {this.handleElements()}
            </ul>
            </div>
            
            )
        }
    }