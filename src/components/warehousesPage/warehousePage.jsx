import React from 'react'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Tabs from '@material-ui/core/Tabs'
import useStyles from './warehousePageStyles'
import {applyProps, LinkTab, TabPanel} from './warehouseTabsComponents'
import Form from './warehouseForm'
import Table from './warehousesTable'

export default ({createWarehouse, createWarehouseError, deleteWarehouse, warehouses, authUser, formKey, tableKey}) => {
    const classes = useStyles()

    const [value, setValue] = React.useState(0)

    function handleChange(e, newValue) {
        setValue(newValue)
    }

    return <div className={classes.root}>
        <AppBar position="static">
            <Tabs
                className={classes.tab}
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
            >
                <LinkTab label="Create new warehouse" href="/form" {...applyProps(0)} />
                <LinkTab label="Warehouses list" href="/list" {...applyProps(1)} />
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            <Form
                key={formKey}
                onSubmit={createWarehouse}
                error={createWarehouseError}
                company={authUser.company}
            />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Table
                key={tableKey}
                deleteWarehouse={deleteWarehouse}
                warehouses={warehouses}
            />
        </TabPanel>
    </div>
}