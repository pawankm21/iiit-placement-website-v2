import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import BaseLayout from "../layout/baseLayout";
import { ThemeProvider } from "react-bootstrap";
export default function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </SSRProvider>
  );
}
