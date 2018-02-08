import React from 'react'
import '../Style/Portal.css'

class Course extends React.Component{
  render() {
    return (
      <div className = 'coursePage'>
      <div className = 'columnHeader'>
      <h3>Course </h3>
      <h3>Rating </h3>
      <h3>Comments </h3>
      </div>
      <ul className = 'portalList'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      </div>
    )
  }
}

export default Course