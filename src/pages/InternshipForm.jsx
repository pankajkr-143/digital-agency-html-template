import { useState } from "react";

export default function InternshipFormPage() {
  const [result, setResult] = useState("");

  /* ================= SUBMIT FUNCTION ================= */
  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

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
      setResult("✅ Application Submitted Successfully");
      event.target.reset();
    } else {
      setResult("❌ Submission Failed");
    }
  };

  return (
    <section className="min-h-screen bg-[#0b1220] text-white px-6 py-20">
      <form
        onSubmit={onSubmit}
        className="max-w-5xl mx-auto bg-[#0f1a30] border border-blue-500/40 rounded-2xl p-10 shadow-[0_0_40px_rgba(59,130,246,0.35)]"
      >
        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-10">
          Internship Application Form
        </h1>

        {/* ================= PERSONAL DETAILS ================= */}
        <h2 className="section-title">Personal Details</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Input label="Full Name*" name="name" required />
          <Input label="Date of Birth" name="dob" type="date" />
          <Select
            label="Gender"
            name="gender"
            options={["Select", "Male", "Female", "Other"]}
          />
          <Input label="Email ID*" name="email" type="email" required />
          <Input label="Phone Number*" name="phone" required />
          <Input label="Alternate Contact Number" name="alt_phone" />
        </div>

        <Input label="Full Address" name="address" className="mt-6" />

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Input label="City" name="city" />
          <Input label="State" name="state" />
        </div>

        <Input label="PIN Code" name="pincode" className="mt-6" />

        {/* ================= EDUCATION ================= */}
        <h2 className="section-title mt-12">Educational Background</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Input label="College" name="college" />
          <Input label="Degree" name="degree" />
          <Input label="Branch" name="branch" />
          <Input label="Current Year" name="year" />
          <Input label="Graduation Year" name="graduation_year" />
          <Input label="10th Percentage" name="tenth" />
          <Input label="12th Percentage" name="twelfth" />
          <Input label="Current CGPA" name="cgpa" />
        </div>

        {/* ================= INTERNSHIP ================= */}
        <h2 className="section-title mt-12">Internship Preferences</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Input label="Preferred Domain" name="domain" />
          <Input label="Internship Duration" name="duration" />
          <Input label="Start Date" name="start_date" type="date" />
          <Select
            label="Mode"
            name="mode"
            options={["Select", "Remote", "Onsite", "Hybrid"]}
          />
        </div>

        <Input
          label="Location Preference"
          name="location_preference"
          className="mt-6"
        />

        {/* ================= SKILLS ================= */}
        <h2 className="section-title mt-12">Skill Set</h2>

        <Textarea
          label="Skills / Technologies"
          name="skills"
        />

        <Input label="GitHub / Portfolio" name="portfolio" className="mt-6" />
        <Input label="LinkedIn URL" name="linkedin" className="mt-6" />

        {/* ================= OTHER ================= */}
        <h2 className="section-title mt-12">Other Info</h2>

        <Textarea
          label="Why do you want this internship?"
          name="motivation"
        />

        <Input
          label="Previous Internship Experience"
          name="experience"
          className="mt-6"
        />

        <Input label="Referral" name="referral" className="mt-6" />

        <button
          type="submit"
          className="w-full mt-10 py-3 rounded-xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
        >
          Submit Application
        </button>

        {/* RESULT MESSAGE */}
        <p className="text-center mt-4 text-blue-300">{result}</p>
      </form>

      {/* ================= STYLES ================= */}
      <style>{`
        .section-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #60a5fa;
          margin-bottom: 1rem;
        }
        .field {
          background: #020617;
          border: 1px solid rgba(59,130,246,.4);
          padding: 12px;
          border-radius: 10px;
          width: 100%;
        }
        .field:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 15px rgba(59,130,246,.45);
        }
      `}</style>
    </section>
  );
}

/* ================= REUSABLE INPUTS ================= */

function Input({ label, name, type = "text", required, className = "" }) {
  return (
    <div className={className}>
      <label className="block text-sm text-blue-300 mb-1">{label}</label>
      <input name={name} type={type} required={required} className="field" />
    </div>
  );
}

function Select({ label, name, options }) {
  return (
    <div>
      <label className="block text-sm text-blue-300 mb-1">{label}</label>
      <select name={name} className="field">
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function Textarea({ label, name }) {
  return (
    <div className="mt-6">
      <label className="block text-sm text-blue-300 mb-1">{label}</label>
      <textarea name={name} rows="4" className="field" />
    </div>
  );
}
