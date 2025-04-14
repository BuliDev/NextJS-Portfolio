import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSending(true);

    emailjs
      .send(
        "service_au185gb",
        "template_6ll61yc",
        formData,
        "m-qahwII3mmXi8e_z"
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setIsSuccess(true);
          setIsSending(false);
        },
        (error) => {
          console.error("Email send error:", error);
          setIsSending(false);
        }
      );
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  if (isSuccess) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 animate-fadeInUp text-center"
        onClick={onClose}
      >
        <div
          className="bg-white text-gray-900 w-full max-w-lg p-6 rounded-xl shadow-xl relative animate-fadeInUp"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
          >
            ✕
          </button>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Message Sent!
          </h2>
          <p className="mb-6 text-gray-700">
            All done! Now sit back, relax, and let me do the rest.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="inline-flex bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 animate-fadeInUp"
      onClick={onClose}
    >
      <div
        className="bg-white text-gray-900 w-full max-w-lg p-6 rounded-xl shadow-xl relative animate-fadeInUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Contact Me
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-300"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-300"
            required
          />
          <textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-emerald-300"
            required
          />
          <button
            type="submit"
            disabled={isSending}
            className={`group relative inline-flex items-center gap-2 border px-6 h-12 rounded-xl overflow-hidden transition-colors duration-300
              ${
                isSending
                  ? "bg-white text-gray-900 border-gray-900 cursor-not-allowed"
                  : "bg-gray-900 text-white border-gray-900 hover:bg-white hover:text-gray-900"
              }`}
          >
            <span className="relative z-10 font-semibold">
              {isSending ? "Sending..." : "Send Message"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
