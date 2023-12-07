// UserForm.jsx
import React, { useState } from 'react';
import { Form, Header, Button } from 'semantic-ui-react';

export const UserForm = (props) => {
  const [currentUser, setCurrentUser] = useState({
    id: "",
    surname: "",
    lastname: "",
    img: "",
    login: "",
    pwd: "",
    money: 0,
  });

  function processInput(event, { valueData }) {
    const target = event.currentTarget;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    let currentVal = { ...currentUser, [name]: value };
    setCurrentUser(currentVal);
    props.handleChange(currentVal);
  }

  function submitOrder(data) {
    props.submitUserHandler(data);
  }

  function resetForm() {
    setCurrentUser({
      id: "",
      surname: "",
      lastname: "",
      img: "",
      login: "",
      pwd: "",
      money: 0,
    });
  }

  return (
    <Form>
      <Header as='h4' dividing>
        User registration
      </Header>

      <Form.Field>
        <Form.Input fluid label='Name' placeholder='Name' name="name" onChange={processInput} value={currentUser.name} />
      </Form.Field>

      <Form.Field>
        <Form.Input fluid label='Surname' placeholder='Surname' name="surname" onChange={processInput} value={currentUser.surname} />
      </Form.Field>

      <Form.Field>
        <Form.Input type="password" label="Password" placeholder="Password" onChange={processInput} name="pwd" value={currentUser.pwd} />
      </Form.Field>

      <Form.Field>
        <Form.Input type="password" label="Re-Password" placeholder="Re-Password" onChange={processInput} name="repwd" value={currentUser.repwd} />
      </Form.Field>

      <Button type='reset' onClick={resetForm}>Cancel</Button>
      <Button type='submit' onClick={() => submitOrder(currentUser)}>OK</Button>
    </Form>
  );
};
