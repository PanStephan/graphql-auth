import React from 'react'
import { graphql } from 'react-apollo'

import AuthForm from '../AuthForm/AuthForm'
import mutation from '../../mutations/login' 

const Login = props => {

  const onSubmit = ({ email, password }) => {
    props.mutate ({
      variables: {
        email,
        password
      }
    })
  }

  return (
    <AuthForm onSubmit={onSubmit}></AuthForm>
  )
}

export default graphql(mutation)(Login)