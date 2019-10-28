import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import React from 'react'
import useStyles from './warehousePageStyles'
import {PropTypes} from 'prop-types'

const AreaCard = ({list, handleDeleteArea}) => {

    const classes = useStyles()

    return (
        <Box>
            <Box mb={5}>
                <Typography component="h1" variant="h5" className={classes.h5}>
                    Created areas
                </Typography>
            </Box>
            {list && list.map((listItem, index) => (
                <Card className={classes.cardArea} key={listItem.type + index}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Type: <span> {listItem.type}</span>
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                Area (m<sup>2</sup>):<span> {listItem.area}</span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="contained" color="secondary" onClick={() => handleDeleteArea(index, listItem.area)}>
                            Delete
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    )
}

AreaCard.propTypes = {
    list: PropTypes.array.isRequired,
    handleDeleteArea: PropTypes.func.isRequired
}

export default AreaCard
