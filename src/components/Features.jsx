import "../styles/Features.css";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Access your files, anywhere",
      body: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
      icon: "/images/icon-access-anywhere.svg",
      iconWidth: "83px",
      iconHeight: "78px",
      alt: "Access anywhere",
    },
    {
      id: 2,
      title: "Security you can trust",
      body: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
      icon: "/images/icon-security.svg",
      iconWidth: "70px",
      iconHeight: "88px",
      alt: "Trustworthy Security",
    },
    {
      id: 3,
      title: "Real-time collaboration",
      body: "Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required.",
      icon: "/images/icon-collaboration.svg",
      iconWidth: "86px",
      iconHeight: "71px",
      alt: "Collaboration",
    },
    {
      id: 4,
      title: "Store any type of file",
      body: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
      icon: "/images/icon-any-file.svg",
      iconWidth: "91px",
      iconHeight: "64px",
      alt: "Any File",
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-[1000px] my-20 px-12 py-4">
      {features.map((feature) => {
        return (
          <div key={feature.id} className="flex flex-col justify-center items-center gap-2 max-w-[350px] ">
            <img
              src={feature.icon}
              alt={feature.alt}
              className={`w-[${feature.iconWidth}] h-[${feature.iconHeight}]`}
            />
            <h2 className="text-xl mt-6 text-center font-Raleway font-bold">{feature.title}</h2>
            <p className="text-center text-Cyan ">{feature.body}</p>
          </div>
        );
      })}
    </section>
  );
};
export default Features;
