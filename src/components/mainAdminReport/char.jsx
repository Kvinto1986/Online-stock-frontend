import {Bar} from "react-chartjs-2";
import React from "react";
import jsPDF from 'jspdf';
import Button from '@material-ui/core/Button';

export default function Char({error, fromDate, toDate, statistic,classes}) {

    if (statistic.created && !error) {

        const pdfCreate=(e)=>{
            e.preventDefault();

            const doc = new jsPDF();
            doc.text(
                `
         ************************************************************************************
       
           From: ${fromDate}
                                 
           To: ${toDate}
                                        
           Created accounts: ${statistic.created[0]}
                                        
           Deleted accounts: ${statistic.deleted[0]}
                                    
         ************************************************************************************
                
                `
                ,1,1);

            doc.save('statistic.pdf')
        };

        const data = {
            labels: [`From ${fromDate}                      To ${toDate}`],
            datasets: [
                {
                    label: 'Created',
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    data: statistic.created
                },

                {
                    label: 'Deleted',
                    backgroundColor: 'red',
                    data: statistic.deleted
                }

            ],

        };


        return (
            <div>
                <h2>Char</h2>
                <Bar
                    data={data}/>
                <Button variant="contained" color="secondary" className={classes.button} onClick={pdfCreate}>
                    Download PDF
                </Button>
            </div>

        )
    } else return null
}