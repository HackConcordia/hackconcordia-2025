import { FaClipboardList, FaEnvelope, FaHandshake } from "react-icons/fa";
import BeeCursor from "@/components/FloatingBeeCursor";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("ContactUs");
  return (
    <>
      <BeeCursor />
      <section
        id="contact"
        className="w-full z-10 relative flex flex-col justify-center items-center"
      >
        {/* Top Gradient Section */}
        <div className="backdrop-blur-xs text-white text-center py-16 flex flex-col w-screen">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
            {t("title")}
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-sm text-gray-200">
            {t("subtitle")}
            <br />
            {t("subtitle2")}
          </p>
        </div>

        {/* Bottom Dark Contact Section */}
        <div className="max-w-7xl mx-auto space-y-10">
          <h3 className="text-3xl sm:text-4xl font-bold text-white bg-clip-text mb-2">
            {t("getInTouchTitle")}
          </h3>

          <p className="text-base md:text-lg text-gray-200">
            {t("getInTouchDescription")}
          </p>

          {/* Contact Items */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-200/10 border-2 border-yellow-300/20 p-3 rounded-xl">
                <FaEnvelope className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <a href="mailto:technology.hackconcordia@ecaconcordia.ca">
                  <p className="text-sm text-gray-500">
                    technology.hackconcordia@ecaconcordia.ca
                  </p>
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-200/10 border-2 border-yellow-300/20 p-3 rounded-xl">
                <FaHandshake className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="font-semibold text-white">{t("sponsorLabel")}</p>
                <p className="text-sm text-gray-500">
                  {t("sponsorText")} <strong>{t("sponsorText2")} </strong>
                  {t("sponsorText3")}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-200/10 border-2 border-yellow-300/20 p-3 rounded-xl">
                <FaClipboardList className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="font-semibold text-white">{t("judgeLabel")}</p>
                <p className="text-sm text-gray-500">
                  {t("judgeText")}
                  <strong>{t("judgeText2")}</strong> {t("judgeText3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

