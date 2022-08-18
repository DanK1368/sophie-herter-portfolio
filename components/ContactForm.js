const ContactForm = () => {
  return (
    <section className="  min-h-[80vh] p-3 ">
      <div>
        <div>
          <h1>Start A Foto Session</h1>
          <h2>Contact Me</h2>
        </div>
        <form className=" rounded-md shadow-lg shadow-slate-200 flex flex-col justify-center items-center gap-2 py-5 ">
          <div className=" w-[60%] flex flex-col justify-center items-center gap-3 ">
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
    </section>
  );
};
export default ContactForm;
