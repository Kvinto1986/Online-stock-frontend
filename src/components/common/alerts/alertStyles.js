import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    rightBottomAlertStyle: {
        color: "#32a83e",
        position: "fixed",
        bottom: "25px",
        right: "25px",
        padding: "10px 25px",
        display: "flex",
        alignItems: "center",
        border: "1px solid #32a83e",
        zIndex: "99"
    },
    textStyle: {
        display: "block",
        fontSize: "20px",
        marginLeft: "4px",
        fontWeight: "100"
    }
}));

export default useStyles