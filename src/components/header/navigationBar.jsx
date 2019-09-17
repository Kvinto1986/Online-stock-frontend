import useStyles from './headerStyles'
import Link from './Link'
import React from 'react'

export default ({user}) => {
    const classes = useStyles()

    const navigation = (linkArr) => {
        const navList = linkArr.map((elem) => {
            return (
                <Link key={elem.name} variant="button" color="primary" to={elem.link} className={classes.link}>
                    {elem.name}
                </Link>)
        })
        return (
            <nav>
                {navList}
            </nav>
        )
    }

    switch (user.role) {
        case 'mainAdmin':
            return navigation([
                {name: 'Home', link: '/'},
                {name: 'Registration new company ', link: '/newCompanyAdmin'},
                {name: 'Reports', link: '/reports'},
                {name: 'Companies', link: '/companiesList'}])

        case 'companyAdmin':
            return navigation([
                {name: 'Home', link: '/'},
                {name: 'Create new employee', link: '/createUser'},
                {name: 'My warehouses', link: '/myWarehouses'},
                {name: 'Company employees', link: '/employees'}])

        case 'employee':
            let arr = []

            if (user.position.includes('manager')) {
                console.log(arr)
                arr = arr.concat([
                    {name: 'Stock delivery', link: '/stockDelivery'},
                    {name: 'Warehousing', link: '/warehousing'},])
            }
            if (user.position.includes('operator')) {
                console.log(arr)
                arr = arr.concat([
                    {name: 'Search carrier', link: '/searchCarrier'},
                    {name: 'Add driver', link: '/driveRegistration'},
                    {name: 'All carrier', link: '/allCarrier'},
                    {name: 'Check Ttn', link: '/checkTtn'}])
            }
            if (user.position.includes('controller')) {
                console.log(arr)
                arr = arr.concat([
                    {name: 'TTN control', link: '/controlTTN'}])
            }

            console.log(arr)
            return navigation(arr)

        default:
            return null
    }
};