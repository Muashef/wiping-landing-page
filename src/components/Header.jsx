import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="bg-white py-4 px-4">
      <div className="w-full max-w-[80vw] lg:max-w-7xl mx-auto flex items-center justify-between
      ">
        <img
          className='
            w-[30px] h-[30px]
            lg:w-[60px] lg:h-[60px] 
          '
          src={logo} alt="logo" />
        <button
          className="p-[14px] h-[47px] bg-[#2F80ED] rounded-2xl font-[Inter] font-medium text-white text-base leading-[19px] md:p-[8.5px]"
          type="button"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Header;
