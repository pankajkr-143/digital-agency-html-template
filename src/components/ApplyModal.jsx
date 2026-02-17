import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ApplyModal({ open, onClose, position }) {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    setResult("Sending...");

    const formData = new FormData(e.target);

    // ✅ WEB3FORMS API KEY
    formData.append(
      "access_key",
      "da091ed8-42eb-4541-ade0-28e5cf1c5168"
    );

    // job title automatically send
    formData.append("position", position);

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("✅ Application Sent Successfully");
      e.target.reset();
    } else {
      setResult("❌ Failed to send");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
        >
          {/* MODAL */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-lg bg-[#0f172a] border border-blue-500/30 rounded-2xl p-8"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">
                Apply for {position}
              </h2>

              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* FORM */}
            <form onSubmit={onSubmit} className="space-y-4">

              <input
                name="name"
                required
                placeholder="Full Name"
                className="field"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="field"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                className="field"
              />

              <input
                name="resume"
                placeholder="Resume Link (Google Drive)"
                className="field"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Why should we hire you?"
                className="field"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
              >
                Submit Application
              </button>

              <p className="text-center text-blue-300 text-sm">
                {result}
              </p>
            </form>
          </motion.div>

          {/* INPUT STYLE */}
          <style>{`
            .field {
              width: 100%;
              padding: 12px;
              border-radius: 10px;
              background: #020617;
              border: 1px solid rgba(59,130,246,.4);
              color: white;
            }

            .field:focus {
              outline: none;
              border-color: #3b82f6;
              box-shadow: 0 0 10px rgba(59,130,246,.4);
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
