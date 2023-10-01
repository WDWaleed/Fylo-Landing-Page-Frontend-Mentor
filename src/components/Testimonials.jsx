const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      body: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      profileImg: "/images/profile-1.jpg",
      name: "Satish Patel",
      role: "Founder & CEO, Huddle",
    },
    {
      id: 2,
      body: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      profileImg: "/images/profile-2.jpg",
      name: "Bruce McKenzie",
      role: "Founder & CEO, Huddle",
    },
    {
      id: 3,
      body: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      profileImg: "/images/profile-3.jpg",
      name: "Iva Boyd",
      role: "Founder & CEO, Huddle",
    },
  ];
  return (
    <section className="relative z-10 mx-auto my-16 flex max-w-[1440px] flex-col flex-wrap items-center justify-center gap-12 p-8 custom:flex-row">
      <div
        id="quote-container"
        className="absolute left-16 top-0 -z-[1] h-[45px] w-[55px] bg-Quotes "
      ></div>
      {testimonials.map((testimonial) => (
        //Apply styling using tailwind classes
        <div
          key={testimonial.id}
          className="w-full max-w-[400px] rounded-sm bg-TestimonialsBack p-8"
        >
          <p className="mb-8 pt-2 text-Cyan">{testimonial.body}</p>
          <div className="flex items-center gap-4">
            <img
              src={testimonial.profileImg}
              alt={testimonial.name}
              className="aspect-square w-[36px] rounded-full "
            />
            <div>
              <h3 className="text-[14px] font-bold">{testimonial.name}</h3>
              <p className="text-[12px] text-Cyan ">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Testimonials;
