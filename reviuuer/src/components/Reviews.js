import React from 'react';
import Review from './Review';

class Reviews extends React.Component {
  state = { 
    reviews: [],
    access: false
  }

  componentWillMount = () => {
    fetch('/api/reviews')
      .then((res) => {
        if(res.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            res.status);
          return;
        }
        console.log(res)
        res.json()
          .then(reviews => this.setState({ reviews }));
      })
  }
  
  render() {
    return (
      <div>
        <h1>Reviews</h1>
        
        <ul>
          {this.state.reviews ? this.state.reviews.map(review => 
            <Review 
              key={review.id} 
              review={review} 
            />
          ) : undefined}
        </ul>
      </div>
    );
  };
}


export default Reviews;