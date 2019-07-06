import React from 'react';

import Fields from 'components/Auth/fields';
import Footer from 'components/Auth/footer';
import Form from 'components/Auth';
import Header from 'components/Auth/header';

const fields = [
  {
    label: 'Email',
    placeholder: 'Type your email',
    type: 'email',
  },
  {
    label: 'Password',
    placeholder: 'Type your password',
    type: 'password',
  },
];

export function Login() {
  return (
    <Form>
      <Header />
      <Fields fields={fields} />
      <Footer
        action='Login'
        alt={{
          action: 'Sign up',
          message: 'Don\'t have an account?',
          onClick: () => null,
          path: '/signup',
        }}
      />
    </Form>
  );
}

export default Login;