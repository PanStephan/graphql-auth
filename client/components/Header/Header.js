import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

import query from '../../queries/currentUser'

const Header = props => {
  const { loading, user } = props.data
  const renderButtons = () => {
    if (!loading) return <div>loading...</div> 

    if (user) return <button>Logout</button>
    if (!user) return <button>you are not signed in</button>
  }
  return (
    <>
      <div>Header</div>
      <Link to='/'>Home</Link>
      {renderButtons()}
    </>
  )
}

export default graphql(query)(Header)