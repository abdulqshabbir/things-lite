import styles from './NavigationWrapper.module.css'
import { useNavigation } from '../context/navigationContext'

const NavigationWrapper = ({className, children}: any) => {
  const { isActive } = useNavigation()
  const classes = `${isActive ? styles.active : styles.inactive}`

  return <div className={classes}>{children}</div>
}

export default NavigationWrapper