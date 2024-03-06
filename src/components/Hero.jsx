import HeroImg from '../assets/mem.jpg'
const Hero = () => {
const socialMedia = [
    'logo-instagram',
    'logo-facebook',
    'logo-linkedin',
    'logo-twitter',
]
    return (
        <section 
        id="home"
        className="min-h-screen flex py-10 md:flex-row flex-col items-center"
        >
    <div className='flex-1 flex items-center justify-center h-full py-8'>
        <img src={HeroImg} alt="" className="md:w-2/3 h-2/5 object-cover rounded-3xl"/>
    </div>
    <div className='flex-1'>
        <div className='md:text-left text-center'>
            <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
                <span className='text-green-700 md:text-6xl text-5xl'>Hello! <br /></span>
                My Name is <span>Agnes IRADUKUNDA</span>
            </h1>
            <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>Fullstack Developer</h4>
            <button className='text-2xl btn-primary mt-8'>Contact Me</button>
            <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
                {
                    socialMedia?.map((icon) => (
                        <div key={icon} className='text-gray-600 hover:text-white cursor-pointer'>
                            <ion-icon name = {icon}></ion-icon>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    </section>
    )
}
 
export default Hero