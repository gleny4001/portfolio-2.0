import sanDiego from "../assets/about/SanDiegoCoast.jpg"
import park from '../assets/about/park.jpg';
import city from "../assets/about/city.jpg";
interface Image {
    src: string;
    alt: string;
    back:string;
  }

const About:React.FC = () =>{
    const images: Image[] = [
        {src: sanDiego, alt : "San Diego Coast", back:"I'm a frontend developer based in San Diego, currently pursuing a Computer Science degree at San Diego State University. My journey is shaped by the discipline and resilience I developed as a member of the 1st Airborne Special Forces Brigade (2020-2022), where I honed my skills in leadership and problem-solving under pressure."},
        {src: park, alt:'balboa park', back:"With technical expertise gained during my time as a software engineering intern at Mercedes-Benz, where I specialized in automation and application development, I’ve developed a passion for creating efficient solutions. Additionally, I’m working as a frontend developer at SDSU’s Digital Innovation Lab, where I’m building an AI career mentorship platform from scratch, using React, Tailwind CSS, and Django."},
        {src: city, alt:"san diego city", back:"Beyond coding, my passions extend to art, design, and cars. I also enjoy staying active through outdoor activities like working out, camping, hiking, and skiing. With a unique blend of military precision and corporate experience, I’m driven to create meaningful impact in both the tech industry and my personal life."},

    ]

    return (
        <div className = "flex flex-wrap max-h-screen justify-center sm:space-x-20">
             {images.map((image, index) => (
        <div key={index} className="group h-96 w-80 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"   style={{ marginTop: `${index * 80}px` }}
          >
            {/* Front Side */}
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-xl object-cover"
                src={image.src}
                alt={image.alt}
              />
            </div>
            {/* Back Side */}
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <p className="mt-36">{image.back}</p>
            </div>
          </div>
        </div>
      ))}
         
        </div>
    )

}

export default About