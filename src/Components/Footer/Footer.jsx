import "./Footer.css"
import facebook_img from "../../assets/facebook_img.svg"
import visa_cards from "../../assets/visa_cards.svg"
export default function Footer() {
    return (
        <>
            <div className="container">
                <div className="contact_father">
                    <div className="contact_left_page">
                        <h1 className="contact_text">Contact</h1>
                        <p className="contact_paragraf">Questions or concerns? Just fill out the form below and our support <br /> team will get back to you within 24 hours</p>
                    </div>
                    <div className="contact_right_page">
                        <div className="name_first_input">
                            <input type="text" placeholder="First Name" className="name" />
                            <input type="text" placeholder="Last Name" className="name" />
                        </div>
                        <div className="phone_number">
                            <br />
                            <input type="text" placeholder="Phone Number" className="tel_number" />
                            <br />
                            <br />
                            <input type="text" placeholder="Select Service" className="tel_number" />
                            <br />
                            <br />
                        </div>
                        <button className="btn_now">Submit Now</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer_father">
                    <div className="box_addres">
                        <h1 className="adsres_text">Address</h1>
                        <ul className="list_box">
                            <li className="list_item_box">Pipang Ltd, Griva Digeni, <br />81-83 Jacovides Tower, 1st Floor <br /> 1090 Picosia USA</li>
                        </ul>
                    </div>
                    <div className="servise_box">
                        <h1 className="service_text">Services</h1>
                        <ul className="box_2_list">
                            <li className="box_2_list_item">overview</li>
                            <li className="box_2_list_item">features</li>
                            <li className="box_2_list_item">technology</li>
                            <li className="box_2_list_item">Terms & Conditions</li>
                            <li className="box_2_list_item">Privecy</li>
                        </ul>
                    </div>
                    <div className="box_touch">
                        <h1 className="touch_text">Get in Touch</h1>
                        <p className="touch_paragraf">info@cloudbudget.com</p>
                        <p className="touch_number">+1 844-721-7120</p>
                        <img src={facebook_img} alt="" />
                    </div>
                    <div className="support_box">
                        <h1 className="support_text">We Support</h1>
                        <img src={visa_cards} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
