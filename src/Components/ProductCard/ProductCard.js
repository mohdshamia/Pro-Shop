import { CardContainer, CardImage } from "./ProductCard.Styles";
import { FlexRow, Typography } from "../../Global.Styles";
import Rating from "@material-ui/lab/Rating";
import Button from "../Button/Button";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

function ProductCard(props) {
  return (
    <CardContainer widthBorder={props.widthBorder}>
      <CardImage src={props.image} alt={props.name} />
      <Typography fontSize={24}>{props.name}</Typography>
      <Rating name="simple-controlled" value={props.rate} />
      <FlexRow
        style={{
          marginBottom: 18,
          justifyContent: "space-between",
          maxWidth: "40%",
        }}
      >
        {props.discount && (
          <Typography color={"#FC4059"} fontSize={30}>
            $ {props.discount}
          </Typography>
        )}
        <Typography
          fontSize={30}
          fontWeight={700}
          style={{ textDecoration: props.discount&&"line-through" }}
        >
          ${props.price}
        </Typography>
      </FlexRow>
      <FlexRow>
        <Button
          text={
            <BookmarkBorderIcon
              style={{
                fontSize: 40,
                color: "#242424",
                fill: "#242424",
                opacity: 0.3,
              }}
            />
          }
          width={"54px"}
          borderRadius={10}
          isGray={true}
          style={{ height: 62, marginRight: 13 }}
        />
        <Button
          text="Add to cart"
          width={"324px"}
          borderRadius={10}
          style={{ height: 62 }}
          isGray={true}
        />
      </FlexRow>
    </CardContainer>
  );
}

export default ProductCard;
