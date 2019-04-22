import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Conversation from './Conversation';
import ThreadDetails from './ThreadDetails';

const App = () => (
  <HashRouter>
  <Header className="App-header">
    <StyledLink to="/" title="Conversation Starter">
      Conversation Starter
    </StyledLink>
  </Header>
  <div className="App">
    <Switch>
      {/* The way that React Router works is that it checks for the path and see if ANYTHING matches it, and shows content based on that */}
      {/* Given that, with the below configuration we will see the MoviesList component on both site.com/ and site.com/test */}
      {/* <Route path="/" component={MoviesList} />
      <Route path="/test" component={Test} /> */}

      {/* One way of fixing that is reversing the order of the routes so that ONLY site.com/test will show the Test component and ONLY site.com/ will show the MoviesList component */}
      {/* <Route path="/test" component={Test} />
      <Route path="/" component={MoviesList} /> */}
      {/* The problem with this approach, however, is that it can easily become complex when more routes are added and is also very error prone */}

      {/* The solution then becomes the `exact` keyword on our routes, which, as you would expect, will only match based on the exact path */}
      <Route exact path="/" component={Conversation} />
      {/* Using the :id syntax allows us to dynamically create a route for each movie with an ID */}
      <Route exact path="/:id" component={ThreadDetails} />
    </Switch>
  </div>
</HashRouter>
);

export default App;

const Header = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 5px;
  font-weight: bold;
  padding: 15px;
`;