import Head from "next/head";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sofie Herter | Photography</title>
        <meta
          name="description"
          content="Freelance Photographer based in Wollerau, Kanton Schwyz, Switzerland specializing in portrait photography
        "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Gallery />
    </div>
  );
}
