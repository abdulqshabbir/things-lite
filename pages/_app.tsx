import UserProvider from "../context/userContext";
import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'

const theme = {
  primaryDark: '#333',
  secondaryDark: '#444',
  primaryLight: '#eee',
  secondaryLight: '#ddd',
  fs_h1: '2.4rem',
  fs_h2: '1.6rem',
  fs_p: '1rem'
}

// Custom App to wrap it with context provider
export default function App({ Component, pageProps}: any) {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  );
}
