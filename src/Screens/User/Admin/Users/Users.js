import {
  FlexColumn,
  InnerSection,
  SpinnerContainer,
  Typography,
} from "../../../../Global.Styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ListBox, RowCell, StyledRow } from "./Users.Styles";
import { ErrorMessage } from "../../Customer/Payment/Payment.Styles";
import { getUsers, handleDelete } from "../../../../Redux/Admin/actions";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Users(props) {
  const {
    admin: {
      users: { users, isLoading, error },
      deleteOrder: { error: deleteError },
    },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return isLoading ? (
    <SpinnerContainer />
  ) : error ? (
    <ErrorMessage>{error}</ErrorMessage>
  ) : (
    <InnerSection style={{ margin: "44px 0 60px", alignItems: "flex-start" }}>
      <Typography
        style={{ justifyContent: "start" }}
        fontSize="32"
        color="#242424"
        fontWeight="700"
      >
        System Users
      </Typography>
      {deleteError && <ErrorMessage>{deleteError}</ErrorMessage>}
      <FlexColumn>
        <ListBox>
          <StyledRow as={"div"}>
            <RowCell width={"30%"}>Id</RowCell>
            <RowCell>User Name</RowCell>
            <RowCell>Email</RowCell>
            <RowCell>Created At</RowCell>
          </StyledRow>
          {users.map((user) => (
            <StyledRow as={"div"}>
              <RowCell width={"30%"}>{user._id}</RowCell>
              <RowCell>{user.name}</RowCell>
              <RowCell>{user.email}</RowCell>
              <RowCell>{user.createdAt.substring(0, 10)}</RowCell>
              <RowCell
                style={{ width: "5%" }}
                onClick={() => props.history.push(`/edit-user/${user._id}`)}
              >
                <EditIcon style={{ fill: "green", color: "green" }} />
              </RowCell>
              <RowCell
                style={{ width: "5%" }}
                onClick={() => dispatch(handleDelete(user._id))}
              >
                <DeleteForeverIcon style={{ fill: "red", color: "red" }} />
              </RowCell>
            </StyledRow>
          ))}
        </ListBox>
      </FlexColumn>
    </InnerSection>
  );
}

export default Users;
