import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="bg-white p-4 fixed md:static top-0 left-0 w-full z-40 shadow-md md:shadow-none">
      <div className="w-full max-w-[80vw] lg:max-w-7xl mx-auto flex items-center  justify-between
      ">
        <img
          className='
            w-[30px] h-[30px]
            lg:w-[60px] lg:h-[60px] 
          '
          src={logo} alt="logo" />
          <a href='https://play.google.com/store/apps/details?id=com.wiping.android' target='_blank'>
            <button
              className="p-[14px] h-[47px] bg-[#2F80ED] rounded-2xl font-[Inter] font-medium text-white text-base leading-[19px] md:p-[8.5px]"
              type="button"
            >
              Download
            </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
