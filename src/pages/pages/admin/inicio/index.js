// ** MUI Imports
import Typography from '@mui/material/Typography'
import themeConfig from 'src/configs/themeConfig'

// ** Components Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const BoxWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      width: '90vw'
    }
  }))

const Dashboard = () => {
  return (
   <>
    
    <Box className='content-center'>
      <Box sx={{ p: 39, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BoxWrapper>
            <Typography variant='h2'>
                {themeConfig.templateName}
            </Typography>
          <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
            PROYECTO DE SOFTWARE - ESTADÍSTICA
          </Typography>
          <Typography variant='body2'>SOFTWARE B</Typography>
        </BoxWrapper>
        
      </Box>
    </Box>

   </> 
  )
}

export default Dashboard
