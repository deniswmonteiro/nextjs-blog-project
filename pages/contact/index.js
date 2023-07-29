import Head from "next/head"
import Contact from "../../components/Contact/Contact";

const ContactPage = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Entre em contato comigo." />
                <title>NextBlog &bull; Entre em Contato</title>
            </Head>
            <Contact />
        </>
    )
}

export default ContactPage