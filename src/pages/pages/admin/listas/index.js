import { useEffect, useState } from 'react'
import { obtenerListas } from '../../admin/listas/services'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo components
import CardLista from 'src/views/admin/listas/CardLista'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import { eliminarLista } from './services'

const AdministrarListas = () => {
  const [listas, setListas] = useState([])
  const [loading, setLoading] = useState(false)

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

  const handleDeleteLista = async listaId => {
    setLoading(true)
    await eliminarLista(listaId)
    await fetchListas()
    setLoading(false)
  }

  const fetchListas = async () => {
    await obtenerListas()
      .then(res => {
        setListas(res.data?.listas)
      })
      .catch(err => {
        console.log(err)
        setListas([])
      })
  }

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ paddingBottom: 5 }}>
          <Typography variant='h4'>{listas?.length > 0 ? 'Listas' : 'Aún no hay listas registradas'}</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        {listas?.map(lista => (
          <Grid key={indice + 1} item xs={12} sm={6} md={4}>
            <CardLista loading={loading} setLoading={setLoading} handleDeleteLista={handleDeleteLista} lista={lista} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default AdministrarListas
