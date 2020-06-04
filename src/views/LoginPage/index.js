import React from 'react'
import Icon from '../../assets/adminIcon.png'
import {Button, Input, Form} from 'antd'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16}
}

const LoginPage = () => {
  const onFinish = values => {
    // eslint-disable-next-line no-console
    console.log('Success:', values)
  }

  return (
    <Wrapper>
      <img src={Icon} style={{width: 250, height: 250}} alt='' />
      <br/>
      <h1>IBanking 29 Administrator Website</h1>
      <br/>
      <Form
        onFinish={onFinish}
        name='basic' {...layout} initialValues={{remember: true}}>
        <Form.Item
          label='Bank Email' name='bankEmail'
          rules={[{required: true, message: 'Please input your bank email!'}]}>
          <Input />
        </Form.Item>
        <Form.Item
          label='Password'
          name='password'
          rules={[{required: true, message: 'Please input your password!'}]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item >
          <Button type='primary' htmlType='submit'>
          Submit
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  )
}

export default LoginPage
