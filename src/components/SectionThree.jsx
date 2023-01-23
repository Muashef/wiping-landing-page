import view_hero from '../assets/view-hero-image.png';
import google_play from '../assets/google-play.png';
import ios_logo from '../assets/ios-logo.png';

const SectionThree = () => {
  return (
    <div className="w-full py-36">
      <div className="w-[80%] flex items-center justify-between gap-6 mx-auto">
        <div className="w-[40%]">
          <img src={view_hero} alt="view_hero_image" />
        </div>
        <div className="w-[40%]">
          <h2 className="font-bold view__text">
            View all screens.
          </h2>
          <p className="font-[Inter] font-medium text-2xl text-[#8a8a8a]">
            Real-time in app Social and Work tool with efficient AI.
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
