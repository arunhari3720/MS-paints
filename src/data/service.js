import image1 from "../assets/img_1.jpg";
import image2 from "../assets/img_2.jpg";
import image3 from "../assets/img_3.jpg";
import image4 from "../assets/img_4.jpg";
import image5 from "../assets/img_5.jpg";
import image6 from "../assets/img_6.jpg";
import image7 from "../assets/img_7.jpg";
import image8 from "../assets/img_8.jpg";
import image9 from "../assets/img_9.jpg";
import image10 from "../assets/img_10.jpg";
import image11 from "../assets/img_11.jpg";
import image12 from "../assets/img_12.jpg";
import image13 from "../assets/img_13.jpg";

const services = [
  image1, image2, image3, image4, image5, image6,
  image7, image8, image9, image10, image11, image12, image13
].map((img, i) => ({
  title: i % 2 === 0 ? "Our Works" : "Model Works",
  image: img,
}));

export default services;