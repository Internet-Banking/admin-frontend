import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import {Table, message, Button} from 'antd'
import {api} from '../../services'
import {DeleteOutlined, EditOutlined, PlusOutlined} from '@ant-design/icons'
import EmployeeModal from './EmployeeModal'
import keyMirror from 'key-mirror'

const MODAL_MODE = keyMirror({
  CREATE: null,
  EDIT: null
})

const Wrapper = styled.main`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  margin-left: 70px;
  position: absolute;
  z-index: 1000;
`

const EmployeePage = () => {
  const token = useSelector(state => state.admin.token)
  const [data, setData] = React.useState([])
  const [visible, setVisible] = React.useState(false)
  const [modalMode, setModalMode] = React.useState(MODAL_MODE.CREATE)
  const [updateEmpIndex, setUpdateEmpIndex] = React.useState(null)

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

  const openCreateModal = () => {
    setModalMode(MODAL_MODE.CREATE)
    setVisible(true)
  }
  
  const openUpdateModal = (index) => {
    setUpdateEmpIndex(index)
    setModalMode(MODAL_MODE.UPDATE)
    setVisible(true)
  }

  const closeModal = () => {
    setVisible(false)
  }

  const submitModal = async (values) => {
    if (modalMode === MODAL_MODE.CREATE) {
      const result = await api.post('employee', values, token)
      if (result.isSuccess) {
        message.success('Create employee successfully!')
        const newData = data.concat([result.data.payload])
        setData(newData)
      }
      else {
        message.error(result.error.message)
      }
    }
    else {
      const result = await api.put(`employee/${data[updateEmpIndex].id}`, values, token)
      if (result.isSuccess) {
        message.success('Update employee successfully!')
        const newData = data.map((employee, index) => {
          if (index === updateEmpIndex) {
            return result.data.payload
          }
          return employee
        })
        setData(newData)
      }
      else {
        message.error(result.error.message)
      }
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
      // eslint-disable-next-line no-unused-vars
      render: (id, row, index) => (
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
            onClick={() => openUpdateModal(index)}
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
      <br/>
      <Button onClick={() => openCreateModal()} icon={<PlusOutlined />} type='primary'>
        Create employee
      </Button>
      <br/>
      <Table dataSource={data} pagination={false} columns={columns} />
      <EmployeeModal
        visible={visible}
        handleCancel={closeModal}
        handleSubmit={submitModal}
        modalMode={modalMode}
      />
    </Wrapper>
  )
}

export default EmployeePage
