import React, {useState} from 'react'
import Search from '../operatorPage/search'

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
        </div>

    )
}
