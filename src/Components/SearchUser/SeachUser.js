import React, {useState} from 'react';
import './SeachUser.css';

const SeachUser = (props) => {
    return(
        <div className={'Content'}>
            <input type="text" placeholder="Nome do usuario"/>
            <button>Repositorios</button>
        </div>
    );
}

export default SeachUser;