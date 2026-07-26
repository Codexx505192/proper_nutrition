import Link from "next/link";
import { useState } from "react";
import Modal from "../Modal/Modal";


export default function Header(){
const [openMenu, setOpenMenu] = useState(false)
const [modalActive, setModalActive] = useState(true)

    return(
        <header className="header">
         <div className="header_left">
            <div className="header_logo">
            <img src="./img/logo.svg" alt="" />
         </div>

         <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
            <img src="./img/menu.png" alt="" />
         </div>
         </div>

         <ul className="header_list">
            <li>
                <Link href="/AboutUs" className="header_lnk">
                About us
                </Link>
            </li>
            <li>
               <Link href="/Works" className="header_lnk">
                How It  Works
                </Link>
            </li>
             <li>
                <Link href="#" className="header_lnk">
                 Menu
                </Link>
            </li>
             <li>
                <Link href="#" className="header_lnk">
                 Contact
                </Link>
            </li>
         </ul>

         <button className="header_btn" onClick={() => setModalActive(true)}>
            Get Started
         </button>


         <div className="header_menu">
            <ul className={`header_lists ${openMenu ? "active": ""}`}>
                <li className="header_elm" onClick={() => setOpenMenu(false)}>
                     закрыть
                </li>
                <li>
                    <Link href="/AboutUs" className="lnk_1">
                    About Us
                    </Link>
                </li>
                <li>
                    <Link href="#" className="lnk_1">
                    Menu
                    </Link>
                </li>
                <li>
                    <Link href="#" className="lnk_1">
                    Contact
                    </Link>
                </li>
                <li>
                    <Link href="/Works" className="lnk_1">
                    How It Works
                    </Link>
                </li>
            </ul>
            {/* <button className="header_button">
                
            </button> */}
         </div>

             <Modal active={modalActive} setActive={setModalActive}/>
        </header>
    )
}