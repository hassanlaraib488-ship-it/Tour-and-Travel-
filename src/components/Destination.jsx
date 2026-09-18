import DestinationData from "./DestinationData";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";

import "./DestinationStyle.css";
const Destination = () => {
  return (
    <div className="destination">
       <h1>Popular Destinations</h1>
       <p>Tour give you the opportunity to see a lot, within a time frame.</p>

       <DestinationData 
       className="first-des"
       heading="Taal Volcano , Batangas"
       text="Taal Volcano is a complex volcano located on the island of Luzon in the Philippines. It is one of the most active volcanoes in the country and is known for its picturesque setting within Taal Lake. The volcano has a unique feature, as it is situated on an island within a lake, which itself is located within a larger caldera. Taal Volcano has erupted several times throughout history, with the most recent eruption occurring in January 2020. It is a popular tourist destination, attracting visitors who want to hike to the crater and witness its stunning views."
       img1={Mountain1}
       img2={Mountain2}
       />

       <DestinationData
       className="first-des-reverse" 
       heading="Mt. Daguldul, Batangas"
       text="Mt. Daguldul is a dormant volcano located in the province of Batangas, Philippines. It is known for its scenic beauty and is a popular destination for hikers and nature enthusiasts. The volcano offers breathtaking views of the surrounding landscape and is home to diverse flora and fauna.the hike to the summit of Mt. Daguldul is relatively moderate, making it accessible to both beginners and experienced hikers. Along the trail, visitors can enjoy lush forests, cascading waterfalls, and panoramic vistas of the coastline. The summit rewards hikers with a stunning view of the West Philippine Sea and nearby islands. Mt. Daguldul is also a great spot for camping and picnicking, allowing visitors to immerse themselves in nature and enjoy the tranquility of the area."
       img1={Mountain3}
       img2={Mountain4}
       />
       
    </div>
    );
}


export default Destination;