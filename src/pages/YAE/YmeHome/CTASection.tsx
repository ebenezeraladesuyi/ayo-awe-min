import { NavLink } from "react-router-dom";


export const CTASection = () => {

    // const router = useRouter();

    return (
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-[30px]">Take Advantage of This Opportunity</h2>
        {/* <Button className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg"
          onClick={() => router.push('/register')}
        >
          Register Now
        </Button> */}
        <NavLink 
            to="/yme/register" 
            className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg transition duration-800 ease-in-out animate-bounce"
          >
            Apply Now
        </NavLink>
      </section>
    );
  };