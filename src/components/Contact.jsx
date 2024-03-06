const Contact = () => {

    return(
        <section id="contact" className="py-10 px-3 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    Contact <span className="text-green-700">Me</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
            </div>
            <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 p-6 rounded-lg mx-auto">
                <form className="flex flex-col flex-1 gap-5">
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Your Email Address"/>
                    <textarea placeholder="Your Message" rows={10}></textarea>
                    <button className="btn-primary ">Send Message</button>
                </form>
                <div className=" flex flex-col gap-7">
                    <div className="flex gap-4 w-fit items-center">
                        <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-green-800 rounded-full">
                            <ion-icon name="mail"></ion-icon>
                        </div>
                        <p className="text-lg">kundaaggy@gmail.com</p>
                    </div>
                    <div className="flex gap-4 w-fit items-center">
                        <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-green-800 rounded-full">
                            <ion-icon name="mail"></ion-icon>
                        </div>
                        <p className="text-lg">kundaaggy@gmail.com</p>
                    </div>
                    <div className="flex gap-4 w-fit items-center">
                        <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-green-800 rounded-full">
                            <ion-icon name="mail"></ion-icon>
                        </div>
                        <p className="text-lg">kundaaggy@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Contact