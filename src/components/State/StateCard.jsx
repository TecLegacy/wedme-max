const StateCard = ({ state }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-white shadow-lg">
      <img
        src={state.image}
        alt={state.name}
        className="h-64 w-full transform object-cover transition duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-50 p-6 opacity-0 backdrop-blur-sm backdrop-filter transition duration-300 hover:opacity-100">
        <h2 className="text-xl font-medium">{state.name}</h2>
        <button className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          View details
        </button>
      </div>
    </div>
  );
};

export default StateCard;
