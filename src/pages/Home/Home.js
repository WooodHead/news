import React from 'react'
import Section from '../../components/Section'
import PostList from '../../containers/PostList'
import Container from '../../components/Container'

const Home = () => {
  return (
    <Container>
      <Section>
        <PostList />
      </Section>
    </Container>
  )
}

export default Home
