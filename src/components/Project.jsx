import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images-4.jpg";
const Project = () => {
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-green-700">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper slidesPerview={1.2} spaceBetween={20} breakpoints={{}}>
            {" "}
            <SwiperSlide>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                <img src={project1} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
