import { Box, Typography } from '@mui/material'
import React from 'react'
import { discountText } from './discountText'

export default function Discount() {
  return (
    <Box width={'100%'} sx={{backgroundColor:'#E03c31'}}>
        <marquee width="100%" direction="left">
            <Box display={'flex'} gap={6}>

            <Typography variant='subtitle1' sx={{color:'#fff'}} >{discountText}</Typography>
            <Typography variant='subtitle1' sx={{color:'#fff'}} >{discountText}</Typography>
            <Typography variant='subtitle1' sx={{color:'#fff'}} >{discountText}</Typography>
            </Box>
        </marquee>

    </Box>
  )
}
