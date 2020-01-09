import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    rightBottomAlertStyle: {
        color: "#3e42a1",
        position: "fixed",
        bottom: "25px",
        right: "25px",
        padding: "10px 25px",
        display: "flex",
        alignItems: "center",
        border: "1px solid #3e42a1",
        zIndex: "999",
        background: "#fafafa"
    },
    textStyle: {
        display: "block",
        fontSize: "20px",
        marginLeft: "4px",
        fontWeight: "100"
    }
}));

export default useStyles