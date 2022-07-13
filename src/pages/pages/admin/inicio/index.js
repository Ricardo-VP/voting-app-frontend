// ** MUI Imports
import Typography from '@mui/material/Typography'
import themeConfig from 'src/configs/themeConfig'

// ** Components Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const BoxWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      width: '5vw'
    }
  }))

  const Img = styled('img')(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(20)
    }
  }))

const Dashboard = () => {
  return (
   <>
    
    <Box className='content-center'>
      <Box sx={{ px: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <Img height='100' alt='espoch-image' src='/images/pages/espoch.jpg' />
        
        
            <Typography variant='h2' sx={{ paddingTop: 5 }}>
                {themeConfig.templateName}
            </Typography>
          <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important'}}>
            PROYECTO DE SOFTWARE - ESTADÍSTICA
          </Typography>
          <Typography variant='body2'>SOFTWARE B</Typography>
        
        
      </Box>
    </Box>

   </> 
  )
}

export default Dashboard
