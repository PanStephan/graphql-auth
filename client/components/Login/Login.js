import React, { useState, useEffect, useRef } from 'react'
import { graphql } from 'react-apollo'

import AuthForm from '../AuthForm/AuthForm'
import mutation from '../../mutations/login' 
import query from '../../queries/currentUser'

const Login = ({ data, mutate, history }) => {

  const { user } = data
  const [errors, setErrors] = useState([])
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false 
      return
    }
    if (user && !isFirstRender.current) return history.push('/dashboard')
  }, [user])

  const onSubmit = ({ email, password }) => {
    mutate ({
      variables: {
        email,
        password
      },
      refetchQueries: [{ query }]
    }).catch(res => {
      const err = res.graphQLErrors.map(err => err.message)
      setErrors(err)
    })
  }

  return (
    <AuthForm onSubmit={onSubmit} errors={errors}></AuthForm>
  )
}

export default graphql(query)(
  graphql(mutation)(Login)
)