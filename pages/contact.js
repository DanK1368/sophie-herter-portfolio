import Head from "next/head";
import ContactForm from "../components/ContactForm";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Sofie Herter | Contact Me</title>
        <meta
          name="description"
          content="Book a session by submitting the contact form"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactForm />
    </div>
  );
};
export default contact;
