import { AiFillCheckCircle } from "react-icons/ai";

const PackageItem = ({ title, description, price, features }) => {
  return (
    <article className="min-h-[500px] p-10 bg-slate-100 flex flex-col justify-between items-center shadow-md shadow-gray-200 ">
      <div className=" grid gap-5 ">
        <div>
          <h2 className=" text-xl ">{title}</h2>
          <p className=" text-sm font-light ">{description}</p>
        </div>
        <h3 className=" text-2xl font-extralight ">CHF {price}.-</h3>
      </div>

      <div className=" flex flex-col gap-2 pt-10 h-full ">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className=" flex justify-start items-center gap-2 text-sm "
          >
            <AiFillCheckCircle />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </article>
  );
};
export default PackageItem;
