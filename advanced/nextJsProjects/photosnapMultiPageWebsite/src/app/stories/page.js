import React from "react";
import styles from "./Stories.module.css";
import StoriesHeader from "../components/server/Stories_Header/index.js";
import StoryLink from "../components/client/StoryLink/index.js";
import LogoNavBar from "../components/server/LogoNavbar/index.js";
import Footer from "../components/server/Footer/index.js";
import MobileNavMenu from "../components/server/MobileNavMenu/index.js";

export default function StoriesPage({ children }) {
  return (
    <React.Fragment>
      <header>
        {/* mobile="/stories/mobile/moon-of-appalacia.jpg" */}
        <StoriesHeader
          mobile="/stories/mobile/moon-of-appalacia.jpg"
          tablet="/stories/tablet/moon-of-appalacia.jpg"
          desktop="/stories/desktop/moon-of-appalacia.jpg"
          lastMonth="LAST MONTH’S FEATURED STORY"
          title="HAZY FULL MOON OF APPALACHIA"
          date="March 2nd 2020"
          author="John Appleseed"
          description="The dissected plateau area, while not actually made up of geological mountains, is popularly called 'mountains', especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged."
          linkText="READ THE STORY"
        />
      </header>
      <main>
        {/* 1 */}
        {/* <StoryLink
          title="The Mountains"
          author="John Appleseed"
          mobile="/stories/mobile/mountains.jpg"
          tablet="/stories/desktop/mountains.jpg"
          altText=""
        /> */}
        {/* 2 */}
        {/* 3 */}
        {/* 4 */}
        {/* 5 */}
        {/* 6 */}
        {/* 7 */}
        {/* 8 */}
        {/* 9 */}
        {/* 10 */}
        {/* 11 */}
        {/* 12 */}
        {/* 13 */}
        {/* 14 */}
        {/* 15 */}
        {/* 16 */}
      </main>
      {/* foooter */}
      {/* mobile menu */}
      {/* <MobileNavMenu/> */}
    </React.Fragment>
  );
}
