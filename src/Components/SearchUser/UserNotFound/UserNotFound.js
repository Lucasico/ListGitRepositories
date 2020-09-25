import React from 'react';
import UserNotFound from './UserNotFound.css';

const UserNotFounds = (props) => (
    <div className="UserNotFound">
        <p>{props.message}</p>
    </div>
);

export default UserNotFounds;