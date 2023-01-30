import google_play from '../assets/google-logo.svg';
import ios_logo from '../assets/ios-logo.svg';
import section_six_hero from '../assets/section-six-hero.png';

const SectionSix = () => {
  return (
    <div className="my-36">
      <div className=" pt-[3rem] px-4 text-center w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#2F80ED] rounded-3xl md:rounded-[72px] overflow-hidden">
        <div className='flex flex-col items-center md:pl-8 md:items-start justify-center gap-8'>
          <div className='flex flex-col items-center md:items-start gap-4'>
          <h2 className="font-bold text-2xl md:text-5xl text-white">
            Get Wiping Now.
          </h2>
          <p className="text-sm md:text-xl font-medium text-white">
            Real-time Social and Networking App.
          </p>
          </div>
          <div className="w-full flex items-center justify-center md:items-start md:justify-start gap-4">
            <img
              width={"150"}
              src={google_play}
              alt="google_play_image"
            />
            <img width={"150"} src={ios_logo} alt="ios_image" />
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <img src={section_six_hero} alt="section_six_hero_image" />
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
