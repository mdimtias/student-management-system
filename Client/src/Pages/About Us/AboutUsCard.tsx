import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

type aboutType = {
    about: {
        id: number;
        name: string;
        designation: string;
        linkedIn: string;
        github: string;
        profilePic: string;
    }
}

const AboutUsCard = ({about} :aboutType ) => {
    const {name, designation,linkedIn,github, profilePic} = about
    return (
        <div className="transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl relative h-96 flex items-end justify-start text-left bg-cover bg-center" style={
            {
                backgroundImage :   `url(${profilePic})`,
            }
        }>
        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
            <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
              <a href={linkedIn} target='_blank' rel="noreferrer" className="text-xs bg-indigo-600 text-white px-2 py-2 hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"><AiFillLinkedin size={25}/></a>
              <a href={github} target='_blank' rel="noreferrer" className="text-xs bg-indigo-600 text-white px-2 py-2 hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"><AiFillGithub size={25}/></a>
           
            </div>
        <main className="p-5 z-10">
         <h1 className="text-2xl text-white">{name}</h1>
         <h1 className="text-xs text-white">{designation}</h1>
            </main>
      </div>
    );
};

export default AboutUsCard;