import React, {useState} from 'react'
import FormHelperText from '@material-ui/core/FormHelperText'

const LoadAvatar = ({avatarUrl, setAvatar,}) => {
    const [avatarErr, setAvatarErr] = useState(false)

    const handleUpldChange = e => {
        const formatImg = ['jpg', 'png', 'pdf']
        if (e.target.files[0] && formatImg.includes(e.target.files[0].name.split('.')[1])) {
            setAvatar(e.target.files[0])
            setAvatarErr(false)
        } else {
            setAvatarErr(true)
        }

    }

    return (
      <React.Fragment>
          <input type='file' onChange={handleUpldChange}/>
          <img src={avatarUrl} alt="avatar" width={50} height={50}/>
          {avatarErr &&
          <FormHelperText style={{color: 'red'}}>{avatarErr && 'Format image must be jpg png pdf'}</FormHelperText>}
      </React.Fragment>
    )
}

export default LoadAvatar
