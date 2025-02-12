import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const CookiePolicy = () => {
    return (
        <>
        <Navbar></Navbar>
       
      <div className="bg-gray-100 text-gray-900">
         <div className="bg-primary text-white pt-24 pb-12  text-center">
          <h1 className="text-5xl font-bold">Cookie Policy</h1>
    
        </div>
        <div className="max-w-4xl mx-auto py-12 px-6">
          <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">1. What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit our website. They help us enhance your browsing experience.</p>
          </section>
  
          <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">2. Types of Cookies We Use</h2>
            <p>We use different types of cookies:
              <ul className="list-disc ml-6">
                <li>Essential Cookies: Necessary for website functionality.</li>
                <li>Analytical Cookies: Help us understand how visitors interact with our website.</li>
                <li>Marketing Cookies: Used to personalize ads and content.</li>
              </ul>
            </p>
          </section>
  
          <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">3. Managing Cookies</h2>
            <p>You can control or disable cookies through your browser settings. However, disabling cookies may affect the functionality of our site.</p>
          </section>
        </div>
      </div>
      <Footer></Footer>
      </>
    );
  };
  
  export default CookiePolicy;