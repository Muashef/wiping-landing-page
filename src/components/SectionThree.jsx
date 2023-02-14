import view_hero from '../assets/view-hero-image.png';
import google_play from '../assets/google-logo.svg';
import ios_logo from '../assets/ios-logo.svg';

const SectionThree = () => {
  return (
    <div className="w-full py-32 lg:py-48">
      <div className="w-full max-w-[80vw] lg:max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 mx-auto">
        <div className="w-[60%] md:w-[40%]">
          <img src={view_hero} alt="view_hero_image" />
        </div>
        <div className="text-center md:text-right flex flex-col items-center md:items-end w-[80%] md:w-[40%] mx-auto md:mx-0">
          <h2 className="font-bold view__text">
            View all <br /> screens.
          </h2>
          <p className="font-medium text-sm text-center md:text-right max-w-xs md:text-xl text-[#8a8a8a]">
            A Real-time Social and Networking App with efficient AI.
          </p>
          <div className="flex items-center justify-center md:justify-end gap-4 mt-10 mx-auto md:mx-0 w-full">
            <a href='https://play.google.com/store/apps/details?id=com.wiping.android' target='_blank'>
              <img className="" width={150} src={google_play} alt="google_play_image"/>
            </a>
            <a href='#'>
              <img className="" width={150} src={ios_logo} alt="ios_image" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SectionThree;
