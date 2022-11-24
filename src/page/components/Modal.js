import React from "react";

const Modal = ({data, open, close}) => {
    console.log('# data from App :', data);

    return (
        <div id="ly_popup" className={open ? 'show' : ''}>
            {open ? (
                <div className="popup_box">
                    <div className="inner">
                        <button type="button" className="btn_close" onClick={close}>✖️</button>
                        <p>데이터 로딩 중입니다.</p>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Modal;