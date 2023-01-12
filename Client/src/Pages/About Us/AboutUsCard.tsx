import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const AboutUsCard = () => {
    return (
        <div className="transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl relative h-96 w-96 flex items-end justify-start text-left bg-cover bg-center" style={
            {
                backgroundImage :  "url('https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg')",
            }
        }>
        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
            <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
              <a href="#" className="text-xs bg-indigo-600 text-white px-2 py-2 hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"><AiFillLinkedin size={20}/></a>
              <a href="#" className="text-xs bg-indigo-600 text-white px-2 py-2 hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"><AiFillGithub size={20}/></a>
           
            </div>
        <main className="p-5 z-10">
         <h1 className="text-2xl text-white">Mohammed Hasan</h1>
         <h1 className="text-xs text-white">Web Develper</h1>
            </main>
      </div>
    );
};

export default AboutUsCard;