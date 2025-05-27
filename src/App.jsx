import Button from "./Components/Button";
import Banner from "./Components/Banner";
import ActionCard from "./Components/ActionCard";
import MissionCard from "./Components/MissionCard";
import Carousel from "./Components/Carousel";
import TextLink from "./Components/TextLink";
import ProfileList from "./Components/ProfileList";
import CustomerReviews from "./Components/CustomerReviews";
import Policy from "./Components/Policy";
import OurBlogs from "./Components/OurBlogs";
import FaqSection from "./Components/FaqSection";
import LocationSearch from "./Components/LocationSearch";
import ActionFooter from "./Components/ActionFooter";
import Footer from "./Components/Footer";
import FooterMobile from "./Components/FooterMobile";

function App() {
    return (
        <>
            <section className="w-full bg-blue-200/10 pb-8  bg-cover h-full">
                <Banner />
                <div className="lg:container lg:p-8 p-4 lg:my-10 mx-auto ">
                    <ActionCard />
                    <MissionCard />
                </div>
            </section>
            <section className="w-full pt-4">
                <div>
                    <TextLink
                        text="OUR SERVICES"
                        url=""
                        styles="text-my-green block underline text-center "
                    />
                    <p className="block text-center mt-2 font-medium md:text-3xl md:mt-4">
                        We specialize in the evaluation, diagnosis,
                        <br /> and treatment of the following
                    </p>
                </div>
                <Carousel />
            </section>
            <section className="flex max-md:flex-col gap-12 lg:my-20 p-4">
                <div className="lg:w-2/5 lg:ml-20 flex flex-col gap-4">
                    <TextLink
                        text="MEET THE TEAM"
                        url=""
                        styles="text-my-green underline max-md:text-center "
                    />
                    <h3 className="text-3xl max-md:text-2xl font-medium max-md:text-center">
                        We are a team of Highly <br /> Passionate Providers.
                    </h3>
                    <p className="max-md:text-center max-md:text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis obcaecati harum dolorem consequuntur vitae ut
                        doloremque debitis blanditiis ratione maiores, beatae
                        eaque tenetur quidem. Rem exercitationem repudiandae
                        cumque quia aspernatur.
                    </p>
                    <Button
                        text="Explore More"
                        styles={"w-fit max-md:mx-auto"}
                    />
                </div>
                <div className="lg:w-3/5">
                    <ProfileList />
                </div>
            </section>
            <Policy />
            <CustomerReviews />
            <OurBlogs />
            <FaqSection />
            <LocationSearch />
            <ActionFooter />
            <div className="max-md:hidden">
                <Footer />
            </div>
            <div className="md:hidden">
                <FooterMobile />
            </div>
        </>
    );
}

export default App;
