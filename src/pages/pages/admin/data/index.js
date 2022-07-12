// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import BarGraph from 'src/views/admin/data/BarGraph'
import PieGraph from 'src/views/admin/data/PieGraph'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

import { useEffect, useState } from 'react'
import { obtenerListas } from 'src/services/list.service'

const AnalisisData = () => {
  const [listas, setListas] = useState([])

  useEffect(() => {
    obtenerListas()
      .then(res => {
        setListas(res.data?.listas)
      })
      .catch(err => {
        console.log(err)
        setListas([])
      })
  }, [])

  return (
    
    <ApexChartWrapper>

    <Grid container spacing={6}>
        <Grid item xs={12} sx={{ paddingBottom: 5 }}>
          <Typography variant='h4'>ANÁLISIS DE DATOS</Typography>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid item xs={12} md={6} lg={4}>
          <BarGraph listas={listas} />
        </Grid>
      </Grid>
      <Divider sx={{ my: 5 }}></Divider>
      <Grid item xs={6}>
        <Grid item xs={12} md={6} lg={4}>
          <PieGraph listas={listas} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
    
  )
}

export default AnalisisData
