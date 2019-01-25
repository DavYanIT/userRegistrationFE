import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, browserHistory } from 'react-router';
import { login } from '../actions/index';
import { connect } from 'react-redux';
import renderField from './render_field';

class Login extends Component {
    constructor() {
        super()

        this.state = {
            error: null
        }
    }
    onSubmit(data) {
        this.props.login(data).then((result) => {
            console.log(result)
            if (result.data && result.data.error) {
                console.log(result.data.error)
                result.data.error=='wrongPass' ?
                    this.setState({error: 'Wrong Password'}) :
                        result.data.error=='doesNotExist' ?
                        this.setState({error: 'Wrong Email'}) :
                        this.setState({error: 'Something went wrong'})
            } else if (result.data && result.data.user) {
                browserHistory.push('/');
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                <h3>Login</h3>
                {this.state.error ? <p className="error">{this.state.error}</p> : ''}
                <Field component={renderField} name="email" type="email" label="Email" />
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
    form: 'LoginForm',
    validate
})(Login))