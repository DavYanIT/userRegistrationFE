import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, browserHistory } from 'react-router';
import { login } from '../actions/index';
import { connect } from 'react-redux';
import renderField from './render_field';

class Login extends Component {
    onSubmit(data) {
        this.props.login(data).then((v) => {
            console.log(v)
            localStorage.setItem('user', data)
            browserHistory.push('/');
        }).catch((err) => {
            console.log(err, 'err')
        });
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                <h3>Login</h3>
                <Field component={renderField} name="email" type="text" label="Email" />
                <Field component={renderField} name="password" type="password" label="Password" />
                <button type="submit" className="btn btn-primary">Login</button>
                <Link to="/register" className="btn btn-danger">Register</Link>
            </form>
        )
    }
}

const validate = ({email, password}) => {
    const errors = {};

    if (!email) errors.email = 'The email field is mandatory.';
    if (!password) errors.password = 'The password field is mandatory.';

    return errors;
}

export default connect(null, {login})(reduxForm({
    form: 'LoginForm'
})(Login))