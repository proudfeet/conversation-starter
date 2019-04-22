import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Reply = ({reply}) => (
  <ReplyContainer>
    <ReplyBody>{`${reply.body}`}</ReplyBody>
    <ReplyAuthor href={`https://www.reddit.com/u/${reply.author}`} target="_blank">-u/{`${reply.author}`}</ReplyAuthor>
  </ReplyContainer>
)

export default Reply;

const ReplyContainer = styled.div`
  border-top: 1px solid white;
  padding: 20px 0;
`;

const ReplyBody = styled.p`
  margin: 0;
  font-weight: bold;
  color: white;
`;

const ReplyAuthor = styled.a`
  text-decoration: none;
  color: #f1c40f;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 10px;
`;

Reply.propTypes = {
  reply: PropTypes.shape({
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired
};