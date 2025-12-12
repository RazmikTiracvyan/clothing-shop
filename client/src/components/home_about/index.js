import {
  MainSection,
  SectionHeading,
  TextWrapper,
  Signature,
  SignatureWrapper,
  ChocolatesWrapper,
  ChocolateItem,
} from "./styled";

import {
  SignatureImg,
  PillowPng,
  Tabletcloth,
  TowlPng,
  BeddingPng,
  Signature2Img,
} from "../../assets/images";

export const HomeAbout = () => (
  <MainSection>
    <SectionHeading>Մեր մասին</SectionHeading>
    <TextWrapper>
      <p>
        Clothing-ը նորաձև հագուստի և կոշիկների խանութ է։ Clothing-ը առաջարկում է
        բարձրորակ, ժամանակակից և բազմազան ընտրանի՝ նրանց համար, ովքեր գնահատում
        են հարմարավետությունն ու յուրօրինակ ոճը։
      </p>
      <p>
        Clothing-ը միշտ ձգտում է բավարարել իր հաճախորդների պահանջները՝
        առաջարկելով լայն ընտրան և մատչելի գներ: Այցելեք
        մեզ և գտեք այն, ինչ փնտրում եք՝ ձեր առօրյա կամ հատուկ կերպարների համար։
      </p>
    </TextWrapper>
    <SignatureWrapper>
      <Signature>
      </Signature>
      <Signature>
      </Signature>
    </SignatureWrapper>
    <ChocolatesWrapper>
      <ChocolateItem>
        <img src={PillowPng} alt="Chocolate 1" />
        <p>Tommy Hilfiger</p>
      </ChocolateItem>
      <ChocolateItem>
        <img src={Tabletcloth} alt="Chocolate 2" />
        <p>New Balance</p>
      </ChocolateItem>
      <ChocolateItem>
        <img src={TowlPng} alt="Chocolate 3" />
        <p>Nike</p>
      </ChocolateItem>
      <ChocolateItem>
        <img src={BeddingPng} alt="Chocolate 4" />
        <p>Rolex</p>
      </ChocolateItem>
    </ChocolatesWrapper>
  </MainSection>
);
