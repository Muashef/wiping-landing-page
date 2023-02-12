import effiency_hero from '../assets/efficiency-hero.png';
import google_play from '../assets/google-logo.svg';
import ios_logo from '../assets/ios-logo.svg';

const SectionFive = () => {
  return (
    <div className="w-full py-32 mt-2 lg:mt-32">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[80vw] lg:max-w-7xl w-full gap-6 mx-auto">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="efficiency__text font-bold text-center md:text-left mb-3">
            Efficiency <br /> Guaranteed
          </h2>
          <p className="text-sm text-center md:text-left md:text-2xl font-medium text-[#8a8a8a]">
            Discover the most suitable and <br/> compatible match for your need.
          </p>
          <div className="flex items-center gap-3 lg:gap-8 mt-10 mx-auto md:mx-0">
            <img src={google_play} width={"150"} alt="google_play_image"/>
            <img src={ios_logo} width={"150"} alt="ios_image" />
          </div>
        </div>
        <div className="w-[60%] md:w-[40%]">
          <img src={effiency_hero} alt="efficiency_hero_image" /> 
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
