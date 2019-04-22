import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Thread from './Thread';

export default class Conversation extends PureComponent {

  state = {
    threads: []
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://www.reddit.com/r/AskReddit/top.json?sort=top&t=mont&limit=100')
      const payload = await res.json();
      const threads = payload.data.children.map(thread => {
        return thread.data;
      })
      this.setState({
        threads: threads
      })
    }
    catch(error) {
      console.warn(error);
    }
  }

  render() {
    return (
      <ThreadList>
        {this.state.threads.map((thread) => <Thread thread={thread} key={thread.id} /> )}
      </ThreadList>
    )
  }
}

const ThreadList = styled.div`
`;
