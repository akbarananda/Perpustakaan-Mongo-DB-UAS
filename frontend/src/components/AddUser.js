import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AddUser = () => {
  const [judul, setJudul] = useState("");
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");
  const [tglawal, setAwal] = useState("");
  const [tglakhir, setAkhir] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        judul,
        nama,
        kategori,
        tglawal,
        tglakhir,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-10 px-30 mx-96 ">
      <h1 className="text-center text-5xl mt-5">EDIT PEMINJAM</h1>
      <div className="columns mt-5 border rounded-lg overflow-hidden dark:border-gray-700">
        <div className="column is-half mx-5 py-10">
          <div className="mx-60 container">
            <form onSubmit={saveUser}>
              <div className="field py-2">
                <label className="label text-xl">Judul Buku</label>
                <div className="control">
                  <input
                    type="text"
                    className="input px-3 py-2 border rounded-lg overflow-hidden dark:border-gray-700"
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                    placeholder="Judul Buku"
                  />
                </div>
              </div>
              <div className="field py-2">
                <label className="label text-xl">Nama Peminjam</label>
                <div className="control">
                  <input
                    type="text"
                    className="input px-3 py-2 border rounded-lg overflow-hidden dark:border-gray-700"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Nama Peminjam"
                  />
                </div>
              </div>
              <div className="field py-2">
                <label className="label text-xl">kategori</label>
                <div className="control">
                  <input
                    type="text"
                    className="input px-3 py-2 border rounded-lg overflow-hidden dark:border-gray-700"
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value)}
                    placeholder="Kategori"
                  />
                </div>
              </div>
              <div className="field py-2">
                <label className="label text-xl">Tanggal Pinjam</label>
                <div className="control">
                  <input
                    type="date"
                    className="input px-3 py-2 border rounded-lg overflow-hidden dark:border-gray-700"
                    value={tglawal}
                    onChange={(e) => setAwal(e.target.value)}
                  />
                </div>
              </div>
              <div className="field py-2">
                <label className="label text-xl">Tanggal Kembali</label>
                <div className="control">
                  <input
                    type="date"
                    className="input px-3 py-2 border rounded-lg overflow-hidden dark:border-gray-700"
                    value={tglakhir}
                    onChange={(e) => setAkhir(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field py-2">
                <div className="control my-5">
                  <button
                    type="submit"
                    className="py-3 px-4 mx-3 inline-flex items-center gap-x-2 text-xl font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Update
                  </button>
                  <Link
                    to={`/`}
                    class="py-3 px-4 inline-flex items-center gap-x-2 text-xl font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Kembali
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
