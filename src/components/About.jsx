import HeroImg from "../assets/mem.jpg";
const About = () => {
  const info = [
    { text: "years of experience", count: "04" },
    { text: "Completed Project", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="About" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-green-700">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                reprehenderit placeat architecto, asperiores consequatur ut? A
                cumque magnam obcaecati eaque esse assumenda doloremque, libero
                veritatis laboriosam numquam delectus ea praesentium!
              </p>
              <div className="flex mt-10 items-center gap-8">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl text-white font-semibold">
                      {content.count}
                      <span className="text-green-700">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-sx">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <button className="btn-primary">Download CV</button>
            </div>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm">
              <img
                src={HeroImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
