import CustomersCarousel from "../components/customers"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import NewsCarousel from "../components/News"
import Vehicles from "../components/vehicle"
import VehicleDetails from "../components/VehicleDetails"

const Home = () => {

    return (
        <>
            <Navbar />
            <Hero />
            <Vehicles />
            <VehicleDetails />
            <CustomersCarousel />
            <NewsCarousel/>
            <Footer/>
        </>
    )

}
export default Home 