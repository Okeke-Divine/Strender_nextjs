"use client";
import { useState } from "react";

export default function ContactUsClientComponent() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formSubmitIsLoading, setFormSubmitIsLoading] = useState(false);

  function toggleFormSubmitState() {
    setFormSubmitIsLoading(!formSubmitIsLoading);
  }

  function successPage() {
    setIsSubmitted(true);
  }

  function submitForm(event: any) {
    event.preventDefault();
    toggleFormSubmitState();
    new Promise((reslove) => {
      setTimeout(reslove, 3000);
    }).then(() => {
      successPage();
      toggleFormSubmitState();
    });

  }

  if (isSubmitted === true) {
    return (
      <>
        <main className="mainComponent">
          <div className="min-h-[40vh] flex justify-center items-center">
            <div className="w-fit">
              <div className="text-4xl font-bold text-white text-center w-full">
                Success
              </div>
              <div className="text-white text-center w-full">
                Thanks for contact us, we&apos;ll get back to you in a day or two.
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main className="mainComponent">
        <div>
          <h1 className="text-white font-bold text-4xl">Contact Us</h1>
        </div>
        <div>
          <p className="text-white">
            Send us a message and we&apos;ll reply you via email.
          </p>
        </div>
        <div>
          <form className="pt-5" onSubmit={(e) => submitForm(e)}>
            {/* fullname */}
            <div className="mb-3">
              <div className="text-white">
                <label htmlFor="fName">Full Name</label>
              </div>
              <div>
                <input
                  id="fName"
                  name="fName"
                  required
                  placeholder="Full Name"
                  className="p-2 border w-full border-gray-200 rounded-lg"
                />
              </div>
            </div>
            {/* email */}
            <div className="mb-3">
              <div className="text-white">
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input
                  id="email"
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="p-2 border w-full border-gray-200 rounded-lg"
                />
              </div>
            </div>
            {/* subject */}
            <div className="mb-3">
              <div className="text-white">
                <label htmlFor="subject">Subject</label>
              </div>
              <div>
                <input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="p-2 border w-full border-gray-200 rounded-lg"
                />
              </div>
            </div>
            {/* message */}
            <div className="mb-3">
              <div className="text-white">
                <label htmlFor="msg">Message</label>
              </div>
              <div>
                <textarea
                  rows={5}
                  id="msg"
                  required
                  name="msg"
                  placeholder="Message"
                  className="p-2 border w-full border-gray-200 rounded-lg"
                />
              </div>
            </div>
            {/* button */}
            <div>
              <button
                disabled={formSubmitIsLoading}
                className={`${
                  formSubmitIsLoading === true
                    ? "bg-orange-300"
                    : "bg-orange-400"
                } text-white py-2 px-3 rounded-lg`}
              >
                {formSubmitIsLoading === true ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
