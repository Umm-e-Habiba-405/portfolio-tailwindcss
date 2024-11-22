const About = () => {
    return (
      <section  className="py-12 bg-white">
          {/* right section */}
          <div className="flex">
            <div>
            <img src="/img-2.png" alt="" className="w-80 h-auto ml-48 rounded-full" />
            </div>

        <div className="container ml-32">
          <h3 className="text-5xl font-bold  text-gray-800  text-center font-serif">About Me</h3>
          <h3 className="text-pink-600 text-center  text-2xl mt-5"><b> Developer and Design</b></h3>

          <p className="text-black-600 font-semibold  font-mediumleading-relaxed ml-40 mt-6">
          I am a front_end web developer I can provide clean code and pixel perfect design <br />
I also make the website more &more interactive with web annimation . I can provide <br />
clean ciode and pixel perfect design I also make the website more &more interactive <br /> with
web animation accessible to allusers regardless of thier devices

          </p>
          <button className=" font-medium ml-72 mt-8 py-1 px-5 rounded-full bg-purple-600 text-white  shadow hover:bg-purple-700 ">Let's Talk</button>
        </div>
       
        </div>
        
      </section>
    );
  };
  
  export default About;
  