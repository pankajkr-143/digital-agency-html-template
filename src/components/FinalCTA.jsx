import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#12141a] text-white text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Build Your Project?
      </h2>
      <p className="text-gray-400 mb-6">
        Let’s turn your idea into a scalable digital product.
      </p>

      <Link
        to="/contact"
        className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
      >
        Contact Us
      </Link>
    </section>
  );
}
