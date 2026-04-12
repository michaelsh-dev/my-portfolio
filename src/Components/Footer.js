import React from "react";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white dark:bg-dark-mode py-2">
      <p className="text-xs text-center text-dark-content dark:text-light-content">
        &copy;{" "}
        <a
          className="font-medium"
          href="https://github.com/michaelsh-dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          2026 MichaelSH
        </a>{" "}

        <span className="text-gradient font-medium"> </span>
        <span className="text-gradient font-medium"> </span>
      </p>
    </footer>
  );
}

export default Footer;