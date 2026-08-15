"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  Send,
  AlertCircle,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange =
    (field: keyof FormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));

      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));

      if (status === "error") {
        setStatus("idle");
      }
    };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter a message.";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    /*
     * For now we don't require a backend.
     *
     * This opens the user's email client with the
     * submitted information.
     */

    try {
      const subject = encodeURIComponent(
        `Portfolio Contact — ${form.name}`
      );

      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );

      const mailto = `mailto:santhoshramavath2006@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailto;

      setTimeout(() => {
        setStatus("success");
        setForm(initialForm);
      }, 500);
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please email me directly."
      );
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
          y: 12,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-accent/25 bg-card px-6 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.1,
            type: "spring",
            stiffness: 180,
            damping: 12,
          }}
          className="mb-5"
        >
          <CheckCircle2
            size={42}
            className="text-accent-soft"
          />
        </motion.div>

        <h3 className="font-display text-xl font-medium text-fg">
          Message ready to go.
        </h3>

        <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-fg-secondary">
          Your email client should open with the message
          prepared. Send it from there and I&apos;ll get back
          to you.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-[12.5px] text-accent-soft transition-colors hover:text-fg hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5"
    >
      <Field
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange("name")}
        error={errors.name}
        placeholder="Your name"
      />

      <Field
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange("email")}
        error={errors.email}
        placeholder="you@example.com"
      />

      <Field
        label="Message"
        name="message"
        as="textarea"
        rows={6}
        value={form.message}
        onChange={handleChange("message")}
        error={errors.message}
        placeholder="Tell me a bit about what you have in mind..."
      />

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="flex items-center gap-2 overflow-hidden rounded-xl border border-red-500/25 bg-red-500/5 px-4 py-3 font-mono text-[12.5px] text-red-400"
          >
            <AlertCircle
              size={14}
              className="shrink-0"
            />

            {errorMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{
          scale: status === "loading" ? 1 : 1.01,
        }}
        whileTap={{
          scale: status === "loading" ? 1 : 0.98,
        }}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 font-mono text-[13px] font-medium text-white transition-all duration-300 hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2
              size={15}
              className="animate-spin"
            />
            Preparing...
          </>
        ) : (
          <>
            <Send size={14} />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  as = "input",
  rows,
}: FieldProps) {
  const baseClasses = `
    w-full
    rounded-xl
    border
    bg-card-secondary
    px-4
    py-3
    text-[14px]
    text-fg
    placeholder:text-fg-muted
    transition-all
    duration-300
    focus:outline-none
    focus:ring-2
    focus:ring-accent/40
  `;

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block font-mono text-[12px] text-fg-secondary"
      >
        {label}
      </label>

      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseClasses} resize-none ${
            error
              ? "border-red-500/50"
              : "border-border focus:border-accent-soft/50"
          }`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseClasses} ${
            error
              ? "border-red-500/50"
              : "border-border focus:border-accent-soft/50"
          }`}
        />
      )}

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{
              opacity: 0,
              y: -4,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -4,
            }}
            className="mt-1.5 font-mono text-[11.5px] text-red-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}