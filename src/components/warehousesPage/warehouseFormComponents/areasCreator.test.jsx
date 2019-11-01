import React from 'react'
import {render} from '@testing-library/react'
import {Container, Card, CardContent, Grid, FormControl, InputLabel, Select, CardActions, MenuItem, Typography, Slider, Button} from '@material-ui/core'
import {fireEvent} from '@testing-library/dom'

describe('area creator', () => { 
    const Component = ({warehouse, totalArea, currentArea, ...props}) => {
        return (
            <Container maxWidth="sm">
                <Card>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography component="h1" variant="h5">
                                    Create warehouse area
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl required>
                                    <InputLabel>Type</InputLabel>
                                    <Select
                                        value={warehouse.type}
                                        onChange={() => {}}
                                        inputProps={{
                                            name: 'type',
                                        }}
                                        data-testid="select"
                                    >
                                        <MenuItem value="heated">Heated</MenuItem>
                                        <MenuItem value="unheated">Unheated</MenuItem>
                                        <MenuItem value="cooling">Cooling chamber</MenuItem>
                                        <MenuItem value="outdoor">Outdoor</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography component="h1" variant="h6">
                                    Available area: {totalArea}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography id="discrete-slider" gutterBottom>
                                    Area (m<sup>2</sup>)
                                </Typography>
                                <Slider
                                    getAriaValueText={props.handleChangeCurrentArea}
                                    defaultValue={0}
                                    valueLabelDisplay="auto"
                                    step={5}
                                    marks
                                    min={0}
                                    max={totalArea}
                                    data-testid="slider"
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    {(totalArea > 0 && currentArea > 0 && warehouse.type) && (<CardActions>
                        <Button variant="contained" color="primary"
                            onClick={props.handleAddArea}>Add </Button>
                    </CardActions>)}
                </Card>
            </Container>
        )
    }

    it('is area creator initial content rendered', async () => {
    
        const data = {
            warehouse: {type: ''},
            totalArea: 400,
            currentArea: 0,
        }
    
        const {getByText, getByTestId} = render(<Component {...data}/>)

        getByText('Create warehouse area')
        getByText('Available area: 400')
        getByTestId('slider')
        getByTestId('select')
    })
})