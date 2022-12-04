import React from "react";

const Main = ({data, open, click}) => {

    // console.log('# data from App :', data);
    console.log('# data from App :', click);

    return (
        <main className="main">
            <div className="inner">
                <ol className="movieList">
                    {!data.length ? <li>데이터가 로드 중 입니다.</li> :
                        data.map((v, i) => {
                            return (
                                <li key={i} onClick={open} data-id={v.id}>
                                    <img onClick={click} src={v.medium_cover_image} alt="" />
                                    <strong className="title">{v.title}</strong>
                                    <span className="rating">{v.rating}</span>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        </main>
    )
}

export default Main;