import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const linkedinUrl = "https://www.linkedin.com/in/hariom-yadav-3a729a278";

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!accessKey) {
      setStatus("error");
      setFeedback("Add your Web3Forms access key in a .env file first.");
      return;
    }

    setStatus("sending");
    setFeedback("");

    const payload = {
      access_key: accessKey,
      subject: "New message from Hariom Yadav's portfolio",
      from_name: formData.name,
      ...formData,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFeedback("Message sent successfully. I will get back to you soon.");
        setFormData(initialForm);
        return;
      }

      throw new Error(result.message || "Message could not be sent.");
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="border-t border-white/10 bg-white/[0.03] px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Let us build something useful.
          </h2>
          <p className="mt-5 max-w-xl leading-8 text-zinc-300">
            Have an idea, project, or opportunity? Send a message and I will get
            back to you.
          </p>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-md border border-white/10 bg-[#080a12]/70 px-5 py-3 font-bold text-white transition hover:border-emerald-300 hover:text-emerald-200"
          >
            Connect on LinkedIn
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-lg border border-white/10 bg-[#101522] p-5 shadow-xl shadow-black/20"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full rounded-md border border-white/10 bg-[#080a12] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="w-full rounded-md border border-white/10 bg-[#080a12] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your message"
            required
            className="w-full resize-none rounded-md border border-white/10 bg-[#080a12] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-md bg-cyan-300 px-6 py-3 font-bold text-zinc-950 shadow-lg shadow-cyan-500/10 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:bg-zinc-600 disabled:text-zinc-300"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {feedback && (
            <p
              className={`text-sm ${
                status === "success" ? "text-emerald-300" : "text-red-300"
              }`}
            >
              {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
