import { FlexColumn } from "../../../Global.Styles";
import HeroSection from "./HeroSection";
import FeaturedProductsSection from "./FeaturedProductsSection";
import TopRatedSection from "./TopRatedSection";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [sliderProducts, setSliderProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/products/top");

      setSliderProducts(response.data);
    } catch (e) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FlexColumn>
      <HeroSection sliderProducts={sliderProducts} />
      <FeaturedProductsSection />
      <TopRatedSection />
    </FlexColumn>
  );
};

export default HomeScreen;
