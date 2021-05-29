import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoplay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="bookclub.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/primevideo.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/amazonmusic.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
