import React, {useState} from 'react'
import Search from '../operatorPage/search'
import TtnInfo from './TtnInfo'

export default ({searchTtn, ttns, getTtnError, deleteTtn}) => {

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
            {ttns[ttnId] && (<TtnInfo
                ttn={ttns[ttnId]}
                onDelete={deleteTtn}
            />)}

        </div>

    )
}
