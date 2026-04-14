import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, linkedin } = contactDetails;
  return (
    <main className="container mx-auto max-width min-h-screen flex flex-col justify-center items-center text-center pb-24 px-6">

      <h3 className="text-lg md:text-2xl lg:text-4xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Saya terbuka untuk peluang kerja dan kolaborasi
      </h3>

      <h3 className="text-xl md:text-3xl lg:text-4xl text-gradient font-semibold md:font-bold pt-4 md:pt-10 md:pb-6 break-all">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>

      <span className="text-content text-sm md:text-lg font-light block my-4 md:my-6">
        atau
      </span>

      <h3 className="text-lg md:text-2xl lg:text-4xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Kunjungi profil LinkedIn saya
      </h3>

      <h3 className="text-xl md:text-3xl lg:text-4xl text-gradient font-semibold md:font-bold pt-2 md:py-6 break-all">
        <a href={linkedin} target="_blank" rel="noreferrer noopener">
          {linkedin}
        </a>
      </h3>

    </main>
  );
}

export default Contact;