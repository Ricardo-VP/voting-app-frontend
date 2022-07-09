// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const BarGraph = ({ listas }) => {
  // ** Hook
  const theme = useTheme()

  console.log(listas)

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 1,
        distributed: true,
        columnWidth: '75%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    stroke: {
      width: 2,
      colors: [theme.palette.background.paper]
    },
    legend: { show: true },
    grid: {
      strokeDashArray: 7,
      padding: {
        top: -1,
        right: 0,
        left: -12,
        bottom: 5
      }
    },
    dataLabels: { enabled: true },

    // COLORES DE BARRAS
    colors: ['#F44336', '#2E93fA', '#66DA26', '#E91E63'],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: listas?.map(lista => {
        return lista.nombre
      }),
      tickPlacement: 'on',
      labels: { show: true },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      title: {
        text: 'VOTOS'
      },
      show: true,
      tickAmount: 1,
      labels: {
        offsetX: -17,
        formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}`
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Gráfico de Barras'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        {/* DATOS DE VOTOS */}
        <ReactApexcharts
          type='bar'
          height={205}
          options={options}
          series={[
            {
              data: listas?.map(lista => {
                return lista?.votos ?? 0
              })
            }
          ]}
        />
      </CardContent>
    </Card>
  )
}

export default BarGraph
