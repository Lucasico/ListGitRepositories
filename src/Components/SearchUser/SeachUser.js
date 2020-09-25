import React, {Component} from 'react';
import './SeachUser.css';
import UserNotFound from '../SearchUser/UserNotFound/UserNotFound';
import apiHttp from '../../Services/Api-http/Api';
import Repositories from '../Repositories/Repositories';

class SeachUser extends Component{
    state = {
        userData: null,
        userForm: null,
        userNotFound: null,
        showReporUser: false,
    }

    userFormSave = (event) => {
        this.setState({userForm:event.target.value})
      
    }

    storeUserData = () => {
        if(this.state.userForm){
            apiHttp.get('/users/' + this.state.userForm)
            .then(response => {
                this.setState({userData : response.data, showReporUser : true})
            })
            .catch(error => {
               this.setState({userNotFound: "Usuario não encontrado!"})
            })
        }
    }

    showUserNotFound = () => {
        return(
            <UserNotFound message={this.state.userNotFound}/>
        )
    }

    render(){
        return(
            <>
            <div className={'Content'}>
                <input type="text" placeholder="Nome do usuario" onChange={(event) => this.userFormSave(event)}/>
                <button onClick = {this.storeUserData}>REPOSITÓRIOS</button>
            </div>
            <div>
                {this.state.userNotFound && this.showUserNotFound()}
            </div>  
                {
                    this.state.showReporUser && 
                    <Repositories user={this.state.userData.login}/>
                }
            </>
        );
    }
}

export default SeachUser;