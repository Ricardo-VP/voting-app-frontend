// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const FooterContent = () => {

  const BoxWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      width: '5vw'
    }
  }))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <BoxWrapper sx={{ px: 25}}>
        <Typography sx={{ mr: 2 }}>
          {`© ${new Date().getFullYear()}, Hecho `}
          {' por '}
          <Link target='_blank' href='https://github.com/Gokrusk/'>
            Nigell Jama
          </Link>
          {' '}y
          {' '}Sebastian Guerra
        </Typography>
      </BoxWrapper>
      
    </Box>
  )
}

export default FooterContent
