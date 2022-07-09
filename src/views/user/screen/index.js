// ** React Imports
import { useState } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const LoginPage = () => {
  // ** State
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  // ** Hook
  const theme = useTheme()
  const router = useRouter()

  const BoxWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      width: '90vw'
    }
  }))

  return (
    <Box className='content-center'>
      <Box sx={{ p: 39, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BoxWrapper>
            <Typography variant='h2'>
                GRACIAS POR PARTICIPAR
            </Typography>
          <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
            VOTO REALIZADO
          </Typography>
        </BoxWrapper>
        
      </Box>
    </Box>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default LoginPage
