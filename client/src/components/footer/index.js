import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  AddressSection,
  Address,
  ContactInfo,
  ContactSection,
  SocialIcon,
  SocialSection,
  FooterReserved,
} from "./styled";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <AddressSection>
          <Address>Պարույր Սևակ 1, ք. Երևան</Address>
        </AddressSection>
        <ContactSection>
          <ContactInfo>հեռ.` +374 77 77-77-77</ContactInfo>
        </ContactSection>
        <SocialSection>
          <SocialIcon
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </SocialIcon>
          <SocialIcon
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </SocialIcon>
          <SocialIcon
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </SocialIcon>
        </SocialSection>
      </FooterContainer>
      <FooterReserved style={{paddingLeft:"80px"}}>
        ©{new Date().getFullYear()} Clothing Shop | All Rights Reserved
      </FooterReserved>
    </>
  );
};
