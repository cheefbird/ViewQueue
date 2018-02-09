import React from "react";
import { Image } from "react-native";
import { Router, Scene, Tabs, Stack, Actions } from "react-native-router-flux";
import DiscoverMovies from "./screens/discover_tab/DiscoverMovies";
import MovieDetails from "./screens/discover_tab/MovieDetails";
import TabTwo from "./screens/tab_2/TabTwo";
import TabThree from "./screens/tab_3/TabThree";

const tabBarIcon = () => {
  return (
    <Image
      source={require("../resources/icons/tabs_discover_movies.png")}
      style={{ width: 25, height: 25, tintColor: "red" }}
    />
  );
};

const MainAppRouter = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Tabs key="tabBar_root" hideNavBar>
          <Stack
            key="tab_1"
            title="Discover Movies"
            tabBarLabel="Discover"
            icon={tabBarIcon}
            initial
          >
            <Scene key="discover_tab" component={DiscoverMovies} />
            <Scene
              key="movieDetails"
              component={MovieDetails}
              title="Details"
            />
          </Stack>
          <Stack key="tab_2" title="Discover Movies 2" tabBarLabel="Discover 2">
            <Scene key="discover_tab" component={TabTwo} />
          </Stack>
          <Stack key="tab_3" title="Discover Movies 3" tabBarLabel="Discover 3">
            <Scene key="discover_tab" component={TabThree} />
          </Stack>
        </Tabs>
      </Scene>
    </Router>
  );
};

// const styles = {
//   mainTab: {
//     backgroundColor: "black"
//   },
//   tabItem: {

//   }
// };

export default MainAppRouter;
