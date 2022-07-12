// ** Icon imports
import { HomeOutline, AccountPlusOutline, ClipboardListOutline, InformationVariant, Poll } from 'mdi-material-ui'

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
