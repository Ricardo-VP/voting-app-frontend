// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardMobile from 'src/views/admin/info/CardMobile'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const InfoPage = () => {
  const programadores = [
    {
      nombre: 'NIGELL MARCEL JAMA OYARVIDE - 7046',
      email: 'nigell.jama@espoch.edu.ec',
      github: 'Gokrusk',
      fotoUrl: 'https://img.icons8.com/ios/500/user--v1.png'
    },
    {
      nombre: 'FERNANDO SEBASTIAN GUERRA OCAÑA - 7046',
      email: 'fernando.guerra@espoch.edu.ec',
      github: '',
      fotoUrl: 'https://cdn-icons-png.flaticon.com/512/17/17797.png'
    }
  ]
  const indice = 1

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ paddingBottom: 5 }}>
          <Typography variant='h4'>PROGRAMADORES</Typography>
        </Grid>
      </Grid>

      <Grid key={1} container spacing={6}>
        {programadores.map(programador => (
          <Grid key={indice + 1} item xs={12} sm={6}>
            <CardMobile programador={programador} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default InfoPage
