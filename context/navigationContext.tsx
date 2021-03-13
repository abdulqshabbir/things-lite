import { useState, useContext, createContext } from "react";

interface INavigation {
  isActive: boolean,
  toggleActive: () => void
}

export const NavigationContext = createContext<INavigation>({} as INavigation);

export default function NavigationContextComponent({ children }: any) {
  // isOpen will control whether the navigation menu is active
  const [isActive, setIsActive] = useState<boolean>(false);

  function toggleActive() {
      setIsActive(prevState => !prevState)
  }

  return (
    <NavigationContext.Provider value={{ isActive, toggleActive }}>
      {children}
    </NavigationContext.Provider>
  );
}

// Custom hook that shorthands the context!
export const useNavigation = () => useContext(NavigationContext);
