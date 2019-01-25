import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class MainPage extends Component {
    render() {
        return (
            <div>
                {this.props.user ? <div>
                    <h2>Hello dear {this.props.user.firstName}</h2>
                </div> :
                <div>
                    <Link to='/login' className="btn">Login</Link>
                    <Link to='/register' className="btn">Registration</Link>
                </div>}
            </div>
        )
    }
}

export default connect(state=>({user: state.user}))(MainPage);