import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type={'text'}
          name={'login'}
          component={'input'}
          placeholder={'Login'}
        />
      </div>
      <div>
        <Field
          type={'text'}
          name={'password'}
          component={'input'}
          placeholder={'Password'}
        />
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type={'checkbox'} />
        Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
