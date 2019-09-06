import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
        DatePicker,
        MuiPickersUtilsProvider
} from "@material-ui/pickers";

function App({fromDate,handleFromDateChange,toDate,handleToDateChange}) {

console.log(fromDate,toDate)
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        disableFuture
                        openTo="year"
                        format="dd/MM/yyyy"
                        label="from"
                        views={["year", "month", "date"]}
                        value={fromDate}
                        onChange={handleFromDateChange}
                        style={{marginTop:'2%'}}
                    />
                    <DatePicker
                        disableFuture
                        openTo="year"
                        format="dd/MM/yyyy"
                        label="to"
                        views={["year", "month", "date"]}
                        value={toDate}
                        onChange={handleToDateChange}
                        style={{marginTop:'7%'}}
                    />
            </MuiPickersUtilsProvider>
        );
}

export default App;