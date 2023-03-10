import { Product } from "../../model/Product";

interface CardProps {
  product: Product;
}

const Card = (props: CardProps) => {
  return (
    <div className="flex justify-center m-3">
      <div className="rounded-lg shadow-lg bg-white max-w-xs">
        <img className="rounded-t-lg" src={props.product.image} alt="" />
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{props.product.name}</h5>
          <p className="text-gray-700 text-base mb-4">{props.product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
