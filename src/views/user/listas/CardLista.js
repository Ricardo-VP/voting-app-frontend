// ** Next Imports
import { useRouter } from 'next/router'

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useEffect, useState } from 'react'

import { estadoVoto, registrarVoto } from 'src/services/user.service'

//enviar parametro de lista con info

const CardLista = ({ lista }) => {
  // ** Hook
  const router = useRouter()

  // ** Custom
  const [votoHabilitado, setVotoHabilitado] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    estadoVoto()
      .then(res => {
        setVotoHabilitado(res.data?.habilitado)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Card>
      {/* imagen de lista o integrantes*/}
      <CardMedia sx={{ height: '9.375rem' }} image='/images/cards/watch-on-hand.jpg' />
      <CardContent sx={{ padding: theme => `${theme.spacing(2, 5.25, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Lista: {lista?.nombre.toUpperCase()}
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>Integrantes</Typography>
        <Typography variant='body2'>Presidente: {lista?.presidente}</Typography>
        <Typography variant='body2'>Vicepresidente: {lista?.vicepresidente}</Typography>
        {lista?.otrosPuestos.map(puesto => (
          <Typography key={puesto?._id} variant='body2' sx={{ textTransform: 'capitalize' }}>
            {puesto?.puesto}: {puesto?.nombre}
          </Typography>
        ))}
      </CardContent>
      <Button
        disabled={!votoHabilitado || loading}
        onClick={async () => {
          setLoading(true)
          const user = JSON.parse(localStorage.getItem('user'))
          await registrarVoto(lista?._id, user?.token.token)
          setLoading(false)
        }}
        variant='contained'
        sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      >
        {!votoHabilitado ? 'Voto registrado' : 'Votar'}
      </Button>
    </Card>
  )
}

export default CardLista
