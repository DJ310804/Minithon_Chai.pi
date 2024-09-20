// src/pages/Page2.jsx
import LandingPage from "./Landingpage";

const Page2 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      {/* <h1 className="text-4xl mb-8">Page 2: University Landing Page</h1> */}
      <div className="w-full">
        <LandingPage /> {/* Corrected the closing tag */}
      </div>
    </div>
  );
};

export default Page2;
