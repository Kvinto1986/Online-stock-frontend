import React, {useState} from 'react'
import Search from '../operatorPage/search'

export default ({searchTtn, ttns, getTtnError, deleteTtn}) => {

    const [ttnId, setTtnId] = useState('')

    //ABOUT! Look! Already used! Is it so important!
    console.log(ttns)
    console.log(deleteTtn)

    return (
            <Search
                search={searchTtn}
                searchText="Search TTN by number"
                error={getTtnError.number}
                value={ttnId}
                setValue={setTtnId}
            />
    )
}
