import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function FAQs() {
  return (
    <div
      className={`flex flex-col dark bg-utd-navy w-screen h-full px-6 md:px-12 py-12 text-left leading-loose ${inconsolata.className}`}
    >
      <h1>Privacy Policy</h1>
      <p>Last Updated: 23/06/2024</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to Under The Drum. We value your privacy and are committed to
        protecting your personal data. This Privacy Policy explains how we
        collect, use, disclose, and safeguard your information when you visit
        our website [yourwebsite.com].
      </p>

      <h2>2. Information We Collect</h2>
      <h3>Personal Data</h3>
      <p>
        We collect only essential personal data necessary for the functioning of
        our website. This may include:
      </p>
      <ul>
        <li>
          Email addresses (if you subscribe to our newsletter or contact us)
        </li>
        <li>Names (if you choose to provide them)</li>
      </ul>

      <h3>Non-Personal Data</h3>
      <p>We collect non-personal data automatically, including:</p>
      <ul>
        <li>Cookies (only essential cookies are used)</li>
        <li>
          Google Analytics data (to help us understand how our website is being
          used)
        </li>
      </ul>

      <h2>3. Cookies</h2>
      <p>
        Cookies are small text files placed on your device to track usage and
        improve your experience. We use only essential cookies and Google
        Analytics cookies.
      </p>

      <h3>Essential Cookies</h3>
      <p>
        These are necessary for the website to function properly and cannot be
        switched off in our systems. They are usually set in response to actions
        made by you, such as setting your privacy preferences, logging in, or
        filling out forms.
      </p>

      <h3>Google Analytics Cookies</h3>
      <p>
        These cookies collect information about how visitors use our website. We
        use the information to compile reports and help us improve the site. The
        cookies collect information anonymously, including the number of
        visitors to the site, where visitors have come from, and the pages they
        visited.
      </p>
      <p>
        You can choose to disable cookies through your browser settings, but
        this may affect the functionality of our website.
      </p>

      <h2>4. Use of Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide and maintain our website</li>
        <li>Improve our website and user experience</li>
        <li>Monitor and analyze usage and trends to improve our website</li>
      </ul>

      <h2>5. Disclosure of Your Information</h2>
      <p>
        We do not share your personal data with third parties except in the
        following cases:
      </p>
      <ul>
        <li>With your consent</li>
        <li>To comply with legal obligations</li>
        <li>To protect and defend our rights and property</li>
        <li>
          To prevent or investigate possible wrongdoing in connection with our
          website
        </li>
        <li>
          To protect the personal safety of users of our website or the public
        </li>
      </ul>

      <h2>6. Payment Information</h2>
      <p>
        We do not collect or store any payment information on our website.
        Payments are processed securely through Stripe. Please refer to Stripe’s
        Privacy Policy for information on how they handle your data.
      </p>

      <h2>7. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to
        protect your personal data from unauthorized access, use, or disclosure.
      </p>

      <h2>8. Your Rights</h2>
      <p>
        Depending on your location, you may have the following rights regarding
        your personal data:
      </p>
      <ul className="list-disc pl-6">
        <li>The right to access</li>
        <li>The right to rectification</li>
        <li>The right to erasure</li>
        <li>The right to restrict processing</li>
        <li>The right to object to processing</li>
        <li>The right to data portability</li>
      </ul>
      <p>
        To exercise any of these rights, please contact us at [your contact
        email].
      </p>

      <h2>9. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page. You are
        advised to review this Privacy Policy periodically for any changes.
      </p>
    </div>
  );
}
