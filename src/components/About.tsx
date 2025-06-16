import sanDiego from '/assets/about/SanDiegoCoast.jpg';
import park from '/assets/about/park.jpg';
import city from '/assets/about/city.jpg';
interface Image {
    src: string;
    alt: string;
    back: string;
}

const About: React.FC = () => {
    const images: Image[] = [
        {
            src: sanDiego,
            alt: 'San Diego Coast',
            back: 'Hey! I’m Glen, a frontend developer and Computer Science student at San Diego State University. But before I dove into the world of coding, I spent two years in the 1st Airborne Special Forces Brigade. Yes, I jumped out of planes and learned to face challenges head-on with discipline and resilience!',
        },
        {
            src: park,
            alt: 'balboa park',
            back: 'When I’m not coding, you’ll find me expressing my creative side through music and design. I have a passion for cars and love getting hands-on with creative projects that push my design skills. I believe creativity fuels innovation—whether on a canvas or in my code',
        },
        {
            src: city,
            alt: 'san diego city',
            back: 'I’m all about staying active and exploring the world around me. Whether it’s working out, camping, hiking, or skiing, I’m always ready for the next adventure. Life’s too short to sit still, and I’m constantly on the lookout for my next challenge—both in and out of the tech world!',
        },
    ];

    return (
        <div className="flex flex-wrap justify-center sm:space-x-20">
            {images.map((image, index) => (
                <div key={index} className="group h-96 w-80 [perspective:1000px]">
                    <div
                        className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                        style={{ marginTop: `${index * 80}px` }}
                    >
                        {/* Front Side */}
                        <div className="absolute inset-0">
                            <img className="h-full w-full rounded-xl object-cover" src={image.src} alt={image.alt} />
                        </div>
                        {/* Back Side */}
                        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                            <p className="mt-16">{image.back}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default About;
