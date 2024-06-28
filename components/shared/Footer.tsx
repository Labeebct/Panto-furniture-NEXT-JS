import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white mt-16 py-8 px-6 md:px-16">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-[1.3rem] font-semibold mb-6 sm:text-[1.4rem] md:text-[1.7rem] cursor-pointer font-lexend">
              Panto
            </h2>
            <p className="text-gray-600 mb-4 font-lexend font-light">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
          </div>

          <div>
            <h3 className="text-lg mb-4 font-lexend text-[#e58411] font-light">
              Services
            </h3>
            <ul className="space-y-2">
              {["Email Marketing", "Campaigns", "Branding", "Offline"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-600 font-light hover:text-gray-900"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4 font-lexend text-[#e58411] font-light">
              Furniture
            </h3>
            <ul className="space-y-2">
              {["Beds", "Chair", "All"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 font-light hover:text-gray-900"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4 font-lexend text-[#e58411] font-light">
              Follow Us
            </h3>
            <ul className="space-y-2">
              {["Facebook", "Twitter", "Instagram"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 font-light hover:text-gray-900"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">Copyright © 2024</p>
          <div className="space-x-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
