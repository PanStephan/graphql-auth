import React, { useState } from 'react'

const AuthForm = props => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onInputType = ({ target }) => {
    const { id, value } = target
    if (id === 'email') return setEmail(value)
    if (id === 'password') return setPassword(value) 
  }

  const onSubmit = e => {
    e.preventDefault()

    props.onSubmit({ email, password })
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='email'>Email</label>
      <input
        type='email' 
        id='email'
        placeholder='email' 
        value={email} 
        onChange={onInputType}
      />
      <br/>
      <label htmlFor='password'>password</label>
      <input 
        type='password' 
        id='password'
        placeholder='password'
        value={password} 
        onChange={onInputType}
      />
      <br/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default AuthForm