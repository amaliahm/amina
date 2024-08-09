import ElementComponent from "../components/element"
import { menu_before, menu_after } from "../assets";
import { name, navBar } from "../data";
import { useState } from "react";



const HeaderComponent = ({isPhone}) => {

    const [toggle, setToggle] = useState(false)
    function clickToggle() {
        setToggle(!toggle)
    }
    

    navBar.map((e, i) => console.log(e, i))
    return (
        <>
            <nav className="w-screen h-14 flex justify-between items-center bottom-border absolute top-0">
                <ElementComponent title={name} />
                {toggle 
                ? <ElementComponent isTitle={false} title='' isIcon={true} icon={menu_after} onClick={clickToggle}/>
                : <ElementComponent isTitle={false} title='' isIcon={true} icon={menu_before} onClick={clickToggle}/>
                }
            </nav>
        </>
    )
}

export default HeaderComponent