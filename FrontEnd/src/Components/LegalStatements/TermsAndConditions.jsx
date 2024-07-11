import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-primary">
      <div className="max-w-6xl h-auto p-6  bg-white rounded-lg">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-extrabold">
            Terms and Conditions for DayCare Blog
          </h1>
        </div>
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-lg font-bold">Introduction</h1>
          <p className="text-start mb-4">
            Welcome to our Daycare Blog! These Terms and Conditions govern your
            use of our website and outline t he rules and guidelines for
            accessing and interacting with our content. By accessing or using
            our website , you agree to abide by these Terms and Conditions. If
            you do not agree with any part of these terms, you should not use
            our website.
          </p>
          <h1 className="text-lg font-bold">User Eligibility</h1>
          <p className="text-start mb-4">
            Only administrators and content creators are eligible to access and
            log in to our Daycare Blog. User accounts are restricted to
            authorized personnel only.
          </p>
          <h1 className="text-lg font-bold">User Accounts</h1>
          <h1 className="text-lg font-semibold">Registration:</h1>{" "}
          <p className="text-start">
            User accounts are created by administrators for authorized
            personnel. Each user is provided with unique login credentials.
          </p>
          <h1 className="text-lg font-semibold">Responsibilities:</h1>{" "}
          <p className="text-start">
            Users are responsible for maintaining the security of their login
            credentials and preventing unauthorized access to their accounts.
            Any unauthorized use of accounts should be reported immediately to
            the administrators.
          </p>
          <h1 className="text-lg font-semibold">Termination:</h1>{" "}
          <p className="text-start mb-4">
            Administrators reserve the right to terminate or suspend user
            accounts at their discretion, especially in cases of unauthorized
            access or violation of these Terms and Conditions.
          </p>
          <h1 className="text-lg font-bold">Use of the Daycare Blog</h1>
          <p className="text-start">
            a. Permitted Use: Users may access and use the Daycare Blog for the
            purpose of creating, editing, and publishing content related to
            daycare services and related topics.
          </p>
          <p className="text-start">
            b. Prohibited Activities: Users must not engage in any activity that
            violates applicable laws or infringes upon the rights of others.
            Prohibited activities include but are not limited to unauthorized
            access, data scraping, spamming, and posting of offensive or
            inappropriate content.
          </p>
          <p className="text-start mb-4">
            c. Content Ownership: Users retain ownership of the content they
            create and publish on the Daycare Blog. However, by posting content,
            users grant the administrators a non-exclusive, royalty-free license
            to use, modify, and distribute the content for the purposes of
            operating and promoting the Daycare Blog.
          </p>
          <h1 className="text-lg font-bold">Privacy Policy</h1>
          <p className="text-start mb-4">
            Our Privacy Policy outlines how we collect, use, and protect user
            data. By using our Daycare Blog, you agree to the terms of our
            Privacy Policy.
          </p>
          <h1 className="text-lg font-bold text-start">
            Changes to the Terms and Conditions
          </h1>
          <p className="text-start mb-4">
            We reserve the right to update or modify these Terms and Conditions
            at any time. Any changes will be effective immediately upon posting
            on our website. Users are responsible for regularly reviewing the
            Terms and Conditions to stay informed of any updates.
          </p>
          <h1 className="text-lg font-semibold">Contact Information</h1>
          <p className="text-start mb-4">
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at 064 037 3089.
          </p>
          <h1 className="text-lg font-semibold">
            Governing Law and Jurisdiction
          </h1>
          <p className="text-start mb-4">
            These Terms and Conditions are governed by and construed in
            accordance with the laws of [your jurisdiction]. Any disputes
            arising from these terms will be subject to the exclusive
            jurisdiction of the courts in [your jurisdiction].
          </p>
          <h1 className="text-lg font-semibold">Entire Agreement</h1>
          <p className="text-start mb-4">
            These Terms and Conditions constitute the entire agreement between
            users and the administrators of the Daycare Blog, superseding any
            prior agreements or understandings.
          </p>
          <p>
            By using our Daycare Blog, you acknowledge that you have read,
            understood, and agree to be bound by these Terms and Conditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
