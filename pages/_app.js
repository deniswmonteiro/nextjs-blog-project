import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return ( 
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>NextBlog</title>
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}
