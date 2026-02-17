import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  /* ================= SUBMIT FUNCTION ================= */
  const onSubmit = async (e) => {
    e.preventDefault();

    setResult("Sending...");

    const formData = new FormData(e.target);

    // ✅ YOUR WEB3FORMS API KEY
    formData.append(
      "access_key",
      "da091ed8-42eb-4541-ade0-28e5cf1c5168"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("✅ Message Sent Successfully");
      e.target.reset();
    } else {
      setResult("❌ Failed to send message");
    }
  };

  return (
    <section className="min-h-screen bg-[#0b0d12] text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Let’s Build Something
            <span className="text-blue-400"> Amazing</span>
          </h1>

          <p className="mt-4 text-gray-400 text-lg">
            Have a project idea, collaboration, or just want to say hi?
            We’re ready to listen.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="mt-20 grid md:grid-cols-2 gap-14">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold">
                Contact Information
              </h2>
              <p className="text-gray-400 mt-2">
                Reach out via email, phone, or visit our office.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-lg">info@mackystech.in</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-lg">+91 8235910315</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-lg">
                  India • Remote • Global Clients
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="mt-10 rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
                alt="map"
                className="w-full h-[220px] object-cover opacity-80"
              />
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#12141b] border border-white/10 rounded-3xl p-8 space-y-6"
          >
            <h2 className="text-2xl font-semibold">
              Send Us a Message
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                required
                type="text"
                placeholder="Full Name"
                className="bg-[#0b0d12] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              />

              <input
                name="email"
                required
                type="email"
                placeholder="Email Address"
                className="bg-[#0b0d12] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full bg-[#0b0d12] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              rows="5"
              required
              placeholder="Tell us about your project..."
              className="w-full bg-[#0b0d12] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 resize-none"
            />

            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 hover:bg-blue-600 transition rounded-xl py-3 font-semibold text-white"
            >
              Send Message
            </button>

            {/* RESULT */}
            <p className="text-center text-blue-300 text-sm">
              {result}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
