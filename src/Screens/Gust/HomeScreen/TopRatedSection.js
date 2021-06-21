
import {FlexBox, FlexColumn, FlexRow, InnerSection, Typography} from "../../../Global.Styles";
import {BorderedBox, Divider, YellowDivider} from "./HomeScreen.Styles";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import slideImage from "../../../Assets/img1.PNG";

function TopRatedSection(props) {


    return (
        <FlexBox color={"#fff"}>
            <InnerSection>
                <FlexColumn style={{ marginTop: 32, alignItems:"start" }}>
                    <Typography fontWeight={700} fontSize={32}>TOP RATE PRODUCTS</Typography>
                <YellowDivider />
                    <Divider />
            </FlexColumn>
                    <BorderedBox>
                        <ProductCard widthBorder={true}
                            image={slideImage}
                            name={"Omar"}
                            discount={10}
                            price={200}
                            rate={4}
                        />
                        <ProductCard widthBorder={true}
                            image={slideImage}
                            name={"Omar"}
                            discount={10}
                            price={200}
                            rate={4}
                        />
                        <ProductCard widthBorder={true}
                            image={slideImage}
                            name={"Omar"}
                            price={200}
                            rate={4}
                        />
                    </BorderedBox>
            </InnerSection>
        </FlexBox>
    );
}


export default TopRatedSection;