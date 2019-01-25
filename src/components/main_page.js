import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainPage extends Component {
    render() {
        return (
            <div>
                {/* {this.props.user ?  */}
                    <div>
                        <button onClick={()=>{
                            localStorage.clear()
                        }} className="btn pull-xs-right">Logout</button>
                        <h2>Welcome dear 
                        {/* {this.props.user.user.firstName} */}
                        </h2>
                    </div>
                    {/* : ''
                } */}
            </div>
        )
    }
}

export default connect(state=>({ user: state.user.user }))(MainPage)