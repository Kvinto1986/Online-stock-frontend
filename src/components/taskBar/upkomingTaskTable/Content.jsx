import React, { memo } from 'react'
import { connect } from 'react-redux'
import { Box } from '@material-ui/core'
import TaskList from './TaskList'

const Content = (props) => {
    return (
        <Box style={{background: 'white'}}>
            <Box mt={3} >
                <TaskList contentData={props.contentData}/>
            </Box>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    contentData: state.roleTasks.contentData,
})
  
  export default connect(mapStateToProps, {})(memo(Content))