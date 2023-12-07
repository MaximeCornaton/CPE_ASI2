import React, { useState } from 'react';
import { Container, Header, Table, Image, Button, Grid, Card } from 'semantic-ui-react';

export const SellPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Simuler des données de cartes que l'utilisateur possède
  const userCards = [
    {
      name: 'Superman',
      description: "The origin story of Superman relates that he was born Kal-El on the planet Krypton...",
      family: 'DC Comic',
      hp: 50,
      energy: 100,
      defence: 80,
      attack: 100,
      price: 100,
      image: 'https://vignette.wikia.nocookie.net/lego/images/4/48/76096_Minifigure_04.jpg/revision/latest/scale-to-width-down/250?cb=20190729133554',
    },
    {
      name: 'Batman',
      description: "Bruce Wayne, alias Batman, est un héros de fiction appartenant à l'univers de DC Comics...",
      family: 'DC Comic',
      hp: 40,
      energy: 50,
      defence: 60,
      attack: 80,
      price: 60,
      image: 'https://static.fnac-static.com/multimedia/Images/8F/8F/7D/66/6716815-1505-1540-1/tsp20171122191008/Lego-lgtob12b-lego-batman-movie-lampe-torche-batman.jpg',
    },
  ];

  const handleCardHover = (card) => {
    setHoveredCard(card);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <Container>
      <div className="ui clearing segment">
        <h3 className="ui right floated header">
          <i className="user circle outline icon"></i>
          <div className="content">
            <span id="userNameId">Jdoe</span>
            <div className="sub header"><span>5000</span>$</div>
          </div>
        </h3>

        <h3 className="ui left floated header">
          <i className="money icon"></i>
          <div className="content">
            SELL
            <div className="sub header">Sell your card to get money</div>
          </div>
        </h3>
      </div>

      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={10}>
            <h3 className="ui aligned header">My Card List</h3>
            <Table selectable celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                  <Table.HeaderCell>Family</Table.HeaderCell>
                  <Table.HeaderCell>HP</Table.HeaderCell>
                  <Table.HeaderCell>Energy</Table.HeaderCell>
                  <Table.HeaderCell>Defence</Table.HeaderCell>
                  <Table.HeaderCell>Attack</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {userCards.map((card, index) => (
                  <Table.Row
                    key={index}
                    onMouseEnter={() => handleCardHover(card)}
                    onMouseLeave={handleCardLeave}
                  >
                    <Table.Cell>
                      <Image avatar src={card.image} /> {card.name}
                    </Table.Cell>
                    <Table.Cell>{card.description}</Table.Cell>
                    <Table.Cell>{card.family}</Table.Cell>
                    <Table.Cell>{card.hp}</Table.Cell>
                    <Table.Cell>{card.energy}</Table.Cell>
                    <Table.Cell>{card.defence}</Table.Cell>
                    <Table.Cell>{card.attack}</Table.Cell>
                    <Table.Cell>{card.price}$</Table.Cell>
                    <Table.Cell>
                      <Button animated="vertical">
                        <div className="hidden content">Sell</div>
                        <div className="visible content">
                          <i className="shop icon"></i>
                        </div>
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column width={5}>
            {hoveredCard && (
              <Card>
                <Image src={hoveredCard.image} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{hoveredCard.name}</Card.Header>
                  <Card.Description>{hoveredCard.description}</Card.Description>
                  <Card.Meta>{`Family: ${hoveredCard.family}`}</Card.Meta>
                  <Card.Meta>{`HP: ${hoveredCard.hp}`}</Card.Meta>
                  <Card.Meta>{`Energy: ${hoveredCard.energy}`}</Card.Meta>
                  <Card.Meta>{`Defence: ${hoveredCard.defence}`}</Card.Meta>
                  <Card.Meta>{`Attack: ${hoveredCard.attack}`}</Card.Meta>
                  <Card.Meta>{`Price: ${hoveredCard.price}$`}</Card.Meta>
                </Card.Content>
              </Card>
            )}
            <div id="card"></div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <script src="./lib/jquery-3.4.1.min.js"></script>
      <script src="./lib/Semantic-UI-CSS-master/semantic.js"></script>
      
    </Container>
  );
};
