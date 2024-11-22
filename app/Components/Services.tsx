
const Services = () => {
    return (
      <section id="services" className="py-12 bg-gray-100 ">
        <div className="container mx-auto  ">
          <h3 className="text-5xl font-bold text-gray-800 mb-6  text-center">Services</h3>
          <div className="grid md:grid-cols-3 gap-2 mx-40  ">
            <div className="bg-gray-300 p-6 rounded shadow  w-72">
              <img src="/computer-icon-1031.png" alt="" className="h-20 w-20 ml-20" />
              <h4 className="text-xl font-bold mt-3 text-center text-pink-600">Web Development</h4>
              <p className="text-gray-600 mt-2 text-center">
                Building responsive and modern websites tailored to your needs.
              </p>
              <button className="font-medium  py-1 px-3 mx-14 mt-4 rounded-full bg-purple-600 text-white  shadow hover:bg-purple-700">Read More</button>
              </div>
            <div className="bg-gray-300 p-6 rounded shadow w-72">
              <img src="/pngimg.com - windows_logos_PNG35.png" alt=""  className="h-20 w-20 ml-20"/>
              <h4 className="text-xl font-bold mt-3 text-center text-pink-600">UI/UX Design</h4>
              <p className="text-gray-600 mt-2 text-center">
                Designing user-friendly interfaces for better user experiences.
              </p>
              <button className="font-medium  py-1 px-3 mx-14 mt-4 rounded-full bg-purple-600 text-white  shadow hover:bg-purple-700">Read More</button>
            </div>
            <div className="bg-gray-300 w-72 p-6 rounded shadow">
              <img src="/camera-icon-21.png" alt="" className="h-20 w-20 ml-20"  />
              <h4 className="text-xl font-bold mt-3 text-center text-pink-600">SEO Optimization</h4>
              <p className="text-gray-600 font-sans mt-2 text-center">
                Enhancing your website's visibility on search engines.
              </p>
              <button className="font-medium  py-1 px-3 mx-14 mt-4 rounded-full bg-purple-600 text-white  shadow hover:bg-purple-700">Read More</button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;