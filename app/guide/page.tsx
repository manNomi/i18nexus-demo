"use client";

import { useTranslation } from "i18nexus";

export default function GuidePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t("guideTitle")}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t("guideSubtitle")}
          </p>
          <div className="flex gap-6 mt-8">
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                1,617
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                i18nexus {t("downloads")}
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                424
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                i18nexus-tools {t("downloads")}
              </div>
            </div>
          </div>
        </div>

        {/* Motivation Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            {t("whyCreated")}
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              {t("problemTitle")}
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 dark:text-gray-500 mt-1">•</span>
                <span>{t("problem1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 dark:text-gray-500 mt-1">•</span>
                <span>{t("problem2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 dark:text-gray-500 mt-1">•</span>
                <span>{t("problem3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 dark:text-gray-500 mt-1">•</span>
                <span>{t("problem4")}</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              {t("solutionTitle")}
            </h3>
            <div className="bg-gray-900 rounded-lg p-6 mb-4">
              <pre className="text-green-400 text-sm overflow-x-auto">
                {`npx i18n-init          # 10초
npx i18n-wrapper       # 2분
npx i18n-extractor     # 1분`}
              </pre>
            </div>
            <p className="text-xl font-semibold text-center text-gray-900 dark:text-white">
              {t("timeComparison")}
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            {t("coreFeatures")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {t("feature1Title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("feature1Desc")}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {t("feature2Title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("feature2Desc")}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {t("feature3Title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("feature3Desc")}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {t("feature4Title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("feature4Desc")}
              </p>
            </div>
          </div>
        </section>

        {/* Efficiency Comparison */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            {t("efficiencyTitle")}
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="py-3 px-4 text-gray-900 dark:text-white font-semibold">
                    {t("task")}
                  </th>
                  <th className="py-3 px-4 text-gray-900 dark:text-white font-semibold">
                    {t("manual")}
                  </th>
                  <th className="py-3 px-4 text-gray-900 dark:text-white font-semibold">
                    i18nexus
                  </th>
                  <th className="py-3 px-4 text-gray-900 dark:text-white font-semibold">
                    {t("efficiency")}
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4">{t("taskStructure")}</td>
                  <td className="py-3 px-4">10분</td>
                  <td className="py-3 px-4 font-medium">10초</td>
                  <td className="py-3 px-4 font-medium">60배</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4">{t("taskFind")}</td>
                  <td className="py-3 px-4">60분</td>
                  <td className="py-3 px-4 font-medium">2분</td>
                  <td className="py-3 px-4 font-medium">30배</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4">{t("taskWrap")}</td>
                  <td className="py-3 px-4">60분</td>
                  <td className="py-3 px-4 font-medium">2분</td>
                  <td className="py-3 px-4 font-medium">30배</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4">{t("taskCreate")}</td>
                  <td className="py-3 px-4">20분</td>
                  <td className="py-3 px-4 font-medium">1분</td>
                  <td className="py-3 px-4 font-medium">20배</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-gray-700 font-semibold">
                  <td className="py-3 px-4 text-gray-900 dark:text-white">
                    {t("total")}
                  </td>
                  <td className="py-3 px-4">150분</td>
                  <td className="py-3 px-4">5분</td>
                  <td className="py-3 px-4 text-base">30배</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Quick Start */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            {t("quickStartTitle")}
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gray-900 dark:bg-gray-700 text-white flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("step1Title")}
                </h3>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  {`npm install i18nexus
npm install -g i18nexus-tools`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gray-900 dark:bg-gray-700 text-white flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("step2Title")}
                </h3>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  npx i18n-init
                </pre>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gray-900 dark:bg-gray-700 text-white flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("step3Title")}
                </h3>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-sm overflow-x-auto text-green-400">
                  {`import { I18nProvider } from "i18nexus";
import { translations, languageConfig } from "./i18n/i18n";

function App() {
  return (
    <I18nProvider
      translations={translations}
      languageManagerOptions={languageConfig}>
      <YourApp />
    </I18nProvider>
  );
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-900 dark:bg-gray-800 rounded-lg p-12 border border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-white">
            {t("ctaTitle")}
          </h2>
          <p className="text-lg mb-8 text-gray-300">{t("ctaSubtitle")}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://www.npmjs.com/package/i18nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              {t("viewNpm")}
            </a>
            <a
              href="https://github.com/manNomi/i18nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent border-2 border-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors">
              {t("viewGithub")}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
