import Link from "next/link";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCard = ({ id, img, title, desc, rating, price }) => {
  const renderRatingStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<AiFillStar key={i} />);
      } else {
        stars.push(<AiOutlineStar key={i} />);
      }
    }

    return <div className="flex gap-1 text-[20px] text-[#FF9529]">{stars}</div>;
  };

  return (
    <a
      className="px-4 border border-gray-200 rounded-xl max-w-[400px]"
      href={`/products/${id}`}
    >
      <div
        style={{ height: "32vh", width: "18rem" }}
        className="overflow-hidden"
      >
        <Image
          className="w-full h-auto"
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>

      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <div>{renderRatingStars(rating)}</div>

        <div className="font-bold flex gap-4">
          ${price}
          <del className="text-gray-500 font-normal">
            ${parseInt(price) + Math.floor(Math.random() * 60 + 20)}.00
          </del>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
