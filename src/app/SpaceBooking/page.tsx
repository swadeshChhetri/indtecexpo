"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type FormDataType = {
  fullName: string;
  designation: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  heardFrom: string;
  categories: string;
  spaceType: string;
};

export default function ExhibitorForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
    designation: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    heardFrom: "",
    categories: "",
    spaceType: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("http://tradesfairs.com/indtecexpo/api/spacebooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // const result = await res.json();
      alert("Booking submitted successfully!");
      // Show toast or success UI
      // Redirect after a short delay (e.g., 2 seconds)
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.error("Submission Failed", error);
      alert("Something went wrong. Please try again.");
      // Show error UI
    } finally {
      setLoading(false); // turn off the loader regardless of success/failure
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-16 pt-48">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8 border-b-4 border-indigo-500 inline-block pb-2">
        Exhibitor Registration Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8 p-6 border border-gray-200 rounded-lg">
        <div className="grid md:grid-cols-2 gap-6">
          <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
          <Input label="Designation" name="designation" value={formData.designation} onChange={handleChange} />
          <Input label="Company / Organisation Name" name="company" value={formData.company} onChange={handleChange} />
          <Input label="E-Mail Id" type="email" name="email" value={formData.email} onChange={handleChange} />
          <Input label="Mobile No." type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          <Textarea label="Address" name="address" value={formData.address} onChange={handleChange} />
          <Input label="Street" name="street" value={formData.street} onChange={handleChange} />
          <Input label="City / Suburb" name="city" value={formData.city} onChange={handleChange} />
          <Input label="State" name="state" value={formData.state} onChange={handleChange} />
          <Input label="Zip / Post Code" name="zip" value={formData.zip} onChange={handleChange} />
          <Input label="Country" name="country" value={formData.country} onChange={handleChange} />
        </div>

        <div className="grid gap-6">
          <Input label="How did you hear about the expo" name="heardFrom" value={formData.heardFrom} onChange={handleChange} />
          <Input label="Categories Interested In" name="categories" value={formData.categories} onChange={handleChange} />

          <PricingSection
            title="Shell Space (min. 9 sqm)"
            details={[
              "INR ₹ 10,000/sqm (LUB Members)",
              "INR ₹ 11,000/sqm (Non-Members)",
              "US$ 300/sqm (Overseas)",
              "Includes modular shell stand...",
            ]}
          />

          <PricingSection
            title="Raw Space (min. 36 sqm)"
            details={[
              "INR ₹ 9,000/sqm (LUB Members)",
              "INR ₹ 10,000/sqm (Non-Members)",
              "US$ 300/sqm (Overseas)",
            ]}
          />

          <PricingSection
            title="Open Side Charges"
            details={[
              "2 side open – 15% of the space charges",
              "3 side open – 25% of the space charges",
            ]}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700">Your space requirement type</label>
            <select
              name="spaceType"
              value={formData.spaceType}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg p-2"
            >
              <option value="">Select...</option>
              <option value="shell">Shell Space</option>
              <option value="raw">Raw Space</option>
            </select>
          </div>
        </div>

        <div className="pt-6 text-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition w-[30%]"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}

// Reusable Input Component
type InputProps = {
  label: string;
  name: keyof FormDataType;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, name, value, onChange, type = "text" }: InputProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 w-full border border-gray-300 rounded-lg p-2"
    />
  </div>
);

// Reusable Textarea Component
type TextareaProps = {
  label: string;
  name: keyof FormDataType;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = ({ label, name, value, onChange }: TextareaProps) => (
  <div className="md:col-span-2">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 w-full border border-gray-300 rounded-lg p-2"
      rows={3}
    ></textarea>
  </div>
);

// Pricing Section
type PricingProps = {
  title: string;
  details: string[];
};

const PricingSection = ({ title, details }: PricingProps) => (
  <div className="p-6 space-y-2 border border-gray-200 rounded-lg">
    <h3 className="text-lg font-semibold text-indigo-600">{title}</h3>
    <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
      {details.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

