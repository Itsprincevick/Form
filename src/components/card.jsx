
// eslint-disable-next-line react/prop-types
const Card = ({ image, logo, title, description, name }) => {
  

  return (
    <div
      className="w-[596px] h-[712px] bg-contain bg-no-repeat relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <img
        src={logo}
        alt="logo"
        className="w-[173.82px] h-[37.93px] absolute top-[60px] left-14"
      />

      <div
        className=" w-auto absolute  top-[430px] left-10 text-white"
        style={{ width: "420px" }}
      >
        <p className="h-24 font-medium text-3xl font-sans leading-10">
          {title}
        </p>
        <p
          className="font-normal text-xs tracking-tighter leading-6"
          style={{ height: "78px" }}
        >
          {description}
        </p>
        <p className="font-normal text-base mt-4">{name}</p>
      
      </div>
    </div>
  );
};

export default Card;
