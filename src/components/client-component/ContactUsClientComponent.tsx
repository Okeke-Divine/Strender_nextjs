"use client";
import { useEffect, useState } from "react";

export default function ContactUsClientComponent() {
  return (
    <>
      <main className="mainComponent">
        <div>
          <h1 className="text-white font-bold text-4xl">Contact Us</h1>
        </div>
        <div>
          <p className="text-white">
            Send us a message and we'll reply you via email.
          </p>
        </div>
        <div>
          <form className="pt-5">
            {/* fullname */}
            <div className="mb-3">
              <div className="text-white">
                <label htmlFor="fName">Full Name</label>
              </div>
              <div>
                <input
                  id="fName"
                  name="fName"
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
                  name="email"
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
                  placeholder="Subject"
                  className="p-2 border w-full border-gray-200 rounded-lg"
                />
              </div>
            </div>
            {/* message */}
            <div className="mb-5">
              <div className="text-white">
                <label htmlFor="msg">Message</label>
              </div>
              <div>
                <textarea
                  rows={5}
                  id="msg"
                  name="msg"
                  placeholder="Message"
                  className="p-2 border w-full border-gray-200 rounded-lg"
                />
              </div>
            </div>
            {/* button */}
            <div>
              <button className="bg-orange-400 text-white py-2 px-3 rounded-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
