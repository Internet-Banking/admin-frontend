import React, {useState} from 'react'
import {Layout, Menu} from 'antd'
import {Link} from 'react-router-dom'
import {TeamOutlined, AreaChartOutlined} from '@ant-design/icons'

const {Sider: AntdSider} = Layout

const Sider = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <AntdSider style={{minHeight: '100%', float: 'left', marginRight: '20px'}}
      collapsible collapsed={isCollapsed}
      onCollapse={() => setIsCollapsed(!isCollapsed)}>
      <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
        <Menu.Item key='1' icon={<TeamOutlined />}>
          <Link to='/employee'>Manage Employees</Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<AreaChartOutlined />}>
          <Link to='/transaction/outer'>Outer Transactions</Link>
        </Menu.Item>
      </Menu>
    </AntdSider>
  )
}

export default Sider
