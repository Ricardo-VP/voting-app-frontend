// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import { useRouter } from 'next/router'
import Alert from '@mui/material/Alert'
import Dialog from '@mui/material/Dialog'
import { useState } from 'react'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

//enviar parametro de lista con info

const CardLista = ({ lista }) => {
// ** Hook
const router = useRouter()

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Card>
      {/* imagen de lista o integrantes*/}
      <CardMedia sx={{ height: '9.375rem' }} image='/images/cards/watch-on-hand.jpg' />
      <CardContent sx={{ padding: theme => `${theme.spacing(2, 5.25, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Lista: {lista?.nombre}
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>Integrantes</Typography>
        <Typography variant='body2'>Presidente: {lista?.presidente}</Typography>
        <Typography variant='body2'>Vicepresidente: {lista?.vicepresidente}</Typography>
        <Typography variant='body2'>Otros: {lista?.otros}</Typography>
      </CardContent>
      <Button
        onClick={() => router.push('/pages/admin/edit-list/')}
        variant='contained'
        sx={{ py: 1.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      >
        EDITAR
      </Button>
      <Divider sx={{ margin: 0 }} />
      <Button
        onClick={handleClickOpen}
        variant='contained'
        color='error'
        sx={{ py: 1.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      >
        ELIMINAR
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{`Está seguro de eliminar la lista ${lista?.nombre}?`}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>Se eliminaran todos los datos</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Eliminar
          </Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </Card>
  )
}

export default CardLista
