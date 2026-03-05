function TicketCard({ ticket, handleAdd }) {
    return (
        <div className=" p-4 rounded shadow hover:shadow-lg transition flex flex-col justify-between">

            {/* Top Section */}
            <div>
                {/* Title + Button */}
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg">
                        {ticket.title}
                    </h3>

                    <button
                        onClick={() => handleAdd(ticket)}
                        className="bg-[#B9F8CF] text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                    >
                        Open
                    </button>
                </div>

                {/* Details */}
                <p className="text-sm text-gray-600 mb-2">
                    {ticket.description}
                </p>
                <p className="text-sm">Customer: {ticket.customer}</p>
                <p className="text-sm">Priority: {ticket.priority}</p>
                <p className="text-sm">Date: {ticket.createdAt}</p>
            </div>

            {/* Footer Section */}
            <div className="mt-4 text-sm text-gray-500 text-right">
                ID: {ticket.id}
            </div>

        </div>
    );
}

export default TicketCard;