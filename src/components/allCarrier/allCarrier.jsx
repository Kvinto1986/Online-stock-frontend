import React, {useEffect, useState} from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Spinner from '../spinner'
import TablePaginationActions from './tablePagination'
import TableRowsComponent from './tableRows'
import {TableHead} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    wrapper: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    tableWrapper: {
        flex: 1,
    },
    table: {},
}));

function CustomPaginationActionsTable({allCarriers, delCarrier, editCarrier}) {
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [loaded, setLoaded] = useState(false);
    const [inputValue, setInputValue] = useState({});

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    useEffect(() => {
        setRows(allCarriers);
        setLoaded(true);
    }, [allCarriers]);

    const removeItem = (unp) => () => {
        delCarrier(unp);
    };

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0)
    }

    const handleEdit = (id) => () => {
        rows.forEach((item, indx) => rows[indx].isDisabled = false);

        let found = rows.find((elem, index) => elem.id === id);
        found.isDisabled = true;
        setRows([...rows]);
    };

    const handelEditInput = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value});
    };

    const searchFoundElem = (rows, _unp) => {
        const {carrier, email, tel} = inputValue;
        let indx, found = null;

        found = rows.find((elem) => elem.id === _unp);
        indx = rows.findIndex((elem) => elem.id === _unp);
        let newObj = {};
        if (carrier) {
            found.company = carrier;
            newObj.company = carrier;
        }

        if (email) {
            found.email = email;
            newObj.email = email;
        }

        if (tel) {
            found.tel = tel;
            newObj.tel = tel;
        }

        found.isDisabled = false;

        let newArr = [];
        for (let i = 0; i < rows.length; i++) {
            (i === indx) ? newArr.push(found) : newArr.push(rows[i]);
        }
        setRows(newArr);
        return newObj;
    };

    const handleNewCarrier = (unp) => () => {
        const foundElem = searchFoundElem(rows, unp);
        editCarrier(foundElem, unp);
    };

    const tableCells = [
        {type: 'text', name: 'carrier', action: handelEditInput},
        {type: 'text', name: 'email', action: handelEditInput},
        {type: 'number', name: 'tel', action: handelEditInput},
    ];

    const tHead = [
        {id: 1, label: 'Carrier'},
        {id: 2, label: 'Email'},
        {id: 3, label: 'Phone'},
        {id: 4, label: "Actions"},
    ];

    return (
        <div className={classes.wrapper}>
            <div className={classes.tableWrapper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            {
                                tHead.map(item => (
                                    <TableCell key={item.id}>
                                        {item.label}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {!loaded
                            ? <Spinner/>
                            : rows.map(row => (
                                <TableRowsComponent
                                    key={row.id}
                                    tableCells={tableCells}
                                    row={row}
                                    handleNewCarrier={handleNewCarrier}
                                    handleEdit={handleEdit}
                                    removeItem={removeItem}
                                />
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
            <TablePagination
                component={"div"}
                rowsPerPageOptions={[5, 10]}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
            />
        </div>
    )
}

export default CustomPaginationActionsTable
