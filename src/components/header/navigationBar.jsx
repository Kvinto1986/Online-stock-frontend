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
                {name: 'Companies', link: '/companiesList'},
                {name: 'Reports', link: '/reports'}])

        case 'companyAdmin':
            return navigation([
                {name: 'Home', link: '/'},
                {name: 'Create new employee', link: '/createUser'},
                {name: 'My warehouses', link: '/myWarehouses'},
                {name: 'Company employees', link: '/employees'}])

        case 'employee':
            let arr = []

            if (user.position.includes('manager')) {
                arr = arr.concat([
                    {name: 'Stock delivery', link: '/stockDelivery'},
                    {name: 'Warehousing', link: '/warehousing'},])
            }
            if (user.position.includes('operator')) {
                arr = arr.concat([
                    {name: 'TTN registration', link: '/ttnRegister'},
                    {name: 'All carrier', link: '/allCarrier'},
                    {name: 'Check Ttn', link: '/checkTtn'}])
            }
            if (user.position.includes('controller')) {

                arr = arr.concat([
                    {name: 'TTN control', link: '/controlTTN'}])
            }

            return navigation(arr)

        default:
            return null
    }
};