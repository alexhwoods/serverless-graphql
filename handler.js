const { graphqlLambda, graphiqlLambda } = require('apollo-server-lambda')
const schema = require('./schema')

exports.graphql = graphqlLambda({ schema })

exports.graphiql = graphiqlLambda({ endpointURL: '/graphql' })
