import { useState } from "react";
import {
  FlexBox,
  FlexRow,
  InnerSection,
  Typography,
} from "../../../Global.Styles";
import SwipeableViews from "react-swipeable-views";
import {
  Divider,
  Dot,
  YellowDivider,
} from "./HomeScreen.Styles";
import slideImage from "../../../Assets/img1.PNG";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const styles = {
  root: {
    position: "relative",
    width: "100%",
    height: 678,
  },
};
function FeaturedProductsSection(props) {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleChangeIndex = () => {};

  return (
    <FlexBox color={"#F7F8FC"}>
      <InnerSection>
        <FlexRow style={{ marginTop: 32 }}>
          <Typography fontWeight={700} fontSize={32}>
            Featured Products
          </Typography>
        </FlexRow>
        <YellowDivider />
        <Divider />
        <SwipeableViews
          style={Object.assign({}, styles.root, styles.root)}
          index={sliderIndex}
          onChangeIndex={handleChangeIndex}
        >
          <FlexRow>
            <ProductCard
              image={slideImage}
              name={"Omar"}
              discount={10}
              price={200}
              rate={4}
            />
            <ProductCard
              image={slideImage}
              name={"Omar"}
              discount={10}
              price={200}
              rate={4}
            />
            <ProductCard
              image={slideImage}
              name={"Omar"}
              discount={10}
              price={200}
              rate={4}
            />
          </FlexRow>
          <FlexRow>
            <ProductCard
              image={slideImage}
              name={"Omar"}
              discount={10}
              price={200}
              rate={4}
            />
            <ProductCard
              image={slideImage}
              name={"Omar"}
              discount={10}
              price={200}
              rate={4}
            />
            <ProductCard
              image={slideImage}
              name={"Omar"}
              discount={10}
              price={200}
              rate={4}
            />
          </FlexRow>
          <FlexRow>
            <ProductCard
              image={slideImage}
              name={"Omar"}
              discount={10}
              price={200}
              rate={4}
            />
            <ProductCard
              image={slideImage}
              name={"Omar"}
              discount={10}
              price={200}
              rate={4}
            />
            <ProductCard
              image={slideImage}
              name={"Omar"}
              discount={10}
              price={200}
              rate={4}
            />
          </FlexRow>
        </SwipeableViews>

        <FlexRow style={{ marginBottom: 40, marginTop: 40 }}>
          <Dot
            size={14}
            isGray={sliderIndex !== 0}
            onClick={() => {
              setSliderIndex(0);
            }}
          />
          <Dot
            size={14}
            isGray={sliderIndex !== 1}
            onClick={() => {
              setSliderIndex(1);
            }}
          />
          <Dot
            size={14}
            isGray={sliderIndex !== 2}
            onClick={() => {
              setSliderIndex(2);
            }}
          />
        </FlexRow>
      </InnerSection>
    </FlexBox>
  );
}

export default FeaturedProductsSection;
