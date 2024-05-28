import { navbarMenu } from "../../Components/utils"
import "./navbar.css"
export default function Navbar() {
    return (
        <>
            <div className="header">
                <div className="row">
                    <h3 className="nav_name">CLOUDBUDGET</h3>
                    <ul className="list">
                        {navbarMenu.map((value) => {
                            return (
                                <>
                                    <li className="list_item">{value.name}</li>
                                </>
                            )
                        })}
                    </ul>
                    <button className="btn">LOGIN</button>
                </div>
                <div className="text_bottom">
                    <h1 className="text_bottom_name">CloudBudget</h1>
                    <p className="text_bottom_paragraf">Cloud budget management for everyone. Only <br /> €69.95 a Month After a 7 Day Trial of <br />
                        Up to €4.99</p>
                        <button className="btn_bottom">Sign Up</button>
                </div>
            </div>
        </>
    )
}
