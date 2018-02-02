import React, { Component } from 'react';

const NavbarButton = ({ onClick, children, changeStyle}) => {
    const style = {
        backgroundColor: '#2F80ED',
        border: '1px solid white',
        color:'white',
        fontFamily: 'Roboto',
        fontSize: '25px',
        width: '125px',
        height: '69px',
    }
    
    return (
        <button 
            onClick = {onClick} 
            style = {{
                ...style, ...changeStyle
            }}
            >{children}
        </button>

    )
}


export default NavbarButton; 