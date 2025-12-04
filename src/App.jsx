import { useState } from "react";
import Button from "./Button";
import Input from "./input"; // Pastikan nama filenya sesuai (besar/kecil)

function App() {
  const [todos, setTodos] = useState({});
  
  // 1. STATE: Pisahkan state untuk Nama dan Email (atau data tambahan lain)
  const [inputNama, setInputNama] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  // 2. HANDLER: Buat handler untuk masing-masing input
  const handlerNama = (e) => {
    setInputNama(e.target.value);
  }

  const handlerEmail = (e) => {
    setInputEmail(e.target.value);
  }

  // 3. TOMBOL REGISTER: Masukkan kedua data ke dalam object todos
  const handlerTambahData = () => {
    console.log("Data:", inputNama, inputEmail);
    
    setTodos((prevTodos) => {
      return {
        ...prevTodos,
        nama: inputNama,
        email: inputEmail // Data tambahan masuk sini
      }
    });
  }

  return (
    <div className="main-container">
      <div className="input-group">
        {/* Panggil Input Pertama (Nama) */}
        <Input 
            handlerInput={handlerNama} 
            placeholder="Masukkan Nama..." 
        />
        
        {/* Panggil Input Kedua (Email/Tambahan) */}
        <Input 
            handlerInput={handlerEmail} 
            placeholder="Masukkan Email..." 
        />

        {/* Tombol Register */}
        <Button handlerTambahData={handlerTambahData} />
      </div>
      
      {/* (Opsional) Cek hasil data di layar sementara */}
      <pre style={{marginTop: '20px'}}>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}

export default App;