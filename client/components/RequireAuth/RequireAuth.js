import React, { useEffect } from 'react'
import { graphql } from 'react-apollo'
import { useHistory } from 'react-router-dom'

import query from '../../queries/currentUser'

export default (WrappedComponent) => {
  const RequireAuth = (props) => {
    const history = useHistory()
    const { user, loading }  = props.data

    useEffect(() => {
      if (!loading && !user) return history.push('/login')
    }, [user])

    return <WrappedComponent {...props}/>
  }
  return graphql(query)(RequireAuth)
}