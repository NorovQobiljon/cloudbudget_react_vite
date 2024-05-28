import "./main.css"
import freme_img_1 from "../../assets/frame_1.svg"
import freme_img_2 from "../../assets/frame_2.svg"
import freme_img_3 from "../../assets/frame_3.svg"
import freme_img_4 from "../../assets/frame_4.svg"
import bg_number_img from "../../assets/bg_number_img.svg"
import bg_number_img_2 from "../../assets/bg_number_img_2.svg"
import bg_number_img_3 from "../../assets/bg_number_img_3.svg"
import bg_number_img_4 from "../../assets/bg_number_img_4.svg"
import app_link from "../../assets/app_link.svg"
import slider_img from "../../assets/slider_img.svg"


export default function Main() {
    return (
        <>
            <div className="container">
                <h1 className="techology">Technology</h1>
                <div className="mini_card_father">
                    <div className="mini_card_1">
                        <div className="bg_number_img">
                            <img src={bg_number_img} className="bg_number" />
                            <img src={freme_img_1} alt="" className="cloud" />
                        </div>
                        <div className="mini_card_text">
                            <h3 className="cloud_txt">Cloud Storage</h3>
                            <p className="cloud_paragraf">Access your account from anywhere <br /> in the world on any device</p>
                        </div>
                    </div>
                    <div className="mini_card_1">
                        <div className="bg_number_img">
                            <img src={bg_number_img_2} className="bg_number" />
                            <img src={freme_img_2} alt="" className="cloud_2" />
                        </div>
                        <h3 className="cloud_txt_2">Secure</h3>
                        <p className="cloud_paragraf_2">All your information is stored on <br /> secure cloud servers</p>
                    </div>
                    <div className="mini_card_1">
                        <div className="bg_number_img">
                            <img src={bg_number_img_3} className="bg_number" />
                            <img src={freme_img_3} alt="" className="cloud_3" />
                        </div>
                        <h3 className="cloud_txt_3">PDF Download</h3>
                        <p className="cloud_paragraf_3">Download any of your reports in <br /> PDF format</p>
                    </div>
                    <div className="mini_card_1">
                        <div className="bg_number_img">
                            <img src={bg_number_img_4} className="bg_number" />
                            <img src={freme_img_4} alt="" className="cloud_4" />
                        </div>
                        <h3 className="cloud_txt_4">CSV Download</h3>
                        <p className="cloud_paragraf_4">All your information is stored on <br /> secure cloud servers</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="main_end_bg">
                    <div className="end_bg_left_page">
                        <h1 className="money_main">Stay focused on saving <br /> money</h1>
                        <p className="money_paragraf">It is important to stay focused on saving money in any way you can. We <br /> help you monitor your spending habits so you can easily spot and cut <br /> any unnecessary expenses. Simply join today to get started!</p>
                        <img src={app_link} alt="" />
                    </div>
                    <div className="end_right_page">
                        <img src={slider_img} className="slider_img" />
                    </div>
                </div>
            </div>
        </>
    )
}
