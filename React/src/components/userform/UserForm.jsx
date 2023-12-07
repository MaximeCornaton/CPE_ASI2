// UserForm.jsx
import React, { useState } from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import {  useDispatch } from 'react-redux';
import {update_user_action,submit_user_action } from '../../slices/userSlice';


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

  const dispatch = useDispatch();

  function processInput(event, { valueData }) {
    const target = event.currentTarget;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    //console.log(event.target.value);
    let currentVal=currentUser;
    setCurrentUser({...currentUser, [name]: value});
    currentVal[name]= value;
    //props.handleChange(currentVal);
    dispatch(update_user_action({user:currentVal}));
  }

  function submitOrder(data) {
    // props.submitUserHandler(data);
    dispatch(submit_user_action({user:currentUser}));
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
