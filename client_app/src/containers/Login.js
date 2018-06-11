import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { Redirect, withRouter } from 'react-router-dom';

let Login = ({isAuthenticated, onLoginBtnClick, loginError}) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  let username, password;
  let handleUserNameChange = e => {
    username = e.target.value;
  };
  let handlePasswordChange = e => {
    password = e.target.value;
  };
  return (
    <div>
      <input placeholder='UserName'
             onChange={handleUserNameChange} /><br/>
      <input placeholder='Password' type='password'
             onChange={handlePasswordChange} /><br/>
      <button onClick={() => onLoginBtnClick(username, password)}>Login</button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    isAuthenticated: state.login.isAuthenticated,
    loginError: state.login.loginError
  }
};
const mapDispatchToProps = {
  onLoginBtnClick: loginUser
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));