import { About, CustomerFeedback } from "../components";

export default function AboutPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-15">
        <About />
      </div>
      <CustomerFeedback />
    </>
  );
}
