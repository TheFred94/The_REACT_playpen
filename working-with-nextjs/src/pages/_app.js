import "@/styles/globals.css";
import Layout from "@/components/Layout";
import App from "next/app";

export default function MyApp({ Component, pageProps, navData }) {
  return (
    <>
      <Layout navData={navData}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // Provide the appContext, in order to do 404's
  const appProps = await App.getInitialProps(appContext);
  const res = await fetch("https://bucolic-bombolone-857476.netlify.app/api/dogs/");
  const navData = await res.json();
  console.log(navData);
  return { ...appProps, navData };
};
