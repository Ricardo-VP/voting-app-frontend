// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import FormLayoutsSeparator from 'src/views/admin/add-list/FormLayoutsSeparator'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const FormLayouts = () => {
  return (
    
    <DatePickerWrapper>
      
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ paddingBottom: 5 }}>
            <Typography variant='h4'>AGREGAR LISTA</Typography>
        </Grid>
      </Grid>
      
        <Grid container spacing={6}>
          
          <Grid item xs={12}>
            <FormLayoutsSeparator />
          </Grid>
        </Grid>

    </DatePickerWrapper>

  )
}

export default FormLayouts
