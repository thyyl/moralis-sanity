import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { TinderProvider } from "../context/TinderContext";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://ilybyfoq6xmm.usemoralis.com:2053/server"
      appId="iJjR3TApaXSEgWcohACBwj6bFzHCZSe6KNhapb5Q"
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  );
}

export default MyApp;
