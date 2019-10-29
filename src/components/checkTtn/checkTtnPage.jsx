import React, {useState} from 'react'
import Search from '../operatorPage/search'
import TtnInfo from './Tabale'

export default ({searchTtn, ttns, getTtnError, editTtn, editTtnError, deleteTtn, deleteTtnError}) => {

    const [ttnId, setTtnId] = useState('')

    return (
        <div>
        <Search
            search={searchTtn}
            searchText="Search TTN by number"
            error={getTtnError.number}
            value={ttnId}
            setValue={setTtnId}
        />
        <TtnInfo
            rows={ttns[ttnId]}
        />
        </div>

    )
}
