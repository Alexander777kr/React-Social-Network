import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer.js';
import { authAPI } from '../../api/api';

class HeaderContainer extends Component {
  componentDidMount() {
    authAPI.authUser().then((response) => {
      if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
