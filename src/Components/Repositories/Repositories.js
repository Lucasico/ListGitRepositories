import React, {useState} from 'react';
import './Repositories.css';
import Repository from './Repository/Repository';

const Repositories = (props) => {
    return(
        <div className="listRepos">
            <table className="customers">
                <tr>
                    <th>Nome completo</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>link-repositório</th>
                </tr>
                <Repository />
            </table>
        </div>
    );
}

export default Repositories;