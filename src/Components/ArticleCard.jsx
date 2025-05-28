import Button from "./Button";
import TextLink from "./TextLink";

function ArticleCard() {
    return (
        <div className="md:p-4 max-md:text-xs lg:w-1/2 flex flex-col gap-6">
            <TextLink text="OUR MISSION" />
            <div className="max-md:text-xs flex flex-col gap-4">
                <p>
                    Conscientia Health was founded for the express purpose of
                    providing high quality, easily accessible mental health care
                    to patients in a timely manner to decrease the suffering
                    experienced through depression, ADHD, anxiety, and many
                    other mental illnesses in children, teens, and adults.
                </p>
                <p>
                    Our multi-disciplinary team of psychiatrists, nurse
                    practitioners and psychotherapists have the knowledge and
                    experience to support our clients to cope, recover, and
                    break free from mental illness so they can live abundantly.
                    We believe the basis of treatment success is to actively
                    listen to you and address all of your concerns in a
                    collaborative manner. That’s why our clients rave about
                    their connection with us and our caring staff.
                </p>
            </div>
            <div className="flex gap-4 *:self-center">
                <Button text="Read More" />
                <TextLink text="Book Now" styles={"text-my-blue"} />
            </div>
        </div>
    );
}

export default ArticleCard;
