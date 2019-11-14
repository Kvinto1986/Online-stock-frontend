import React from 'react'
import WarehouseInfo from './warehouseInfo'
import {useGetWarehouse} from '../../api/apiRequests'

export default () => {
    const [getWarehouse, warehouse, error] = useGetWarehouse()

    return (
      <WarehouseInfo
        searchWarehouse={getWarehouse}
        warehouse={warehouse}
        warehouseErr={error}
      />
    )
}

