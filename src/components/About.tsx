import sanDiego from "../assets/SanDiegoCoast.jpg"
import art from '../assets/art.jpg';
import city from "../assets/city.jpg";
interface Image {
    src: string;
    alt: string;
    back:string;
  }

const About:React.FC = () =>{
    const images: Image[] = [
        {src: sanDiego, alt : "San Diego Coast", back:"Hi, my name is Glen. I'm a frontend developer based in San Diego, currently pursuing a Computer Science degree at San Diego State University. "},
        {src: art, alt:'white paint art', back:"hello"},
        {src: city, alt:"san diego city", back:""},

    ]

    return (
        <div className = "flex flex-wrap min-h-screen justify-center sm:space-x-20">
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