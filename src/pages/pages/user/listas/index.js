import { useEffect, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo components
import CardLista from 'src/views/user/listas/CardLista'

import { obtenerListas } from 'src/services/list.service'

const AdministrarListas = () => {
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

  const indice = 1

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ paddingBottom: 5 }}>
          <Typography variant='h4'>LISTAS</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        {listas?.map(lista => (
          <Grid key={indice + 1} item xs={12} sm={6} md={4}>
            <CardLista lista={lista} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default AdministrarListas
