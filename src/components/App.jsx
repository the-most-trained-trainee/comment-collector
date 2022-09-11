import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

class App extends React.Component {
  render() {
    return (
      <div>
        <CommentForm />
        <CommentList/>
      </div>
    );
  }
}

export default App;
