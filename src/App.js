import { useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal';

const API = 'https://api.imgflip.com/get_memes';

function App() {
  const [memes, setMemes] = useState([]);
  const [currentMeme, setCurrentMeme] = useState('');
  const [toggleModal, setToggleModal] = useState(false);

  useEffect(() => {
    fetchMemesApi();
  }, []);


  const fetchMemesApi =  () => {
    fetch(API)
    .then(res => res.json())
    .then(({ data }) => setMemes(data.memes))
    .catch(err => console.log(err));
  }

  const clickedMeme = (id) => {
    setToggleModal(true);
    setCurrentMeme(id);
  }

  return (
    <div className='p-5 flex flex-col justify-center items-center h-screen'>
      <h1 className='text-center font-bold text-4xl mb-3'>Meme Generator</h1>
      <div className='w-full flex justify-evenly flex-wrap overflow-y-auto'>
        {memes.length !== 0 ? memes.map(meme => 
            <img key={meme.id} className='h-3/4 m-2 cursor-pointer hover:scale-105 transition ease-in-out duration-200' src={meme.url} alt='no img' onClick={() => clickedMeme(meme.id)}/>
        )  : null}
      </div>

      {/* Modal */}
      {toggleModal ? <Modal memes={memes} currentMeme={currentMeme} setToggleModal={setToggleModal}/> : null}
      </div>
  );
} 

export default App;
