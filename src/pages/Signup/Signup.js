import React, { Component } from 'react'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Container from '../../components/Container'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      phone: '',
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    const { target } = e
    const { name, value } = target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    // TODO
  }

  render() {
    return (
      <Container small>
        <Form onSubmit={this.handleSubmit}>
          <h2>注册</h2>

          <Form.Item>
            <Input
              type="text"
              name="username"
              placeholder="用户名"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              type="text"
              name="phone"
              placeholder="手机号"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              type="email"
              name="email"
              placeholder="邮箱"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              type="password"
              name="password"
              placeholder="密码（不少于6位）"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Button primary fullWidth>
              注册
            </Button>
          </Form.Item>
        </Form>
      </Container>
    )
  }
}

export default Signup
