import React, {Component} from 'raect';

export default class App extends Component {
    state = {
        info : { name:'', surname:'', email''};
        name:'',
        surname:'',
        email:'',
    }

    render() {

        const onNameCHange = ({ target: { value } }) => {
            this.setState({ name: value });
        }
        const onSurnameCHange = ({ target: { value } }) => {
            this.setState({ name: value });
        }
        const onEmailCHange = ({ target: { value } }) => {
            this.setState({ name: value });
        }
        return(
            <div>
                <h1>State</h1>
                <h2>Name: {this.state.name}</h2>
                <h2>Name: {this.state.surname}</h2>
                <h2>Name: {this.state.email}</h2>
                <hr />
                <h1>Info</h1>
                <input onChange={onNameChange} type="text" placeholder='first name' />
                <input onChange={onSurnameChange}  type="text" placeholder='last name' />
                <input onChange={onEmailChange}  type="text" placeholder='email' />
            </div>
        );
    }
}