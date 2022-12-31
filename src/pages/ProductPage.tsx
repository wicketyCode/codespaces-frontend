import React from "react";
import Card from "../components/card/Card";
import { useEffect, useState } from "react";
import AxiosWrapper from "../wrappers/AxiosWrapper";
import { Product } from "../model/Product";
import { Link } from "react-router-dom";

function ProductPage() {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const axiosWrapper = new AxiosWrapper("http://localhost:4000");

    axiosWrapper
      .get("/products").then((response: { data: any }) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="text-center">
        <h1 className="font-amalia font-bold text-4xl text-primary">T-shirts & polos for men</h1>
        <p className="font-work-sans-medium text-base text-grey-3">
          This is the ContactPage of our application.
        </p>
      </div>
      <div className="mt-6 grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8">
        {products?.map((product: Product) => (
          <Link
            key={product.id}
            to={"details/"+product.id}>
            <Card product={product} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default ProductPage;
