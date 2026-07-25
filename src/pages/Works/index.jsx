import Header from "@/shared/ui/Header";
import styles from "./Works.module.css"

export default  function Works(){
    return(
        <>
        <section className={styles.white}>
            <Header/>
            <div className="container">
                 <div className={styles.work_banner}>
                   <p className={styles.work_text}>
                       We serve those in need for the long-term meal assistance or anyone who might be in need of a short-term plan while  <br />
                       recovering from an injury or illness, or who would simply enjoy healthy meals that requires minimum preparation time.
                   </p>


                   <p className={styles.work_txt_2}>
                      Answer these few questions to find out if you qualify   <br />
                      for Home Delivered Meals by Meals America:
                   </p>

                   <div className={styles.work_bottom}>
                       <label className={styles.checkboxContainer}>
                         <input type="checkbox" className={styles.hiddenCheckbox} />
                         <span className={styles.customCheckbox}></span>
                         <span className={styles.sp3}>Are you over 65?</span>
                        </label>

                          <label className={styles.checkboxContainer}>
                         <input type="checkbox" className={styles.hiddenCheckbox} />
                         <span className={styles.customCheckbox}></span>
                         <span className={styles.sp3}>Are you disabled or on a short-term disability?</span>
                        </label>

                          <label className={styles.checkboxContainer}>
                         <input type="checkbox" className={styles.hiddenCheckbox} />
                         <span className={styles.customCheckbox}></span>
                         <span className={styles.sp3}>Do you need any assistance with grocery shopping and/or preparing meals?</span>
                        </label>

                        <p className={styles.work_txt_3}>
                             Can you say <span className={styles.sp}>yes</span> to any of these questions? If so, you might qualify for government or health plan    <br />
                             assistance and have our meal delivered to your door at no cost!
                        </p>


                        <div className={styles.work_flex}>
                            <div className={styles.work_itm}>
                             <div className={styles.work_icon}>
                                 <img src="./work/manager.svg" alt="" />
                             </div>

                            <div className={styles.block_text}>
                               <p className={styles.work_txt_4}>
                                 Information for Case  <br />
                                 Managers/Coordinators
                               </p>

                               <p className={styles.work_txt_5}>
                                   If the participant qualifies for home   <br />
                                   meals delivery – submit authorization for   <br />
                                   Meals America. We deliver within 2-3   <br />
                                   business days from the day you have   <br />
                                   submitted the authorization. Call us with    <br />
                                   any questions at <span className={styles.sp_2}>(786) 600-59-09</span>
                               </p>
                            </div>
                            </div>

                             <div className={styles.work_itm}>
                             <div className={styles.work_icon}>
                                 <img src="./work/itm.svg" alt="" />
                             </div>

                            <div className={styles.block_text}>
                               <p className={styles.work_txt_4}>
                                 Information for <br />
                                 Individuals/Caregivers
                               </p>

                               <p className={styles.work_txt_5}>
                                   If you have a health insurance plan and you  <br />
                                   may qualify for home meal delivery, contact,  <br />
                                  your case manager.If you or your loved ones    <br />
                                   need home delivered meal but don’t qualify <br />
                                   through your insurance, please, contact us  <br />
                                   at <span className={styles.sp_2}>(786) 600-59-09</span> for the options available  <br />
                                    for private customers.
                               </p>  
                            </div>
                            </div>
                        </div>
                   </div>
                 </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className={styles.serve_block}>
                    <div className={styles.serve_left}>
                     <p className={styles.serve_txt}>
                          Who We Serve
                     </p>

                      <p className={styles.serve_txt_2}>
                         We serve those in need for the long-term meal assistance or anyone who might be    <br />
                         in need of a short-term plan while recovering from an injury or illness, or who would   <br />
                         simply enjoy healthy meals that requires minimum preparation time.
                     </p>

                     <p className={styles.serve_txt_3}>
                         Meals America is proud to serve and deliver healthy, nutritious meals to your door  <br />
                         All our meals comply with Floridian state requirements. Your first delivery will be at  <br />
                         your door within 2-3 business days from the day we receive the authorization  <br />
                         Please, let us know your preferences, and we will be happy to modify the menu or    <br />
                         customize it to your preference! Please, consider our delicious meals a complete   <br />
                         nutrition solution. We are delighted to serve you and your satisfaction is our priority!
                     </p>
                    </div>
                
                <div className={styles.serve_rigth}>
                    <img src="./work/Shopper.png" alt="" />
                </div>
                </div>
            </div>
        </section>
        </>
    )
}