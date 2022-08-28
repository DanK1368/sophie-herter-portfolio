import Head from "next/head";
import PackageItem from "../components/PackageItem";
import { packageList } from "../lib/packages";

const packages = () => {
  return (
    <div>
      <Head>
        <title>Sofie Herter | Packages</title>
        <meta
          name="description"
          content="Different packages to suit your photography needs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-[78vh] p-4 md:max-w-[90%] md:mx-auto 2xl:max-w-[80%]">
        <h1 className=" text-3xl tracking-wider pb-4 text-center ">
          Photo Packages
        </h1>

        <div className=" w-full px-4 max-w-[1000px] mx-auto min-h-[70vh]  grid grid-cols-customAutoFitColumns gap-5 place-content-center">
          {packageList.map(item => (
            <PackageItem key={item.id} {...item} />
          ))}
        </div>
      </main>
    </div>
  );
};
export default packages;
