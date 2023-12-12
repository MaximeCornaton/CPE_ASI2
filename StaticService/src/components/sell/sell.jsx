import React, { useState, useEffect } from 'react';
import { Container, Header, Table, Image, Button, Grid, Card } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

export const SellPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [userCards, setUserCards] = useState([]);
  const currentUser = useSelector(state => state.userReducer.submitted_user);
  

  const fetchUserCards = async () => {
    try {
      const response = await fetch('http://localhost:8080/cards_by_user/1');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      console.log(response)

      // Mise à jour de l'état userCards avec les nouvelles données
      setUserCards(data);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSellClick = async (card) => {
    try {
      const response = await fetch('http://localhost:8083/store/sell', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: currentUser.id, 
          cardId: card.id, 
        }),
      });

      console.log(card)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchUserCards(); // Appel initial au montage du composant
  }, []);


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
            <span id="userName">{currentUser.lastname}</span>
            <div className="sub header"><span>{currentUser.money}</span>$</div>
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
                      <Button animated="vertical" onClick={() => handleSellClick(card)}>
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
              <Card style={{marginTop: '100px', marginLeft: '200px'}}>
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
