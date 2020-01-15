import React from 'react'
import { connect } from 'react-redux'
import withTaskBar from './withTaskBar'
import { Box, Typography, Button } from '@material-ui/core'
import Content from './upkomingTaskTable/Content'
import { getExportTTN, getTTNdateOut } from '../../actions/taskBarActions'

class TaskContent extends React.Component {
    render() {
        return (
            <Box>
                <Box 
                    style={{background: 'white'}} 
                    p={2} 
                    display="flex" 
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box>
                        <Typography variant="h4">
                            TTNs list
                        </Typography>
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            onClick={() => {
                                this.props.getExportTTN()
                                this.props.getTTNdateOut(new Date(), this.props.contentData.HOUR_FLAG)
                            }}
                        >
                            Update
                        </Button>
                    </Box>
                </Box>
                <Box>
                    <Content />
                </Box>
            </Box>
        )
    }
}

const mapStateToProps = (state) => ({
    contentData: state.roleTasks.contentData,
})

export default connect(mapStateToProps, { getExportTTN, getTTNdateOut })(withTaskBar(TaskContent))