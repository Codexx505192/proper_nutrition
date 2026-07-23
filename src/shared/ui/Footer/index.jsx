import Link from "next/link";

export default   function Footer(){
    return(
        <footer>
            <div className="footer_top">
                <div className="footer_top_itm">
                    <div className="footer_logo">
                        <img src="./img/logo.svg" alt="" />
                    </div>

                    <p className="txt_19">
                        All rights resereved <Link href="#" className="lnk_4">MealsAmericaFL.com </Link> <br />
                        is based in the Florida area and provides  <br />
                        home-delivered meals to consumers  <br />
                        across ALL sixty seven counties in Florida.
                    </p>
                </div>


                <div className="footer_top_itm">
                    <p className="txt_20">Contact info</p>

                    <div className="ftr_elm">
                        <div className="ftr_icon">
                            <img src="./img/MapPin.svg" alt="" />
                        </div>

                        <p className="txt_21">
                            1733 Benbow Ct, Ste 3,  <br />
                            Apopka, FL, 32703
                        </p>
                    </div>

                    <div className="ftr_elm2">
                        <p className="txt_21">
                         (786) 600-59-09
                        </p>
                    </div>
                    
                    <div className="ftr_elm2">
                        <p className="txt_21">
                         Support@MealsAmericaFL.com
                        </p>
                    </div>

                </div>

                <div className="footer_top_itm">
                    <p className="txt_20">Links</p>

                   <ul className="ul_footer">
                     <li>
                        <Link href="#" className="lnk_5">
                        About Us
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="lnk_5">
                        How it works
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="lnk_5">
                        Our menu
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="lnk_5">
                        Contact Us
                        </Link>
                     </li>
                   </ul>
                </div>
            </div>

            <div className="footer_bottom">
                <p className="txt_22">© All rights resereved MealsAmericaFL.com</p>
            </div>
        </footer>
    )
}