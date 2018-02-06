import React, { Component } from 'react'

const SignOutButton = ({ onClick, children, changeStyle}) => {
    const style = {
        backgroundColor: '#2F80ED',
        color:'white',
        fontFamily: 'Roboto',
        fontSize: '25px',
        width: '160px',
        height: '46px',
    }

    return (
        <button 
            onClick = {onClick} 
            style = {style}
            >{children}
        </button>

    )
}

export default SignOutButton;