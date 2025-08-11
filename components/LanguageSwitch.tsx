import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitch() {
  const router = useRouter();
  const currentPathname = usePathname();
  const locale = useLocale();
  const isFrench = locale === "fr";

  const changeLanguage = (toFrench: boolean) => {
    const newPathname = currentPathname.replace(
      /\/(en|fr)\b/,
      `/${toFrench ? "fr" : "en"}`
    );

    router.replace(newPathname);
  };

  return (
    <div className="flex gap-2 items-center">
      <span>EN</span>
      <label className="relative w-12 h-6">
        <input
          type="checkbox"
          checked={isFrench}
          onChange={(event) => {
            changeLanguage(event.target.checked);
          }}
        />
        <span
          className={`absolute inset-0 flex items-center rounded-full p-1 transition-colors duration-200 ${
            isFrench ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
              isFrench ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </span>
      </label>
      <span>FR</span>
    </div>
  );
}
