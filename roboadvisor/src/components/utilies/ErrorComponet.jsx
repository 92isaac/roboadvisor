/* eslint-disable react/prop-types */

const ErrorComponent = ({ message }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-red-500 text-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Error</h2>
        <p className="text-lg">Something went wrong{message}</p>
      </div>
    </div>
  );
};

export default ErrorComponent;
