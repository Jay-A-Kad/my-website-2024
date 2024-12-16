import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const projects = [
    {
        title: "Mother 2D-game using Pygame",
        description: "Mother is a 2D horror platformer that blends story-driven dialogue, atmospheric pixel art, and responsive controls into a haunting experience. Players assume the role of a Vile human journeying through an underworld filled with mini-bosses and peculiar NPCs, each encounter revealed through a dynamic conversation engine. Custom-made pixel art, a smooth 60 FPS architecture, and state-driven interactions create a fluid, immersive gameplay loop. As the player struggles to reunite with their mother, every step offers narrative depth and tension, encouraging longer, more engaged play sessions.",
        tags: ["Python3", "Pygame", "Adobe Creative Suite", "LibreSprite"],
        bgGradient: "black",
        text1: "white",
        text2: "black",
        images: [
            "https://github.com/Jay-A-Kad/mother/blob/master/Game-Description/kadam_game_thumbnail.png?raw=true"],
        code: "https://github.com/Jay-A-Kad/mother"
    },
    {
        title: "EmpoCop: Policing with Empathy",
        description: "EmpoCop: Policing with Empathy is a Unity3D game-in-progress where you play as an officer responding to a 911 call about a home disturbance. Through interactive dialogue with the suspect, your choices are evaluated against key metrics like bias awareness, empathy, de-escalation skills, and community trust. These decisions culminate in a dynamic cutscene that reflects the impact of your approach. Currently under development, EmpoCop: Policing with Empathy is slated for submission to the ACM CHI Play competition.",
        tags: ["Unity3D", "C#", "Plastic SCM", "Adobe Creative Suite", "MakeHuman", "Unity Asset Store", "Narrative-Driven"],
        bgGradient: "white",
        text1: "black",
        text2: "white",
        images: [
            "https://github.com/Jay-A-Kad/my-website-2024/blob/master/public/Screenshot%202024-12-15%20at%207.02.35%E2%80%AFPM.png?raw=true"
        ],
        // code: "https://github.com/Jay-A-Kad/Fitme"
    },
    {
        title: "Space Invader using Pygame",
        description: "Space Invader is a classic, pioneering fixed shooter game first released by Taito in 1978. Building on the original template, this version—created with the Pygame module—puts you in the role of a lone space soldier defending Earth against relentless waves of alien invaders. Your mission is to move your ship horizontally, dodge incoming fire, and strategically shoot down the oncoming extraterrestrial forces before they reach the planet’s surface. The game emphasizes timing, precision, and quick reflexes, capturing the timeless arcade spirit of the original.",
        tags: ["Python", "Pygame"],
        bgGradient: "black",
        text1: "white",
        text2: "black",
        images: [
            "https://github.com/Jay-A-Kad/my-website-2024/blob/master/public/93020256-0b30-4ef1-ae1a-db4fc618933f.jpeg?raw=true"
        ],
        code: "https://github.com/Jay-A-Kad/my-website-2024/blob/master/public/Retro-Snake.gif?raw=true"
    },
    {
        title: "Retro Snake Using Js",
        description: "This is a nostalgic Snake game featuring a retro background, where a pixelated serpent navigates the screen to consume randomly generated food. Each time the snake successfully eats, it grows longer, challenging you to maintain control and avoid running into yourself. The game’s classic style and simple mechanics capture the essence of the original arcade experience.",
        tags: ["HTML5", "CSS3", "Javascript"],
        bgGradient: "white",
        text1: "black",
        text2: "white",
        images: [
            "https://github.com/Jay-A-Kad/my-website-2024/blob/master/public/e34c3804-f512-49ce-ae4c-22bfe89d6c73.jpeg?raw=true"],
        code: "https://github.com/Jay-A-Kad/my-website-2024/blob/master/public/Detected-face.png"
    },
    {
        title: "SuperMarket Navigation",
        description: "This project offers a modern twist on traditional shopping by simulating a virtual superstore—complete with grocery, clothing, and electronics sections—within the mobile app. User authentication is securely managed with Firebase (fAuth) and Firestore. After selecting items for their cart, the system calculates an optimal route through the store using the A* algorithm and visually guides the user along that path, providing a more efficient and immersive shopping experience.",
        tags: ["Java", "C#", "HTML5", "CSS3", "Javascript", "Firebase", "Android Studio", "Unity3D", "Path Finding"],
        bgGradient: "black",
        text1: "white",
        text2: "black",
        images: [
            "https://github.com/Jay-A-Kad/my-website-2024/blob/master/public/08d62276-94ad-4e03-bfde-c50bc92f7d5a.jpeg?raw=true"],
        code: "https://github.com/Jay-A-Kad/MyPortfolio/blob/master/public/supermarket.gif?raw=true"
    },
    {
        title: "PiRockPaperScissors",
        description: "Experience the timeless game of Rock-Paper-Scissors on your Raspberry Pi, enhanced with machine learning. By harnessing camera input and classification algorithms, the system recognizes your hand gestures and responds accordingly, creating a dynamic, interactive twist on the classic showdown.",
        tags: ["Numpy", "CNN", "Computer Vision", "Machine Learning"],
        bgGradient: "white",
        text1: "black",
        text2: "white",
        images: [
            "https://github.com/Jay-A-Kad/my-website-2024/blob/master/public/6472b524-1e53-4493-a30f-e3382641d192.jpeg?raw=true"
        ],
        code: "https://github.com/Jay-A-Kad/PiRockPaperScissors?tab=readme-ov-file"
    },
    {
        title: "Detecting Faces using HaarCacades",
        description: "This project employs OpenCV and haarcascades to detect faces—both single and multiple—in still images. Once detected, the program overlays a green rectangle around each face, providing a clear visual indication of their location. The result is a straightforward, Python-based face detection system ideal for basic computer vision applications",
        tags: ["Python", "OpenCV", "Face Detection"],
        bgGradient: "black",
        text1: "white",
        text2: "black",
        images: [
            "https://github.com/Jay-A-Kad/my-website-2024/blob/master/public/Detected-face.png?raw=true"],
        code: "https://github.com/Jay-A-Kad/my-website-2024/blob/master/public/Detected-face.png?raw=true"
    },
    {
        title: "Kelpie Blogs",
        description: "This project is a personal blog platform built with React.js, enabling you to easily document and share your thoughts. It provides a clean, dynamic interface for creating, editing, and organizing posts, offering a seamless writing and reading experience.",
        tags: ["React.Js", "Express.Js", "Node.Js", "MongoDB", "HTML5", "CSS3", "Javascript"],
        bgGradient: "white",
        text1: "black",
        text2: "white",
        images: [
            "https://github.com/Jay-A-Kad/my-website-2024/blob/master/public/kelpie-blogs.png?raw=true"],
        code: "https://github.com/Jay-A-Kad/my-website-2024/blob/master/public/logo192.png?raw=true"
    },



    {
        title: "Stoic Qutes App",
        description: "This application delivers a daily dose of Stoic wisdom, featuring random quotes that serve as reminders of the Roman Empire’s philosophical legacy. Built with React.js and styled using Tailwind CSS, it employs a Go backend to efficiently fetch and serve the content.",
        tags: ["React.Js", "Tailwind CSS", "Golang", "Go Colly"],
        bgGradient: "black",
        text1: "white",
        text2: "black",
        images: [
            "https://github.com/Jay-A-Kad/my-website-2024/blob/master/public/27f74010-a01d-4016-a0f9-30c495e7ae3e.jpeg?raw=true"],
        code: "https://github.com/Jay-A-Kad/MyPortfolio/blob/master/public/stoic-app.gif?raw=true"
    },

    {
        title: "FitMe App",
        description: "This weight tracking app records a user’s current weight along with the timestamp and day, storing the information in Firebase’s Realtime Database under a unique hash ID. Greetings within the app adjust dynamically based on the current time, providing a personalized, time-aware user experience.",
        tags: ["Python", "Kivy", "Firebase", "Matplot lib"],
        bgGradient: "white",
        text1: "black",
        text2: "white",
        images: [
            "https://github.com/Jay-A-Kad/Fitme/blob/master/Snaps/Home.png?raw=true"
        ],
        code: "https://github.com/Jay-A-Kad/Fitme"
    },


];

const Projects = () => {
    return (
        <div>
            <div>
                <div className='bg-black py-10'>
                    <h1 className='text-white font-poppins text-[60px] lg:text-[150px] px-4 lg:px-8 '>Projects.</h1>
                </div>
                <div className="min-h-screen flex flex-col items-center justify-center">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`min-h-screen w-full flex items-center justify-center bg-${project.bgGradient}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="mx-auto px-6 py-8 flex relative ">
                                <div className={`flex flex-col items-start justify-center space-y-4 lg:px-40 text-${project.text1}`}>
                                    <h2 className={`text-[28px] lg:text-[40px] font-bold mb-4 text-${project.text1}`}>{project.title}</h2>
                                    <p className={`text-[15px] lg:text-2xl  mb-4 lg:mt-10 text-${project.text1} `}>{project.description}</p>
                                    <div className="flex flex-wrap space-x-2 mb-4">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className={`bg-indigo-400 px-3 py-2 rounded-md text-[15px] lg:text-[20px] mt-2 text-black`}>{tag}</span>
                                        ))}
                                    </div>
                                    <button className={`absolute left-1/2 transform -translate-x-1/2 translate-y-40 h-12 lg:h-20  px-4 lg:py-2 hover:scale-110 duration-500 lg:mt-4 text-[15px] lg:text-[40px] bottom-8 lg:bottom-16 text-${project.text1}`}><a href={project.code}>Source Code</a></button>
                                </div>
                                <div className="absolute top-0 right-0 transform -translate-x-10 -translate-y-40 lg:-translate-x-10 lg:-translate-y-72">
                                    {project.images.map((image, imgIndex) => (
                                        <div
                                            key={imgIndex}
                                            className="w-40 h-40 lg:w-96 lg:h-96 rounded-full overflow-hidden relative"
                                        >
                                            <img
                                                src={image}
                                                alt={`Project ${index + 1} Image ${imgIndex + 1}`}
                                                className="object-cover w-full h-full rounded-full"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className='w-full h-screen bg-black text-white'>
                    <h1 className='text-[45px] lg:text-[75px] font-poppins mt-4 px-4 lg:px-12 py-10'>Stay Connected.</h1>
                    <h3 className='text-[25px] font-lora px-4 lg:px-12 mb-10'>Have a Project Idea?</h3>
                    <div className='flex flex-col text-center'>
                        <a className='text-[25px] font-gamify px-6 hover:scale-125  hover:bg-white hover:text-blue-500 hover:duration-500 py-4 mt-8'><Link to="mailto:jaykad982@gmail.com">Drop Me A Line</Link></a>
                        <a className='text-[25px] font-gamify px-6 hover:scale-125 hover:bg-white hover:text-blue-500 hover:duration-500 py-4 mt-8'><Link to="https://www.linkedin.com/in/jay-kadam-27720416a/">LinkedIn</Link></a>
                        <a className='text-[25px] font-gamify px-6 hover:scale-125 hover:bg-white hover:text-blue-500 hover:duration-500 py-4 mt-8'><Link to="https://github.com/Jay-A-Kad">Github</Link></a>
                    </div>
                    <a className='flex justify-end mt-10 mr-2 text-[20px] hover:underline hover:duration-500 hover:bg-black hover:text-white' href='/'>| Back to Top | </a>

                    <div className='w-full h-[55%] bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 flex justify-center'>
                        <h1 className='flex justify-center items-center text-[80px] lg:text-[160px] ml-4 font-poppins hover:font-bold'>Jay Kadam</h1>
                        <h3 className=' text-white flex justify-center items-center text-[20px] lg:text-[40px] ml-2 font-poppins'>2024 Portfolio</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
