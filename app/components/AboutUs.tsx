"use client";

import Lottie from "lottie-react";
import scrollAnimation from "../../public/animations/scroll_down_animation.json";
import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { customToast } from "./CustomToast";
import { FaPaperPlane } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import { cardText, desktopTextBoxes, formText, images } from "../data/about.data";

type FormData = {
  email: string;
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const growFadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function AboutUs() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({ email: "" });
  const [pending, setPending] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked: isChecked } = e.target;

    if (type === "checkbox") {
      setChecked(isChecked);
    } else if (name === "email") {
      setFormData((prev) => ({ ...prev, email: value }));
      setIsEmailValid(emailRegex.test(value));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!checked) {
      customToast.error("You must agree to the Code of Conduct");
      return;
    }

    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!emailRegex.test(formData.email)) {
      customToast.error("Please enter a valid email address");
      return;
    }

    setPending(true);
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.status === 409) {
      setPending(false);
      customToast.error("User already exists & your email has been verified.");
      return;
    } else if (res.status === 400) {
      setPending(false);
      customToast.error("User already exists. Please verify your email.");
      return;
    }

    if (res.ok) {
      setTimeout(() => {
        customToast.success("Make sure to check your spam/trash folder too!", {
          id: "spam",
          duration: 5000,
        });
      }, 2000);
      setPending(false);
      customToast.success(
        `A verification link has been sent to ${formData.email}`,
        { id: formData.email, duration: 3000 }
      );

      setFormData({ email: "" });
      setChecked(false);
    } else {
      setPending(false);
      customToast.error("Error while subscribing... Try again later...");
    }
  };

  return (
    <section
      className="relative z-10 md:h-[calc(100vh-140px)] max-w-7xl mx-auto mt-16"
    >
      <div className="flex items-center justify-center h-full w-full">
        <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
          <motion.div
            className="inset-0 h-full flex flex-col items-center justify-center text-center text-white px-4 space-y-6 z-30"
            initial="hidden"
            animate="visible"
            variants={growFadeIn}
          >
            <h1 className="logo xl:text-8xl lg:mt-4 md:ml-2 sm:text-5xl md:text-7xl text-5xl font-ruda text-neon-yellow mb-2">
              <b className="w-1/2">
                Hack<span>C</span>onc<span>ordi</span>a
              </b>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold mb-1">{formText.tagline}</h2>

            <p className="text-sm text-gray-300 max-w-xl mb-1">{formText.subtitle}</p>

            <span className="text-gray-500 text-xs">Subscribe to get the latest updates</span>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-3 w-full max-w-md"
            >
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full backdrop-blur-xs md:border-2 md:border-white/10 rounded-l-sm md:rounded-r-sm">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={formText.emailPlaceholder}
                  className="w-full px-4 py-3 placeholder-gray-500 text-white outline-0 border-2 border-white/10 md:border-0 bg-transparent"
                  required
                />
                <button
                  type="submit"
                  disabled={pending || !isEmailValid || !checked}
                  className={`group flex flex-row justify-center items-center gap-2 font-semibold px-6 py-3 transition w-full sm:w-auto md:rounded-r-xs ${pending || !checked || !isEmailValid
                      ? "bg-[#272727] cursor-not-allowed text-gray-500"
                      : "bg-yellow-400 hover:bg-yellow-300 text-black hover:scale-105 active:scale-95"
                    }`}
                >
                  {pending ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-gray-700"></div>
                  ) : (
                    <>
                      <span className="tracking-wide">{formText.buttonIdleText}</span>
                      <FaPaperPlane className="text-sm opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              </div>

              <div>
                <label className="flex items-center gap-2 mt-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                    className={`h-4 w-4 rounded-xs border-2 ${checked
                        ? "bg-yellow-400 border-yellow-400"
                        : "bg-black border-yellow-400"
                      }`}
                    required
                  />
                  <span className="text-xs text-white/90 select-none">
                    {formText.checkboxLabelPrefix}
                    <a
                      href={formText.checkboxLinkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-1 hover:text-yellow-400 transition-colors"
                    >
                      {formText.checkboxLinkText}
                    </a>
                  </span>
                </label>
              </div>
            </form>

            {/* Mobile Auto-scroll Text Cards */}
            <div className="flex flex-col gap-4 md:hidden w-full md:px-4 mt-8">
              {cardText.map((text, idx) => (
                <motion.div
                  key={idx}
                  className="w-full border-2 border-white/10 text-white text-xs p-4 rounded-lg backdrop-blur-xs bg-white/5 shadow-md whitespace-normal break-words"
                  initial="hidden"
                  animate="visible"
                  variants={idx % 2 === 0 ? slideInLeft : slideInRight}
                  transition={{ delay: 0.3 + idx * 0.2 }}
                >
                  {text}
                </motion.div>
              ))}
            </div>

            {/* Scroll Down Lottie */}
            <motion.div
              className="absolute hidden md:flex flex-col text-white items-center space-y-2 z-10"
              style={{ marginBottom: "-600px" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <Lottie animationData={scrollAnimation} className="w-15 md:w-16" />
              <span className="text-xs">{formText.scrollDownText}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Text Boxes */}
      {desktopTextBoxes.map(({ text, positionClasses, rotation, glowPosition }, idx) => (
        <motion.div
          key={idx}
          className={positionClasses}
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
          transition={{ delay: 0.5 + idx * 0.3 }}
        >
          <div
            className="relative overflow-hidden border-2 border-white/10 p-4 rounded-lg text-white shadow-lg backdrop-blur-xs bg-white/5"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <div
              className={`absolute inset-0 pointer-events-none bg-radial-glow opacity-0 transition-opacity duration-300 ${glowPosition}`}
            />
            <span className="text-xs relative z-10">{text}</span>
          </div>
        </motion.div>
      ))}

      {/* Rotated Images */}
      {images.map(({ src, alt, width, height, rotation, positionClasses }, idx) => (
        <motion.div
          key={idx}
          className={positionClasses}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.6 + idx * 0.3 }}
        >
          <div
            className="w-full h-[200px] rounded-md overflow-hidden shadow-lg transition-transform duration-700"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <Image src={src} alt={alt} width={width} height={height} style={{ objectFit: "cover" }} />
          </div>
        </motion.div>
      ))}
    </section>
  );
}
