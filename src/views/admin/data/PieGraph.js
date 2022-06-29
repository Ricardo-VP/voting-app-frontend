// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const PieGraph = () => {
  // ** Hook
  const theme = useTheme()

    const options = {
        chart: {
            type: "pie",
            width: 600,
            parentHeightOffset: 0,
          },
          plotOptions: {
            pie: {
                labels: ['A','B','C','D'],
                donut: {
                  size: '65%'
                },
                expandOnClick: true
              }
          },
          stroke: {
            width: 2,
            colors: [theme.palette.background.paper]
          },
          legend: { show: true },
          
          dataLabels: { enabled: true },
        
        
    }    

  return (
    <Card>
      <CardHeader
        title='Gráfico de Pastel'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
      />
      <CardContent>
        
        {/* DATOS DE VOTOS */}
        <ReactApexcharts type='pie' height={205} options={options} series={[{ data: [100, 57, 45, 75] }]} />
        
      </CardContent>
       
      
    </Card>
  )
}

export default PieGraph
