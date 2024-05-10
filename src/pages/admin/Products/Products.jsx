import React, { useContext } from 'react'
import "../../admin/Products/Products.css"
import Loading from '../../Loading/Loading'
import MainContext from '../../../context/context'
import Table from '../../../components/admin/Table/Table'
const Products = () => {
  const { data, loading } = useContext(MainContext)
  return (
    <table class="table table-dark">
      <tbody className='tbody_style'>
        {loading ? <Loading /> : <Table items={data} />}
      </tbody>
    </table>
  )
}

export default Products
