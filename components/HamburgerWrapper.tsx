import { useState } from "react";
import styles from './HamburgerWrapper.module.css'

const HamburgerWrapper = ({children}: any) => {
  const [isActive, setIsActive] = useState(false)
  function activateHamburgerMenu() {
    setIsActive(true)
  }
  return (
    <div
      className={`${styles.hamburgerWrapper}`}
      onClick={activateHamburgerMenu}>
        {children}
    </div>
  )
}

export default HamburgerWrapper