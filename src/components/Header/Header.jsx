import Topheader from "./Topheader";
import Bottomheader from "./Bottomheader";
function Header(){
    return(
        <header className="header">
            <Topheader/>
            <Bottomheader/>
        </header>
    )
}

export default Header;