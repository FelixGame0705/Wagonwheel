import imageSlider1 from '../assets/slider1.jpg'
export const SplashWifi = () => {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center justify-center">
      <header className="container mx-auto py-5 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-col">
            <p className="md:ml-20 font-italiana text-lg md:text-4xl text-black mt-2 text-center md:text-left">
              welcome to
            </p>
            <h1 className="text-4xl md:text-8xl font-dela-gothic text-black text-center md:text-left">
              Serene Terace
            </h1>
            <p className="text-center md:text-right md:mr-10 font-inter font-medium text-black mt-4">where you can find happiness</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="bg-black rounded-lg px-6 py-3">
              <p className="text-white text-sm md:text-base font-inter font-medium text-center">
                contact for more info: <a href="tel:501-538-3546" className="underline">501-538-35XX</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
        {/* Form & Welcome Message Section */}
        <div className="w-full md:w-1/4 items-center">
          {/* Login Form */}
          <div className="bg-white p-6 rounded-lg space-y-4">
            <div className="bg-[#ffeb85] rounded-lg px-4 py-2">
              <input
                type="text"
                placeholder="username"
                className="w-full bg-transparent focus:outline-none font-inter font-medium text-black"
              />
            </div>
            <div className="bg-[#ffeb85] rounded-lg px-4 py-2">
              <input
                type="password"
                placeholder="password"
                className="w-full bg-transparent focus:outline-none font-inter font-medium text-black"
              />
            </div>
            <button className="bg-black text-white rounded-lg px-4 py-2 font-inter font-medium w-full">
              Login
            </button>
          </div>

          {/* Welcome Message */}
          <div className="bg-[#fffcfc] p-6 mt-6">
            <p className="font-inter font-medium text-black text-sm md:text-base text-center">
              welcome to our spaces! <br />
              we're thrilled to have you here and hope your stay with us is nothing short of amazing. <br />
              <br />
              if you need anything at all, whether it's recommendations for exploring the area or just a friendly chat,
              don't hesitate to reach out. let's make some unforgettable memories together!
            </p>
          </div>
        </div>
        {/* Image Section */}
        <div className="relative w-full md:w-3/4 h-64 md:h-auto md:flex md:flex-row md:justify-center">
          <img src={imageSlider1} alt="Serene Terrace" className="md:w-10/12 object-cover" />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full ${i === 2 ? 'bg-white' : 'bg-[#ffffffcc]'}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};