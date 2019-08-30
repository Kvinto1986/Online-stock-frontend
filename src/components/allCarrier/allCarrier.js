import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {useTheme} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './allCarrierStyle';
import {allCarriers, deleteCarriers, updateCarrier} from "../../servies/carrierServies";
import {addPrevPath} from '../../actions/carrierAction';
import Spinner from '../spinner';

function TablePaginationActions(props) {
    const classes = useStyles();
    const theme = useTheme();
    const {count, page, rowsPerPage, onChangePage} = props;

    function handleFirstPageButtonClick(event) {
        onChangePage(event, 0);
    }

    function handleBackButtonClick(event) {
        onChangePage(event, page - 1);
    }

    function handleNextButtonClick(event) {
        onChangePage(event, page + 1);
    }

    function handleLastPageButtonClick(event) {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    }

    return (
        <div className={classes.nav}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon/> : <LastPageIcon/>}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData({...rest}) {
    return {...rest};
}

function CustomPaginationActionsTable(props) {
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [loaded, setLoaded] = useState(false);
    const [inputValue, setInputValue] = useState({})
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    function handleChangePage(event, newPage) {
        setPage(newPage);
    }

    const handlePrevPath = () => {
        props.addPrevPath(props.location.pathname);
        props.history.push("/addCarrier")
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    useEffect(() => {
        allCarriers()
            .then((res) => {

                const fetchArr = [];
                res.data.forEach(item => fetchArr.push((createData(item))));
                setRows(fetchArr);
                setLoaded(true)
            })
            .catch((err) => console.error(err))
    }, []);

    const removeItem = (id) => {
        deleteCarriers(id, setRows, rows)
    };

    const handleEdit = (id) => {
        rows.forEach((item, indx) => {
            rows[indx].isDisabled = false;
        });
        let found = rows.find((elem, index) => {
            return elem._id === id
        });

        found.isDisabled = true
        setRows([...rows])
    };

    const handelEditInput = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value})
    }

    const handleNewCarrier = (id) => {
        updateCarrier(rows, inputValue, id, setRows)
    }

    return (
        <>
            <div className={classes.add_carrier}>
                <span>Add new carrier</span>
                <Fab
                    color="primary"
                    aria-label="add"
                    className={classes.add_btn}
                    onClick={handlePrevPath}
                >
                    <AddIcon/>
                </Fab>
            </div>
            <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table}>
                        <TableBody>
                            <TableRow>
                                <TableCell>Carrier</TableCell>
                                <TableCell align="right">Email.</TableCell>
                                <TableCell align="right">Phone</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                            {!loaded
                                ? <Spinner/>
                                : rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                    <TableRow key={row._id}>
                                        <TableCell component="th" scope="row">
                                            {
                                                row.isDisabled
                                                    ? <input
                                                        type="text"
                                                        name='carrier'
                                                        placeholder={row.company}
                                                        onChange={handelEditInput}
                                                    />
                                                    : <span>{row.company}</span>
                                            }
                                        </TableCell>
                                        <TableCell align="right">
                                            {
                                                row.isDisabled
                                                    ? <input type="text" name='email' placeholder={row.email}
                                                             onChange={handelEditInput}/>
                                                    : <span>{row.email}</span>
                                            }
                                        </TableCell>
                                        <TableCell align="right">
                                            {
                                                row.isDisabled
                                                    ? <input
                                                        type="number"
                                                        name='tel'
                                                        placeholder={row.tel}
                                                        onChange={handelEditInput}
                                                        className="noNumerical"
                                                    />
                                                    : <span>{row.tel}</span>
                                            }
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.isDisabled
                                                ? <Fab
                                                    color="primary"
                                                    aria-label="add"
                                                    className={classes.add_btn}
                                                    onClick={ (e) => {handleNewCarrier(row._id)} }
                                                >
                                                    <AddIcon/>
                                                </Fab>

                                                : <Fab
                                                    color="secondary"
                                                    aria-label="edit"
                                                    className={classes.fab}
                                                    onClick={() => {
                                                        handleEdit(row._id)
                                                    }}
                                                >
                                                    <EditIcon/>
                                                </Fab>

                                            }

                                            <Fab
                                                id={row.id}
                                                onClick={() => {removeItem(row._id)} }
                                                aria-label="delete"
                                                className={classes.fab}
                                            >
                                                <DeleteIcon/>
                                            </Fab>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }

                            {emptyRows > 0 && (
                                <TableRow style={{height: 35 * emptyRows}}>
                                    <TableCell colSpan={6}/>
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10]}
                                    colSpan={3}
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: {'aria-label': 'rows per page'},
                                        native: true,
                                    }}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </Paper>
        </>
    );
}

export default connect(null, {addPrevPath})(CustomPaginationActionsTable)