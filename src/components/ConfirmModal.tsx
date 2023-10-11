import { handleSendVote } from "@/app/utils/vote-api";
import {useState, useEffect} from 'react'
export default function ConfirmModal({setShowModal, data}: {setShowModal: any, data: any}) {
    const [successVote, setSuccessVote]=useState(false)
    useEffect(() => {
        let timer: any;
        
        if (successVote) {
          timer = setTimeout(() => {
            setSuccessVote(false);
            setShowModal(false)
            localStorage.setItem("vote", "success")
          }, 1000);
        }
        
        // Очистить таймер при размонтировании компонента
        return () => clearTimeout(timer);
      }, [successVote]);

  return (
    <>
     {!successVote ?(
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <p className="text-base font-bold py-2 lg:pb-6 text-gray-700">
                    Проголосовать за проект {data.name}?
                  </p>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-red-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
               
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                   Закрыть
                  </button>
                  <button
                    className=" text-white bg-yellow-700 hover:bg-yellow-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                              if(localStorage.getItem("vote")==="success"){
                                    alert("Вы уже проголосовали")
                                    }else{
                                        handleSendVote(data.id, data.name).then((res)=> res&& setSuccessVote(true))
                                    }}}>
                    Подтвердить
                  </button>
                </div>
              </div>
            </div>
          </div>
                   ):(
                    <div className=" bg-white justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <h3>Спасибо за ваш голос</h3>
                    </div>
                  )}
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

    </>
  );
}