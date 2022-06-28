// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardMobile from 'src/views/info/CardMobile'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const InfoPage = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ paddingBottom: 5 }}>
            <Typography variant='h4'>PROGRAMADORES</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        
          <Grid item xs={12} sm={6} >
            <CardMobile />
          </Grid>
          <Grid item xs={12} sm={6} >
            <CardMobile />
          </Grid>

      </Grid>
    </>
    
  )
}

export default InfoPage
