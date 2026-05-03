import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { Nav } from "@/components/cartifi/Nav";
import { Footer } from "@/components/cartifi/Footer";

const LAST_UPDATED = "May 3, 2026";

const Page = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const { t } = useLang();
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <article className="container max-w-3xl pt-32 pb-20 lg:pt-40">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" /> {t.legal.back}
        </Link>
        <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">{t.legal.lastUpdated}: {LAST_UPDATED}</p>
        <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_li]:mb-2">
          {children}
        </div>
      </article>
      <Footer />
    </main>
  );
};

export const Privacy = () => {
  const { t } = useLang();
  return (
    <Page title={t.legal.privacyTitle}>
      <p>Cartifi.ai ("we", "our", "us") respects your privacy. This policy explains what data we collect when you use our website and services, why we collect it, and how we protect it.</p>
      <h2>1. Data we collect</h2>
      <ul>
        <li>Email address — when you sign up for early access.</li>
        <li>Country and language preference — to localize the experience.</li>
        <li>Anonymized usage analytics — to improve the product.</li>
      </ul>
      <h2>2. How we use it</h2>
      <p>To send you product updates, your first optimized cart, and to improve Cartifi. We never sell your data.</p>
      <h2>3. Lawful basis (GDPR)</h2>
      <p>We rely on your consent (Art. 6(1)(a) GDPR) for marketing communication and on legitimate interest (Art. 6(1)(f)) for product analytics.</p>
      <h2>4. Your rights</h2>
      <p>You can access, correct, export, or delete your data at any time by emailing hello@cartifi.ai.</p>
      <h2>5. Retention</h2>
      <p>We keep your email until you unsubscribe or request deletion.</p>
      <h2>6. Contact</h2>
      <p>Cartifi.ai · hello@cartifi.ai</p>
    </Page>
  );
};

export const Terms = () => {
  const { t } = useLang();
  return (
    <Page title={t.legal.termsTitle}>
      <p>By using Cartifi.ai, you agree to these terms. Please read them carefully.</p>
      <h2>1. The service</h2>
      <p>Cartifi.ai compares grocery prices across stores and helps you build a cheaper shopping cart. Prices shown are estimates based on publicly available data and may not reflect in-store prices at the moment of purchase.</p>
      <h2>2. Account & email</h2>
      <p>You may join the waitlist by submitting your email address. You are responsible for the accuracy of the information you provide.</p>
      <h2>3. Acceptable use</h2>
      <p>Don't abuse the service: no scraping, reverse engineering, or attempts to disrupt operation.</p>
      <h2>4. Disclaimer</h2>
      <p>The service is provided "as is". We do not guarantee uninterrupted availability or absolute price accuracy.</p>
      <h2>5. Liability</h2>
      <p>To the maximum extent permitted by law, Cartifi.ai is not liable for indirect or consequential damages arising from use of the service.</p>
      <h2>6. Changes</h2>
      <p>We may update these terms. Continued use constitutes acceptance of the updated terms.</p>
      <h2>7. Contact</h2>
      <p>Cartifi.ai · hello@cartifi.ai</p>
    </Page>
  );
};

export const Gdpr = () => {
  const { t } = useLang();
  return (
    <Page title={t.legal.gdprTitle}>
      <p>Cartifi.ai is fully committed to compliance with the EU General Data Protection Regulation (GDPR).</p>
      <h2>Data controller</h2>
      <p>Cartifi.ai · hello@cartifi.ai</p>
      <h2>Your rights under GDPR</h2>
      <ul>
        <li>Right to access your personal data</li>
        <li>Right to rectification of inaccurate data</li>
        <li>Right to erasure ("right to be forgotten")</li>
        <li>Right to restrict processing</li>
        <li>Right to data portability</li>
        <li>Right to object to processing</li>
        <li>Right to withdraw consent at any time</li>
        <li>Right to lodge a complaint with your supervisory authority</li>
      </ul>
      <h2>Data processing</h2>
      <p>We process the minimum data required to deliver the service: email for waitlist communication, locale for personalization, and aggregated analytics for product improvement.</p>
      <h2>Subprocessors</h2>
      <p>We rely on EU-based hosting and email providers under GDPR-compliant data processing agreements.</p>
      <h2>Exercise your rights</h2>
      <p>To exercise any of the rights above, email hello@cartifi.ai. We will respond within 30 days.</p>
    </Page>
  );
};
