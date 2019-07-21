import React from 'react';


export class NavButton extends React.Component {
    render(){
        return (
            navItems.map(item => {
                <div className='navButton'>{item}</div>
            })
        )
    }
}