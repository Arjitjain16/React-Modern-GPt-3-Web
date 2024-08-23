
const Header = () => {
  return (
    <div className=" text-white min-h-screen flex flex-col justify-start items-center mt-9">
      {/* Container for text and image */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center">
        {/* Left section with text */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-4xl  lg:text-5xl font-semibold lg:leading-[60px] mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#EE82EE] via-[#FF66B3] to-[#0057D4]">
            Lets Build Something  amazing with GPT-3  OpenAI
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl mb-6  font-thin">
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
          {/* Email Input and Button */}
          <div className="flex justify-center md:justify-start items-center">
            <div className="relative w-full sm:w-auto flex items-center">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full sm:w-auto px-12 py-2 pr-[270px] rounded text-gray-800  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF66B3]"
              />
              <button className="absolute right-0 bg-[#FF5722] hover:bg-[#FF3D00] text-white font-semibold px-4 py-2">
                Get Started
              </button>
            </div>
          </div>
          
          <div className="w-full flex items-center py-6">
            <div className="h-7 w-1/2 flex">
              <img className="h-[98%] w-[97%]  object-contain" src="src/assets/people.png" alt="" />
            </div>
            <span className="text-xs w-[100%]">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit.</span>
          </div>

          {/* Logos */}
        </div>

        {/* Right section with 3D face image */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <img
            src="src/assets/Header Illustration.png"
            alt="3D Face"
            className="w-full h-auto"
          />
          
        </div>
      </div>
      {/* logos */}
      <div className="flex justify-center md:justify-start mt-6 space-x-4 gap-7 ">
        <img src="src/assets/google.png" alt="Google" className="sm:h-6 h-2 md:h-8" />
        <img src="src/assets/slack.png" alt="Slack" className="sm:h-6 h-2 md:h-8" />
        <img src="src/assets/atlassian.png" alt="Atlassian" className="sm:h-6 h-2 md:h-8" />
        <img src="src/assets/dropbox.png" alt="Dropbox" className="sm:h-6 h-2 md:h-8" />
        <img src="src/assets/shopify.png" alt="Shopify" className="sm:h-6 h-2 md:h-8" />
      </div>
    </div>
  );
};

export default Header;
