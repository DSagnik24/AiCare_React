import React from "react";
// import Drechsler from "../assets/Drechsler.png";
// import Hiranmay_Saha from "../assets/Hiranmay_Saha.png";
// import Kembhavi from "../assets/kembhavi.png";
// import Asis_Kumar_Chattopadhyay from "../assets/Asis_Kumar_Chattopadhyay.png";
// import Manna from "../assets/Manna.png";
// import VenueImage from "../assets/3391556.jpg";

const Speaker = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div
          className="h-80 md:h-[200px] overflow-hidden bg-cover bg-center"
        //   style={{ backgroundImage: `url(${VenueImage})` }}
        >
          <div className="flex items-center justify-center h-full bg-blue-800 bg-opacity-60">
            <h1 className="text-5xl text-white font-bold uppercase text-center">
              Keynote Speakers
            </h1>
          </div>
        </div>
      </section>

      {/* Speaker Section */}
      <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8">

            {/* Speaker 1 */}
            <div className="card flex flex-col md:flex-row items-center gap-10 border border-blue-200 shadow-md p-4 transition-all duration-300">
              <div className="flex flex-col items-center gap-4 md:w-1/3">
                <img
                //   src={Drechsler}
                  alt="Prof Dr. Rolf Drechsler"
                  className="w-36 h-36 rounded-full object-cover border-4 border-blue-300"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Prof Dr. Rolf Drechsler</h3>
                  <p className="text-sm font-medium">University of Bremen, Germany</p>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-base">
                  <strong>Prof Dr. Rolf Drechsler</strong> is a <strong>Full Professor</strong> and <strong>Head of the Group of Computer Architecture</strong> at the <strong>University of Bremen, Germany</strong>. In <strong>2011</strong>, he became the <strong>Director of the Cyber-Physical Systems Group</strong> at the <strong>German Research Center for Artificial Intelligence (DFKI)</strong>. His research interests include <strong>data structures, algorithms, and circuit design</strong>. He is an <strong>ACM Fellow</strong> and an <strong>IEEE Fellow</strong>.
                </p>
              </div>
            </div>

            {/* Speaker 2 */}
            <div className="card flex flex-col md:flex-row items-center gap-10 border border-blue-200 shadow-md p-4 transition-all duration-300">
              <div className="flex flex-col items-center gap-4 md:w-1/3">
                <img
                //   src={Hiranmay_Saha}
                  alt="Prof Dr. Hiranmay Saha"
                  className="w-36 h-36 rounded-full object-cover border-4 border-blue-300"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Prof Dr. Hiranmay Saha</h3>
                  <p className="text-sm font-medium">Chair Professor, IIEST Shibpur</p>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-base">
                  Prof. Dr. Hiranmay Saha has over <strong>50 years</strong> of teaching and research experience. He is the <strong>Chair Professor</strong> and <strong>Coordinator</strong> at the <strong>Center of Excellence for Green Energy and Sensor Systems</strong>, IIEST Shibpur. He has previously served at <strong>University of Kalyani</strong> and <strong>Jadavpur University</strong>.
                </p>
              </div>
            </div>

            {/* Speaker 3 */}
            <div className="card flex flex-col md:flex-row items-center gap-10 border border-blue-200 shadow-md p-4 transition-all duration-300">
              <div className="flex flex-col items-center gap-4 md:w-1/3">
                <img
                //   src={Kembhavi}
                  alt="Prof Dr. Ajit Kembhavi"
                  className="w-36 h-36 rounded-full object-cover border-4 border-blue-300"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Prof Dr. Ajit Kembhavi</h3>
                  <p className="text-sm font-medium">Principal Investigator, Pune Knowledge Cluster</p>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-base">
                  <strong>Prof. Dr. Ajit Kembhavi</strong> is the <strong>Principal Investigator</strong> of the <strong>Pune Knowledge Cluster</strong>. He is a <strong>Professor Emeritus</strong> at <strong>IUCAA, Pune</strong>, and a member of <strong>ISRO’s Apex Science Board</strong>. He was formerly <strong>Vice-President of the International Astronomical Union</strong>.
                </p>
              </div>
            </div>

            {/* Speaker 4 */}
            <div className="card flex flex-col md:flex-row items-center gap-10 border border-blue-200 shadow-md p-4 transition-all duration-300">
              <div className="flex flex-col items-center gap-4 md:w-1/3">
                <img
                //   src={Asis_Kumar_Chattopadhyay}
                  alt="Prof Asis Kumar Chattopadhyay"
                  className="w-36 h-36 rounded-full object-cover border-4 border-blue-300"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Prof Dr. Asis Kumar Chattopadhyay</h3>
                  <p className="text-sm font-medium">Visiting Professor, Indian Statistical Institute</p>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-base">
                  <strong>Prof. Asis Kumar Chattopadhyay</strong> is a <strong>Visiting Professor</strong> at <strong>ISI Kolkata</strong> and <strong>Coordinator of IUCAA Centre for Astronomy Research and Development (ICARD)</strong>. He is the author of <strong>“Statistical Methods for Astronomical Data Analysis”</strong>, recognized as an <strong>Outstanding Publication in Astrostatistics-2016</strong>.
                </p>
              </div>
            </div>

            {/* Speaker 5 */}
            <div className="card flex flex-col md:flex-row items-center gap-10 border border-blue-200 shadow-md p-4 transition-all duration-300">
              <div className="flex flex-col items-center gap-4 md:w-1/3">
                <img
                //   src={Manna}
                  alt="Dr. Tanumay Manna"
                  className="w-36 h-36 rounded-full object-cover border-4 border-blue-300"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Dr. Tanumay Manna</h3>
                  <p className="text-sm font-medium">Senior Research Specialist, Nokia Standards</p>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-base">
                  <strong>Dr. Tanumay Manna</strong> works at <strong>Nokia Standards, Bangalore</strong> as a <strong>Senior Research Specialist</strong> in <strong>3GPP standardization</strong>. He is a <strong>Senior IEEE member</strong> and inventor of <strong>60+ patents</strong>, with publications in top-tier <strong>IEEE Transactions</strong> and <strong>conference proceedings</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Speaker;
