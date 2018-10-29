import React, { Component } from "react";

class ChatThread extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Comment comment={comment} user={user} />
        <Comment comment={secondComment} user={user} />
        <Comment comment={comment} user={secondUser} />
      </React.Fragment>
    );
  }
}

function AuthorInfo(props) {
  return (
    <div className="userInfo">
      <Avatar user={props.author} />
      <div className="userName">{props.author.name}</div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avartar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserPost(props) {
  return (
    <div className="userPost">
      <div className="comment">{props.value.data}</div>
      <div className="date-time">{formatDate(props.value.date)}</div>
    </div>
  );
}

class Comment extends React.Component {
  state = {
    clickCount: 0
  };
  render() {
    return (
      <div className="comment">
        <AuthorInfo author={this.props.user} />
        <UserPost value={this.props.comment} />
      </div>
    );
  }
}

const user = {
  name: "Justin",
  avatarUrl: "https://placekitten.com/g/64/64"
};

const secondUser = {
  name: "John",
  avatarUrl: ""
};

const comment = {
  data: "I hope you enjoy learning React!",
  date: new Date()
};

const secondComment = {
  data: "Hey I am a Second Comment",
  date: new Date()
};

function formatDate(date) {
  return date.toLocaleTimeString();
}

export default ChatThread;
