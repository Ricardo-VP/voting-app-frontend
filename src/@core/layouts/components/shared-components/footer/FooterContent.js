// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  // const hidden = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, Hecho `}
        {' por '}
        <Link target='_blank' href='https://github.com/Gokrusk/'>
          Nigell Jama
        </Link>
        {' '}y
        {' '}Sebastian Guerra
      </Typography>
    </Box>
  )
}

export default FooterContent
