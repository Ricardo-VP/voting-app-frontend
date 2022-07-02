// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

//enviar parametro de lista con info

const CardLista = ({ lista }) => {
  return (
    <Card>
      {/* imagen de lista o integrantes*/}
      <CardMedia sx={{ height: '9.375rem' }} image='/images/cards/watch-on-hand.jpg' />
      <CardContent sx={{ padding: theme => `${theme.spacing(2, 5.25, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
        Lista: {lista?.nombre}
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>Integrantes</Typography>
        <Typography variant='body2'>
        Presidente: {lista?.presidente}
        </Typography>
        <Typography variant='body2'>
        Vicepresidente: {lista?.presidente}
        </Typography>
      </CardContent>
      {/* <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        VOTAR
      </Button> */}
    </Card>
  )
}

export default CardLista
