import React, { useEffect, useState } from "react";
import Work from "../Components/Work";
import { personalDetails, eduDetails } from "../Details";
import { getWhatIDo } from "../services/api";
import { FaCode, FaServer, FaBrain, FaMobileAlt } from "react-icons/fa";
import { FaDatabase, FaPaintBrush } from "react-icons/fa";

function About() {
  const [whatIDo, setWhatIDo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWhatIDo();
        setWhatIDo(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const iconMap = {
    code: <FaCode />,
    server: <FaServer />,
    brain: <FaBrain />,
    mobile: <FaMobileAlt />,
    database: <FaDatabase />,
    design: <FaPaintBrush />,
  };

  return (
    <main className="container mx-auto max-width pt-28 md:pt-32 pb-20">

      <section className="mb-20">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tentang Saya
        </h1>

        <p className="text-content text-base md:text-lg py-8 lg:max-w-2xl leading-relaxed whitespace-pre-line">
          {personalDetails.about}
        </p>
      </section>

      <section className="pt-4 md:pt-6">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl font-bold">
          Keahlian Saya
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {whatIDo.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-dark-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/20"
            >
              <div className="text-purple-500 text-3xl mb-4">
                {iconMap[item.icon] || <FaCode />}
              </div>

              <h2 className="text-xl font-semibold mb-2 text-light-heading">
                {item.title}
              </h2>

              <p className="text-content text-base md:text-lg mt-2 leading-relaxed whitespace-pre-line flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-16">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Pendidikan
        </h1>

        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;