import React from "react";
import { useEffect, useState } from "react";
import AxiosWrapper from "../wrappers/AxiosWrapper";
import { ProductDetails } from '../model/ProductDetails';
import { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/outline";
import { RadioGroup } from "@headlessui/react";
import { Color } from "../model/Color";



function ProductDetailsPage() {

  const [productDetails, setProductDetails] = useState<ProductDetails>();
  const [selectedColor, setSelectedColor] = useState<Color>()
  //const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  const { id } = useParams();


  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  useEffect(() => {


    const axiosWrapper = new AxiosWrapper("http://localhost:4000");

    axiosWrapper.get('/products/details/' + id)
      .then((response: { data: any; }) => {
        console.log(response.data);
        setProductDetails(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });


  }, []);

  return (


    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8">

      <div className="">
        <img className="rounded-t-lg border-2 border-stone-900" src={productDetails?.images[0]} alt="" />
      </div>
      <div className="p-10">

        <p className="text-gray-700">{productDetails?.brand}</p>
        <h1 className="text-2xl font-bold">{productDetails?.name} - {productDetails?.description}</h1>

        <h1 className="text-2xl text-gray-700">Fra {productDetails?.price} kr.</h1>

        <div className="mt-6">
          <div className="flex items-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    productDetails?.reviewsTotal?.average || 0 > rating ? 'text-gray-900' : 'text-gray-200',
                    'h-5 w-5 flex-shrink-0'
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <a href={productDetails?.reviewsTotal.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
              {productDetails?.reviewsTotal.totalCount} reviews
            </a>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-900">Color</h3>

          <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
            <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
            <div className="flex items-center space-x-3">
              {productDetails?.colors.map((color) => (
                <RadioGroup.Option
                  key={color.name}
                  value={color}
                  className={({ active, checked }) =>
                    classNames(
                      color.selectedClass,
                      active && checked ? 'ring ring-offset-1' : '',
                      !active && checked ? 'ring-2' : '',
                      '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                    )
                  }
                >
                  <RadioGroup.Label as="span" className="sr-only">
                    {' '}
                    {color.name}{' '}
                  </RadioGroup.Label>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      color.class,
                      'h-8 w-8 border border-black border-opacity-10 rounded-full'
                    )}
                  />
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>

      </div>

    </div>

  );
}

export default ProductDetailsPage;
