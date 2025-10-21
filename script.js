const baseURL = '/api';
const loading = document.getElementById('loading-overlay');

async function fetchData() {
  loading.style.display = 'flex';
  try {
    const res = await fetch(baseURL + '/get');
    const data = await res.json();
    console.log('Data dari KV:', data);
  } catch (e) {
    console.warn('Gagal fetch, pakai localStorage');
  }
  loading.style.display = 'none';
}

fetchData();
