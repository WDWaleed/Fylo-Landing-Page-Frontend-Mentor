

const Hero = () => {
  return (
    <>
      <section id="hero" className="mx-auto bg-IntroBack">
        <div
          id="intro-image-container"
          className="mx-auto aspect-[720/534] max-h-[534px] max-w-[720px] bg-IntroBack bg-Intro bg-contain bg-center bg-no-repeat "
        ></div>
        <div className=" flex flex-col items-center gap-6 bg-MainBack py-6">
          <h1 className="mx-auto max-w-[600px]  px-10 text-center font-Raleway text-2xl font-bold custom:text-[1.75rem]">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="mx-auto max-w-[520px] px-10 text-center font-OpenSans text-Cyan ">
            Fylo stores all of your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family, and co-workers.
          </p>
          <button
            id="cta"
            className="mx-auto w-[225px] rounded-3xl py-3 font-Raleway font-bold "
          >
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};
export default Hero;
