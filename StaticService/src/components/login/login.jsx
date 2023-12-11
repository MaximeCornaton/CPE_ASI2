import React, { useState } from 'react';
import { Form, Header, Button } from 'semantic-ui-react';

export const Login = (props) => {
  const [loginInfo, setLoginInfo] = useState({
    surname: "",
    lastname: "",
  });

  function processInput(event, { valueData }) {
    const target = event.currentTarget;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setLoginInfo({ ...loginInfo, [name]: value });
  }

  function connectOrder() {
    console.log("Connection OK");
    // Ajoutez ici la logique pour gérer la connexion
  }

  function cancelOrder() {
    console.log("Login annulé");
    setLoginInfo({
      surname: "",
      lastname: "",
      password: "",
    });
  }

  return (
    <Form>
      <Header as='h4' dividing>
        User login
      </Header>

      <Form.Field>
        <Form.Input fluid label='Surname' placeholder='Surname' name="surname" onChange={processInput} value={loginInfo.surname} />
      </Form.Field>

      <Form.Field>
        <Form.Input fluid label='Lastname' placeholder='Lastname' name="lastname" onChange={processInput} value={loginInfo.lastname} />
      </Form.Field>

      <Form.Field>
        <Form.Input type="password" label="Password" placeholder="Password" name="password" onChange={processInput} value={loginInfo.password} />
      </Form.Field>

      <Button type='reset' onClick={cancelOrder}>Cancel</Button>
      <Button type='submit' onClick={connectOrder}>Connect</Button>
    </Form>
  );
};
