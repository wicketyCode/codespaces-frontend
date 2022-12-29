import React from "react";
import { useEffect, useState } from "react";
import AxiosWrapper from "../wrappers/AxiosWrapper";
import { ProductDetails } from '../model/ProductDetails';



function ProductDetailsPage() {
  const [productDetails, setProductDetails] = useState<ProductDetails>();

  useEffect(() => {


    const axiosWrapper = new AxiosWrapper("http://localhost:4000");

    axiosWrapper.get('/products/details/1')
      .then((response: { data: any; }) => {
        console.log(response.data);
        setProductDetails(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });


  }, []);

  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl font-bold">{productDetails?.name}</h1>
        <p className="text-gray-700">{productDetails?.description}</p>
      </div>
      <div className="mt-6 grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8">
        {
          <div key={productDetails?.id}>
     
          </div>
        }

      </div>
    </>
  );
}

export default ProductDetailsPage;
