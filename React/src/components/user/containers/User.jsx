import React from 'react';
import {UserSimpleDisplay} from '../components/UserSimpleDisplay';

 export const User=(props)=> {
        return ( 
                <UserSimpleDisplay 
                    id={props.id}
                    surname={props.surname}
                    lastname={props.lastname}
                    login={props.login}
                    pwd={props.pwd}
                    money={props.money} 
                    img={props.img}>
                </UserSimpleDisplay>
            );
    }