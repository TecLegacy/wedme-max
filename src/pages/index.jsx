import StateList from '../components/State';
import { TestimonialsAndBrandSection } from '../components/testimonials';

const Home = () => {
  return (
    <div className="  flex flex-col gap-20  ">
      {/*Hero Section */}
      <div className="h-screen bg-opacity-50 bg-hero bg-cover bg-center">
        <div className="flex h-full items-center justify-center">
          <div className="w-4/5 rounded-lg bg-white bg-opacity-80 p-8">
            <h1 className="mb-4 text-4xl font-bold">Welcome to Our Website</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      {/* Appeal */}
      <div className=" mx-auto mb-32 mt-12 flex w-5/6 flex-col gap-20 ">
        <div>
          <div className="relative flex  items-center justify-center bg-cover bg-center">
            <div className="rounded-lg bg-white bg-opacity-75 p-8 shadow-lg">
              <h1 className="mb-4 text-4xl font-bold">
                Hassle Free Planning & Booking at Our Guaranteed Best Prices.
              </h1>
              <p className="mb-4 text-lg">
                Take our Price Challenge and experience the best wedding
                planning and booking services in the industry. With over 10,000+
                events organized till date and a presence in 25+ cities, we
                offer access to over 20,000+ wedding venues and vendors.
              </p>
              <div className="flex items-center justify-center">
                <a
                  href="#"
                  className="rounded-md bg-pink-500 px-8 py-4 text-white 
                   transition duration-500
                  hover:bg-pink-600  hover:text-yellow-500"
                >
                  Browse Wedding Venues and Vendors
                </a>
                <p className="mx-8 text-lg">Get up to 30% off</p>
              </div>
            </div>
          </div>
        </div>
        <StateList />
      </div>
      {/* Testimonial */}
      <TestimonialsAndBrandSection />
    </div>
  );
};

export default Home;
