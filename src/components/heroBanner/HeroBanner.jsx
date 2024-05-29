import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import backgroundImage from "../../../public/images/banner2.jpg"; // Make sure this path is correct

const ContactBanner = ({ text1, text }) => {
  return (
    <div className="relative h-[15.3rem] w-full">
      <div
        className="h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="h-full w-full bg-darkShade relative">
          <div className="text-4xl text-light font-semibold absolute top-[30%] left-16">
            <p>{text1}</p>
            <div className="flex items-center gap-4 mt-3">
              <Link to="/" className="block text-lg text-red font-normal">
                Home
              </Link>
              <FaArrowRight className="text-[0.7rem]" />
              <Link
                to="/about"
                className="block text-lg text-light font-normal"
              >
                {text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";

// const ContactBanner = ({text1, text}) => {
//   return (
//     <div>
//       <div className='h-[15.3rem] w-full bg-[url("../../../public/images/banner2.jpg")] bg-cover bg-center'>
//         <div className="h-full w-full bg-darkShade relative">
//           <div className="text-4xl text-light font-semibold absolute top-[30%] left-16">
//             <p>{text1}</p>
//             <div className="flex items-center gap-4 mt-3">
//               <Link to="/" className="block text-lg text-red font-normal">
//                 Home
//               </Link>
//               <FaArrowRight className="text-[0.7rem]" />
//               <Link
//                 to="/about"
//                 className="block text-lg text-light font-normal"
//               >
//                 {text}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactBanner;
