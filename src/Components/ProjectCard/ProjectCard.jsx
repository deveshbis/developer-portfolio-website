/* eslint-disable react/prop-types */
import { Zoom } from "react-awesome-reveal";

const ProjectCard = ({ project }) => {
  const {
    image,
    projectName,
    description,
    tech,
    liveLink,
    clientCode,
    serverCode,
  } = project;

  return (
    <div className="bg-gradient-to-b from-indigo-800 to-indigo-600 text-white rounded-lg overflow-hidden shadow-lg">
      <Zoom duration={3000}>
        <img src={image} alt={projectName} className="w-full h-64 object-cover" />
      </Zoom>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{projectName}</h3>
        <p className="text-sm opacity-75">{description}</p>

        <div className="font-[sans-serif] mt-4 flex flex-col gap-4 items-center mx-auto">
          <div className="flex flex-wrap gap-4 mt-4">
            {tech.map((item, idx) => (
              <button
                key={idx}
                type="button"
                className="flex items-center text-sm px-3 py-1.5 tracking-wide rounded-full bg-white text-black"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 mt-4 text-sm">
          {liveLink && (
            <a href={liveLink} target="_blank" className="text-blue-200 hover:underline">
              Live Link
            </a>
          )}
          {clientCode && (
            <a href={clientCode} target="_blank" className="text-blue-200 hover:underline">
              Code Client
            </a>
          )}
          {serverCode && (
            <a href={serverCode} target="_blank" className="text-blue-200 hover:underline">
              Code Server
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
