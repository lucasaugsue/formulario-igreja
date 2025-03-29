export default function Sucesso() {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-900 text-white">
        <div className="bg-white p-4 rounded-full shadow-lg mb-4 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="green"
            className="w-12 h-12"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm13.78-2.72a.75.75 0 10-1.06-1.06l-4.47 4.47-2-2a.75.75 0 10-1.06 1.06l2.53 2.53a.75.75 0 001.06 0l5-5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
  
        <h1 className="text-3xl font-bold text-green-300">Obrigado! Thank you!</h1>
        <p className="text-lg mt-2 text-center">
          O formulário foi enviado com sucesso! <br />
          <span className="font-semibold">The form was sent successfully!</span>
        </p>
        <p className="mt-2 text-center text-lg">
          Deus te abençoe! God bless you!
        </p>
  
        <a
          href="/"
          className="mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-gray-200 transition duration-300 shadow-md"
        >
          Voltar para o início
        </a>
      </div>
    );
  }
  