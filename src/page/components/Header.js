import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="inner">
                <ul className="tabList">
                    <li><a href="./">홈</a></li>
                    <li><a href="./">랭킹</a></li>
                    <li><a href="./">상영/예정작</a></li>
                    <li><a href="./">콘텐츠</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;