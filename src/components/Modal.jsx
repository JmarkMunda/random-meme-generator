import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { BsX } from "react-icons/bs";

const Modal = ({ memes, currentMeme, setToggleModal }) => {
  const [memeUrl, setMemeUrl] = useState("");
  const [myCanvas, setMyCanvas] = useState("");

  const filteredMeme = memes.filter((meme) => currentMeme === meme.id);

  useEffect(() => {
    setMyCanvas(initCanvas());
    setMemeUrl(filteredMeme[0].url);
    // renderImage(myCanvas);
  }, []);

  //384
  // Function for canvas
  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 120,
      width: 600,
    });

  // const renderImage = (c) => {
  //   new fabric.Image.fromURL(memeUrl, (img) => {
  //     c.add(img);
  //   });
  // };

  return (
    <div className="w-full h-screen bg-slate-50/50 fixed flex justify-center items-center">
      <div className="w-auto h-auto p-2 bg-white drop-shadow-2xl rounded-xl">
        {/* Canvas */}
        <canvas id="canvas" />
        {/* Close button */}
        <BsX
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => setToggleModal(false)}
        />
        {/* Modal meme image */}
        <div className=" w-auto flex md:flex-col justify-evenly items-center">
          {typeof memeUrl !== undefined && (
            <img
              src={memeUrl}
              alt="Meme Img"
              className="max-w-full max-h-96 object-contain"
            />
          )}

          {/* Input field and Download button */}
          <div className="mx-2 flex flex-col">
            <input className="my-2 border-zinc-700 border-2" type="text" />
            <button className="mb-2 px-3 py-1 border-zinc-700 bg-indigo-500">
              Add text
            </button>
            <button className="px-3 py-1 border-zinc-700 bg-green-500">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
