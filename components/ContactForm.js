import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import illustration from "../public/assets/illustration.svg";

const ContactForm = () => {
  const form = useRef();
  const [inputValues, setInputValues] = useState({
    user_name: "",
    user_mobile: "",
    user_email: "",
    user_message: "",
  });

  const handleInputValues = e => {
    setInputValues(prevValues => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID}`,
        form.current,
        `${process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY}`
      )
      .then(
        result => {
          if (result.status === 200) {
            setInputValues({
              user_name: "",
              user_mobile: "",
              user_email: "",
              user_message: "",
            });
          }
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <main className="  min-h-[78vh] p-4 md:max-w-[90%] md:mx-auto 2xl:max-w-[80%]  ">
      <div className="  flex justify-center items-center flex-col ">
        <h1 className=" text-3xl tracking-wider pb-4 text-center ">
          Book Your Photo Session
        </h1>
        <h3 className=" text-center text-lg ">Contact Me</h3>
      </div>
      <div className=" flex flex-col justify-around items-center md:flex-row gap-10 ">
        <div className=" w-full md:max-w-[600px] ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" rounded-md shadow-lg shadow-slate-200 flex flex-col justify-center items-center gap-2 py-8 mt-5 "
          >
            <div className=" w-[80%] px-3 flex flex-col justify-center items-center gap-3  ">
              <label className=" w-full ">
                <input
                  className=" w-full   py-2 px-4 border-gray-300 border-b tracking-wider placeholder:font-light placeholder:text-gray-500 focus:outline-none  focus:border-b-gray-900 "
                  type="text"
                  placeholder="Name"
                  required
                  name="user_name"
                  value={inputValues.user_name}
                  onChange={handleInputValues}
                />
              </label>
              <label className=" w-full ">
                <input
                  className=" w-full  py-2 px-4 border-gray-300 border-b tracking-wider placeholder:font-light placeholder:text-gray-500 focus:outline-none  focus:border-b-gray-900 "
                  type="text"
                  placeholder="Mobile"
                  name="user_mobile"
                  value={inputValues.user_mobile}
                  onChange={handleInputValues}
                />
              </label>
              <label className=" w-full ">
                <input
                  className="w-full  py-2 px-4 border-gray-300 border-b tracking-wider placeholder:font-light placeholder:text-gray-500 focus:outline-none  focus:border-b-gray-900  "
                  type="email"
                  name="user_email"
                  value={inputValues.user_email}
                  placeholder="Email"
                  required
                  onChange={handleInputValues}
                />
              </label>
              <label className=" w-full ">
                <textarea
                  className=" w-full my-6 py-2 px-4 border-gray-300 border rounded-md tracking-wider placeholder:font-light placeholder:text-gray-500 focus:outline-none focus:border focus:border-gray-900 "
                  cols="30"
                  rows="7"
                  name="user_message"
                  required
                  value={inputValues.user_message}
                  placeholder="Your message goes here..."
                  onChange={handleInputValues}
                ></textarea>
              </label>
            </div>
            <button
              type="submit"
              className=" bg-[#2f2e41] text-white btn w-[70%] rounded-full border-none hover:bg-[#e1e6ec] hover:text-[#2f2e41] "
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="hidden max-w-lg md:block ">
          <Image src={illustration} alt="" />
        </div>
      </div>
    </main>
  );
};
export default ContactForm;
