import React from 'react'

import EmployeeTable from './employeeTable'


export default ({currentUser, employeesList, errors}) => {


    return (
        <div>
            <EmployeeTable
                employeesList={employeesList}
            />
        </div>
    )
}


