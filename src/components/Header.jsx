const Header = () => {
  return (
    <header className=" bg-IntroBack   ">
      <div className="flex items-center justify-between px-4 py-4 font-Raleway custom:p-8 max-w-[1440px] mx-auto">
      <div id="logo-container">
        <img
          src="images/logo.svg"
          alt="LOGO"
          className="aspect-[176/52] h-[40px] custom:h-[52px] "
        />
      </div>
      <nav>
        <ul className="flex gap-4 custom:gap-12">
          <li>
            <a href="#" className="text-Cyan transition-colors duration-100 hover:text-white hover:underline" >Features</a>
          </li>
          <li>
            <a href="#" className="text-Cyan transition-colors duration-100 hover:text-white hover:underline" >Team</a>
          </li>
          <li>
            <a href="#" className="text-Cyan transition-colors duration-100 hover:text-white hover:underline" >Sign In</a>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
};
export default Header;
