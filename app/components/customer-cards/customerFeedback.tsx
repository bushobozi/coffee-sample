import { customerData } from "./data";
import CustomerCard from "./customerCard";
const customerFeedback = () => {
  return (
    <>
      <section className="w-full min-h-screen bg-orange-50 py-16 px-4 flex flex-col items-center rounded-t-4xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-15 text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-epilogue">
            Our trusted clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our mission is to drive progress and enhance the lives of our
            customers by delivering superior products and services that exceed
            expectations.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {customerData.map((customer, index) => (
            <CustomerCard key={index} {...customer} />
          ))}
        </div>
      </section>
    </>
  );
};

export default customerFeedback;
