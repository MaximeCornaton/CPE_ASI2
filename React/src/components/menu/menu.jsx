import React from 'react';
import { Button, Container, Header, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const MenuPage = (props) => {
  const { currentUser } = props;

  return (
    <Container textAlign="center">
      <Menu pointing secondary>
        <Menu.Item position='left'>
          <Header as='h4'>Money: {currentUser.money} $</Header>
        </Menu.Item>
        <Menu.Item position='right'>
          <Header as='h4'>{currentUser.surname}</Header>
        </Menu.Item>
      </Menu>

      <div style={{ marginTop: '100px' }}>
        <Button.Group size="big">
          <Button primary as={Link} to="/buy">Buy</Button>
          <Button.Or />
          <Button secondary as={Link} to="/sell">Sell</Button>
        </Button.Group>
      </div>
    </Container>
  );
};
