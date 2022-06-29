// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// ** Demo Components Imports
import WeeklyOverview from 'src/views/data/WeeklyOverview'
import PieGraph from 'src/views/data/PieGraph'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const AnalisisData = () => {
  return (
    <>
    
    <Grid container spacing={6}>
        <Grid item xs={12} sx={{ paddingBottom: 5 }}>
            <Typography variant='h4'>ANÁLISIS DE DATOS</Typography>
        </Grid>
    </Grid>
    <Grid item xs={6}>
      <Grid item xs={12} md={6} lg={4}>
        <WeeklyOverview />
      </Grid>
    </Grid>
    <Divider sx={{ my: 5 }}></Divider>
    <Grid item xs={6}>
      <Grid item xs={12} md={6} lg={4}>
        <PieGraph />
      </Grid>
    </Grid>
    </>
  )
}

export default AnalisisData
