// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const FormLayoutsSeparator = ({ lista }) => {
  // ** States
  const [language, setLanguage] = useState([])
  const [date, setDate] = useState(null)

  const [values, setValues] = useState({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

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
                <TextField fullWidth label={lista?.nombre}/>
            </Grid>
              
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                Miembro
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField fullWidth label={lista?.presidente}/>
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
                <TextField fullWidth label={lista?.vicepresidente}/>
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

            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                Miembro
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField fullWidth label={lista?.otros}/>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                Cargo
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                    <InputLabel id='form-layouts-separator-select-label'>Otro</InputLabel>
                      <Select
                        label='Otro'
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

          </Grid>
          
        </CardContent>

        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            editar
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
