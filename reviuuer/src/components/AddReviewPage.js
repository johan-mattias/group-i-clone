import React, { Component } from 'react';
import Select from 'react-select';
import '../Style/Button.css';
import '../Style/App.css';

class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
                user_id: '1',
                course_id: '',
                teacher_id: '1',
                quality: '',
                difficulty: '',
                can_recommend: '',
                worth_credits: '',
                books_req: '',
                percentage_mand: '',
                exam: '',
                course_review: '',
                teacher_review: '',
                };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }
  handleSubmit(event) {
    console.log(this.state);
    fetch('/api/addreview', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...this.state
        })
    })

    event.preventDefault();
  }

  render() {
    const user_id = this.state.user_id && this.state.user_id;

    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input className="login" placeholder="course_id" value={this.state.course_id} onChange={(event) => this.setState({course_id: event.target.value})} /><br/>
          
          <Select
            name="user_id"
            value={user_id}
            onChange={this.handleChange}
            options={[
              { value: '1', label: '1' },
              { value: '2', label: '2' },
              { value: '3', label: '3' },
              { value: '4', label: '4' },
              { value: '5', label: '5' },
            ]}
          />
          <input className="login" placeholder="quality" value={this.state.quality} onChange={(event) => this.setState({quality: event.target.value})} /><br/>
          <input className="login" placeholder="difficulty" value={this.state.difficulty} onChange={(event) => this.setState({difficulty: event.target.value})} /><br/>
          <input className="login" placeholder="can_recommend" value={this.state.can_recommend} onChange={(event) => this.setState({can_recommend: event.target.value})} /><br/>
          <input className="login" placeholder="worth_credits" value={this.state.worth_credits} onChange={(event) => this.setState({worth_credits: event.target.value})} /><br/>
          <input className="login" placeholder="books_req" value={this.state.books_req} onChange={(event) => this.setState({books_req: event.target.value})} /><br/>
          <input className="login" placeholder="percentage_mand" value={this.state.percentage_mand} onChange={(event) => this.setState({percentage_mand: event.target.value})} /><br/>
          <input className="login" placeholder="exam" value={this.state.exam} onChange={(event) => this.setState({exam: event.target.value})} /><br/>
          <input className="login" placeholder="course_review" value={this.state.course_review} onChange={(event) => this.setState({course_review: event.target.value})} /><br/>
          <input className="login" placeholder="teacher_review" value={this.state.teacher_review} onChange={(event) => this.setState({teacher_review: event.target.value})} /><br/>

          <input className="submit" type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  };
}

export default AddReview;