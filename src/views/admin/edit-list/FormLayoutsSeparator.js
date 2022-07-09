// ** React Imports
import { forwardRef, useEffect, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const FormLayoutsSeparator = ({ lista, handleEditLista, loading, setLoading }) => {
  // ** States
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState({})

  useEffect(() => {
    setValues(lista)
  }, [lista])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleChangeOtrosPuestos = (index, prop, value) => {
    const array = [...values.otrosPuestos]
    array[index] = {
      ...values.otrosPuestos[index],
      [prop]: value
    }
    setValues({ ...values, otrosPuestos: array })
  }

  return (
    <Card>
      {/* <CardHeader title='Registro de Listas' titleTypographyProps={{ variant: 'h6' }} /> */}
      <Divider sx={{ margin: 0 }} />

      <form onSubmit={e => e.preventDefault()}>
        <CardContent item xs={12} sm={6}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                Datos de lista
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField value={values?.nombre} onChange={handleChange('nombre')} fullWidth />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                Miembro
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth value={values?.presidente} onChange={handleChange('presidente')} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                Cargo
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Presidente</InputLabel>
                <Select
                  disabled
                  label='Presidente'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='Presidente'>Presidente</MenuItem>
                  <MenuItem value='Vicepresidente'>Vicepresidente</MenuItem>
                  <MenuItem value='Otro'>Otro</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                Miembro
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth onChange={handleChange('vicepresidente')} value={values?.vicepresidente} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                Cargo
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Vicepresidente</InputLabel>
                <Select
                  disabled
                  label='Vicepresidente'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='Presidente'>Presidente</MenuItem>
                  <MenuItem value='Vicepresidente'>Vicepresidente</MenuItem>
                  <MenuItem value='Otro'>Otro</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {values?.otrosPuestos?.map((puesto, index) => (
              <>
                <Grid item xs={12} key={puesto?._id}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    Miembro
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    value={puesto?.nombre}
                    onChange={event => handleChangeOtrosPuestos(index, 'nombre', event.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    Cargo
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    onChange={event => handleChangeOtrosPuestos(index, 'puesto', event.target.value)}
                    value={puesto?.puesto}
                  />
                </Grid>
              </>
            ))}
          </Grid>
        </CardContent>

        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button
            onClick={handleClickOpen}
            variant='contained'
            color='success'
            sx={{ py: 1.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
          >
            editar
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogTitle id='alert-dialog-title'>{`Está seguro de editar la lista ${values?.nombre?.toUpperCase()}?`}</DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>Se editarán todos los datos</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                disabled={loading}
                onClick={async () => {
                  setLoading(true)
                  await handleEditLista(lista?._id, values)
                  handleClose()
                  setLoading(false)
                }}
                autoFocus
              >
                Editar
              </Button>
              <Button onClick={handleClose}>Cancelar</Button>
            </DialogActions>
          </Dialog>
        </CardActions>
      </form>
    </Card>
  )
}

export default FormLayoutsSeparator
