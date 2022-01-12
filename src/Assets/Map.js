import React from "react";

const mahasiswa = [
  {
    nama: "Fahmi Oktafian",
    umur: 26,
  },
  {
    nama: "Agung Hermansyah",
    umur: 23,
  },
  {
    nama: "Lazuardi",
    umur: 24,
  },
  {
    nama: "Trisno",
    umur: 40,
  },
];

const total_umur = mahasiswa.reduce((total, mahasiswa) => {
  return total+mahasiswa.umur
}, 0) 
const Map = () => {
  return (
    <div>
      <h2>Map</h2>
      <ul>
        {mahasiswa.map((mahasiswaa) => (
          <li>
            {mahasiswaa.nama} <br></br> Umur : {mahasiswaa.umur}
          </li>
        ))}
      </ul>
      <h2>Map filter umur yang lebih dari 25</h2>
      <ul>
        {mahasiswa
          .filter((mahasiswaa) => mahasiswaa.umur > 25)
          .map((mahasiswaa) => (
            <li>
              {mahasiswaa.nama} <br></br> Umur : {mahasiswaa.umur}
            </li>
          ))}
      </ul>
      <h3>Total Umur : {total_umur}</h3>
    </div>
  );
};

export default Map;
