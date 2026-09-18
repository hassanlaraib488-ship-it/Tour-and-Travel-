import "./TripStyle.css";
import TripData from "./TripData";
import trip1 from "../assets/7.jpg";
import trip2 from "../assets/6.jpg";
import trip3 from "../assets/5.jpg";

function Trip() {
    return (
        <div className="trip">
            <h2>Recent Trips</h2>
            <p>You can discover amazing places with our recent trips!</p>
            <div className="trip-cards">
                <TripData
                    image={trip1}
                    heading="Mountain Hiking Adventure"
                    text="Experience the thrill of conquering breathtaking peaks and exploring scenic trails.You'll be amazed by the stunning views and the sense of accomplishment that comes with reaching the summit. This trip is perfect for adventure seekers and nature enthusiasts alike, offering a chance to connect with the great outdoors and create unforgettable memories."
                />
                <TripData
                    image={trip2}
                    heading="Beach Paradise Getaway"
                    text="Relax on pristine beaches and enjoy crystal-clear waters.You'll be amazed by the stunning views and the sense of accomplishment that comes with reaching the summit. This trip is perfect for adventure seekers and nature enthusiasts alike, offering a chance to connect with the great outdoors and create unforgettable memories."
                />
                <TripData
                    image={trip3}
                    heading="Cultural Heritage Tour"
                    text="Immerse yourself in the rich history and traditions of local communities.You'll be amazed by the stunning views and the sense of accomplishment that comes with reaching the summit. This trip is perfect for adventure seekers and nature enthusiasts alike, offering a chance to connect with the great outdoors and create unforgettable memories."
                />
            </div>
        </div>
    );
}

export default Trip;