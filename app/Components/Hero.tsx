
const Hero = () => {
    return (
      <section className="container mx-auto flex flex-col-reverse lg:flex-row items-center py-12">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-5xl  font-semibold text-gray-800 my-7 mx-9 font-sans">Hi, I'm Umm-e-habiba!</h2>
          <p className="text-lg text-pink-600 mt-4 mx-16 font-medium">
            A passionate full stack developer having an experience of building web and mobile application with javascript /React js/Node.js/ React Native and some other cool libraries and frame works          </p>
            <div>
              <ul className="flex ml-24 gap-3 mt-5">
                <li><a href="#"><img src="/github.png" alt=""  className="w-10 h-10  "  /></a></li>
                <li><a href="#"><img src="/Google.png" alt=""  className="w-10 h-10 " /></a></li>
                <li><a href="#"><img src="/fb.png" alt=""      className="w-10 h-10 "   /></a></li>
                <li><a href="#"><img src="/linkedin.png" alt=""className="w-10 h-10 "   /></a></li>
              </ul>
            </div>
          <div>
           <button className=" mt-6 ml-26  inline-block bg-purple-600 text-white py-2 px-4 rounded shadow hover:bg-purple-700 mx-16">Contact me</button>
          <button className="mt-6 ml-0  inline-block bg-purple-600 text-white py-2 px-4 rounded shadow hover:bg-purple-700 mx-11">See my resume</button>
          </div>
        </div>
        <div>
          <img
            src="/img-3.png"
            alt="Hero Illustration"
            className="w-96 h-auto rounded-full  mx-48 my-10 border-b-indigo-500"
          />
        </div>
      </section>
    );
  };
  
  export default Hero;
  