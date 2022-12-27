import React from "react";
import Card from "../components/card/Card";

function ContactPage() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome to the ContactPage!</h1>
        <p className="text-gray-700">This is the ContactPage of our application.</p>
      </div>
      <div className="mt-6 grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8">
        {numbers.map((number) => (
          <Card />
        ))}
      </div>
    </>
  );
}

export default ContactPage;
