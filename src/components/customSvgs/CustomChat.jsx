import { SvgIcon } from '@mui/material'
import React from 'react'

const CustomChat = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 17 16" sx={{width:'50%',height:'50%'}}>
        <path d="M14.469 0a2.4 2.4 0 012.4 2.4v11.2a2.4 2.4 0 01-2.4 2.4h-11.2a2.4 2.4 0 01-2.4-2.4V2.4a2.4 2.4 0 012.4-2.4h11.2zm-5.6 2.77c-3.243 0-5.873 2.19-5.873 4.891.003 1.717 1.086 3.306 2.853 4.189a4.638 4.638 0 01-1.026 1.437 6.296 6.296 0 002.385-.937 6.943 6.943 0 001.661.203c3.243 0 5.873-2.19 5.873-4.892 0-2.701-2.63-4.891-5.873-4.891z" fill-rule="evenodd"></path>
    </SvgIcon>
  )
}

export default CustomChat