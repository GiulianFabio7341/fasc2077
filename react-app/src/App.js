import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';


{/*Função que busca as informações no endpoint e joga no console.log*/ }



function App() {

// Estado para armazenar as informações do palco selecionado
const [palcoIndex, setPalcoIndex] = useState(null);

// Função para buscar as informações do palco
const fetchPalcoData = async (index) => {
  try {
    const response = await fetch(`https://fasc2025.onrender.com/PALCOS`);
    const data = await response.json();

    console.log("Dados da API:", data);  // Adicionamos um log para ver o formato dos dados

    // Verifique se o array retornado está válido
    if (Array.isArray(data) && data.length > 0) {
      const palcoInfo = data[index];

      if (palcoInfo) {
        setPalcoIndex(palcoInfo);
        console.log(palcoInfo); // Exibe as informações do palco no console
      } else {
        console.log('Palco não encontrado para o índice:', index);
      }
    } else {
      console.log('Dados inválidos retornados da API');
    }
  } catch (error) {
    console.error('Erro ao buscar os dados do palco:', error);
  }
};

  return (
    <div className="App">
      {/*Começo em si do cabeçalho da view da programação*/}
      <header className="App-header">

        <h2>
          Festival de Artes de São Cristovão - PROGRAMAÇÃO
        </h2>

        <div className='navbar'>
          {/*Deverá existir uma função para puxar da api as informações do dai anterior alterando o parágrafo*/}
          <button>
            <FontAwesomeIcon icon={faArrowLeft} size='2xl' style={{ color: "#ffffff", }} />
          </button>

          <p>
            Sexta | 18/11
          </p>
          {/*Deverá existir uma função para puxar da api as informações do dai posterior alterando parágrafo*/}
          <button>
            <FontAwesomeIcon icon={faArrowRight} size='2xl' style={{ color: "#ffffff", }} />
          </button>

        </div>

      </header>

      {/*Conteúdo principal dividido em 4 partes horizontais e cada justificada verticalmente e um btn no final*/}

      <main>
        <div className='div1'>
          <section className='section1'>

            <button onClick={() => fetchPalcoData('João Bebe Água')}>
              <p>Palco João Bebe Água</p>
            </button>

            <h3>
              Artista Art Artis XX
            </h3>

            <p>
              19:30   | <a href='' target='blank'><FontAwesomeIcon icon={faSpotify} size="xl" style={{ color: "#63E6BE", }} /></a>
            </p>

          </section>

          <section className='section2'>

            <h3>
              Artista Art Artis XX
            </h3>

            <p>
              19:30   | <a href='' target='blank'><FontAwesomeIcon icon={faSpotify} size="xl" style={{ color: "#63E6BE", }} /></a>
            </p>

          </section>
          <section className='section3'>

            <h3>
              Artista Art Artis XX
            </h3>

            <p>
              19:30   | <a href='' target='blank'><FontAwesomeIcon icon={faSpotify} size="xl" style={{ color: "#63E6BE", }} /></a>
            </p>

          </section>

          <section className='section4'>

            <h3>
              Artista Art Artis XX
            </h3>

            <p>
              19:30   | <a href='' target='blank'><FontAwesomeIcon icon={faSpotify} size="xl" style={{ color: "#63E6BE", }} /></a>
            </p>

          </section>

        </div>

        <div className='div2'>
          <section className='section1'>

            <button onClick={() => fetchPalcoData('Frei Santa Cecília')}>
              <p>Palco Frei Santa Cecília</p>
            </button>

            <h3>
              Artista Art Artis XX
            </h3>

            <p>
              19:30   | <a href='' target='blank'><FontAwesomeIcon icon={faSpotify} size="xl" style={{ color: "#63E6BE", }} /></a>
            </p>

          </section>

          <section className='section2'>

            <h3>
              Artista Art Artis XX
            </h3>

            <p>
              19:30   | <a href='' target='blank'><FontAwesomeIcon icon={faSpotify} size="xl" style={{ color: "#63E6BE", }} /></a>
            </p>

          </section>
          <section className='section3'>

            <h3>
              Artista Art Artis XX
            </h3>

            <p>
              19:30   | <a href='' target='blank'><FontAwesomeIcon icon={faSpotify} size="xl" style={{ color: "#63E6BE", }} /></a>
            </p>

          </section>

          <section className='section4'>

            <h3>
              Artista Art Artis XX
            </h3>

            <p>
              19:30   | <a href='' target='blank'><FontAwesomeIcon icon={faSpotify} size="xl" style={{ color: "#63E6BE", }} /></a>
            </p>

          </section>

        </div>
        <div className='div3'>
          <section className='section1'>

            <button onClick={() => fetchPalcoData('Samba na Bica')}>
              <p>Palco Samba na Bica</p>
            </button>

            <h3>
              Artista Art Artis XX
            </h3>

            <p>
              19:30   | <a href='' target='blank'><FontAwesomeIcon icon={faSpotify} size="xl" style={{ color: "#63E6BE", }} /></a>
            </p>

          </section>

          <section className='section2'>

            <h3>
              Artista Art Artis XX
            </h3>

            <p>
              19:30   | <a href='' target='blank'><FontAwesomeIcon icon={faSpotify} size="xl" style={{ color: "#63E6BE", }} /></a>
            </p>

          </section>
          <section className='section3'>

            <h3>
              Artista Art Artis XX
            </h3>

            <p>
              19:30   | <a href='' target='blank'><FontAwesomeIcon icon={faSpotify} size="xl" style={{ color: "#63E6BE", }} /></a>
            </p>

          </section>

          <section className='section4'>

            <h3>
              Artista Art Artis XX
            </h3>

            <p>
              19:30   | <a href='' target='blank'><FontAwesomeIcon icon={faSpotify} size="xl" style={{ color: "#63E6BE", }} /></a>
            </p>

          </section>

        </div>

        <div className='div4'>
          <section className='section1'>

            <button onClick={() => fetchPalcoData('Música na Igreja')}>
              <p>Música na Igreja</p>
            </button>

            <h3>
              Artista Art Artis XX
            </h3>

            <p>
              19:30   | <a href='' target='blank'><FontAwesomeIcon icon={faSpotify} size="xl" style={{ color: "#63E6BE", }} /></a>
            </p>

          </section>

          <section className='section2'>

            <h3>
              Artista Art Artis XX
            </h3>

            <p>
              19:30   | <a href='' target='blank'><FontAwesomeIcon icon={faSpotify} size="xl" style={{ color: "#63E6BE", }} /></a>
            </p>

          </section>
          <section className='section3'>

            <h3>
              Artista Art Artis XX
            </h3>

            <p>
              19:30   | <a href='' target='blank'><FontAwesomeIcon icon={faSpotify} size="xl" style={{ color: "#63E6BE", }} /></a>
            </p>

          </section>

          <section className='section4'>

            <h3>
              Artista Art Artis XX
            </h3>

            <p>
              19:30   | <a href='' target='blank'><FontAwesomeIcon icon={faSpotify} size="xl" style={{ color: "#63E6BE", }} /></a>
            </p>

          </section>

        </div>

      </main>

      <footer>
        <button><p>Compartilhe aqui <FontAwesomeIcon icon={faShare} size="xl" style={{ color: "#ffffff", }} /></p>
        </button>
        <p>FASC - Festival de Artes de São Cristovão | 2077 </p>
      </footer>

    </div>
  );
}

export default App;
