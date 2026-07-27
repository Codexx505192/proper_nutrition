import Header from "@/shared/ui/Header";
import styles from "./Menu.module.css"

export default function Menu(){
    return(
        <>
        <section>
            <Header/>
            <div className="container">
                <div className={styles.menu_banner}>
                   <img src="./menu/menu.svg" alt="" />
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                  <div className={styles.menu_banner}>
                   <img src="./menu/menu_2.svg" alt="" />
                </div> 
            </div>
        </section>

        <section>
            <div className="container">
                <div className={styles.heating_block}>
                   <p className={styles.menu_txt}>HEATING INSTRUCTIONS:</p>
                   <p className={styles.menu_txt_2}>Food must be cooked thoroughly to 165°F. Appliances vary, adjust cooking times as needed.</p>

                   <div className={styles.heating_flex}>
                       <div className={styles.heating_itm}>
                            <div className={styles.heating_icon}>
                                <img src="./menu/ic.svg" alt="" />
                            </div>

                            <div className={styles.heating_left}>
                             <p className={styles.menu_txt_3}>Microwave Oven</p>
                             <p className={styles.menu_txt_4}>
                                Directions developed with 1000-watt  <br />
                                microwave ovens.Heat for 4 minutes on  <br />
                                full power. Stir and heat an additional 1-2 <br />
                                minutes.Let stand for about 1 minute
                             </p>
                            </div>
                       </div>

                        <div className={styles.heating_itm}>
                            <div className={styles.heating_icon}>
                                <img src="./menu/ic.svg" alt="" />
                            </div>

                            <div className={styles.heating_left}>
                             <p className={styles.menu_txt_3}>Microwave Oven</p>
                             <p className={styles.menu_txt_4}>
                                Directions developed with 1000-watt  <br />
                                microwave ovens.Heat for 4 minutes on  <br />
                                full power. Stir and heat an additional 1-2 <br />
                                minutes.Let stand for about 1 minute
                             </p>
                            </div>
                       </div>
                   </div>

                   <p className={styles.menu_txt_5}>Occasionally, any meal delivered may be substituted without notice based on product availability.</p>
                </div>
            </div>
        </section>
        </>
    )
}