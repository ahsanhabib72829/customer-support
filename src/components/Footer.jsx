function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

                {/* Column 1 */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">
                        CS — Ticket System
                    </h2>
                    <p className="text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        It has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>

                {/* Column 2 */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Company</h2>
                    <ul className="space-y-2 text-sm">
                        <li>About Us</li>
                        <li>Our Mission</li>
                        <li>Customer Stories</li>
                        <li>Join Us</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Services</h2>
                    <ul className="space-y-2 text-sm">
                        <li>Products & Services</li>
                        <li>Contact Sales</li>
                        <li>Download Apps</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Information</h2>
                    <ul className="space-y-2 text-sm">
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                {/* Column 5 */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Social Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li>support@cst.com</li>
                        <li>@CS — Ticket System</li>
                    </ul>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                © 2026 CS — Ticket System. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;