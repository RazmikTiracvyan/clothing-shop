import {
  BackgroundContact,
  BgColor,
  DecorTitle,
  LineLocations,
  LocationPart,
  LocationsMain,
  MainContact,
  ShopImage,
  Shoplocation,
  ShopName,
  ShopNk,
} from "./styled";

import { Shop1, Shop2 } from "../../assets/images";



export const Contact = () => {
  return (
    <MainContact>
      <BackgroundContact>
        <BgColor>
          <DecorTitle>ՄԵՐ ՀԱՍՑԵՆԵՐԸ</DecorTitle>
        </BgColor>
      </BackgroundContact>
      <LocationsMain>
        <LocationPart>
          <ShopName>Clothing Shop 1</ShopName>
          <br/>

          <Shoplocation>Address 1</Shoplocation>
          <br/>

          <Shoplocation>+374 55 55-55-55</Shoplocation>
          <ShopImage>
            <ShopNk src={Shop1} width={"100%"} height={"100%"}/>
          </ShopImage>
        </LocationPart>
        <LineLocations />
        <LocationPart>
          <ShopName>Clothing Shop 2</ShopName>
          <br/>
          <Shoplocation>Address 2</Shoplocation>
          <br/>
          <Shoplocation>+374 77 00-00-00</Shoplocation>

          <ShopImage>
            <ShopNk src={Shop2} width={"100%"} height={"100%"}/>
          </ShopImage>
        </LocationPart>
      </LocationsMain>
      <div style={{width: "100%"}}><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Nar-Dos%20street%20Vagharshapat+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></div>
    </MainContact>
  );
};
