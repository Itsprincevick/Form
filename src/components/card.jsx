
// eslint-disable-next-line react/prop-types
const Card = ({ image, logo, title, description, name }) => {
  /**
   * Returns a div element with a background image and absolute positioning.
   * The background image is set using the 'image' prop.
   */
  return (
    <div
      className="w-[540px] h-[712px] bg-contain bg-no-repeat relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/**
       * Renders an img element with the 'logo' prop as the source.
       * The image is positioned absolutely with top and left offsets.
       */}
      <img
        src={logo}
        alt="logo"
        className="w-[173.82px] h-[37.93px] absolute top-[60px] left-14"
      />

      {/**
       * Renders a div element with absolute positioning and a white text color.
       * The div contains three p elements with the 'title', 'description', and 'name' props.
       */}
      <div
        className=" w-auto absolute  top-[430px] left-10 text-white"
        style={{ width: "420px" }}
      >
        {/**
         * Renders a p element with the 'title' prop and font styles.
         */}
        <p className="h-24 font-medium text-3xl font-sans leading-10">
          {title}
        </p>
        {/**
         * Renders a p element with the 'description' prop and font styles.
         * The element has a fixed height of 78px.
         */}
        <p
          className="font-normal text-xs tracking-tighter leading-6"
          style={{ height: "78px" }}
        >
          {description}
        </p>
        {/**
         * Renders a p element with the 'name' prop and font styles.
         * The element has a margin top of 4px.
         */}
        <p className="font-normal text-base mt-4">{name}</p>
      </div>
    </div>
  );
};

export default Card;