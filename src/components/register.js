import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, browserHistory } from 'react-router';
import { register } from '../actions/index';
import renderField from './render_field';

class Register extends Component {
    constructor() {
        super();

        this.state = {
            error: null
        }
    }

    onSubmit(data) {
        register(data).payload.then((result) => {
            if (result.data.error) {
                result.data.error=='alreadyExists' ? 
                    this.setState({error: 'This email is already used'}) :
                    this.setState({error: 'Something went wrong'});
            } else if (result.data.user) {
                browserHistory.push("/login");
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                <h3>Registration</h3>
                {this.state.error ? <p className="error">{this.state.error}</p> : ''}
                <Field component={renderField} name="firstName" type="text" label="First Name" />
                <Field component={renderField} name="lastName" type="text" label="Last Name" />
                <Field component={renderField} name="email" type="email" label="Email" />
                <Field component={renderField} name="password" type="password" label="Password" />
                <button type="submit" className="btn btn-primary">Register</button>
                <Link to="/login" className="btn btn-danger">Login</Link>
            </form>
        )
    }
}

const validate = ({firstName, lastName, email, password}) => {
    const errors = {};

    if (!firstName) errors.firstName = 'The first name field is mandatory.';
    if (firstName && firstName.length<3) errors.firstName = 'The first name can\'t be less than 3.';
    if (!lastName) errors.lastName = 'The last name field is mandatory.';
    if (lastName && lastName.length<3) errors.lastName = 'The last name can\'t be less than 3.';
    if (!email) errors.email = 'The email field is mandatory.';
    if (!password) errors.password = 'The password field is mandatory.';

    return errors;
}

export default reduxForm({
    form: 'RegisterForm',
    validate
})(Register);