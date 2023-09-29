import Image from "next/image";

const Slide = ({ img, ...rest }) => {
  return (
    <div className="outline-none border-none relative" {...rest}>
      <Image
        className="w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
        src={img}
        alt="banner"
        width={2000}
        height={2000}
      />
    </div>
  );
};

export default Slide;
