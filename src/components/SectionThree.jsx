import view_hero from '../assets/view-hero-image.png';
import google_play from '../assets/google-play.png';
import ios_logo from '../assets/ios-logo.svg';

const SectionThree = () => {
  return (
    <div className="w-full py-36">
      <div className="w-full md:w-[80%] flex flex-col md:flex-row items-center justify-between gap-6 mx-auto">
        <div className="w-[60%] md:w-[40%]">
          <img src={view_hero} alt="view_hero_image" />
        </div>
        <div className="text-center md:text-left w-[90%] md:w-[40%] mx-auto">
          <h2 className="font-bold view__text">
            View all <br /> screens.
          </h2>
          <p className="font-medium text-sm md:text-2xl text-[#8a8a8a]">
            A Real-time Social and Networking App with efficient AI.
          </p>
          <div className="flex items-center gap-2 mt-10 w-full justify-between md:justify-start">
            <button
              className="
              flex items-center gap-1 bg-[#212121] py-2 px-4 rounded-md
            "
            >
              <img
                src={google_play}
                className="w-10 h-10"
                alt="google_play_image"
              />
              <div className="flex flex-col text-left">
                <span className="text-[#FAFAFA] uppercase text-[10px]">
                  Get it on
                </span>
                <span className="text-[#FAFAFA] capitalize">Google Play</span>
              </div>
            </button>
            <button
              className="
              flex items-center gap-1 bg-[#212121] py-2 px-3 rounded-md
            "
            >
              <img src={ios_logo} className="w-10 h-10" alt="ios_image" />
              <div className="flex flex-col text-left">
                <span className="text-[#FAFAFA] text-[10px]">
                  Download on the
                </span>
                <span className="text-[#FAFAFA] capitalize">App Store</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
