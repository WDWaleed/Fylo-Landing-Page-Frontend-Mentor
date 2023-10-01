const Footer = () => {
  return (
    <footer className=" bg-Footer px-8 py-24 custom:py-16 custom:flex custom:h-[500px] custom:flex-col text-Cyan custom:justify-center ">
      
      <div className="mx-auto max-w-[1440px] w-full mt-[10rem] mb-6">
      <img src="images/logo.svg" alt="logo" />
      </div>
      <div
        id="footer-content"
        className="mx-auto relative flex w-full max-w-[1440px] flex-col gap-8 custom:flex-row custom:justify-between custom:gap-12 "
      >
        <div id="container-1" className="container-in-footer max-w-[400px] " >
          
          <div className="flex gap-6 mt-4 ">
            <img src="images/icon-location.svg" alt="Location:" className="w-[13px] h-[18px] " />
            <p >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              doloribus molestias veritatis temporibus ex iure voluptate ducimus
            </p>
          </div>
        </div>
        <div id="container-2" className="container-in-footer" >
          <div className="flex gap-4 mb-4">
            <img src="images/icon-phone.svg" alt="Phone" />
            <p>+1-543-123-4567</p>
          </div>
          <div className="flex gap-4 mb-4 ">
            <img src="images/icon-email.svg" alt="Email" />
            <p>example@fylo.com</p>
          </div>
        </div>
        <div id="container-3" className="container-in-footer" >
          <nav>
            <ul className="flex flex-col gap-2">
              <li>About Us</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>
        <div id="container-4" className="container-in-footer" >
          <nav>
            <ul className="flex flex-col gap-2">
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </nav>
        </div>
        <div id="container-5"  className="container-in-footer flex gap-4 h-[50px]">
          <img
            src="images/twitter.png"
            alt="twitter"
            className="rounded-full bg-white"
          />
          <img
            src="images/facebook.png"
            alt="facebook"
            className="rounded-full bg-white"
          />
          <img
            src="images/instagram.png"
            alt="instagram"
            className="bg-white rounded-2xl"
          />
        </div>
        <p className="font-Raleway text-lg absolute right-0 left-0 text-center -bottom-12">Coded by <a href="https://github.com/WDWaleed" target="_blank" className="font-bold">WDWaleed</a></p>
      </div>
    </footer>
  );
};
export default Footer;
