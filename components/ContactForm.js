import Image from "next/image";
import illustration from "../public/assets/illustration.svg";

const ContactForm = () => {
  return (
    <section className="  min-h-[78vh] p-4 md:max-w-[90%] md:mx-auto 2xl:max-w-[80%]  ">
      <div className="  flex justify-center items-center flex-col ">
        <h2 className=" text-3xl tracking-wider pb-4 text-center ">
          Book Your Photo Session
        </h2>
        <h3 className=" text-center text-lg ">Contact Me</h3>
      </div>
      <div className=" flex flex-col justify-around items-center md:flex-row gap-10 ">
        <div className=" w-full md:max-w-[600px] ">
          <form className=" rounded-md shadow-lg shadow-slate-200 flex flex-col justify-center items-center gap-2 py-8 mt-5 ">
            <div className=" w-full px-3 flex flex-col justify-center items-center gap-3  ">
              <label className=" w-full ">
                <input
                  className=" w-full py-2 px-4 border-gray-300 border rounded-md tracking-wider placeholder:font-light placeholder:text-gray-500 focus:outline-none focus:border focus:border-gray-900 "
                  type="text"
                  placeholder="Name"
                  required
                />
              </label>
              <label className=" w-full ">
                <input
                  className=" w-full py-2 px-4 border-gray-300 border rounded-md tracking-wider placeholder:font-light placeholder:text-gray-500 focus:outline-none focus:border focus:border-gray-900 "
                  type="email"
                  placeholder="Email"
                  required
                />
              </label>
              <label className=" w-full ">
                <textarea
                  className=" w-full py-2 px-4 border-gray-300 border rounded-md tracking-wider placeholder:font-light placeholder:text-gray-500 focus:outline-none focus:border focus:border-gray-900 "
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                ></textarea>
              </label>
            </div>
            <button className=" btn btn-ghost border border-gray-300 ">
              Send Message
            </button>
          </form>
        </div>
        <div className="hidden max-w-lg md:block ">
          <Image src={illustration} alt="" />
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
