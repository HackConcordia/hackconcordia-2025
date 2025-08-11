"use client";

import Lottie from "lottie-react";
import scrollAnimation from "../../public/animations/scroll_down_animation.json";
import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { customToast } from "./CustomToast";
import { FaPaperPlane } from "react-icons/fa";

type FormData = {
  email: string;
};

export default function AboutUs() {
  // Auto-scroll ref
  const scrollRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });
  const [pending, setPending] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prevFormData) => {
        return { ...prevFormData };
      });
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scrollLoop = () => {
      if (!container) return;
      scrollAmount += scrollSpeed;
      if (scrollAmount >= container.scrollWidth / 2) scrollAmount = 0;
      container.scrollLeft = scrollAmount;
      requestAnimationFrame(scrollLoop);
    };

    requestAnimationFrame(scrollLoop);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!emailRegex.test(formData.email)) {
      customToast.error("Please enter a valid email address");
      return;
    }

    setPending(true);
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log("Response", res);

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
        {
          id: formData.email,
          duration: 3000,
        }
      );

      setFormData({
        email: "",
      });

      if (checkboxRef.current) {
        checkboxRef.current.checked = false;
      }
    } else {
      setPending(false);
      customToast.error("Error while subscribing... Try again later...");
    }
  };

  const cardText = [
    `This is your hub for all things hacking. From upcoming hackathons and events to curated learning resources, this site is your launchpad to grow your skills, meet fellow builders, and bring your ideas to life.`,
    `Meet the buzzing minds building Quebec’s biggest student hackathon. HackConcordia is a student-led tech community at Concordia University.`,
    `Ready to dive in? Whether you want to compete in a hackathon, attend a workshop, or just meet some like-minded tech lovers, HackConcordia has a spot for you.`,
  ];

  return (
    <section
      className="relative z-10 md:h-[calc(100vh-140px)] max-w-7xl mx-auto mb-20 md:mb-0"
      id="home"
    >
      <div className="flex items-center justify-center h-full w-full">
        <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
          <div className="inset-0 h-full flex flex-col items-center justify-center text-center text-white px-4 space-y-6 z-30 mt-16 md:mt-0">
            <h1 className="logo xl:text-8xl lg:mt-4 md:ml-2 sm:text-5xl md:text-7xl text-5xl font-ruda text-neon-yellow mb-2">
              <b className="w-1/2">
                Hack<span>C</span>onc<span>ordi</span>a
              </b>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold mb-1">
              Bee the Change. Code the Future.
            </h2>

            <p className="text-sm text-white/80 max-w-xl">
              Bringing Quebec’s biggest hackathon to life.
            </p>

            {/* Subscribe Form */}
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
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 placeholder-gray-500 text-white outline-0 border-2 border-white/10 md:border-0 bg-transparent"
                  required
                />
                <button
                  type="submit"
                  disabled={pending}
                  className={`group flex flex-row justify-center items-center gap-2 font-semibold px-6 py-3 transition w-full sm:w-auto md:rounded-r-sm ${
                    pending
                      ? "bg-gray-400 cursor-not-allowed text-gray-700"
                      : "bg-yellow-400 hover:bg-yellow-300 text-black hover:scale-105 active:scale-95"
                  }`}
                >
                  {pending ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-gray-700"></div>
                  ) : (
                    <>
                      <span className="tracking-wide">Subscribe</span>
                      <FaPaperPlane className="text-sm opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              </div>

              {/* MLH Code of Conduct Checkbox */}
              <div className="">
                <label className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    ref={checkboxRef}
                    onChange={handleChange}
                    className="h-4 w-4 accent-yellow-400 border-2 border-white/20 rounded-sm"
                    required
                  />
                  <span className="text-xs text-white/90">
                    I agree to{" "}
                    <a
                      href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-1 hover:text-yellow-400 transition-colors"
                    >
                      MLH&apos;s Code of Conduct
                    </a>
                  </span>
                </label>
              </div>
            </form>

            {/* Mobile Auto-scroll Text Cards */}
            <div className="flex flex-col gap-4 md:hidden w-full md:px-4 mt-8">
              {cardText.map((text, idx) => (
                <div
                  key={idx}
                  className="w-full border-2 border-white/10 text-white text-xs p-4 rounded-lg backdrop-blur-xs bg-white/5 shadow-md whitespace-normal break-words"
                >
                  {text}
                </div>
              ))}
            </div>

            {/* Scroll Down Lottie */}
            <div
              className="absolute hidden md:flex flex-col text-white items-center space-y-2 z-10"
              style={{ marginBottom: "-600px" }}
            >
              <Lottie
                animationData={scrollAnimation}
                className="w-15 md:w-16"
              />
              <span className="text-xs">Scroll down to know more</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Only Elements */}
      <div className="hidden md:block absolute top-0 left-1/3 p-1 mt-4 space-y-4 z-10 max-w-sm">
        <div className="relative group overflow-hidden border-2 border-white/10 p-4 rounded-lg text-white shadow-lg rotate-[-7deg] backdrop-blur-xs bg-white/5">
          <div className="absolute inset-0 pointer-events-none bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-4" />
          <span className="text-xs relative z-10">{cardText[0]}</span>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-20 right-2 p-2 space-y-4 z-10 max-w-sm">
        <div className="relative group overflow-hidden border-2 border-white/10 p-4 rounded-lg text-white shadow-lg rotate-[27deg] backdrop-blur-xs bg-white/5">
          <div className="absolute inset-0 pointer-events-none bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-4" />
          <span className="text-xs relative z-10">{cardText[1]}</span>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-5 left-5 space-y-4 z-10 max-w-sm pb-12">
        <div className="relative group overflow-hidden border-2 border-white/10 p-4 rounded-lg text-white shadow-lg rotate-[-27deg] backdrop-blur-xs bg-white/5">
          <div className="absolute inset-0 pointer-events-none bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="text-xs relative z-10">{cardText[2]}</span>
        </div>
      </div>

      {/* Rotated images (desktop only) */}
      <div className="hidden md:block absolute top-15 right-5 space-y-4 z-10 max-w-md">
        <div className="w-full h-[200px] rounded-md overflow-hidden shadow-lg rotate-[35deg] transition-transform duration-700 hover:scale-105">
          <Image
            src="/imgs/about_us1.jpg"
            alt="image 1"
            style={{ objectFit: 'cover' }}
            width={300}
            height={200}
          />
        </div>
      </div>

      <div className="hidden md:block absolute top-10 left-8 space-y-4 z-10 max-w-md">
        <div className="w-full h-[200px] rounded-md overflow-hidden shadow-lg rotate-[-45deg] transition-transform duration-700 hover:scale-105">
          <Image
            src="/imgs/about_us2.jpg"
            alt="image 2"
            style={{ objectFit: 'cover' }}
            width={300}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}
