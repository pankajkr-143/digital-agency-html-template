import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function VerifyCertificate() {
  const { verifyCertificate } = useAuth();
  const [id, setId] = useState("");

  const cert = id ? verifyCertificate(id) : null;

  return (
    <div className="min-h-screen bg-black mt-[-6.3%] flex items-center justify-center px-4">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />

      <div
        className="
        relative w-full max-w-md
        bg-[#0f1117]/90
        backdrop-blur-xl
        border border-white/10
        rounded-2xl
        p-8
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
      "
      >
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Verify Certificate
        </h2>

        {/* Input */}
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Certificate Serial Number"
          className="
            w-full
            bg-black/40
            border border-white/10
            text-white
            placeholder-gray-500
            p-3 rounded-lg
            outline-none
            focus:border-blue-500
            focus:ring-1 focus:ring-blue-500
            transition
          "
        />

        {/* RESULT */}
        {id && (
          <div className="mt-6">
            {cert ? (
              <div className="space-y-2 text-sm bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                <p className="font-semibold text-green-400 text-lg">
                  ✅ Certificate Verified
                </p>

                <p className="text-gray-300">
                  Serial Number: <b className="text-white">{cert.serialNumber}</b>
                </p>

                <p className="text-gray-300">
                  Name: <b className="text-white">{cert.name}</b>
                </p>

                <p className="text-gray-400">Course: {cert.course}</p>
                <p className="text-gray-400">College: {cert.college}</p>
                <p className="text-gray-400">Issue Date: {cert.dateOfIssue}</p>
                <p className="text-gray-400">Grade: {cert.grade}</p>
                <p className="text-gray-400">Valid Until: {cert.validUntil}</p>
              </div>
            ) : (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                <p className="text-red-400 font-semibold text-center">
                  ❌ Invalid Certificate ID
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
