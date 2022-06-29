// ** Icon imports
import { Login, HomeOutline, AccountPlusOutline, ClipboardListOutline, InformationVariant, Poll } from 'mdi-material-ui'

const navigation = () => {
  return [
    {
      sectionTitle: 'Inicio'
    },
    {
      title: 'Pantalla Principal',
      icon: HomeOutline,
      path: '/pages/admin/inicio'
    },
    {
      sectionTitle: 'Registros'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/admin/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/admin/register',
      openInNewTab: true
    },
    {
      sectionTitle: 'Información'
    },
    {
      icon: AccountPlusOutline,
      title: 'Agregar lista',
      path: '/pages/admin/add-list'
    },
    {
      icon: ClipboardListOutline,
      title: 'Listas',
      path: '/pages/admin/listas'
    },
    {
      icon: Poll,
      title: 'Análisis de datos',
      path: '/pages/admin/data'
    },
    {
      icon: InformationVariant,
      title: 'Info',
      path: '/pages/admin/info'
    }    
  ]
}

export default navigation
