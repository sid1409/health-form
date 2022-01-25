import React, { Component } from 'react';
import '../styles/form_style.css';

export class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            phonenumber: '',
            address: '',
            sex: 'male',
            emailError: '',
            phoneError: '',
            error: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })

        let emailError = '';

        if (!this.state.email.includes('@')) {
            emailError = "Invalid email"
        }
        else {
            emailError = ''
            let error = false
            this.setState({ emailError });
            this.setState({ error });
        }
        if (emailError) {
            let error = true
            this.setState({ emailError });
            this.setState({ error });
        }

    }
    handlePhonenumberChange = (event) => {
        this.setState({
            phonenumber: event.target.value
        })
        let phoneError = '';
        if (!(this.state.phonenumber.length === 10)) {
            phoneError = "Invalid Phone number"
        }
        else {
            phoneError = ''
            let error = false
            this.setState({ phoneError });
            this.setState({ error });
        }
        if (phoneError) {
            let error = true
            this.setState({ phoneError });
            this.setState({ error });
        }
    }
    handleAddressChange = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    handleSexChange = (event) => {
        this.setState({
            sex: event.target.value
        })
    }
    handleSubmit = event => {
        if (!this.state.error) {
            alert(`${this.state.name}`)
        }
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit} class='healthForm'>
                <div class='title'>
                    Health check-up form
                </div>
                <div class='formElement'>
                    <label>Name</label>
                    <br />
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}></input>
                </div>
                <div class='formElement'>
                    <br />
                    <br />
                    <label>Sex</label>
                    <br />

                    <select value={this.state.sex} onChange={this.handleSexChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class='formElement'>
                    <br />
                    <br />
                    <label>Email</label>
                    <br />

                    <input type="text" value={this.state.email} onChange={this.handleEmailChange}></input>
                </div>
                <div class='error'>
                    {this.state.emailError}
                </div>
                <div class='formElement'>
                    <br />
                    <br />
                    <label>Phone number</label>
                    <br />

                    <input type="text" value={this.state.phonenumber} onChange={this.handlePhonenumberChange}></input>
                </div>
                <div class='error'>
                    {this.state.phoneError}
                </div>
                <div class='formElement'>
                    <br />
                    <br />

                    <label>Address</label>
                    <br />

                    <input type="text" value={this.state.address} onChange={this.handleAddressChange}></input>
                </div>
                <button value="submit">Submit</button>
            </form>
        )
    }
}

export default Form;
