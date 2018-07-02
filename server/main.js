import koa from 'koa' // koa@2
import koaRouter from 'koa-router'
import koaBody from 'koa-bodyparser'
import { graphqlKoa } from 'apollo-server-koa'
import { graphiqlKoa } from 'apollo-server-koa'
import { makeExecutableSchema } from 'graphql-tools'

const app = new koa()
const router = new koaRouter()
const PORT = 3001

// koaBody is needed just for POST.
app.use(koaBody())

// Some fake data
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
]

// The GraphQL schema in string form
const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`

// The resolvers
const resolvers = {
  Query: { books: () => books }
}

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

router.post('/graphql', graphqlKoa({ schema: schema }))

// Setup the /graphiql route to show the GraphiQL UI
router.get(
  '/graphiql',
  graphiqlKoa({
    endpointURL: '/graphql' // a POST endpoint that GraphiQL will make the actual requests to
  })
)

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(PORT)
console.log(`Listening on PORT: ${PORT}`)
