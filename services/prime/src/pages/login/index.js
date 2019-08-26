import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Fields from '@fusion/visual/lib/Auth/fields';
import Footer from '@fusion/visual/lib/Auth/footer';
import Form from '@fusion/visual/lib/Auth';
import Header from '@fusion/visual/lib/Auth/header';
import { getCookie, setCookie } from '@fusion/visual/lib/helpers';

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
  const [auth, setAuth] = useState(getCookie('isAuthenticated') || false);

  const authenticate = (event) => {
    event.preventDefault();
    setAuth(true);
    setCookie('isAuthenticatd', auth);
  };

  return (
    <>
      <Helmet title="Login" />
      <Form>
        <Header />
        <Fields fields={fields} />
        <Footer
          action='Login'
          alt={{
            action: 'Sign up',
            message: 'Don\'t have an account?',
            path: '/signup',
          }}
          onSubmit={authenticate}
        />
      </Form>
    </>
  );
}

export default Login;