import React from 'react'

function Contactpage() {
  return (

    <div className="max-w-4xl mx-auto p-6 text-gray-900">
      <h1 className="text-4xl font-bold mb-6 uppercase text-center">CONTACT</h1>

      <p className="text-lg mb-8 text-center">
        Need to get in touch? <span className="font-semibold">Email is our preferred route</span> — please allow 1 business day for replies.
      </p>

      <div className="bg-gray-50 p-6 rounded-lg shadow-sm space-y-8">
        {/* Email Section */}
        <div>
          <h2 className="text-2xl font-semibold text-yellow-700 mb-2">Email</h2>
          <p className="text-md">
            <span className="font-semibold">General:</span>{" "}
            <a
              href="mailto:hello@gojocraft.com"
              className="text-blue-600 hover:underline"
            >
              hello@gojocraft.com
            </a>
          </p>
          <p className="text-md">
            <span className="font-semibold">Partnerships:</span>{" "}
            <a
              href="mailto:partners@gojocraft.com"
              className="text-blue-600 hover:underline"
            >
              partners@gojocraft.com
            </a>
          </p>
        </div>

        {/* Mailing Address */}
        <div>
          <h2 className="text-2xl font-semibold text-yellow-700 mb-2">Mailing Address</h2>
          <address className="not-italic leading-relaxed text-md">
            Gojo Craft Solutions PLC <br />
            Bole Sub-City, Woreda 05 <br />
            African Avenue, Olympia Building, 6th Floor <br />
            P.O. Box 127897 <br />
            Addis Ababa, Ethiopia
          </address>
        </div>
      </div>
    </div>
  );
};

export default Contactpage