import emailjs from "@emailjs/browser";
import { LoaderCircle, Send, ShieldCheck } from "lucide-react";
import { FormEvent, useState } from "react";
import { resolveEmailJsConfig } from "@/lib/emailjsConfig";

type ContactValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

const blankContact: ContactValues = { name: "", email: "", subject: "", message: "", website: "" };

/** Public contact form with an inline status rather than a visible recipient email address. */
export function ContactCard() {
  const [values, setValues] = useState<ContactValues>(blankContact);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [isSending, setIsSending] = useState(false);

  const update = (field: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    // Bots that complete the visually hidden honeypot receive no error detail and do not trigger a delivery.
    if (values.website.trim()) {
      setValues(blankContact);
      setStatus("sent");
      return;
    }

    const config = resolveEmailJsConfig({
      VITE_EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      VITE_EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });

    if (!config) {
      setStatus("error");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        config.serviceId,
        config.templateId,
        {
          from_name: values.name.trim(),
          from_email: values.email.trim(),
          reply_to: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        },
        {
          publicKey: config.publicKey,
          limitRate: { id: "portfolio-contact", throttle: 10_000 },
        },
      );

      setValues(blankContact);
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form className="contact-card" onSubmit={handleSubmit}>
      <div className="contact-card__heading">
        <span>CONTACT US</span>
        <ShieldCheck size={17} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <p className="contact-card__intro">Send a concise note. The recipient address stays out of the public site.</p>
      <div className="contact-form__grid">
        <label className="contact-form__field">
          <span>Name</span>
          <input type="text" autoComplete="name" minLength={2} maxLength={120} required value={values.name} onChange={(event) => update("name", event.target.value)} />
        </label>
        <label className="contact-form__field">
          <span>Email</span>
          <input type="email" autoComplete="email" maxLength={320} required value={values.email} onChange={(event) => update("email", event.target.value)} />
        </label>
        <label className="contact-form__field contact-form__field--wide">
          <span>Subject</span>
          <input type="text" minLength={3} maxLength={180} required value={values.subject} onChange={(event) => update("subject", event.target.value)} />
        </label>
        <label className="contact-form__field contact-form__field--wide">
          <span>Message</span>
          <textarea rows={5} minLength={10} maxLength={5000} required value={values.message} onChange={(event) => update("message", event.target.value)} />
        </label>
        <div className="contact-honeypot" aria-hidden="true">
          <label>Website<input tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => update("website", event.target.value)} /></label>
        </div>
      </div>
      <div className="contact-card__footer">
        <button className="button button--primary" type="submit" disabled={isSending}>
          {isSending ? <LoaderCircle size={17} className="spin" aria-hidden="true" /> : <Send size={16} strokeWidth={1.8} aria-hidden="true" />}
          {isSending ? "Sending" : "Send"}
        </button>
        <p className="contact-form__status" role="status" aria-live="polite">
          {status === "sent" && "Thanks — your message has been sent."}
          {status === "error" && "The message could not be sent. Please check the form and try again shortly."}
        </p>
      </div>
    </form>
  );
}
