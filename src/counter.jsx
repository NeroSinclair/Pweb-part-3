//nama fitra naufal eka bayu wardhana 50423515//

import { useState } from "react";

function Counter({ initialNumber, title }) {
  const [number, setNumber] = useState(initialNumber);

  return (
    <div className="bg-slate-800 text-white p-10 rounded-lg text-center">
      <h1 className="text-2xl font-bold mb-5">{title}</h1>

      <h2 className="text-4xl mb-5">{number}</h2>

      <div className="flex justify-center gap-4">
        <button
          className="bg-blue-500 p-3 rounded-md"
          onClick={() => setNumber(number + 1)}
        >
          Tambah
        </button>

        <button
          className="bg-red-600 p-3 rounded-md"
          onClick={() => setNumber(number - 1)}
        >
          Kurang
        </button>
      </div>
    </div>
  );
}

export default Counter;