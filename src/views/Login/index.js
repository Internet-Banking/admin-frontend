import React from 'react'
import styled from 'styled-components'
import adminIcon from '../../assets/images/adminIcon.png'
import LoginForm from './LoginForm'

const Wrapper = styled.main`
  height: 100vh;
  .login-form {
    transform: translateY(20vh);
    padding-left: 60vw !important;
    max-width: 80vw;
  }
`

const Title = styled.div`
  transform: translateY(10vh);
  text-align: center;
  font-weight: bold;
  font-size: 50px;
`

const Login = () => {
  return (
    <Wrapper>
      <Title>
        IBanking 29 Admin Website
      </Title>
      <img alt='admin avatar' src={adminIcon}
        style={{width: '30vw', height: '50vh', transform: 'translate(20vw, 20vh)', float: 'left'}}/>
      <LoginForm/>
    </Wrapper>
  )
}

export default Login
