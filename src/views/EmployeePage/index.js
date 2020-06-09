import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import {Table, message, Button} from 'antd'
import {api} from '../../services'
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 100px;
  position: absolute;
  z-index: 1000;
`

const EmployeePage = () => {
  const token = useSelector(state => state.admin.token)
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const {data} = await api.get('employee', undefined, token)
      setData(data.payload)
    }
    getData()
  }, [token])

  const deleteEmployee = async (id) => {
    const result = await api.delete(`employee/${id}`, undefined, token)
    if (result.isSuccess) {
      message.success('Delete successfully!')
      const newData = data.filter((employee) => employee.id !== id)
      setData(newData)
    }
    else {
      message.error(result.error.message)
    }
  }

  const columns = [
    {
      title: 'Employee ID',
      dataIndex: 'id',
      key: 'id',
      align: 'center'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      render: (id) => (
        <div>
          <Button
            type='primary'
            onClick={() => deleteEmployee(id)}
            shape='circle'
            icon={<DeleteOutlined />}
            size={10}
          />&nbsp;&nbsp;
          <Button
            type='primary'
            shape='circle'
            icon={<EditOutlined />}
            size={10}
          />
        </div>
      )
    }
  ]

  return (
    <Wrapper>
      <Table dataSource={data} pagination={false} columns={columns} />
    </Wrapper>
  )
}

export default EmployeePage
