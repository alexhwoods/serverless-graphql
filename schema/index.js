const fs = require('fs')
const { makeExecutableSchema } = require('graphql-tools')

const resolvers = require('../resolvers')

console.log(resolvers)

const typeDefs = fs
  .readdirSync(__dirname)
  .filter(filename => /\.graphql$/.test(filename))
  .map(filename => `${__dirname}/${filename}`)
  .reduce((acc, filename) => acc.concat(fs.readFileSync(filename)), '')

console.log(typeDefs)
const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema
