function Banner({ inProgress, resolved }) {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center p-6">
            <h2 className="text-2xl font-bold mb-2">Ticket Statistics</h2>
            <p>In Progress: {inProgress}</p>
            <p>Resolved: {resolved}</p>
        </div>
    );
}

export default Banner;