function Navbar() {
    return (
        <div className="flex justify-between items-center p-4 shadow-md bg-white">
            <h1 className="text-xl font-bold text-purple-600">
                Customer Support Zone
            </h1>

            <div className="space-x-4">
                <button className="hover:text-purple-500">Home</button>
                <button className="hover:text-purple-500">Tickets</button>
                <button className="bg-purple-600 text-white px-4 py-1 rounded">
                    New Ticket
                </button>
            </div>
        </div>
    );
}

export default Navbar;