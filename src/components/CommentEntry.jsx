import React from 'react';
import EntryStyled from './CommentEntryStyled';

class CommentEntry extends React.Component {
  render() {
    return (
      <EntryStyled>
        <p>
          <span>Name: </span>
          {this.props.name}
        </p>
        <p>
          <span>Phone: </span>
          {this.props.phone}
        </p>
        <p>
          <span>Message: </span>
          {this.props.message}
        </p>
      </EntryStyled>
    );
  }
}

export default CommentEntry;
