import React from 'react';
import { Helmet } from 'react-helmet';

import Fields from '@fusion/visual/lib/Auth/fields';
import Footer from '@fusion/visual/lib/Auth/footer';
import Form from '@fusion/visual/lib/Auth';
import Header from '@fusion/visual/lib/Auth/header';

const fields = [
  {
    label: 'First name',
    placeholder: 'Type your first name',
    type: 'text',
  },
  {
    label: 'Last name',
    placeholder: 'Type your last name',
    type: 'text',
  },
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
  {
    label: 'Confirm password',
    placeholder: 'Confirm your password',
    type: 'password',
  },
];

export function Signup() {
  return (
    <>
      <Helmet title="Helmet" />
      <Form>
        <Header />
        <Fields fields={fields} />
        <Footer
          action='Login'
          alt={{
            action: 'Login',
            message: 'Already have an account?',
            onClick: () => null,
            path: '/login',
          }}
        />
      </Form>
    </>
  );
}

export default Signup;