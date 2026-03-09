export default function GetStarted() {
  return (
    <div className="w-full max-w-md bg-gradient-to-br from-sky-300 to-sky-400 rounded-3xl overflow-hidden h-[800px] flex flex-col">
      <div className="flex-1 flex items-center justify-center relative">
        <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
          🩺
        </div>
        <div className="absolute top-32 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
          🥚
        </div>
        <div className="absolute bottom-48 right-12 w-14 h-14 bg-white rounded-full flex items-center justify-center text-3xl shadow-lg">
          💪
        </div>

        <div className="relative z-10">
          <img
            src="https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Fitness"
            className="w-80 h-[500px] object-cover object-top rounded-t-[100px]"
          />
        </div>
      </div>

      <div className="bg-white rounded-t-[50px] p-8 flex items-center justify-center">
        <button className="bg-white border-4 border-gray-900 rounded-full px-16 py-4 font-bold text-xl text-gray-900 hover:bg-gray-50 transition-colors shadow-lg">
          GET STARTED
        </button>
      </div>
    </div>
  );
}
