const graphql = require('graphql')
const UserType = require('./types/user_type')
const AuthServices = require('../services/auth')

const {
  GraphQLObjectType,
  GraphQLString
} = graphql

const Mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parent, { email, password }, req) {
        return AuthServices.signup({ email, password, req })
      }
    },
    logout: {
      type: UserType,
      args: {

      },
      resolve(parent, args, req) {
        const { user }  = req
        req.logout()
        return user
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parent, { email, password }, req) {
        return AuthServices.login({ email, password, req })
      }
    }
  }
})

module.exports = Mutations