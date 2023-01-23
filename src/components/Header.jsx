import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="bg-white py-4">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        <img src={logo} alt="logo" />
        <button
          className="p-[14px] h-[47px] bg-[#2F80ED] rounded-2xl font-[Inter] font-medium text-white text-base leading-[19px]"
          type="button"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Header;
