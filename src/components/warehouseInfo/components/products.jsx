import React from 'react'
import {uid} from 'react-uid'
import Archive from '@material-ui/icons/Archive'
import {makeStyles} from '@material-ui/core'
import TreeItem from '@material-ui/lab/TreeItem/TreeItem'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const useTreeItemStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.text.secondary,
        '&:focus > $content': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
            color: 'var(--tree-view-color)',
        },
        marginLeft: 55
    },
    content: {
        color: theme.palette.text.secondary,
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '$expanded > &': {
            fontWeight: theme.typography.fontWeightRegular,
        },
    },
    group: {
        marginLeft: 0,
        '& $content': {
            paddingLeft: theme.spacing(2),
        },
    },
    expanded: {},
    label: {
        fontWeight: 'inherit',
        color: 'inherit',
    },
    labelRoot: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0.5, 0),
    },
    labelIcon: {
        marginRight: theme.spacing(1),
    },
    labelText: {
        fontWeight: 'inherit',
        flexGrow: 1,

    },
}))

function StyledTreeItem(props) {
    const classes = useTreeItemStyles()
    const {labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other} = props

    return (
      <TreeItem
        label={
            <div className={classes.labelRoot}>
                <LabelIcon color="inherit" className={classes.labelIcon}/>
                <Typography variant="body2" className={classes.labelText}>
                    {labelText}
                </Typography>
                <Typography variant="caption" color="inherit">
                    {labelInfo}
                </Typography>
            </div>
        }
        style={{
            '--tree-view-color': color,
            '--tree-view-bg-color': bgColor,
        }}
        classes={{
            root: classes.root,
            content: classes.content,
            expanded: classes.expanded,
            group: classes.group,
            label: classes.label,
        }}
        {...other}
      />
    )
}

StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    labelIcon: PropTypes.elementType.isRequired,
    labelInfo: PropTypes.string,
    labelText: PropTypes.string.isRequired,
}

const Products = ({products, handleData}) => {
    return products.products.map((product, i) => {
        return (
          <span onClick={() => handleData(product)} key={uid(product)}>
          <StyledTreeItem
            nodeId={`sub_sub${i}`}
            labelText={product.name}
            labelIcon={Archive}
            labelInfo={`amount: ${product.amount} (${product.package}) / size: ${product.size}`}
            color="#1a73e8"
            bgColor="#e8f0fe"
          />
          </span>
        )
    })
}
export default Products
