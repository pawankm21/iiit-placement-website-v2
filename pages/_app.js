import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseLayout from "../layout/baseLayout";
import SSRProvider from "react-bootstrap/SSRProvider";
function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </SSRProvider>
  );
}

export default MyApp;
