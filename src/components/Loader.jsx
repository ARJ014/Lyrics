import { loader } from "../assets";
const Loader = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={loader}
        alt="Loader image"
        className="w-32 h-32 object-contain"
      />
      <h2 className="text-white font-bold text-2xl mt-2">
        {title ? title : "Loading..."}
      </h2>
    </div>
  );
};

export default Loader;
