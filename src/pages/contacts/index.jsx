import Header from "@/shared/ui/Header";
import styles from "./cont.module.css"
import Footer from "@/shared/ui/Footer";

export default function Page(){
    return(
        <>
        <section className={styles.white}>
            <Header/>
            <div className="container">
                <div className={styles.contact_banner}>
                   <p className={styles.contact_txt}>Contacts</p>

                   <div className={styles.contact_block}>
                       <div className={styles.contact_itm}>
                          <div className={styles.contact_icn}>
                            <img src="./contacts/MapPin.svg" alt="" />
                          </div>

                          <p className={styles.contact_txt_2}>
                            1733 Benbow Ct, Ste 3,  <br />
                            Apopka, FL, 32703
                          </p>
                          
                       </div>
                       
                       <div className={styles.contact_itm_2}>
                         <div className={styles.contact_top}>
                           <div className={styles.contact_icn}>
                            <img src="./contacts/iphn.svg" alt="" />
                          </div>

                          <p className={styles.contact_txt_2}>
                            (786) 600-59-09
                          </p>
                         </div>
                           
                           <div className={styles.cntct}>
                            <div className={styles.contact_icn}>
                            <img src="./contacts/eml.svg" alt="" />
                          </div>
                          
                          <p className={styles.contact_txt_2}>
                            supportmealsamericafl.com
                          </p>
                           </div>
                       </div>

                       <div className={styles.contact_itm}>
                          <div className={styles.contact_icn}>
                            <img src="./contacts/tim.svg" alt="" />
                          </div>

                          <p className={styles.contact_txt_2}>
                           Monday - Friday  <br />
                            9:00 AM - 5:00 PM
                          </p>
                          
                       </div>
                   </div>


                   <div className={styles.email_block_r}>
                      <p className={styles.contact_txt_3}>Get started</p>
                      <p className={styles.contact_txt_4}>
                        Please complete the form below. Due to current high demand, we will  <br />
                        do our best to reply back to you within 48 business hours
                      </p>

                    <form action="#">
                      <div className={styles.form_flex}>
                        <div className={styles.itm_flx}>
                        <div className={styles.inp_itm}>
                        <span className={styles.frm_txt}>Name</span>
                        <input type="text" required/>
                       </div>

                          <div className={styles.inp_itm}>
                        <span className={styles.frm_txt}>E-mail Address</span>
                        <input type="email"/>
                       </div>

                        <div className={styles.inp_itm}>
                        <span className={styles.frm_txt}>County</span>
                        <input type="text" required/>
                       </div>
                       </div>
                        
                        <div className={styles.itm_flx}>
                        <div className={styles.inp_itm}>
                        <span className={styles.frm_txt}>Organization</span>
                        <input type="text"/>
                       </div>

                          <div className={styles.inp_itm}>
                        <span className={styles.frm_txt}>City</span>
                        <input type="text" required/>
                       </div>

                        <div className={styles.inp_itm}>
                        <span className={styles.frm_txt}>Zip Code</span>
                        <input type="text" required/>
                       </div>
                       </div>

                       <div className={styles.itm_flx}>
                        <div className={styles.inp_itm}>
                        <span className={styles.frm_txt}>Phone Number</span>
                        <input type="text" required/>
                       </div>

                          <div className={styles.inp_itm}>
                        <span className={styles.frm_txt}>State</span>
                        <input type="text" required/>
                       </div>

                        <div className={styles.inp_itm}>
                        <span className={styles.frm_txt}>Name</span>
                        <select id="" className={styles.slct}>
                          <option required value="Tell us about your needs">-Tell us about your needs-</option>
                        </select>
                       </div>
                       </div>
                    </div>
                     
                     <div className={styles.text_are_block}>
                    <span className={styles.area_text}>Provide any additional comments</span>
                    <textarea className={styles.ar} name="" id=""></textarea>
                     </div>


                     <div className={styles.btn_block_bottom}>
                       <button className={styles.btn_form}>
                           Sumbit
                       </button>
                     </div>
                    </form>
                   </div>
                </div>
            </div>
        </section>

        <section>
          <Footer/>
        </section>
        </>
    )
}