import React from 'react';
import getresponse from 'get-response.json';
import CommentEntry from './CommentEntry';
import CommentListStyled from './CommentListStyled';

class CommentList extends React.Component {
  responseData = getresponse;

  getResponses = () => {
    console.log(getresponse);
  };

  render() {
    return (
      <CommentListStyled>
        {/* <button onClick={this.getResponses}>Get Responses</button> */}
        <h1>Commented</h1>
        <div>
          {this.responseData.map(response => (
            <CommentEntry
              key={response.id}
              name={response.name}
              phone={response.phone}
              message={response.message}
            />
          ))}
        </div>
      </CommentListStyled>
    );
  }
}

export default CommentList;
