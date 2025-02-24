"use client"
import CountUp from "react-countup";

const OurResponsibility = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Responsibility</h2>
        <p className="text-gray-600 mb-8">
          As an alumni network, we strive to foster meaningful connections, support career growth, and create opportunities 
          for lifelong learning. Our responsibility is to build a strong and engaged alumni community.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-700">Networking</h3>
          <p className="text-gray-500 mt-2">Bringing alumni together to share experiences, insights, and professional opportunities.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-700">Mentorship</h3>
          <p className="text-gray-500 mt-2">Providing guidance and support to students and recent graduates in their careers.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-700">Community Engagement</h3>
          <p className="text-gray-500 mt-2">Organizing events, reunions, and initiatives that strengthen alumni connections.</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-700">
              <CountUp end={500} duration={2} />+
            </h3>
            <p className="text-gray-500">Members</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-700">
              <CountUp end={1000} duration={2} />+
            </h3>
            <p className="text-gray-500">Photos</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-700">
              <CountUp end={50} duration={2} />+
            </h3>
            <p className="text-gray-500">Events</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-700">
              <CountUp end={20} duration={2} />+
            </h3>
            <p className="text-gray-500">Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurResponsibility;




// const OurResponsibility = () => {
//     return (
//       <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Responsibility</h2>
//           <p className="text-gray-600 mb-8">
//             As an alumni network, we strive to foster meaningful connections, support career growth, and create opportunities 
//             for lifelong learning. Our responsibility is to build a strong and engaged alumni community.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//           <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//             <h3 className="text-xl font-semibold text-gray-700">Networking</h3>
//             <p className="text-gray-500 mt-2">Bringing alumni together to share experiences, insights, and professional opportunities.</p>
//           </div>
//           <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//             <h3 className="text-xl font-semibold text-gray-700">Mentorship</h3>
//             <p className="text-gray-500 mt-2">Providing guidance and support to students and recent graduates in their careers.</p>
//           </div>
//           <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//             <h3 className="text-xl font-semibold text-gray-700">Community Engagement</h3>
//             <p className="text-gray-500 mt-2">Organizing events, reunions, and initiatives that strengthen alumni connections.</p>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default OurResponsibility;
  