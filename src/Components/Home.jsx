import HomeProducts from "./HomeProducts";
import Landing from "./Landing";
import ScrollBtn from "./ScrollBtn";
import SmartWatch from "./SuperSmartWatch";
import SuperSound from "./SuperSound";
import Trending from "./Trending";
export default function Home() {
  return (
    <>
      <ScrollBtn />
      <Landing />
      <Trending />
      <SuperSound />
      <HomeProducts />
      <SmartWatch />
    </>
  );
}
