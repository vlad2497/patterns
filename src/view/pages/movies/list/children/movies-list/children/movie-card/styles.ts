import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)({
  borderRadius: '10px',
  padding: '15px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
})

export const Title = styled(Typography)({})
