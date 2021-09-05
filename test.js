const { Pool } = require('pg');

const pool = new Pool();

const query = {
  text: 'INSERT INTO karyawan VALUES(a, dicoding, dicoding@apa.com, jl.jajan)',
};

const result = pool.query(query);

console.log(result.rows);
