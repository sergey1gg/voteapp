
export const ImagesModal = ({setImgPopup, imgPopup}: {setImgPopup: React.Dispatch<React.SetStateAction<any>>, imgPopup: any}) => {
  return (
    <>
    <div
    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
  >
    <div className="relative w-auto my-6 mx-auto p-2">
      {/*content*/}
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        {/*header*/}
        <div className="flex items-start justify-between md:p-5 p-1  border-b border-solid border-blueGray-200 rounded-t">
          <button
            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={() => setImgPopup({state: false, img: ''})}
          >
            <span className="bg-transparent text-red-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
          </button>
        </div>
        {/*body*/}
       <img src={imgPopup.img} />
        {/*footer*/}
      </div>
    </div>
  </div>
  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
  )
}

