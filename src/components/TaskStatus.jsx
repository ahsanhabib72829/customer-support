function TaskStatus({ tasks, handleComplete }) {
    return (
        <div className=" p-4 rounded shadow bg-white">
            <h2 className="font-bold mb-3">Task Status</h2>

            {tasks.length === 0 && <p>No Task Selected</p>}

            {tasks.map((task) => (
                <div key={task.id} className="mb-3">
                    <p className="font-semibold">{task.title}</p>
                    <button
                        onClick={() => handleComplete(task.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded mt-1"
                    >
                        Complete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default TaskStatus;