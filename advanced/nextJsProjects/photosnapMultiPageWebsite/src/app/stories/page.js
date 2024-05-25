import React from "react";
import styles from "./Stories.module.css";
import StoriesHeader from "../components/server/Stories_Header/index.js";
import StoryLink from "../components/client/StoryLink/index.js";
import FooterBanner from "../components/server/FooterBanner/index.js";
import LogoNavBar from "../components/server/LogoNavbar/index.js";
import Footer from "../components/server/Footer/index.js";
import MobileNavMenu from "../components/server/MobileNavMenu/index.js";

export default function StoriesPage({ children }) {
  return (
    <React.Fragment>
      <header>
        <FooterBanner
          mobile="/shared/mobile/bg-beta.jpg"
          tablet="/shared/tablet/bg-beta.jpg"
          desktop="/shared/desktop/bg-beta.jpg"
          altText="hi"
        />
        {/* mobile="/stories/mobile/moon-of-appalacia.jpg" */}
        {/* <StoriesHeader
          mobile="/stories/mobile/moon-of-appalacia.jpg"
          tablet="/stories/tablet/moon-of-appalacia.jpg"
          desktop="/stories/desktop/moon-of-appalacia.jpg"
          lastMonth="LAST MONTH’S FEATURED STORY"
          title="HAZY FULL MOON OF APPALACHIA"
          date="March 2nd 2020"
          author="John Appleseed"
          description="The dissected plateau area, while not actually made up of geological mountains, is popularly called 'mountains', especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged."
          linkText="READ THE STORY"
        /> */}
      </header>

      {/* foooter */}
      {/* mobile menu */}
      {/* <MobileNavMenu/> */}
    </React.Fragment>
  );
}

function moveBelowHeaderAfterFooterBannerIsComplete() {
  <main>
    {/* 1 */}
    {/* mountains.jpg */}
    <StoryLink
      date="April 16th 2020"
      title="The Mountains"
      author="John Appleseed"
      mobile="/stories/mobile/mountains.jpg"
      tablet="/stories/desktop/mountains.jpg"
      altText=""
    />
    {/* 2 */}
    {/* cityscapes */}
    <StoryLink
      date="April 14th 2020"
      title="Sunset Cityscapes"
      author="Benjamin Cruz"
      mobile="/stories/mobile/cityscapes.jpg"
      tablet="/stories/desktop/cityscapes.jpg"
      altText=""
    />
    {/* 3 */}
    {/* 18-days-voyage */}
    <StoryLink
      date="April 11th 2020"
      title="18 Days Voyage"
      author="Alexei Borodin"
      mobile="/stories/mobile/18-days-voyage.jpg"
      tablet="/stories/desktop/18-days-voyage.jpg"
      altText=""
    />
    {/* 4 */}
    {/* architecturals */}
    <StoryLink
      date="April 9th 2020"
      title="Architecturals"
      author="Samantha Brooke"
      mobile="/stories/mobile/architecturals.jpg"
      tablet="/stories/desktop/architecturals.jpg"
      altText=""
    />
    {/* 5 */}
    {/* world-tour */}
    <StoryLink
      date="April 7th 2020"
      title="World Tour 2019"
      author="Timothy Wagner"
      mobile="/stories/mobile/world-tour.jpg"
      tablet="/stories/desktop/world-tour.jpg"
      altText=""
    />
    {/* 6 */}
    {/* unforeseen-corners */}
    <StoryLink
      date="April 3rd 2020"
      title="Unforeseen Corners"
      author="William Malcolm"
      mobile="/stories/mobile/unforeseen-corners.jpg"
      tablet="/stories/desktop/unforeseen-corners.jpg"
      altText=""
    />
    {/* 7 */}
    {/* king-on-africa */}
    <StoryLink
      date="March 29th 2020"
      title="King on Africa: Part II"
      author="Tim Hillenburg"
      mobile="/stories/mobile/king-on-africa.jpg"
      tablet="/stories/desktop/king-on-africa.jpg"
      altText=""
    />
    {/* 8 */}
    {/* trip-to-nowhere */}
    <StoryLink
      date="March 21st 2020"
      title="The Trip to Nowhere"
      author="Felicia Rourke"
      mobile="/stories/mobile/trip-to-nowhere.jpg"
      tablet="/stories/desktop/trip-to-nowhere.jpg"
      altText=""
    />
    {/* 9 */}
    {/* rage-of-the-sea */}
    <StoryLink
      date="March 19th 2020"
      title="Rage of The Sea"
      author="Mohammed Abdul"
      mobile="/stories/mobile/rage-of-the-sea.jpg"
      tablet="/stories/desktop/rage-of-the-sea.jpg"
      altText=""
    />
    {/* 10 */}
    {/* running-free */}
    <StoryLink
      date="March 16th 2020"
      title="Running Free"
      author="Michelle"
      mobile="/stories/mobile/running-free.jpg"
      tablet="/stories/desktop/running-free.jpg"
      altText=""
    />
    {/* 11 */}
    {/* behind-the-waves */}
    <StoryLink
      date="March 11th 2020"
      title="Behind the Waves"
      author="Lamarr Wilson"
      mobile="/stories/mobile/behind-the-waves.jpg"
      tablet="/stories/desktop/behind-the-waves.jpg"
      altText=""
    />
    {/* 12 */}
    {/* calm-waters */}
    <StoryLink
      date="March 9th 2020"
      title="Calm Waters"
      author="Samantha Brooke"
      mobile="/stories/mobile/calm-waters.jpg"
      tablet="/stories/desktop/calm-waters.jpg"
      altText=""
    />
    {/* 13 */}
    {/* milky-way */}
    <StoryLink
      date="March 5th 2020"
      title="The Milky Way"
      author="Benjamin Cruz"
      mobile="/stories/mobile/milky-way.jpg"
      tablet="/stories/desktop/milky-way.jpg"
      altText=""
    />
    {/* 14 */}
    {/* dark-forest */}
    <StoryLink
      date="March 4th 2020"
      title="Night at The Dark Forest"
      author="Mohammed Abdul"
      mobile="/stories/mobile/dark-forest.jpg"
      tablet="/stories/desktop/dark-forest.jpg"
      altText=""
    />
    {/* 15 */}
    {/* somwarpet */}
    <StoryLink
      date="March 1st 2020"
      title="Somwarpet’s Beauty"
      author="Michelle"
      mobile="/stories/mobile/somwarpet.jpg"
      tablet="/stories/desktop/somwarpet.jpg"
      altText=""
    />
    {/* 16 */}
    {/* land-of-dreams */}
    <StoryLink
      date="February 25th 2020"
      title="Land of Dreams"
      author="William Malcolm"
      mobile="/stories/mobile/land-of-dreams.jpg"
      tablet="/stories/desktop/land-of-dreams.jpg"
      altText=""
    />
  </main>;
}
