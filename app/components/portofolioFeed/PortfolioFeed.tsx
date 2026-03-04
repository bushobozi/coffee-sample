"use client";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2015",
    title: "Roots in Mbale",
    description:
      "Founded in the heart of Mount Elgon, we started with a small cooperative of 50 farmers dedicated to organic Arabica coffee.",
  },
  {
    year: "2017",
    title: "Global Horizons",
    description:
      "Achieved our first direct export container to Germany, marking the beginning of our international trade journey.",
  },
  {
    year: "2019",
    title: "Processing Excellence",
    description:
      "Inaugurated our state-of-the-art washing station and dry mill in Kampala, increasing our processing capacity to 50 tons per day.",
  },
  {
    year: "2021",
    title: "Certified Sustainability",
    description:
      "Awarded Fair Trade and Rainforest Alliance certifications, solidifying our commitment to ethical sourcing and environmental stewardship.",
  },
  {
    year: "2023",
    title: "Community Impact",
    description:
      "Expanded our partner network to over 10,000 farmers across Uganda, launching the 'Coffee for Education' initiative.",
  },
];

const PortfolioFeed = () => {
  return (
    <section className="py-20 bg-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            From the slopes of Mount Elgon to cups around the world, trace our
            path of growth and passion for Ugandan coffee.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 w-full md:w-1/2 p-6">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
                    <span className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Dot on the line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow hidden md:block" />

                <div className="flex-1 w-full md:w-1/2 p-6 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioFeed;
