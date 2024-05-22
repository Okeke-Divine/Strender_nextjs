"use client";
import { useEffect, useState } from "react";

export default function ContactUsClientComponent() {
  return (
    <>
      <main className="mainLayout">
        <div>
          <h1 className="text-white font-bold text-4xl">Contact Us</h1>
        </div>
        <div>
          <p className="text-white">
            Send us a message and we'll reply you via email.
          </p>
        </div>
        <hr />
        <div>
          <form>
            {/* fullname */}
            <div>
              <div>
                <label htmlFor="fName">Full Name</label>
              </div>
              <div>
                <input
                  id="fName"
                  name="fName"
                  placeholder="Full Name"
                  className="p-2 border border-gray-200 rounded-lg"
                />
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
