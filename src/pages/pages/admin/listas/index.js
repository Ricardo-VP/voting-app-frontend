import { useEffect, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo components
import CardLista from 'src/views/admin/listas/CardLista'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

import { eliminarLista, obtenerListas } from 'src/services/list.service'
import { CircularProgress } from '@mui/material'
import CardInfluencer from 'src/views/cards/CardInfluencer'
import CardVerticalRatings from 'src/views/cards/CardVerticalRatings'
import CardMembership from 'src/views/cards/CardMembership'
import CardAppleWatch from 'src/views/cards/CardAppleWatch'
import CardSupport from 'src/views/cards/CardSupport'
import CardNavigation from 'src/views/cards/CardNavigation'
import CardNavigationCenter from 'src/views/cards/CardNavigationCenter'

const AdministrarListas = () => {
  const [listas, setListas] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    obtenerListas()
      .then(res => {
        setLoading(true)
        setListas(res.data?.listas)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setListas([])
      })
  }, [])

  const indice = 1

  const handleDeleteLista = async listaId => {
    setLoading(true)
    await eliminarLista(listaId)
    await fetchListas()
    setLoading(false)
  }

  const fetchListas = async () => {
    await obtenerListas()
      .then(res => {
        setLoading(true)
        setListas(res.data?.listas)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setListas([])
      })
  }

  return (
    
    <Grid container spacing={6}>

      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
          {loading === true ? (
            <CircularProgress />
          ) : (
            <Typography variant='h4'>{listas?.length > 0 ? 'Listas' : 'Aún no hay listas registradas'}</Typography>
          )}
      </Grid>
      {listas?.map(lista => (
          <Grid key={indice + 1} item xs={12} sm={6} md={4}>
            <CardLista loading={loading} setLoading={setLoading} handleDeleteLista={handleDeleteLista} lista={lista} />
          </Grid>
        ))}
      
    </Grid>
    
  )
}

export default AdministrarListas
