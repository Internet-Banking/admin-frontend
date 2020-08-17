/* eslint-disable no-case-declarations */
import React from 'react'
import {Table, Radio} from 'antd'
import {api} from '../../services'
import {useSelector} from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.main`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  margin-left: 150px;
  position: absolute;
  z-index: 1000;
`

const OuterTransactionsPage = () => {
  const token = useSelector(state => state.admin.token)
  const [data, setData] = React.useState([])
  const [bank, setBank] = React.useState('All')

  React.useEffect(() => {
    const getData = async () => {
      let result
      switch (bank) {
        case 'Nhom28Bank':
          result = await api.get('transaction/outer?bankName=Nhom28Bank', undefined, token)
          setData(result.data.payload)
          break
        case 'Sacombank':
          result = await api.get('transaction/outer?bankName=Sacombank', undefined, token)
          setData(result.data.payload)
          break
        default:
          result = await api.get('transaction/outer', undefined, token)
          setData(result.data.payload)
          break
      }
    }
    getData()
  }, [bank])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      align: 'center'
    },
    {
      title: 'sendingAccountId',
      dataIndex: 'sendingAccountId',
      key: 'sendingAccountId'
    },
    {
      title: 'receivingAccountId',
      dataIndex: 'receivingAccountId',
      key: 'receivingAccountId'
    },
    {
      title: 'bankName',
      dataIndex: 'bankName',
      key: 'bankName'
    },
    {
      title: 'amount',
      dataIndex: 'amount',
      key: 'amount'
    }
  ]

  const onRadioChange = (e) => {
    setBank(e.target.value)
  }
  return (
    <Wrapper>
      <br/>
      <Radio.Group onChange={onRadioChange} value={bank}>
        <Radio value={'All'}>All</Radio>
        <Radio value={'Nhom28Bank'}>Nhom28Bank</Radio>
        <Radio value={'Sacombank'}>Sacombank</Radio>
      </Radio.Group>
      <Table dataSource={data} pagination={false} columns={columns} />
    </Wrapper>
  )
}

export default OuterTransactionsPage
