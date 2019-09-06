import React, {useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss'

import {getWarehouses, deleteWarehouse} from '../../actions/warehouseAction'

import useStyles from './warehousePageStyles'
import {connect} from "react-redux";
import {changeStatus} from "../../actions/companyAdminAction";

const WarehousesTable = (props) => {
    useEffect(() => {
        props.getWarehouses({id: props.auth.user.id})
    }, []);

    const classes = useStyles();

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete warehouse?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Accept',
            allowOutsideClick: false
        }).then((result) => {
            if (result.value) {
                props.deleteWarehouse({id:id});
                Swal.fire({
                    type: 'success',
                    title: 'Congratulations!',
                    text: 'Data successfully changed !',
                    allowOutsideClick: false,
                    timer: 3000
                }).then(() => {
                    props.getWarehouses({id: props.auth.user.id})
                })
            }
        })

    };

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Action</TableCell>
                        <TableCell align="center">Warehouse</TableCell>
                        <TableCell align="center">License</TableCell>
                        <TableCell align="center">Total area</TableCell>
                        <TableCell align="center">Areas</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.warehouses.map(elem => (
                        <TableRow key={elem._id}>
                            <TableCell align="center">
                                <Button variant="contained" color="secondary" className={classes.button} onClick={(e)=>handleDelete(elem._id)}>
                                    Delete
                                    <DeleteIcon style={{marginLeft: '5%'}}/>
                                </Button>
                            </TableCell>
                            <TableCell align="center">
                                {elem.name}
                            </TableCell>
                            <TableCell align="center">{elem.license}</TableCell>
                            <TableCell align="center">{elem.totalArea}</TableCell>
                            <TableCell align="center">
                                <Paper className={classes.root}>
                                    <Table size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">Type</TableCell>
                                                <TableCell align="center">Area</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        {elem.areas.map((elem) => {
                                            return (
                                                <TableBody>
                                                    <TableRow key={elem.type + elem.area}>
                                                        <TableCell align="center">{elem.type}</TableCell>
                                                        <TableCell align="center">{elem.area}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            )
                                        })}
                                    </Table>
                                </Paper>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    warehouses: state.warehouses
});

export default connect(mapStateToProps, {getWarehouses, deleteWarehouse})(WarehousesTable)