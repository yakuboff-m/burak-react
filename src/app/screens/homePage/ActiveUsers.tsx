import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import { createSelector } from "reselect";
import { retrieveTopUsers } from "./selector";
import { Product } from "../../../lib/types/product";
import { useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";
import { Member } from "../../../lib/types/member";
/** REDUX SLICE & SELECTOR **/
const topUsersRetriever = createSelector(
  retrieveTopUsers,
  (topUsers) => ({ topUsers })
);


export default function ActiveUsers() {
  const { topUsers } = useSelector(topUsersRetriever);
  return (
    <div className={"active-users-frame"}>
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Active Users</Box>
          <Stack className={"cards-frame"}>
            <CssVarsProvider>
              {topUsers.length !== 0 ? (
                topUsers.map((member: Member) => {
                  const imagePath = `${serverApi}/${member.memberImage}`;
                    return (
                        <Card key={member._id} className="active-user-card">
                            <Box className="active-user-img">
                                <img src={imagePath}  alt="" />
                            </Box>
                            <Typography className="active-user-nick">
                                {member.memberNick}
                            </Typography>
                        </Card>
                    )
                })
              ) : (
                <Box className="no-data">No Active Users!</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}