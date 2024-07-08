import React from "react";
import PlayingKid from "../../Assets/PlayingKid.png";

const PrivacyPolicy = () => {
  return (
    <section className="px-16">
      <div className="w-full h-60 overflow-hidden">
        <img className="" src={PlayingKid} />
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-extrabold">
          Privacy Policy for Daycare Blog
        </h1>
      </div>
      <div className="flex flex-col justify-start items-start">
        <p>
          This Privacy Policy outlines how [Your Daycare Blog Name] ("we",
          "our", or "us") collects, uses, protects, and shares personal
          information collected from users ("you" or "users") of our website
          [YourWebsiteURL.com] (the "Site").
        </p>
        <h2>Information We Collect</h2>
        Personal Information:
        <p>
          {" "}
          We may collect personal information such as your name, email address,
          and contact details when you voluntarily provide it to us, for
          example, when you subscribe to our newsletter or contact us through
          our website.
        </p>
        Usage Information:
        <p>
          We may collect non-personal information about how you interact with
          our website, such as your IP address, browser type, operating system,
          and browsing behavior. This information is collected automatically
          through cookies and similar technologies.
        </p>
        <h2>How We Use Your Information</h2>
        We may use the personal information we collect to: Provide and improve
        our services, including responding to inquiries and requests. Send you
        newsletters, updates, and promotional communications. Customize and
        enhance your experience on our website. Comply with legal obligations
        and enforce our terms and policies. We may use usage information to
        analyze trends, administer the site, track users' movements around the
        site, and gather demographic information about our user base as a whole.
        <h2>How We Protect Your Information</h2>
        <p>
          We implement appropriate security measures to protect against
          unauthorized access, alteration, disclosure, or destruction of your
          personal information. However, please be aware that no method of
          transmission over the internet or electronic storage is 100% secure,
          and we cannot guarantee absolute security.
        </p>
        <h2>Sharing Your Information</h2>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. However, we may share your information with trusted
          third-party service providers who assist us in operating our website,
          conducting our business, or servicing you, subject to confidentiality
          agreements.
        </p>
        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites or services that
          are not owned or controlled by us. We are not responsible for the
          privacy practices or content of these third-party sites. We encourage
          you to review the privacy policies of these sites before providing any
          personal information.
        </p>
        <h2>Your Choices</h2>
        <h2>
          You may choose not to provide certain personal information, although
          this may limit your ability to access certain features of our website.
          You can also unsubscribe from our mailing list or opt-out of receiving
          promotional communications at any time by following the instructions
          provided in the emails we send.
        </h2>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to update or modify this Privacy Policy at any
          time. Any changes will be effective immediately upon posting on this
          page. We encourage you to review this Privacy Policy periodically for
          any updates.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at [Your Contact Email].
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
