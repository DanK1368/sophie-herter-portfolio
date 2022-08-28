import Head from "next/head";
import Gallery from "../components/Gallery";
import { GALLERY_QUERY } from "../lib/query";

const URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

export async function getStaticProps(context) {
  const fetchParams = {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `{${GALLERY_QUERY}}`,
    }),
  };

  const res = await fetch(`${URL}/graphql`, fetchParams);
  const { data } = await res.json();

  return {
    props: data.galleries,
    revalidate: 5,
  };
}

export default function Home({ data }) {
  const images = data[0].attributes.images.data;

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

      <Gallery images={images} />
    </div>
  );
}
