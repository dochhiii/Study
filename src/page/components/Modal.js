import React from "react";

const Modal = ({open, close, detail}) => {

    return (
        <div id="lyPopup" className={open ? 'show' : ''}>
            {open ? (
                <div className="popupBox">
                    <div className="inner">
                        <button type="button" className="btnClose" onClick={close}>✖️</button>

                        <div className="info">
                            <h3 className="contentTitle">{detail.title}</h3>

                            <div className="infoGroup">
                                <strong className="infoTitle">개요</strong>
                                <div className="infoDesc">
                                    <span className="genres">{detail.genres[0]}</span>
                                    <span className="language">{detail.language}</span>
                                    <span className="runTime">{detail.runtime}분</span>
                                </div>
                            </div>
                            <div className="infoGroup">
                                <strong className="infoTitle">개봉일</strong>
                                <div className="infoDesc">
                                    <span className="year">{detail.year}</span>
                                </div>
                            </div>
                            <div className="infoGroup">
                                <strong className="infoTitle">줄거리</strong>
                                <div className="infoDesc">
                                    <span className="desc">{detail.description_full}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Modal;