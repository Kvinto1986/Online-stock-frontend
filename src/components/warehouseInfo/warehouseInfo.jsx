import React, {useState} from 'react'
import Search from '../operatorPage/search'
import InfoPanel from './components/infoPanel'

const WarehouseInfo = ({searchWarehouse, warehouseErr, warehouse}) => {
    const [warehouseId, setWarehouseId] = useState('')

    return (
      <>
          <Search
            search={searchWarehouse}
            searchText="Search warehouse by License"
            error={warehouseErr.warehouse}
            value={warehouseId}
            setValue={setWarehouseId}
          />
          {
              warehouse[warehouseId] && (
                <InfoPanel data={warehouse[warehouseId]}/>
              )
          }

      </>


    )
}
export default WarehouseInfo
