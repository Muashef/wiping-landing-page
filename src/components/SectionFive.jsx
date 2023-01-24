import effiency_hero from '../assets/efficiency-hero.png';
import google_play from '../assets/google-play.png';
import ios_logo from '../assets/ios-logo.png';

const SectionFive = () => {
  return (
    <div className="w-full py-40 mt-2 lg:mt-32">
      <div className="flex flex-col md:flex-row items-center justify-center w-[80%] gap-6 mx-auto">
        <div className="flex flex-col">
          <h2 className="efficiency__text font-bold text-center md:text-left">
            Efficiency <br /> Guaranteed
          </h2>
          <p className="text-sm text-center md:text-left md:text-2xl font-medium text-[#8a8a8a]">
            Discover the most suitable and compatible match for your need.
          </p>
          <div className="flex items-center gap-8 mt-10 order-last">
            <img src={google_play} alt="google_play_image" />
            <img src={ios_logo} alt="ios_image" />
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
