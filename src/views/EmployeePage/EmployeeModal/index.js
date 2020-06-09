import React from 'react'
import {Modal, Button, Form, Input} from 'antd'
import {UserOutlined, LockOutlined, MailOutlined} from '@ant-design/icons'

const EmployeeModal = ({
  visible, handleSubmit, handleCancel, modalMode
}) => {
  return (
    <div>
      {/*No defaultValue because defaultValue of 2 modal was synced */}
      <Modal
        visible={visible}
        title={modalMode === 'CREATE' ? 'Create employee' : 'Update employee'}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={handleSubmit}>
          <Form.Item
            name='name'
            rules={[
              {
                required: true,
                message: 'Please input employee name!'
              }
            ]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='Employee name'
            />
          </Form.Item>
          {modalMode === 'CREATE'
            ? <>
              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'Please input employee email!'
                  }
                ]}
              >
                <Input
                  prefix={<MailOutlined className='site-form-item-icon' />}
                  type='email'
                  placeholder='Employee email' />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Please input employee password!'
                  }
                ]}
              >
                <Input
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  placeholder='Employee password'
                />
              </Form.Item>
            </> : null
          }
          <Form.Item>
            <Button type='primary' htmlType='submit' >Submit</Button>&nbsp;&nbsp;
            <Button type='danger' onClick={handleCancel}>Close</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default EmployeeModal
