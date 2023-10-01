const StayProductive = () => {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col py-16 justify-center items-center gap-16 px-12 custom:flex-row custom:px-12">
      <div
        id="productive-illustration"
        className=" aspect-[615/465] max-h-[465px] w-full max-w-[615px] bg-ProductiveIllustration bg-contain bg-center bg-no-repeat "
      ></div>
      <div className="">
        <h3 className="my-6 max-w-[400px] font-Raleway text-2xl font-bold custom:text-4xl">
          Stay productive, wherever you are
        </h3>
        <p className="my-4 text-Cyan w-full max-w-[500px] ">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all your file storage needs.
        </p>
        <p className="my-4 text-Cyan w-full max-w-[500px] ">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href="#" className="text-Cyan opacity-90 transition-opacity duration-200 hover:opacity-100 inline-block border-Cyan border-b-2 pb-2 ">
          See how Fylo works <img src="images/icon-arrow.svg" className="inline-block " />
        </a>
      </div>
    </section>
  );
};
export default StayProductive;
