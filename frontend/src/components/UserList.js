import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ml-48 container">
      <h1 className="text-center text-5xl mt-5">PERPUSTAKAAN</h1>
      <Link
        to="add"
        class="my-5 py-3 px-4 inline-flex items-center gap-x-2 text-xl font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        Add New
      </Link>
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="border rounded-lg overflow-hidden dark:border-gray-700">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xl font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xl font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Judul
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xl font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Nama
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xl font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Kategori
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Tanggal Pinjam
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-center text-xl font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Tanggal Kembali
                    </th>
                    <th
                      scope="col"
                      class="px-20 py-3 text-end text-xl font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-800 dark:text-gray-800">{index + 1}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-800 dark:text-gray-800">{user.judul}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-800 dark:text-gray-800">{user.nama}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-800 dark:text-gray-800">{user.kategori}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-xl font-medium text-gray-800 dark:text-gray-800">{user.tglawal}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-xl font-medium text-gray-800 dark:text-gray-800">{user.tglakhir}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-xl font-medium">
                        <Link
                          to={`edit/${user._id}`}
                          class="py-3 px-4 mx-3 inline-flex items-center gap-x-2 text-xl font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteUser(user._id)}
                          class="py-3 px-4 inline-flex items-center gap-x-2 text-xl font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
