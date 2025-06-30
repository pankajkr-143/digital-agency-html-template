import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type FormState = {
  fullName: string;
  dob: string;
  gender: string;
  email: string;
  phone: string;
  altPhone: string;
  address: string;
  city: string;
  state: string;
  pin: string;
  college: string;
  degree: string;
  branch: string;
  year: string;
  gradYear: string;
  tenth: string;
  twelfth: string;
  cgpa: string;
  domain: string;
  duration: string;
  startDate: string;
  mode: string;
  locationPref: string;
  languages: string[];
  tools: string;
  certifications: string;
  resume: string;
  portfolio: string;
  linkedin: string;
  why: string;
  time: string;
  prevIntern: string;
  referral: string;
  consent: boolean;
  signature: string;
  date: string;
};

type ErrorsState = Partial<Record<keyof FormState, string>>;

const InternshipFormPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>({
    fullName: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    altPhone: '',
    address: '',
    city: '',
    state: '',
    pin: '',
    college: '',
    degree: '',
    branch: '',
    year: '',
    gradYear: '',
    tenth: '',
    twelfth: '',
    cgpa: '',
    domain: '',
    duration: '',
    startDate: '',
    mode: '',
    locationPref: '',
    languages: [],
    tools: '',
    certifications: '',
    resume: '',
    portfolio: '',
    linkedin: '',
    why: '',
    time: '',
    prevIntern: '',
    referral: '',
    consent: false,
    signature: '',
    date: '',
  });
  const [errors, setErrors] = useState<ErrorsState>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;
    if (type === 'checkbox' && name === 'languages') {
      setForm((prev) => {
        const arr = Array.isArray(prev.languages) ? prev.languages : [];
        if (checked) {
          return { ...prev, languages: [...arr, value] };
        } else {
          return { ...prev, languages: arr.filter((lang) => lang !== value) };
        }
      });
    } else if (type === 'checkbox') {
      setForm({ ...form, [name]: checked });
    } else if (type === 'file') {
      setForm({ ...form, [name]: files ? files[0] : null });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: ErrorsState = {};
    if (!form.fullName) newErrors.fullName = 'Full Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.phone) newErrors.phone = 'Phone Number is required';
    if (!form.consent) newErrors.consent = 'You must agree to the declaration';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Prepare form data for Web3Forms
      const formData = new FormData();
      formData.append('access_key', 'da970d1a-13f3-4c9b-a6c2-e23fd0470282');
      Object.entries(form).forEach(([key, value]) => {
        if (key === 'resume') {
          formData.append('resume', value as string);
        } else if (Array.isArray(value)) {
          formData.append(key, value.join(', '));
        } else if (typeof value === 'boolean') {
          formData.append(key, value ? 'Yes' : 'No');
        } else {
          formData.append(key, value as string);
        }
      });
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        });
        const result = await response.json();
        if (result.success) {
          alert('Application submitted successfully!');
          navigate('/InternshipsPage');
        } else {
          alert('Submission failed. Please try again.');
        }
      } catch {
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-neo-black pt-20 pb-10">
      <div className="max-w-3xl mx-auto bg-neo-dark p-8 rounded-md neon-border-green shadow-lg">
        <h2 className="text-3xl font-vt323 text-neo-green-100 mb-8 text-center">Internship Application Form</h2>
        <form onSubmit={handleSubmit} className="space-y-8" encType="multipart/form-data">
          {/* Web3Forms Access Key */}
          <input type="hidden" name="access_key" value="da970d1a-13f3-4c9b-a6c2-e23fd0470282" />
          {/* Personal Details */}
          <section>
            <h3 className="font-vt323 text-xl text-white mb-4">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Full Name*</label>
                <input name="fullName" value={form.fullName} onChange={handleChange} className="form-input" />
                {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName}</span>}
              </div>
              <div>
                <label className="form-label">Date of Birth</label>
                <input type="date" name="dob" value={form.dob} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Gender</label>
                <select name="gender" value={form.gender} onChange={handleChange} className="form-input">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="form-label">Email ID*</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="form-input" />
                {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
              </div>
              <div>
                <label className="form-label">Phone Number*</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="form-input" />
                {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
              </div>
              <div>
                <label className="form-label">Alternate Contact Number</label>
                <input name="altPhone" value={form.altPhone} onChange={handleChange} className="form-input" />
              </div>
              <div className="md:col-span-2">
                <label className="form-label">Full Address</label>
                <input name="address" value={form.address} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">City</label>
                <input name="city" value={form.city} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">State</label>
                <input name="state" value={form.state} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">PIN Code</label>
                <input name="pin" value={form.pin} onChange={handleChange} className="form-input" />
              </div>
            </div>
          </section>

          {/* Educational Background */}
          <section>
            <h3 className="font-vt323 text-xl text-white mb-4">Educational Background</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Current College/University</label>
                <input name="college" value={form.college} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Degree Pursuing</label>
                <input name="degree" value={form.degree} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Branch/Stream</label>
                <input name="branch" value={form.branch} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Current Year/Semester</label>
                <input name="year" value={form.year} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Expected Graduation Year</label>
                <input name="gradYear" value={form.gradYear} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">10th Percentage / CGPA</label>
                <input name="tenth" value={form.tenth} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">12th Percentage / CGPA</label>
                <input name="twelfth" value={form.twelfth} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Current CGPA</label>
                <input name="cgpa" value={form.cgpa} onChange={handleChange} className="form-input" />
              </div>
            </div>
          </section>

          {/* Internship Preferences */}
          <section>
            <h3 className="font-vt323 text-xl text-white mb-4">Internship Preferences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Preferred Internship Domain</label>
                <input name="domain" value={form.domain} onChange={handleChange} className="form-input" placeholder="e.g., Web Dev, Cybersecurity, AI" />
              </div>
              <div>
                <label className="form-label">Internship Duration</label>
                <input name="duration" value={form.duration} onChange={handleChange} className="form-input" placeholder="in weeks/months" />
              </div>
              <div>
                <label className="form-label">Availability Start Date</label>
                <input type="date" name="startDate" value={form.startDate} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Mode of Internship</label>
                <select name="mode" value={form.mode} onChange={handleChange} className="form-input">
                  <option value="">Select</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="form-label">Location Preference (if any)</label>
                <input name="locationPref" value={form.locationPref} onChange={handleChange} className="form-input" />
              </div>
            </div>
          </section>

          {/* Skill Set */}
          <section>
            <h3 className="font-vt323 text-xl text-white mb-4">Skill Set</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Programming Languages Known</label>
                <div className="flex flex-wrap gap-3">
                  {['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'Go', 'Ruby', 'Other'].map((lang) => (
                    <label key={lang} className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        name="languages"
                        value={lang}
                        checked={form.languages.includes(lang)}
                        onChange={handleChange}
                        className="form-checkbox accent-neo-green-100"
                      />
                      <span className="text-gray-300 font-code text-sm">{lang}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="form-label">Tools/Technologies Familiar With</label>
                <input name="tools" value={form.tools} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Certifications (if any)</label>
                <input name="certifications" value={form.certifications} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Resume Google Drive Link</label>
                <input type="url" name="resume" value={form.resume} onChange={handleChange} className="form-input" placeholder="https://drive.google.com/..." />
              </div>
              <div>
                <label className="form-label">Portfolio/GitHub Link (optional)</label>
                <input name="portfolio" value={form.portfolio} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">LinkedIn Profile URL (optional)</label>
                <input name="linkedin" value={form.linkedin} onChange={handleChange} className="form-input" />
              </div>
            </div>
          </section>

          {/* Other Info */}
          <section>
            <h3 className="font-vt323 text-xl text-white mb-4">Other Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="form-label">Why do you want to join this internship?</label>
                <textarea name="why" value={form.why} onChange={handleChange} className="form-input h-24" />
              </div>
              <div>
                <label className="form-label">Are you available full-time or part-time?</label>
                <select name="time" value={form.time} onChange={handleChange} className="form-input">
                  <option value="">Select</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                </select>
              </div>
              <div>
                <label className="form-label">Any previous internship experience?</label>
                <input name="prevIntern" value={form.prevIntern} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Referral (if any)</label>
                <input name="referral" value={form.referral} onChange={handleChange} className="form-input" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="mr-2" />
              <label className="form-label">I hereby declare that the information provided is true and I consent to the processing of my data.*</label>
              {errors.consent && <span className="text-red-500 text-xs ml-2">{errors.consent}</span>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="form-label">Signature / Typed Name</label>
                <input name="signature" value={form.signature} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Date of Submission</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} className="form-input" />
              </div>
            </div>
          </section>

          <button type="submit" className="w-full neon-border-green px-4 py-2 font-vt323 text-neo-green-100 hover:bg-neo-green-100 hover:bg-opacity-10 transition-all duration-300 mt-8">
            Submit Application
          </button>
        </form>
      </div>
      <style>{`
        .form-label {
          display: block;
          color: #aaffcc;
          font-family: 'Fira Mono', monospace;
          margin-bottom: 0.25rem;
        }
        .form-input {
          width: 100%;
          padding: 0.5rem;
          border-radius: 0.25rem;
          border: 1px solid #22d3ee;
          background: #181c1f;
          color: #fff;
          font-family: 'Fira Mono', monospace;
        }
        .form-input:focus {
          outline: none;
          border-color: #22d3ee;
          box-shadow: 0 0 0 2px #22d3ee33;
        }
      `}</style>
    </div>
  );
};

export default InternshipFormPage; 