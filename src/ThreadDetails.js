import React, { Component, Fragment } from 'react'
import Reply from './Reply';
import styled from 'styled-components';

class ThreadDetails extends Component {
  state = {
    title: '',
    replies: []
  }

  async componentWillMount() {
    try {
      const res = await fetch(`https://www.reddit.com/r/AskReddit/comments/${this.props.match.params.id}.json`)
      const payload = await res.json();
      const threadInfo = payload.filter(set => set.data.children[0].kind === 't3').map(info => info.data.children)[0];
      const threadTitle = threadInfo[0].data.title;
      const repliesSet = payload.filter(set => set.data.children[0].kind !== 't3');
      const replies = repliesSet.map(set => set.data.children)[0].map(reply => reply.data);
      this.setState({
        title: threadTitle,
        replies: replies
      })
    }
    catch(error) {
      console.warn(error);
    }
  }

  render() {
    const { title, replies } = this.state;
    return (
      <Fragment>
        <Title>{`${title}`}</Title>
        {replies.map((reply) => <Reply reply={reply} key={reply.id} /> )}
      </Fragment>
    )
  }
}

export default ThreadDetails;

const Title = styled.h1`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 28px;
  letter-spacing: -1px;
`;
