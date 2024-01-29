import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to see more my projects?</h2>
        <p className="text-gray-500 my-2">Checkout on Github</p>

        <a
          href="https://www.github.com/ashishsigdel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl mx-auto rounded-bl-none"
          >
            {" "}
            Click here
          </Button>
        </a>
      </div>
      <div className="p-7 flex-1">
        <img src="https://opensource.com/sites/default/files/lead-images/code_development_programming.png" />
      </div>
    </div>
  );
}
