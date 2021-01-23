import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <div>
        <h4>Warning!</h4>
        Are you sure?
      </div>
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail 
        author={faker.name.firstName()} 
        timeAgo="Yesterday 6:00PM" 
        avatarSRC={faker.image.city()} 
        commentContent="Thanks for the info."
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail 
        author={faker.name.firstName()} 
        timeAgo="Yesterday 2:00AM" 
        avatarSRC={faker.image.cats()} 
        commentContent="Cool blog!"
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail 
        author={faker.name.firstName()} 
        timeAgo="Today 3:32AM" 
        avatarSRC={faker.image.nature()} 
        commentContent="Awesome!"
      />
    </ApprovalCard>
      
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
