import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const CookiePolicy = () => {
    return (
        <>
        <Navbar />
      
      <div className="bg-gray-100 text-gray-900">
         <div className="bg-primary text-white pt-24 pb-12 text-center">
          <h1 className="text-5xl font-bold">Cookie Policy</h1>
        </div>
        <div className="max-w-4xl mx-auto py-12 px-6">
          <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">1. What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device when you visit our website to enhance functionality and user experience.</p>
          </section>
  
          <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">2. Types of Cookies We Use</h2>
            <ul className="list-disc ml-6">
              <li><strong>Essential Cookies</strong><br />
                <em>Purpose:</em> Necessary for website functionality<br />
                <em>Legal basis:</em> Legitimate interest<br />
                <em>Duration:</em> Session to 13 months</li>
              <li><strong>Analytical Cookies</strong><br />
                <em>Purpose:</em> Track website usage and performance<br />
                <em>Legal basis:</em> Consent<br />
                <em>Duration:</em> Up to 13 months<br />
                <em>Provider:</em> Google Analytics</li>
              <li><strong>Functional Cookies</strong><br />
                <em>Purpose:</em> Enhanced functionality and personalization<br />
                <em>Legal basis:</em> Consent<br />
                <em>Duration:</em> Up to 13 months</li>
            </ul>
          </section>
  
          <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">3. Managing Your Preferences</h2>
            <p>You can manage your cookie preferences:</p>
            <ul className="list-disc ml-6">
              <li>Via our cookie banner</li>
              <li>Via your browser settings (instructions for Chrome, Firefox, Safari, Edge)</li>
            </ul>
          </section>
  
          <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">4. Third-Party Cookies</h2>
            <p>Our website may include elements from third parties that may place cookies on your device. We have no control over these cookies.</p>
          </section>
  
          <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">5. Contact</h2>
            <p>For any questions regarding our use of cookies, please contact <strong>mm@mouniamikou.com</strong>.</p>
            <p><strong>Last updated:</strong> March 25, 2025</p>
          </section>
        </div>
      </div>
      <Footer />
      </>
    );
  };
  
  export default CookiePolicy;
