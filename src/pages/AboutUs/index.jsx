import Header from "@/shared/ui/Header";
import styles from "./About.module.css"
import Footer from "@/shared/ui/Footer";

export default function Page(){
    return(
        <>
        <section className={styles.white}>
                <Header/>
            <div className="container">
                <div className={styles.about_block}>
                    <div className={styles.item_ab}>
                        <img src="./about/item_ab.svg" alt="" />
                    </div>

                <div className={styles.item_ab2}>
                    <img src="./about/item_ab2.png" alt="" />
                </div>

                <div className={styles.item_ab3}>
                    <img src="./about/item_ab3.svg" alt="" />
                </div>

                    <p className={styles.about_txt_1}>
                     Welcome to Meals America!
                    </p>
                    <p className={styles.about_txt_2}>
                     Meals America is a local business located in Orange County, FL. We deliver nutritious  <br />
                     and healthy meals to eligible seniors every week in all 67 counties in Florida. We  <br />
                     proudly serve anyone on long-term care (assisting elderly to age at home), chronic  <br />
                     care, injury, short-term disability, post-discharge care. We provide meals to eligible  <br />
                     with Medicare/Medicaid, and other managed care organizations in FL.
                     <br />
                     <br />
                    Our meals are for anyone who is unable to cook and prepare meals for themselves, or  <br />
                    simply individuals and caregivers who would love to enjoy a fresh and easy meal. Our   <br />
                    priority is our customer’s health. We care about each preference and dietary needs;  <br />
                    therefore, we provide a variety of meal options and have options for low-sodium,  <br />
                    gluten-free, Kosher, and vegetarian meals, allowing each customer to customize their  <br />
                    meal plan to their preference. Meals America delivers ready-to-go meals that require  <br />
                    NO preparation and only need to be heated so that our customers can enjoy healthy   <br />
                    meals in minutes that taste like homemade meal they’d cook for themselves!
                    </p>
                </div>
            </div>
        </section>

        <section>
            <Footer/>
        </section>
        </>
    )
}