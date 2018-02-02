import React, { Component } from 'react';

const Review = ({ review, children }) => {
    return (
        <div>
            <li>
                {review.course_review} => {review.teacher_review}
            </li>
        </div>
    );
}


export default Review;