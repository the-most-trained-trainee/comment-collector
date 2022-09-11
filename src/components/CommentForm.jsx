import React from 'react';
import StyledForm from './CommentFormStyled';

class CommentForm extends React.Component {
  state = {
    name: '',
    phone: '',
    message: '',
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const formOutPut = this.state;
    console.log(JSON.stringify(formOutPut));

    this.setState({
      name: '',
      phone: '',
      message: '',
    });
  };

  render() {
    return (
      <StyledForm>
        <h1>Post your comment here</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <label htmlFor="">Phone</label>
          <input
            type="tel"
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
          />

          <label htmlFor="" name="">
            Comment
          </label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            onChange={this.handleChange}
            value={this.state.message}
          ></textarea>
          <button type="submit">Leave comment</button>
        </form>
      </StyledForm>
    );
  }
}

export default CommentForm;
