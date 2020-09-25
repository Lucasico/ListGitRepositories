import React, {Component} from 'react';
import apiHttp from '../../../Services/Api-http/Api';
import '../Repositories.css';
//https://api.github.com
//https://api.github.com/users/Lucasico/repos
class Repository extends Component{
    state = {
        repositories : [],
        error : false
    }

    componentDidMount(){
        apiHttp.get('/users/' + this.props.user + '/repos')
        .then(response => {
            //slice restringe a quantidade de retornos do array 0 a 10
          const repos = response.data.slice(0,7);
          this.setState({repositories : repos})
        })
        .catch(error => {
           this.setState({error : true})
        });
    }

    render(){

        return(
            <tbody>
                {
                    !this.state.error && this.state.repositories.map((repo) => {
                        return(
                            <tr key={repo.id}>
                                <td>{repo.full_name}</td>
                                <td>{repo.name}</td>
                                <td>{repo.description}</td>
                                <td><a href={repo.html_url} target="_blank">Acessar repositório</a></td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
        )
    }
}

export default Repository;