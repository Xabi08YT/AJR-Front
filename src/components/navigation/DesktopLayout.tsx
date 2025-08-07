import {useEffect, useState} from "react";

export default function DesktopLayout() {

    const [currentRoute, setCurrentRoute] = useState("/");

    useEffect(() => {
        setCurrentRoute(window.location.pathname);
    }, [window.location.pathname]);

    return (
        <span className={"p-[15px] py-[15px] h-[35px]"}>
            <a href="/" className={`p-[5px] navdesktopbtn ${currentRoute == "/" ? "cnavdesktopbtn" : ""}` }>Accueil</a>
            <a href="/about" className={`p-[5px] navdesktopbtn ${currentRoute == "/about" ? "cnavdesktopbtn" : ""}`}>Présentation</a>
            <a href="/members" className={`p-[5px] navdesktopbtn ${currentRoute == "/members" ? "cnavdesktopbtn" : ""}`}>Membres</a>
            <a href="/blog" className={`p-[5px] navdesktopbtn ${currentRoute == "/blog" ? "cnavdesktopbtn" : ""}`}>Blog</a>
            <a href="/community" className={`p-[5px] navdesktopbtn ${currentRoute == "/community" ? "cnavdesktopbtn" : ""}`}>Communauté</a>
            <a href="/join" className={`p-[5px] navdesktopbtn ${currentRoute == "/join" ? "cnavdesktopbtn" : ""}`}>Nous rejoindre</a>
        </span>
    );
}