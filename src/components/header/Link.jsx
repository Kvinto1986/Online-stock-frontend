import React, {Component} from 'react'
import Link from '@material-ui/core/Link/index'
import {Link as RouterLink} from 'react-router-dom'

class MyRouterLink extends Component {
    render() {
        const {href, ...props} = this.props;
        return <RouterLink to={href} {...props}/>
    }
}

export default ({href, ...props}) =>
    <Link
        component={MyRouterLink}
        {...props}
    />
