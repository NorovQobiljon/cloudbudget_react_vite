import "./section.css"
import video_img from "../../assets/video_section.svg"
import section_bg_img from "../../assets/section_bg_img.svg"
import section_bg_img_2 from "../../assets/section_bg_img_2.svg"
import section_bg_img_3 from "../../assets/section_bg_img_3.svg"


export default function Section() {
    return (
        <>
            <div className="section_father">
                <div className="section_left">
                    <div className="left_sec_text">
                        <h1 className="sec_text">Easy to Use Cloud Budget <br /> Management Software</h1>
                        <p className="sec_paragraf">Our software is made so you can access and manage your budget and <br /> expenses online at any time from device. It provides detailed income <br /> and expense reports with graphs so you can easilly see your spending <br /> patterns and budget at a glance. Read below to find out more.</p>
                        <button className="sec_btn_left">Learn More</button>
                    </div>
                </div>
                <div className="section_right">
                    <div className="section_right_img">
                        <img src={video_img} alt="" />
                    </div>
                </div>
            </div>
            <div className="features_father">
                <h1 className="features_text">Features</h1>
                <div className="features_father_card">
                    <div className="card">
                        <div className="sec_bg_div">
                            <img src={section_bg_img} alt="" className="section_bg_img" />
                        </div>
                        <div className="section_bg_text">
                            <h3 className="bg_cards_text">Supports All Currencies and <br /> Cards</h3>
                            <p className="bg_cards_paragraf">We support all popular currencies and is <br /> fully customizable to add</p>
                            <button className="btn_read">Read More</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="sec_bg_div">
                            <img src={section_bg_img_2} alt="" className="section_bg_img" />
                        </div>
                        <div className="section_bg_text">
                            <h3 className="bg_cards_text">Manage your expenses on <br /> the go</h3>
                            <p className="bg_cards_paragraf">You can access your account from <br /> anywhere in the world on any device   </p>
                            <button className="btn_read">Read More</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="sec_bg_div">
                            <img src={section_bg_img_3} alt="" className="section_bg_img" />
                        </div>
                        <div className="section_bg_text">
                            <h3 className="bg_cards_text">Cloud Budget Management <br /> Software</h3>
                            <p className="bg_cards_paragraf">Our software is made so you can access <br /> and manage your budget</p>
                            <button className="btn_read">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
