import { FaClipboardList, FaEnvelope } from "react-icons/fa";
import BeeCursor from "@/components/FloatingBeeCursor";

export default function ContactSection() {
  return (
    <>
    <BeeCursor />
    <section id="contact" className="w-full z-10 relative flex flex-col justify-center items-center">
      {/* Top Gradient Section */}
      <div className="backdrop-blur-xs text-white text-center py-16 flex flex-col w-screen">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
          Have questions about HackConcordia or ConuHacks? Want to be a judge? Reach out to us and we will get back to you.
        </p>
      </div>

      {/* Bottom Dark Contact Section */}
      <div className="max-w-7xl mx-auto space-y-10">
        <h3 className="text-3xl sm:text-4xl font-bold text-white bg-clip-text mb-2">
          Get in Touch
        </h3>

        <p className="text-base md:text-lg text-gray-200">
          We would love to hear from you! Whether you have questions about the hackathon, want to be a judge for submissions, or have any other inquiries, please do not hesitate to reach out.
        </p>

        {/* Contact Items */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-200/10 border-2 border-yellow-300/20 p-3 rounded-xl">
              <FaEnvelope className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <p className="font-semibold text-white">Email</p>
              <p className="text-sm text-gray-200">technology.hackconcordia@ecaconcordia.ca</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-yellow-200/10 border-2 border-yellow-300/20 p-3 rounded-xl">
              <FaClipboardList className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <p className="font-semibold text-white">Interested in Judging?</p>
              <p className="text-sm text-gray-200">
                We are looking for industry professionals and educators to help judge hackathon submissions.
                Please email us with <strong>Judging Interest</strong> in the subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

