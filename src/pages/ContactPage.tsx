import React from "react";
import Card from "../components/card/Card";

function ContactPage() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="container mx-auto px-24">
      <h1 className="text-2xl font-bold">Welcome to the ContactPage!</h1>
      <p className="text-gray-700">This is the ContactPage of our application.</p>

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {numbers.map((number) => (
          <Card />
        ))}
      </div>
    </div>
  );
}

export default ContactPage;
