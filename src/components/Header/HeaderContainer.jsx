import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authUser } from '../../redux/auth-reducer.js';

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.authUser();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { authUser })(HeaderContainer);
