import React from "react";
// import useStyles from "./registerEmployeeStyles";
import { Container, CssBaseline } from "@material-ui/core";
import GoodsDeliveryFromStock from "./deliveryFromStock";

export default () => {
    // const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <GoodsDeliveryFromStock />
        </Container>
    )
};