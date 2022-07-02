// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo components
import CardLista from 'src/views/admin/listas/CardLista'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const AdministrarListas = () => {

  const lista = [
    {
      nombre: 'A',
      presidente: 'Pepito',
      vicepresidente: 'tomas',
      otros: ['jaimito',', steve']
    },
    {
      nombre: 'B',
      presidente: 'matias',
      vicepresidente: 'pedro',
      otros: ['xavi', ', cinti']
    }
  ]

  const indice = 1

  return (
    <>

      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ paddingBottom: 5 }}>
            <Typography variant='h4'>LISTAS</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        {lista.map(lista=>(
          <Grid key = {indice + 1} item xs={12} sm={6} md={4}>
            <CardLista lista={lista}/>
          </Grid>
        ))}
        
        
      </Grid>

    </>
    
  )
}

export default AdministrarListas
