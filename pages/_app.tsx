import UserProvider from "../context/userContext";

// Custom App to wrap it with context provider
export default function App({ Component, pageProps}: any) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
