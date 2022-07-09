// ** React Imports
import { forwardRef, useState } from 'react'

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

import { agregarLista } from 'src/services/list.service'
import router from 'next/router'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const FormLayoutsSeparator = () => {
  // ** States

  const [values, setValues] = useState({
    letra: '',
    presidenteNombre: '',
    presidenteApellido: '',
    vicepresidenteNombre: '',
    vicepresidenteApellido: '',
    otros: []
  })
  const [otrasPosiciones, setOtrasPosiciones] = useState(0)

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleChangeOtrosPuestos = (index, prop, value) => {
    const array = [...values.otros]
    array[index] = {
      ...values.otros[index],
      [prop]: value
    }
    setValues({ ...values, otros: array })
  }

  const handleSubmit = async () => {
    const lista = {
      nombre: values.letra,
      presidente: values.presidenteNombre + ' ' + values.presidenteApellido,
      vicepresidente: values.vicepresidenteNombre + ' ' + values.vicepresidenteApellido,
      otrosPuestos: values.otros?.map(puesto => {
        return {
          puesto: puesto.puesto,
          nombre: puesto.nombres + ' ' + puesto.apellidos
        }
      })
    }
    await agregarLista(lista)
    router.push('/pages/admin/listas/')
  }

  return (
    <Card>
      {/* <CardHeader title='Registro de Listas' titleTypographyProps={{ variant: 'h6' }} /> */}
      <Divider sx={{ margin: 0 }} />

      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                Datos de lista
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                values={values.letra}
                onChange={handleChange('letra')}
                inputProps={{ maxLength: 1 }}
                fullWidth
                label='Letra'
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                Integrantes
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id='select-presidente'>Cargo</InputLabel>
                <Select
                  disabled
                  label='Cargo'
                  defaultValue={'Presidente'}
                  id='select-presidente'
                  labelId='select-presidente'
                >
                  <MenuItem selected value='Presidente'>
                    Presidente
                  </MenuItem>
                  <MenuItem value='Vicepresidente'>Vicepresidente</MenuItem>
                  <MenuItem value='Otro'>Otro</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ marginY: -3 }}></Grid>
            <Grid item xs={12} md={6}>
              <TextField
                value={values.presidenteNombre}
                onChange={handleChange('presidenteNombre')}
                inputProps={{ maxLength: 50 }}
                fullWidth
                label='Nombres'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                inputProps={{ maxLength: 50 }}
                value={values.presidenteApellido}
                onChange={handleChange('presidenteApellido')}
                fullWidth
                label='Apellidos'
              />
            </Grid>
            <Grid item xs={12}></Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Cargo</InputLabel>
                <Select
                  disabled
                  label='Cargo'
                  defaultValue={'Vicepresidente'}
                  id='select-vicepresidente'
                  labelId='select-vicepresidente'
                >
                  <MenuItem value='Presidente'>Presidente</MenuItem>
                  <MenuItem selected value='Vicepresidente'>
                    Vicepresidente
                  </MenuItem>
                  <MenuItem value='Otro'>Otro</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ marginY: -3 }}></Grid>
            <Grid item xs={12} md={6}>
              <TextField
                value={values.vicepresidenteNombre}
                onChange={handleChange('vicepresidenteNombre')}
                inputProps={{ maxLength: 50 }}
                fullWidth
                label='Nombres'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                inputProps={{ maxLength: 50 }}
                value={values.vicepresidenteApellido}
                onChange={handleChange('vicepresidenteApellido')}
                fullWidth
                label='Apellidos'
              />
            </Grid>

            {/* Otras posiciones */}
            {[...Array(otrasPosiciones).keys()].map(posicion => (
              <>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label='Cargo'
                    onChange={event => handleChangeOtrosPuestos(posicion, 'puesto', event.target.value)}
                    inputProps={{ maxLength: 25 }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ marginY: -3 }}></Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    onChange={event => handleChangeOtrosPuestos(posicion, 'nombres', event.target.value)}
                    inputProps={{ maxLength: 50 }}
                    fullWidth
                    label='Nombres'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    inputProps={{ maxLength: 50 }}
                    onChange={event => handleChangeOtrosPuestos(posicion, 'apellidos', event.target.value)}
                    fullWidth
                    label='Apellidos'
                  />
                </Grid>
              </>
            ))}

            <Grid item xs={12}>
              <Button
                size='large'
                sx={{ mr: 2 }}
                variant='text'
                onClick={() => setOtrasPosiciones(otrasPosiciones + 1)}
              >
                Agregar integrante
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' onClick={handleSubmit} sx={{ mr: 2 }} variant='contained'>
            Agregar
          </Button>
          <Button size='large' color='secondary' variant='outlined'>
            Cancelar
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default FormLayoutsSeparator
