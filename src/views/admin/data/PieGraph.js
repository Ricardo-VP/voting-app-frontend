// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const PieGraph = ({ listas }) => {
  // ** Hook
  const theme = useTheme()

  const options = {
    series: listas?.map(lista => {
      return lista?.votos ?? 0
    }),
    options: {
      chart: {
        width: 380,
        type: 'pie'
      },
      labels: listas?.map(lista => {
        return lista?.nombre
      })
    }
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
        <ReactApexcharts type='pie' height={300} options={options} series={options.series} />
      </CardContent>
    </Card>
  )
}

export default PieGraph
