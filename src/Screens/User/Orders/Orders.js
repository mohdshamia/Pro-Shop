import {
  FlexColumn,
  InnerSection,
  SpinnerContainer,
  Typography,
} from "../../../Global.Styles";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage } from "../Payment/Payment.Styles";
import { useEffect } from "react";
import { getOrders } from "../../../Redux/Orders/ordersActions";

function Orders(props) {
  const {
    orders: {
      userOrders: { isLoading, error, orders },
    },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return isLoading ? (
    <SpinnerContainer />
  ) : error ? (
    <ErrorMessage>{error}</ErrorMessage>
  ) : (
    <InnerSection>
      <Typography>MY ORDERS</Typography>
      <FlexColumn>
        {orders.map((item) => (
          <span>{item._id}</span>
        ))}
      </FlexColumn>
    </InnerSection>
  );
}

export default Orders;
