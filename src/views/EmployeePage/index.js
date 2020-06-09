import React from 'react'
import styled from 'styled-components'
import {Table} from 'antd'

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: -1;
  margin-left: 100px;
`

const EmployeePage = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street'
    }
  ]
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    }
  ]

  return (
    <Wrapper>
      <Table dataSource={dataSource} pagination={false} columns={columns} />
    </Wrapper>
  )
}

export default EmployeePage
