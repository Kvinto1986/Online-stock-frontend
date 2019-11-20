import React from 'react'

const LoadAvatar = ({avatarUrl, handleUpldChange}) => {
    return (
      <React.Fragment>
          <input type='file' onChange={handleUpldChange}/>
          <img src={avatarUrl} alt="avatar" width={50} height={50}/>
      </React.Fragment>
      )
}

export default LoadAvatar
