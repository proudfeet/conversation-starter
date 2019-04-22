import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Thread = ({ thread }) => (
  <ThreadTitle to={`${thread.id}`}>
    {`${thread.title}`}
  </ThreadTitle>
)

export default Thread;

Thread.propTypes = {
  thread: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

const ThreadTitle = styled(Link)`
  text-decoration: none;
  color: white;
  display: block;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  padding: 20px 0;
  transition: all 0.2s;
  
  &:not(:last-of-type) {
    border-bottom: 1px solid white;
  }

  &:hover,
  &:focus {
    color: #f1c40f;
  }
`;


