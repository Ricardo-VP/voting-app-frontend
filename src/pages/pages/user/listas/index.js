// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo components
import CardLista from 'src/views/user/listas/CardLista'


const AdministrarListas = () => {
  return (
    <>

      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ paddingBottom: 5 }}>
            <Typography variant='h4'>LISTAS</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        
        <Grid item xs={12} sm={6} md={4}>
            <CardLista />
        </Grid>
        
      </Grid>

    </>
    
  )
}

export default AdministrarListas
