// ** Icon imports
import { Login, AccountPlusOutline, ClipboardListOutline, InformationVariant, Poll } from 'mdi-material-ui'

const navigation = () => {
  return [
    // {
    //   title: 'Dashboard',
    //   icon: HomeOutline,
    //   path: '/'
    // },
    // {
    //   title: 'Account Settings',
    //   icon: AccountCogOutline,
    //   path: '/account-settings'
    // },
    {
      sectionTitle: 'Registros'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      sectionTitle: 'Información'
    },
    {
      icon: AccountPlusOutline,
      title: 'Agregar lista',
      path: '/pages/add-list'
    },
    {
      icon: ClipboardListOutline,
      title: 'Listas',
      path: '/pages/listas'
    },
    {
      icon: Poll,
      title: 'Análisis de datos',
      path: '/pages/data'
    },
    {
      icon: InformationVariant,
      title: 'Info',
      path: '/pages/info'
    }    
  ]
}

export default navigation
