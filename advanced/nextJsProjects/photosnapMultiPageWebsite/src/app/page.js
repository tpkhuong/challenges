import styles from "../styles/Page.module.css";
import MarketingPoint from "../app/components/client/MarketingPoint/index";
import StoryLink from "./components/client/StoryLink/index";
import Feature from "../app/components/server/Feature/index.js";
import LogoNavBar from "./components/server/LogoNavbar/index.js";
import Footer from "../app/components/server/Footer/index.js";
import MobileNavMenu from "../app/components/server/MobileNavMenu/index.js";
import React from "react";

export default function RootPage() {
  return (
    <React.Fragment>
      <header role="banner">
        <LogoNavBar />
        <MarketingPoint
          desktop="/home/desktop/create-and-share.jpg"
          tablet="/home/tablet/create-and-share.jpg"
          mobile="/home/mobile/create-and-share.jpg"
          theme="dark"
          title="CREATE AND SHARE YOUR PHOTO STORIES."
          linkText="GET AN INVITE"
          textLeftBoolean="true"
          booleanGradient="true"
        >
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </MarketingPoint>
      </header>
      <main role="main">
        <section className={styles[`view-stories-container`]}>
          <MarketingPoint
            desktop="/home/desktop/beautiful-stories.jpg"
            tablet="/home/tablet/beautiful-stories.jpg"
            mobile="/home/mobile/beautiful-stories.jpg"
            theme="light"
            title="BEAUTIFUL STORIES EVERY TIME"
            linkText="VIEW THE STORIES"
            textLeftBoolean="false"
          >
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </MarketingPoint>

          <MarketingPoint
            desktop="/home/desktop/designed-for-everyone.jpg"
            tablet="/home/tablet/designed-for-everyone.jpg"
            mobile="/home/mobile/designed-for-everyone.jpg"
            theme="light"
            title="DESIGNED FOR EVERYONE"
            linkText="VIEW THE STORIES"
            textLeftBoolean="true"
          >
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </MarketingPoint>
        </section>
        <section className={styles[`read-stories-container`]}>
          <StoryLink
            title="The Mountains"
            author="John Appleseed"
            mobile="/stories/mobile/mountains.jpg"
            tablet="/stories/desktop/mountains.jpg"
            altText=""
          />
          <StoryLink
            title="Sunset Cityscapes"
            author="Benjamin Cruz"
            mobile="/stories/mobile/cityscapes.jpg"
            tablet="/stories/desktop/cityscapes.jpg"
            altText=""
          />
          <StoryLink
            title="18 Days Voyage"
            author="Alexei Borodin"
            mobile="/stories/mobile/18-days-voyage.jpg"
            tablet="/stories/desktop/18-days-voyage.jpg"
            altText=""
          />
          <StoryLink
            title="Architecturals"
            author="Samantha Brooke"
            mobile="/stories/mobile/architecturals.jpg"
            tablet="/stories/desktop/architecturals.jpg"
            altText=""
          />
        </section>
        <section className={styles[`features-container`]}>
          {/* responsive */}
          <Feature
            title="100% Responsive"
            text="No matter which the device you’re on, our site is fully responsive and stories 
  look beautiful on any screen."
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72">
              <path d="M31.195 32.674c0-.654-.529-1.183-1.183-1.183H4.88c-.653 0-1.183.53-1.183 1.183v31.195c0 .653.53 1.182 1.183 1.182h25.133c.654 0 1.183-.53 1.183-1.182V32.674zM28.83 62.686H6.062v-28.83H28.83v28.83zm-10.194 3.4h-2.37a1.182 1.182 0 100 2.366h2.37a1.183 1.183 0 000-2.366z" />
              <path d="M68.33 0H52.298C50.32 0 48.64 1.545 48.64 3.523v6.235H12.292a6.694 6.694 0 00-6.674 6.696v11.34h-.724C2.168 27.795 0 30.063 0 32.792v34.168a4.864 4.864 0 004.897 4.893h26.086a3.91 3.91 0 002.835-1.183c.743-.765 1.221-1.737 1.073-2.798v-5.777h27.576a6.736 6.736 0 006.724-6.696V51.17a1.23 1.23 0 00-1.223-1.198h-1.734V38.44h2.095c1.978 0 3.523-1.678 3.523-3.656V3.523A3.483 3.483 0 0068.33 0zM51.005 7.688h18.48V28.83h-18.48V7.688zM52.3 2.366h16.03a1.12 1.12 0 011.158 1.157v1.8h-18.48v-1.8c0-.673.618-1.157 1.292-1.157zM7.984 16.454a4.326 4.326 0 014.308-4.33h36.349v3.4H12.22c-.654 0-1.132.594-1.132 1.247v11.024H7.984V16.454zm24.172 52.57c-.31.309-.735.477-1.173.463H4.9a2.5 2.5 0 01-2.536-2.532v-34.16c0-1.43 1.106-2.635 2.532-2.635h25.101c1.43 0 2.529 1.205 2.529 2.63v35.1c0 .011.036.007.036.02.026.411-.122.815-.407 1.113zm-2.154-41.23H13.454V17.89H48.64v16.894a3.712 3.712 0 003.658 3.656h6.1v11.532H43.995c-.33.003-.646.144-.87.389l-1.116 1.194a4.312 4.312 0 01-3.175 1.374h-3.944v-20.14c0-2.726-2.16-4.993-4.89-4.993zm36.823 27.604a4.368 4.368 0 01-4.358 4.331H34.891v-4.435h3.944a6.689 6.689 0 004.915-2.14l.765-.817h22.31v3.061zm-2.956-5.427h-3.105V38.44h3.105v11.532zm4.46-13.897H52.3a1.347 1.347 0 01-1.293-1.291v-3.588h18.48v3.588c0 .674-.483 1.29-1.157 1.29z" />
              <path d="M61.947 32.23h-3.105a1.183 1.183 0 000 2.365h3.105a1.182 1.182 0 100-2.365z" />
            </svg>
          </Feature>
          {/* no limit upload */}
          <Feature
            title="No Photo Upload Limit"
            text="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and 
  share all of your stories in one go."
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="36">
              <path d="M71.087 19.105a1.056 1.056 0 00-1.19.904 15.715 15.715 0 01-5.2 9.667 15.714 15.714 0 01-10.384 3.914c-2.082 0-4.104-.4-6.01-1.189a1.15 1.15 0 00-.102-.036c-.022-.006-2.272-.71-5.621-3.368a1.056 1.056 0 00-1.313 1.654c3.436 2.728 5.85 3.584 6.271 3.72 2.15.883 4.43 1.331 6.775 1.331 4.34 0 8.523-1.577 11.779-4.44a17.827 17.827 0 005.898-10.967 1.056 1.056 0 00-.903-1.19z" />
              <path d="M45.67 25.17c2.242 1.997 5.03 4.04 8.713 4.04h.004c6.256-.003 11.346-5.095 11.346-11.35 0-6.259-5.092-11.35-11.35-11.35-4.315 0-7.257 2.505-9.337 4.688-3.044 3.194-9.947 11.385-10.198 11.702-6.619 8.377-10.55 9.385-10.765 9.435a.8.8 0 00-.23.066 15.63 15.63 0 01-5.351 1.175l-.67.014A15.622 15.622 0 016.679 28.94a15.624 15.624 0 01-4.566-11.2c.03-4.189 1.705-8.126 4.715-11.085 2.975-2.923 6.88-4.527 11.015-4.527h.16a15.65 15.65 0 015.664 1.113c.112.044.223.088.335.13.55.206 5.395 2.163 10.85 9.087 0 0-2.344 2.862-2.886 3.505a79.573 79.573 0 00-5.482-5.414c-2.24-1.998-5.028-4.04-8.712-4.04h-.004c-.376 0-.757.018-1.13.055a1.056 1.056 0 00.209 2.102c.304-.03.614-.046.922-.046h.004c1.67 0 3.843.418 7.306 3.505a78.432 78.432 0 015.503 5.456 161.824 161.824 0 01-5.001 5.481c-2.659 2.79-5.067 4.034-7.809 4.034-5.093 0-9.237-4.144-9.237-9.238a9.23 9.23 0 014.12-7.693 1.056 1.056 0 10-1.172-1.757 11.339 11.339 0 00-5.06 9.45c0 6.259 5.091 11.35 11.35 11.35 4.315 0 7.256-2.505 9.336-4.688 3.044-3.194 10.386-11.94 10.386-11.94.005-.005.01-.01.013-.016 6.498-8.144 10.351-9.132 10.564-9.181a.796.796 0 00.23-.066c1.7-.704 3.501-1.1 5.352-1.176l.669-.013a15.73 15.73 0 0115.53 13.274 1.056 1.056 0 002.086-.327A17.846 17.846 0 0054.313.016h-.022L53.6.032h-.022a17.74 17.74 0 00-5.987 1.296c-.883.196-4.895 1.49-11.366 9.465-5.567-6.93-10.51-9.034-11.483-9.398a14.312 14.312 0 01-.293-.113A17.752 17.752 0 0018.023.018c-4.761-.05-9.26 1.775-12.675 5.132C1.934 8.506.035 12.972 0 17.726A17.725 17.725 0 005.18 30.43a17.72 17.72 0 0012.662 5.272h.022l.691-.014h.022a17.739 17.739 0 005.987-1.296c.872-.194 4.788-1.456 11.104-9.144.603.69 1.216 1.354 1.828 1.98a1.056 1.056 0 001.511-1.475 47.766 47.766 0 01-1.984-2.164c.554-.67 2.624-3.191 3.166-3.835a79.567 79.567 0 005.482 5.415zm.905-12.515c2.658-2.79 5.066-4.033 7.808-4.033 5.093 0 9.238 4.144 9.238 9.238 0 5.091-4.143 9.235-9.235 9.237h-.003c-1.67 0-3.844-.417-7.307-3.504a78.35 78.35 0 01-5.503-5.457 162.117 162.117 0 015.002-5.48z" />
            </svg>
          </Feature>
          {/* embed */}
          <Feature
            title="Available to Embed"
            text="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, 
  Google Maps, and more."
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="72">
              <path d="M41.311 62.557h-2.36V50.99a1.18 1.18 0 00-2.36 0v11.567H5.9V38.951h9.821a1.18 1.18 0 100-2.36h-11a1.18 1.18 0 00-1.181 1.18v24.786h-2.36A1.18 1.18 0 000 63.737v2.361A5.902 5.902 0 005.902 72H36.59a5.902 5.902 0 005.902-5.902v-2.36a1.18 1.18 0 00-1.18-1.18zm-1.18 3.541a3.541 3.541 0 01-3.54 3.541H34.23v-1.18a1.18 1.18 0 10-2.361 0v1.18H10.623v-1.18a1.18 1.18 0 10-2.36 0v1.18H5.901A3.541 3.541 0 012.36 66.1v-1.181h37.77v1.18zM61.377 8.262h2.36a1.18 1.18 0 100-2.36h-2.36a3.541 3.541 0 00-3.54 3.54v1.181h-1.181a1.18 1.18 0 100 2.36h1.18v3.542a1.18 1.18 0 002.36 0v-3.541h1.181a1.18 1.18 0 000-2.361h-1.18v-1.18c0-.652.528-1.18 1.18-1.18z" />
              <path d="M67.279 1.18H53.115a3.541 3.541 0 00-3.541 3.541v2.361a1.18 1.18 0 002.36 0v-2.36c0-.653.529-1.181 1.18-1.181H67.28c.652 0 1.18.528 1.18 1.18v14.164a1.18 1.18 0 01-1.18 1.18H53.115a1.18 1.18 0 01-1.18-1.18v-7.082a1.18 1.18 0 10-2.361 0v7.082a3.541 3.541 0 003.54 3.541H67.28a3.541 3.541 0 003.54-3.54V4.72a3.541 3.541 0 00-3.54-3.54zM55.475 48.393a4.721 4.721 0 109.443 0 4.721 4.721 0 00-9.443 0zm7.082 0a2.36 2.36 0 11-4.72 0 2.36 2.36 0 014.72 0z" />
              <path d="M67.279 37.77H53.115a3.541 3.541 0 00-3.541 3.541v14.164a3.541 3.541 0 003.54 3.541H67.28a3.541 3.541 0 003.54-3.54v-2.361a1.18 1.18 0 10-2.36 0v2.36a1.18 1.18 0 01-1.18 1.18H53.115a1.18 1.18 0 01-1.18-1.18V41.311c0-.651.528-1.18 1.18-1.18h14.164c.652 0 1.18.529 1.18 1.18v7.082a1.18 1.18 0 102.36 0v-7.082a3.541 3.541 0 00-3.54-3.54zM26.522 15.167a1.18 1.18 0 001.157.047l7.082-3.54a1.18 1.18 0 000-2.102l-7.082-3.54a1.18 1.18 0 00-1.712 1.05v7.082c0 .408.21.787.555 1.003zm1.806-6.173l3.258 1.629-3.258 1.629V8.994z" />
              <path d="M29.508 21.246c5.867 0 10.623-4.756 10.623-10.623C40.131 4.756 35.375 0 29.508 0c-5.867 0-10.623 4.756-10.623 10.623 0 5.867 4.756 10.623 10.623 10.623zm0-18.885a8.262 8.262 0 110 16.524 8.262 8.262 0 010-16.524zm11.803 23.606c.372 0 .722-.175.945-.472l3.54-4.721a1.18 1.18 0 10-1.888-1.417l-3.54 4.722a1.18 1.18 0 00.943 1.888zm2.597 4.25a1.18 1.18 0 001.653.235l4.721-3.54a1.18 1.18 0 10-1.416-1.889l-4.722 3.54a1.18 1.18 0 00-.236 1.653zm11.567 2.596a1.18 1.18 0 00-1.416-.944l-5.902 1.18a1.186 1.186 0 00.236 2.36h.237l5.901-1.18a1.18 1.18 0 00.944-1.416zM1.18 33.05h14.164a1.18 1.18 0 001.18-1.18V12.984a1.18 1.18 0 00-1.18-1.18H1.18A1.18 1.18 0 000 12.983v18.885c0 .652.528 1.18 1.18 1.18zm1.18-18.885h11.804v16.525H2.36V14.164z" />
              <path d="M10.623 16.525h-2.36a1.18 1.18 0 100 2.36h2.36a1.18 1.18 0 100-2.36zm0 4.72H5.902a1.18 1.18 0 000 2.362h4.721a1.18 1.18 0 100-2.361zm0 4.722H5.902a1.18 1.18 0 000 2.36h4.721a1.18 1.18 0 100-2.36zm29.65 6.728a1.184 1.184 0 10-2.054 1.18l5.205 9.006-18.885 7.082h-.177l-3.069 1.77-2.042 1.181a2.36 2.36 0 01-3.222-.862l-2.36-4.083a2.36 2.36 0 01.884-3.117l4.084-2.36 2.951 5.11a1.18 1.18 0 001.027.59 1.18 1.18 0 001.027-1.77l-3.045-5.264L35.41 28.942l.484.838a1.184 1.184 0 102.054-1.18l-1.18-2.043a1.18 1.18 0 00-.815-.566 1.18 1.18 0 00-.968.248L18.46 39.859l-5.028 2.904a4.721 4.721 0 00-2.172 5.347l-1.18.673a3.541 3.541 0 001.77 6.61 3.612 3.612 0 001.771-.472l1.18-.673a4.58 4.58 0 003.305 1.393 4.65 4.65 0 002.36-.638l1.028-.59 2.36 4.096a3.541 3.541 0 004.828 1.298 3.541 3.541 0 001.298-4.84l-2.148-3.74 17.705-6.646a1.18 1.18 0 00.614-1.688l-5.878-10.198zm-27.88 20.172a1.18 1.18 0 01-.897.118 1.18 1.18 0 01-.72-.543 1.18 1.18 0 01.437-1.617l1.027-.59 1.18 2.042-1.027.59zm15.534 3.305c.156.271.199.594.118.897a1.18 1.18 0 01-.555.708 1.18 1.18 0 01-1.605-.425l-2.361-4.096 1.96-1.12h.094l2.349 4.036z" />
            </svg>
          </Feature>
        </section>
      </main>
      {/* footer */}
      <Footer />
      {/* mobile menu */}
      <MobileNavMenu />
    </React.Fragment>
  );
}

function moveToFeatureAndPricingPage() {
  {
    /* feature page header */
  }

  <MarketingPoint
    desktop="/features/desktop/hero.jpg"
    tablet="/features/tablet/hero.jpg"
    mobile="/features/mobile/hero.jpg"
    theme="dark"
    title="FEATURES"
    linkText={null}
    textLeftBoolean="true"
    booleanGradient="true"
    pagePadding="not-home-page"
  >
    We make sure all of our features are designed to be loved by every aspiring
    and even professional photograpers who wanted to share their stories.
  </MarketingPoint>;

  {
    /* pricing page header */
  }
  <MarketingPoint
    desktop="/pricing/desktop/hero.jpg"
    tablet="/pricing/tablet/hero.jpg"
    mobile="/pricing/mobile/hero.jpg"
    theme="dark"
    title="PRICING"
    linkText={null}
    textLeftBoolean="true"
    booleanGradient="true"
    pagePadding="not-home-page"
  >
    Create a your stories, Photosnap is a platform for photographers and visual
    storytellers. It’s the simple way to create and share your photos.
  </MarketingPoint>;
}
