import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full bg-slate-800">
      <aside className="relative flex items-center justify-center overflow-hidden text-gray-100 rounded-lg sm:mx-16 mx-2 h-screen bg-gray-800">
        <div className="flex items-center relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 text-center">
          <div className="max-w-xl mx-auto space-y-8">
            <h2 className="text-4xl mr-20 pr-20 font-bold sm:text-5xl">
              Wanna Code !!!
              <span className="hidden sm:block text-4xl">Try it Now</span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-600 rounded-lg hover:opacity-75"
              to="/PlayGroundIDE"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Go to playground
            </Link>
          </div>

          <div className="ml-20 pl-20 ">
            <img
              className="object-cover rounded-xl"
              style={{ width: "400px" }}
              src="https://media.istockphoto.com/id/1047259374/photo/programming-source-code-abstract-background.jpg?s=612x612&w=0&k=20&c=07DAFiujCb58Zgu5ZArLprHiSKew5pCGqbTnop9GclA="
              alt="Programming background"
            />
          </div>
        </div>
      </aside>
      <aside className="relative flex items-center justify-center overflow-hidden text-gray-100 rounded-lg sm:mx-16 mx-2 h-screen bg-gray-800">
        <div className="flex flex-col sm:flex-row items-center space-x-4 space-y-8 sm:space-y-0">
          <div className="flex-shrink-0">
            <img
              className="sm:w-96 w-48"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbqG3NZuUc1H7Ks2mXRNuP7Ka37XSrM3Etg&s"
              alt="Solving Problems"
            />
          </div>
          <div className="flex flex-col items-center sm:items-start space-y-4 sm:space-y-6">
            <h1 className="text-4xl font-bold sm:text-5xl text-center sm:text-left">
              Solve
            </h1>
            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-600 rounded-lg hover:opacity-75"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Visit Problems 🚀
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
