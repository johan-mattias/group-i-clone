import React, { Component } from 'react'



const FrontPageButton = ({onClick, children, modStyle }) =>{
  

  return (
    <button
      onClick={onClick}
      style={{
        marginBottom: '15px',
        backgroundColor: 'white',
        fontFamily: 'Roboto',
        color: '#4F4F4F',
        height: '92px',
        width: '274px',
        borderRadius: '20px',
        borderStyle: 'solid',
        fontSize: '35px'
      }}
        >
      {children}
    </button>
  );


  
};

export default FrontPageButton;