import FooterComponent from "./footer"
import HeaderComponent from "./header"

const HomeComponent = ({isPhone}) => {
    return (
        <>
            <HeaderComponent isPhone={isPhone} />
            Home Component
            <FooterComponent />
        </>
    )
}

export default HomeComponent