import React, { createContext, useContext } from "react";
import ctaImg from "./assets/zaraResource/call-to-action.jpg";
import collectionSliderImg from "./assets/zaraResource/collection-slider.jpg";
import compAnalysisImg from "./assets/zaraResource/competitor-analysis.jpg";
import filterImg from "./assets/zaraResource/filter-stack.jpg";
import goalsImg from "./assets/zaraResource/goals.jpg";
import navImg from "./assets/zaraResource/navigation-frame.jpg";
import collectionNavImg from "./assets/zaraResource/navigation-image-2.jpg";
import newSiteMapImg from "./assets/zaraResource/new-site-map.jpg";
import newUserFlowImg from "./assets/zaraResource/new-user-flow.jpg";
import oldSiteMapImg from "./assets/zaraResource/old-site-map.jpg";
import oldUserFlowImg from "./assets/zaraResource/old-user-flow.jpg";
import webCTAImg from "./assets/zaraResource/original-call-to-action.jpg";
import webProdPgImg from "./assets/zaraResource/original-product-page.jpg";
import prodAvaiFilterImg from "./assets/zaraResource/store-availability.jpg";
import brandImg from "./assets/zaraResource/style.jpg";
import thumbnailImg from "./assets/zaraResource/thumb-nail-stack.jpg";
import coverPhotoImg from "./assets/zaraResource/zara-cover-photo-smaller.jpg";
import uiKitImg from "./assets/zaraResource/ui-kit.jpg";
import userProfileImg from "./assets/zaraResource/user-profile.png";
import userResearchImg from "./assets/zaraResource/user-research-result.jpg";
import webHomePageImg from "./assets/zaraResource/zara-homepage.jpg";
import logoImg from "./assets/zaraResource/zara-logo.jpg";
import wireFrameImg from "./assets/zaraResource/zara-wireframe-small.jpg";

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const zaraImg = {
    coverPhoto: coverPhotoImg,
    logo: logoImg,
    goals: goalsImg,
    webHomePage: webHomePageImg,
    webProdPg: webProdPgImg,
    webCTA: webCTAImg,
    compAnalysis: compAnalysisImg,
    userResearch: userResearchImg,
    userProfile: userProfileImg,
    oldSiteMap: oldSiteMapImg,
    newSiteMap: newSiteMapImg,
    oldUserFlow: oldUserFlowImg,
    newUserFlow: newUserFlowImg,
    wireFrame: wireFrameImg,
    brand: brandImg,
    uiKit: uiKitImg,
    nav: navImg,
    collectionSlider: collectionSliderImg,
    collectionNav: collectionNavImg,
    prodAvaiFilter: prodAvaiFilterImg,
    filter: filterImg,
    thumbnail: thumbnailImg,
    cta: ctaImg,
  };

  return (
    <ImageContext.Provider value={{ zaraImg }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  return useContext(ImageContext);
};

export { ImageContext, ImageProvider };
