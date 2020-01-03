import React, {useState} from 'react'
import FormHelperText from '@material-ui/core/FormHelperText'
import {Input, InputLabel} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    avatar: {
        marginLeft:'50%',
        width: '7%',
    },

}))

const LoadAvatar = ({setAvatar}) => {
    const [avatarErr, setAvatarErr] = useState(false)

    const handleUpldChange = e => {
        const formatImg = ['jpg', 'png','jpeg']
        if (e.target.files[0] && formatImg.includes(e.target.files[0].name.split('.')[1])) {
            setAvatar(e.target.files[0])
            setAvatarErr(false)
        } else {
            setAvatarErr(true)
        }

    }

    const classes = useStyles()

    return (
        <>
            <InputLabel>You photo (optional)</InputLabel>
            <Input type='file' onChange={handleUpldChange} fullWidth/>
            {avatarErr &&
            <FormHelperText style={{color: 'red'}}>{avatarErr && 'The file should only be a picture'}</FormHelperText>}
        </>
    )
}

export default LoadAvatar
