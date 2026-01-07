import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [form, setForm] = useState({
    nama: "",
    kelas: "",
    npm: "",
  });

  const getMahasiswa = async () => {
    try {
      const response = await axios.get("http://localhost/mahasiswa.php");
      setMahasiswa(response.data);
    } catch (error) {
      console.log("tidak sambung api");
    }
  };

  const addMahasiswa = async () => {
    console.log(form);
    try {
      await axios.post("http://localhost/mahasiswa.php", form);
      setForm({ nama: "", kelas: "", npm: "" });
      getMahasiswa();
    } catch (error) {
      console.log("gagal post");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMahasiswa();
  };

  useEffect(() => {
    getMahasiswa();
  }, []);

  return (
    <div>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Masukan Nama"
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
        />

        <br />

        <input
          type="text"
          placeholder="Masukan NPM"
          value={form.npm}
          onChange={(e) => setForm({ ...form, npm: e.target.value })}
        />

        <br />

        <input
          type="text"
          placeholder="Masukan Kelas"
          value={form.kelas}
          onChange={(e) => setForm({ ...form, kelas: e.target.value })}
        />

        <br /><br />

        <button type="submit">
          Kirim Data
        </button>
      </form>

      <hr />

      {/* LIST DATA */}
      <div>
        {mahasiswa.map((mhs, index) => (
          <div key={index}>
            <p>Nama : {mhs.nama}</p>
            <p>Kelas : {mhs.kelas}</p>
            <p>NPM : {mhs.npm}</p>
            <hr />
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;