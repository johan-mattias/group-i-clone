import React, { Component } from 'react'



const SendButton = ({onClick, children, modStyle }) =>{
  

  return (
    <button
      onClick={onClick}
      style={{
        marginBottom: '15px',
        backgroundColor: '#2F80ED',
        fontFamily: 'Roboto',
        color: 'white',
        height: '75px',
        width: '267px',
        borderRadius: '45px',
        borderStyle: 'solid',
        borderColor:'white',
        fontSize: '35px',
        fill: 'solid'
        

      }}
        >
      {children}
    </button>
  );


  
};

export default SendButton;