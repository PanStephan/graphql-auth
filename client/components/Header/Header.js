import React from 'react'
import { graphql } from 'react-apollo'
import { Link, useHistory } from 'react-router-dom'

import mutation from '../../mutations/logout'
import query from '../../queries/currentUser'

const Header = ({ data, mutate }) => {
  const { loading, user } = data
  const history = useHistory()

  const onLogoutClick = () => {
    mutate({
      refetchQueries: [{ query }]
    }).then(() => history.push('/'))
  }
  
  const renderButtons = () => {
    if (loading) return <div>loading...</div> 

    if (user) return (
      <button onClick={onLogoutClick}>logout</button>
    )
    if (!user) return (
      <div>
        you are not signed in
        <br/>
        <Link to='signup'>signup</Link>
        <br/>
        <Link to='login'>login</Link>
      </div>
    )
  }

  return (
    <>
      <div>Header</div>
      {renderButtons()}
    </>
  )
}

export default graphql(mutation)(
  graphql(query)(Header)
)