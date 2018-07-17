import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import RelativeTime from '../RelativeTime'
import { Link } from 'react-router-dom'

const StyledPost = styled.article`
  padding: 1.2rem 1.2rem 0 1.2rem;
  border-bottom: 1px solid ${props => props.theme.borderColor};

  > header {
    font-weight: bold;
    margin-bottom: 0.2rem;
  }

  > header a {
    color: ${props => props.theme.fontColor};
    text-decoration: none;
  }

  > footer {
    font-size: 0.8rem;
    color: ${props => props.theme.fontColorLight};
  }

  > footer ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding: 0;
  }

  > footer ul li {
    margin-right: 0.8rem;
  }

  > footer ul li a {
    color: ${props => props.theme.fontColorLight};
    text-decoration: none;
  }
`

const Post = ({ id, title, author, url, commentCount, createdAt }) => {
  const postTitle = url ? (
    <a href={url} target="_blank">
      {title}
    </a>
  ) : (
    <Link to={`/post/${id}`}>{title}</Link>
  )

  return (
    <StyledPost>
      <header>{postTitle}</header>
      <footer>
        <ul>
          <li>
            <Link to={`/user/${author}`}>{author}</Link>
          </li>
          <li>
            <RelativeTime timestamp={createdAt} />
          </li>
          <li>
            <Link to={`/post/${id}`}>{`${commentCount}条评论`}</Link>
          </li>
        </ul>
      </footer>
    </StyledPost>
  )
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string,
  commentCount: PropTypes.number.isRequired
}

export default Post
