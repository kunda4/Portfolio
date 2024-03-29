const Skills = () => {
  const Skills = [
    { logo: "logo-css3", level: "Expect", count: 90 },
    { logo: "logo-html5", level: "Advance", count: 86 },
    { logo: "logo-nodejs", level: "Beginner", count: 40 },
    { logo: "logo-react", level: "Intermediate", count: 80 },
  ];
  return (
    <section>
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-green-700">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {Skills?.map((skill, index) => (
            <div
              key={index}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`,
                }}  
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div
                  className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex
                  items-center justify-center group-hover:text-green-700"
                >
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
