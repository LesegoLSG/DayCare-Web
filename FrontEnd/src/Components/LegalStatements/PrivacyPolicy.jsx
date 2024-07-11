import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-primary">
      <div className="max-w-6xl h-auto p-6  bg-white rounded-lg">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-extrabold">
            Privacy Policy for Daycare Blog
          </h1>
        </div>
        <div className="flex flex-col justify-start items-start">
          <p className="text-start my-2">
            This Privacy Policy outlines how Start Bright collects, uses,
            protects, and shares personal information collected from users of
            our website.
          </p>
          <h1 className="text-xl font-bold">Information We Collect</h1>
          <h2 className="text-lg text-start font-semibold">
            Personal Information:
          </h2>
          <p className="text-start mb-1">
            {" "}
            We may collect personal information such as your name, email
            address, and contact details when you voluntarily provide it to us,
            for example, when you subscribe to our newsletter or contact us
            through our website.
          </p>
          <h2 className="text-lg text-start font-semibold">
            Usage Information:
          </h2>
          <p className="text-start mb-4">
            We may collect non-personal information about how you interact with
            our website, such as your IP address, browser type, operating
            system, and browsing behavior. This information is collected
            automatically through cookies and similar technologies.
          </p>
          <h1 className="text-xl font-bold">How We Use Your Information</h1>
          <p className="text-start my-1">
            We may use the personal information we collect to: Provide and
            improve our services, including responding to inquiries and
            requests. Send you newsletters, updates, and promotional
            communications. Customize and enhance your experience on our
            website. Comply with legal obligations and enforce our terms and
            policies. We may use usage information to analyze trends, administer
            the site, track users' movements around the site, and gather
            demographic information about our user base as a whole.
          </p>
          <h2 className="text-lg text-start font-semibold">
            How We Protect Your Information
          </h2>
          <p className="text-start mb-1">
            We implement appropriate security measures to protect against
            unauthorized access, alteration, disclosure, or destruction of your
            personal information. However, please be aware that no method of
            transmission over the internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>
          <h2 className="text-lg text-start font-semibold">
            Sharing Your Information
          </h2>
          <p className="text-start mb-1">
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share your information with trusted
            third-party service providers who assist us in operating our
            website, conducting our business, or servicing you, subject to
            confidentiality agreements.
          </p>
          <h2 className="text-lg text-start font-semibold">
            Third-Party Links
          </h2>
          <p className="text-start mb-1">
            Our website may contain links to third-party websites or services
            that are not owned or controlled by us. We are not responsible for
            the privacy practices or content of these third-party sites. We
            encourage you to review the privacy policies of these sites before
            providing any personal information.
          </p>
          <h2 className="text-lg text-start font-semibold">Your Choices</h2>
          <p className="text-start mb-1">
            You may choose not to provide certain personal information, although
            this may limit your ability to access certain features of our
            website. You can also unsubscribe from our mailing list or opt-out
            of receiving promotional communications at any time by following the
            instructions provided in the emails we send.
          </p>
          <h2 className="text-lg text-start font-semibold">
            Changes to This Privacy Policy
          </h2>
          <p className="text-start">
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be effective immediately upon posting on this
            page. We encourage you to review this Privacy Policy periodically
            for any updates.
          </p>
          <h2 className="text-lg text-start font-semibold">Contact Us</h2>
          <p className="text-start">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at 064 037 3089.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
