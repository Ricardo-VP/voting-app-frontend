// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import FormLayoutsSeparator from 'src/views/admin/edit-list/FormLayoutsSeparator'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const FormLayouts = () => {

  const lista = [
    {
      nombre: 'A',
      presidente: 'Pepito',
      vicepresidente: 'Tomas',
      otros: ['jaimito', ', steven']
    },
  ]

  const indice = 1

  return (
    <>
    
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ paddingBottom: 5 }}>
            <Typography variant='h4'>EDITAR LISTA</Typography>
        </Grid>
      </Grid>
      <DatePickerWrapper>
        <Grid container spacing={6}>
          {lista.map(lista=>(
            <Grid key = {indice+1} item xs={12}>
              <FormLayoutsSeparator lista={lista}/>
            </Grid>
          ))}
          

        </Grid>
      </DatePickerWrapper>
    </>
    
  )
}

export default FormLayouts
