import { useNavigation } from '../context/navigationContext'
import styles from './HamburgerWrapper.module.css'

const HamburgerWrapper = ({children}: any) => {
  const navigation = useNavigation()
  return (
    <div
      className={`${styles.hamburgerWrapper}`}
      onClick={navigation.toggleActive}>
        {children}
    </div>
  )
}

export default HamburgerWrapper