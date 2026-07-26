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

        <section className={styles.srv}>
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

        <section className={styles.white}>
            <div className="container">
                <div className={styles.Eligibility}>
                    <p className={styles.serve_txt_4}>Eligibility</p>
                    <p className={styles.serve_txt_5}>
                        Find out if you are eligible to have Meals America deliver meals to you each week at NO COST for you!
                    </p>
                   
                   <div className={styles.chek_flex}>
                          <label className={styles.checkboxContainer}>
                         <input type="checkbox" className={styles.hiddenCheckbox} />
                         <span className={styles.customCheckbox}></span>
                         <span className={styles.sp3}>Are you on short-term disability?</span>
                        </label>

                          <label className={styles.checkboxContainer}>
                         <input type="checkbox" className={styles.hiddenCheckbox} />
                         <span className={styles.customCheckbox}></span>
                         <span className={styles.sp3}>Are you disabled?</span>
                        </label>

                          <label className={styles.checkboxContainer}>
                         <input type="checkbox" className={styles.hiddenCheckbox} />
                         <span className={styles.customCheckbox}></span>
                         <span className={styles.sp3}>Are you over 65?</span>
                        </label>

                        <label className={styles.checkboxContainer}>
                         <input type="checkbox" className={styles.hiddenCheckbox} />
                         <span className={styles.customCheckbox}></span>
                         <span className={styles.sp3}>Do you have Medicare/Medicaid or ANY other health insurance that offer paid meal option?</span>
                        </label>
                   </div>

                     <p className={styles.serve_txt_6}>
                      If you answered “Yes” to any of these questions, you may qualify for Meals America weekly meal   <br />
                      delivery plan at NO COST for you!
                      <br />
                      <br />
                       If you have any questions call about your eligibility us  <span
                       className={styles.sp_4}>(786) 600-59-09</span>, use our LIVE chat box, or fill out   <br />
                        the form below and someone will reach back to you over e-mail within 2 business days.
                     </p>

                </div>
            </div>
        </section>

        <section className={styles.white}>
            <div className="container">
                <div className={styles.aging_block}>
                   <p className={styles.serve_txt_7}>
                         Aging Waiver
                   </p>

                    <p className={styles.serve_txt_8}>
                         We serve those in need for long-term meal assistance or anyone who might be in need of a short-term plan while   <br />
                         recovering from an injury or illness, or who would simply enjoy healthy meals that require minimal preparation time.
                   </p>

                   <p className={styles.serve_txt_9}>
                      Aging Home and Community-Based Waiver Services may be available to any Florida over 65 to enable them to live in their    <br />
                      homes and communities with additional support and  <br />
                        <br />
                        Meals America is happy to provide extra information about the waiver and who’s eligible. If you have any questions reach  <br />
                        our customer care representative at (786) 600-59-09, use our LIVE chat box, or fill out the form below and someone will   
                   </p>

                   <div>
                    <p className={styles.serve_txt_10}>
                         Aging Waiver eligibility requirements:
                   </p>


                   <ul className={styles.ul_serv}>
                     <li className={styles.l}>Be a resident of Florida</li>
                     <li className={styles.l}>Be a U.S. citizen or a qualified non-citizen</li>
                     <li className={styles.l}>Have a Social Security Number</li>
                     <li className={styles.l}>Be 65 years of age or older</li>
                     <li className={styles.l}>Meet the level of care needs for a Skilled Nursing Facility</li>
                     <li className={styles.l}>Meet the financial requirements by the local county assistance office</li>
                   </ul>
                   </div>
                </div>
            </div>
        </section>

         <section className={styles.white}>
            <div className="container">
                <div className={styles.aging_block}>
                  
                    <p className={styles.serve_txt_10}>
                      Services that Aging Waiver may be available to include:
                   </p>
                   <div className={styles.ul_flex}>
                        <ul className={styles.ul_serv}>
                     <li className={styles.l}>Be a resident of Florida</li>
                     <li className={styles.l}>Be a U.S. citizen or a qualified non-citizen</li>
                     <li className={styles.l}>Have a Social Security Number</li>
                     <li className={styles.l}>Be 65 years of age or older</li>
                     <li className={styles.l}>Meet the level of care needs for a Skilled Nursing Facility</li>
                     <li className={styles.l}>Meet the financial requirements by the local county assistance office</li>
                   </ul>

                   <ul className={styles.ul_serv}>
                     <li className={styles.l}>Be a resident of Florida</li>
                     <li className={styles.l}>Be a U.S. citizen or a qualified non-citizen</li>
                     <li className={styles.l}>Have a Social Security Number</li>
                     <li className={styles.l}>Be 65 years of age or older</li>
                     <li className={styles.l}>Meet the level of care needs for a Skilled Nursing Facility</li>
                     <li className={styles.l}>Meet the financial requirements by the local county assistance office</li>
                   </ul>
                   </div>


                   <p className={styles.serv_txt_11}>
                   if you have any questions, contact our Professional and qualified team of health care experts at  <br />
                   (786) 600-59-09 to help you determine if you qualify for the FL Aging Waiver.
                   </p>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className={styles.why_block}>
                    <div className={styles.why_txt}>

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}