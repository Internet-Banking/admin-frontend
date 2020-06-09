import React from 'react'
import styled from 'styled-components'
import {BankOutlined} from '@ant-design/icons'
import {createFromIconfontCN} from '@ant-design/icons'

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_1861426_5usavs3twno.js']
})

const Wrapper = styled.header`
  width: 100%;
  padding: 10px;
  background: #08979c;
  color: white;
`

const Title = styled.h1`
  font-size:25px;
  padding: 2.5px 0 0 100px;
  color: white;
  transform: translateY(10%);
`

const HomeIcon = styled.div`
  float: left;
  font-size: 40px;
  padding: 0 0 0 10px;
  justify-content: center;
  display: flex;
  transform: translateY(15%);
`

const AdminPanel = styled.span`
  width: 30vh;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(70%);
`

const Header = () => {

  return (
    <Wrapper>
      <HomeIcon>
        <BankOutlined/>
      </HomeIcon>
      <Title>Internet Banking 29</Title>
      <AdminPanel>
        Pham Hoang Minh
        <IconFont style={{padding: '0 30px', fontSize: '25px', transform: 'translateY(20%)'}}
          type='icon-logout'/>
      </AdminPanel>
    </Wrapper>
  )
}

export default Header
