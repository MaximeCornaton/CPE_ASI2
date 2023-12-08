// UserForm.jsx
import React, { useState } from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import {  useDispatch } from 'react-redux';
import {update_user_action,submit_user_action } from '../../slices/userSlice';


export const UserForm = () => {

  const [currentUser, setCurrentUser] = useState({
    id: '',
    surname: '', 
    lastname: '', 
    img: '', 
    login: '', 
    pwd: '', 
    repwd: '',
    money: 1000,
  });

  const dispatch = useDispatch();

  function processInput(event) { //{valueData}
    const target = event.currentTarget;
    const value = target.value;
    const name = target.name;

    let currentVal=currentUser;
    setCurrentUser({...currentUser, [name]: value});
    currentVal[name]= value;
  }

  function submitOrder() {
    dispatch(submit_user_action({user:currentUser}));
    fetchData();
    
  }

  function resetForm() {
    setCurrentUser({
      id: '',
      surname: '',
      lastname: '',
      img: '',
      login: '',
      pwd: '',
      repwd: '',
      money: 1000,
    });
  }

  
  return (
    <Form>
      <Header as='h4' dividing>
        User registration
      </Header>

      <Form.Field>
        <Form.Input fluid label='Surname' placeholder='Surname' name="surname" onChange={processInput} value={currentUser.surname} />
      </Form.Field>

      <Form.Field>
        <Form.Input fluid label='Lastname' placeholder='Lastname' name="lastname" onChange={processInput} value={currentUser.name} />
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
