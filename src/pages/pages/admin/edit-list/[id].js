// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import FormLayoutsSeparator from 'src/views/admin/edit-list/FormLayoutsSeparator'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

import { useRouter } from 'next/router'
import { editarLista } from '../edit-list/services'
import { useEffect, useState } from 'react'
import { obtenerLista } from '../../admin/edit-list/services'

const FormLayouts = () => {

  const [listas, setListas] = useState([])
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const { id } = router.query
  
  useEffect((id) => {
    obtenerLista(id)
      .then(res => {
        setListas(res.data?.listas)
      })
      .catch(err => {
        console.log(err)
        setListas([])
      })
  }, [])

  const handleEditLista = async listaId => {
    setLoading(true)
    await editarLista(listaId)
    await fetchLista(listaId)
    setLoading(false)
  }

  const fetchLista = async listaId => {
    await obtenerLista(listaId)
      .then(res => {
        setListas(res.data?.listas)
      })
      .catch(err => {
        console.log(err)
        setListas([])
      })
  }

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
          
            <Grid item xs={12}>
              <FormLayoutsSeparator loading={loading} setLoading={setLoading} handleEditLista={handleEditLista} listas={listas}/>
            </Grid>
          
        </Grid>
      </DatePickerWrapper>
    </>
  )
}

export default FormLayouts
