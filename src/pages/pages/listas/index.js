// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo components
import CardAppleWatch from 'src/views/listas/CardAppleWatch'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const AdministrarListas = () => {
  return (
    <>
      <p>Listas</p>
    <Grid container spacing={6}>
      
    <Grid item xs={12} sm={6} md={4}>
        <CardAppleWatch />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
        <CardAppleWatch />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
        <CardAppleWatch />
    </Grid>
    </Grid>
    </>
    

  )
}

export default AdministrarListas
