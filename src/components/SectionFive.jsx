import effiency_hero from '../assets/efficiency-hero.png';
import google_play from '../assets/google-play.png';
import ios_logo from '../assets/ios-logo.svg';

const SectionFive = () => {
  return (
    <div className="w-full py-40 mt-2 lg:mt-32">
      <div className="flex flex-col md:flex-row items-center justify-center w-[90%] gap-4 mx-auto">
        <div className="flex flex-col">
          <h2 className="efficiency__text font-bold text-center md:text-left">
            Efficiency <br /> Guaranteed
          </h2>
          <p className="text-sm text-center md:text-left md:text-2xl font-medium text-[#8a8a8a]">
            Discover the most suitable and compatible match for your need.
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
        <div>
          <img src={effiency_hero} alt="efficiency_hero_image" />
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
