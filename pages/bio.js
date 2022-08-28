import Head from "next/head";
import Image from "next/image";
import bioImage from "../public/assets/bioImage.jpg";

const bio = () => {
  return (
    <div>
      <Head>
        <title>Sofie Herter | Biography</title>
        <meta
          name="description"
          content="A short summary about myself and the motivation and goals behind the work i do"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" min-h-[78vh]  p-4 md:max-w-[90%] md:mx-auto 2xl:max-w-[80%]   ">
        <div className="  flex justify-center items-center flex-col ">
          <h2 className=" text-3xl tracking-widest pb-4 text-center ">
            BIOGRAPHY
          </h2>
        </div>

        <div className=" pt-10 flex flex-col justify-around items-center md:flex-row gap-10 ">
          <div className=" max-w-lg md:block ">
            <Image src={bioImage} alt="" />
          </div>
          <div className=" w-full md:max-w-[600px] ">
            <div className="text-sm text-center flex flex-col gap-3 justify-center md:text-left md:text-md xl:text-[18px] leading-7 ">
              <h3>Hello Everyone!</h3>
              <p>Welcome to my page</p>
              <p>
                I am a passionate photographer based in Wollerau, Switzerland.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos nostrum expedita sit dolorem pariatur eaque tempore.
                Nobis rerum possimus beatae molestiae quia cupiditate
                dignissimos aut fuga aliquam, doloribus omnis reiciendis!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default bio;
