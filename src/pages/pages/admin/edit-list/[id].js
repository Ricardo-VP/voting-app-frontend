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
import { useEffect, useState } from 'react'
import { editarLista, obtenerLista } from 'src/services/list.service'
import { CircularProgress } from '@mui/material'

const FormLayouts = () => {
  const [lista, setLista] = useState({})
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    obtenerLista(id)
      .then(res => {
        setLista(res.data?.lista)
      })
      .catch(err => {
        console.log(err)
        setLista([])
      })
  }, [id])

  const handleEditLista = async (listaId, lista) => {
    setLoading(true)
    await editarLista(listaId, lista)
    router.push('/pages/admin/listas/')
    setLoading(false)
  }

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
            {loading ? (
              <CircularProgress />
            ) : (
              <FormLayoutsSeparator
                loading={loading}
                setLoading={setLoading}
                handleEditLista={handleEditLista}
                lista={lista}
              />
            )}
          </Grid>
        </Grid>
      </DatePickerWrapper>
    </>
  )
}

export default FormLayouts
