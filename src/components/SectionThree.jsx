import view_hero from '../assets/view-hero-image.png';
import google_play from '../assets/google-play.png';
import ios_logo from '../assets/ios-logo.svg';

const SectionThree = () => {
  return (
    <div className="w-full py-32">
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
          <div className="flex items-center gap-8 mt-10">
            <img src={google_play} alt="google_play_image" />
            <img src={ios_logo} alt="ios_image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
