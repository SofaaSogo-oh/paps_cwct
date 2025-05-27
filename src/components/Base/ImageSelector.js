import React, { useRef } from "react";
import "../../css/blocks.css"
import "./ImageSelector.css"


export default function ImageSelector({ imgState, setImgState, id }) {
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef.current.click();
    }
    const isUrl = typeof imgState === 'string';
    return (
        <div className="space img-space">
            <div className="img-block">
                {imgState ? (
                    <img
                        alt="not found"
                        className="img-block"
                        src={isUrl ? imgState : URL.createObjectURL(imgState)} />
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="img-block svg-block" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"></path>
                    </svg>
                )}
            </div>
            <div className="img-menu-block">
                <input
                    type="file"
                    name="Загрузка изображения"
                    id={id}
                    onChange={(event) => {
                        setImgState(event.target.files[0]);
                    }}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    accept=".png,.jpg,.gif"
                />
                <button onClick={handleButtonClick}> Выбрать файл</button>
                <button onClick={() => setImgState(null)}>Убрать</button>
            </div>
        </div>
    )
}