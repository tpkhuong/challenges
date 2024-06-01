"use client";

import React from "react";
import styles from "./Stories.module.css";
import StoriesHeader from "../components/server/Stories_Header/index.js";
import StoryLink from "../components/client/StoryLink/index.js";
import Feature from "../components/server/Feature/index.js";
import FeatureCompare from "../components/server/FeatureCompare/index.js";
import FooterBanner from "../components/server/FooterBanner/index.js";
import LogoNavBar from "../components/server/LogoNavbar/index.js";
import Footer from "../components/server/Footer/index.js";
import MobileNavMenu from "../components/server/MobileNavMenu/index.js";

import FeatureCard from "../components/server/FeatureCard/index.js";

export default function StoriesPage({ children }) {
  return (
    <React.Fragment>
      <header>
        {/* move to feature page */}
        <main className={styles[`features-container`]}>
          <Feature
            isFeaturePage="true"
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
            isFeaturePage="true"
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
            isFeaturePage="true"
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
          {/* custom domain */}
          <Feature
            isFeaturePage="true"
            title="Custom Domain"
            text="With Photosnap subscriptions you can host your stories on your own domain. You can 
  also remove our branding!"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="72">
              <path d="M48.628 26.431c-7.611 0-13.804 6.193-13.804 13.804 0 7.612 6.193 13.804 13.804 13.804 7.612 0 13.804-6.192 13.804-13.804 0-7.611-6.192-13.804-13.804-13.804zm0 24.471c-5.882 0-10.667-4.785-10.667-10.667 0-5.881 4.785-10.666 10.667-10.666s10.667 4.785 10.667 10.666c0 5.882-4.785 10.667-10.667 10.667z" />
              <path d="M48.628 33.177a1.569 1.569 0 100 3.137 3.926 3.926 0 013.921 3.921 1.569 1.569 0 103.137 0 7.066 7.066 0 00-7.058-7.058zM9.67 11.907a1.57 1.57 0 00-2.786 1.442l4.222 8.157c.273.528.826.85 1.417.847a1.57 1.57 0 001.39-.89l2.556-5.322 2.777 5.365c.27.52.807.847 1.393.847h.023a1.57 1.57 0 001.391-.89l3.918-8.157a1.569 1.569 0 00-2.828-1.357l-2.557 5.322-2.777-5.365a1.57 1.57 0 00-2.807.042l-2.555 5.323-2.777-5.365zm10.093-8.691a1.58 1.58 0 001.109-.46c.292-.292.46-.697.46-1.109 0-.412-.168-.817-.46-1.109a1.58 1.58 0 00-1.11-.46 1.58 1.58 0 00-1.108.46 1.58 1.58 0 00-.46 1.11c0 .411.168.816.46 1.108.292.292.696.46 1.109.46z" />
              <path d="M80.314 27.059V6.353A6.282 6.282 0 0074.039.078H26.351a1.569 1.569 0 000 3.138H74.04a3.14 3.14 0 013.137 3.137v20.706a3.14 3.14 0 01-3.137 3.137h-7.53c-.045 0-.089.003-.133.007a20.501 20.501 0 00-11.026-9.22l2.325-4.841 2.777 5.364c.27.521.807.847 1.393.847h.024a1.57 1.57 0 001.39-.89l3.917-8.157a1.568 1.568 0 10-2.827-1.357l-2.556 5.322-2.777-5.365a1.567 1.567 0 00-2.807.042l-2.556 5.323-2.777-5.365a1.57 1.57 0 00-2.787 1.443l3.472 6.706a20.348 20.348 0 00-8.498.56l3.511-7.309a1.568 1.568 0 10-2.828-1.357L41.19 17.27l-2.777-5.365a1.568 1.568 0 00-2.807.042l-2.556 5.323-2.777-5.365a1.569 1.569 0 00-2.786 1.443l4.223 8.157a1.57 1.57 0 002.807-.042l2.556-5.322 2.776 5.364c.047.09.104.171.166.249a20.529 20.529 0 00-9.13 8.441H6.274a3.14 3.14 0 01-3.138-3.137V6.353a3.14 3.14 0 013.138-3.137h6.43a1.569 1.569 0 100-3.138h-6.43A6.282 6.282 0 000 6.353v20.706a6.282 6.282 0 006.275 6.274h23.164a20.296 20.296 0 00-1.203 6.902c0 11.245 9.148 20.392 20.392 20.392 3.695 0 7.164-.987 10.156-2.713l12.45 12.45a5.302 5.302 0 003.76 1.555 5.302 5.302 0 003.762-1.555 5.325 5.325 0 000-7.523l-4.892-4.891a1.569 1.569 0 00-2.218 2.218l4.891 4.892c.85.85.85 2.235 0 3.086-.85.85-2.234.85-3.085 0L61.415 56.108c4.635-3.741 7.605-9.466 7.605-15.873 0-2.421-.425-4.745-1.203-6.902h6.222a6.282 6.282 0 006.275-6.274zM48.628 57.49c-9.514 0-17.255-7.74-17.255-17.255 0-9.514 7.741-17.255 17.255-17.255s17.255 7.741 17.255 17.255-7.74 17.255-17.255 17.255z" />
              <path d="M67.925 54.23a1.58 1.58 0 00-.46 1.108c0 .413.168.817.46 1.11.293.291.696.459 1.109.459.412 0 .817-.168 1.109-.46.293-.292.46-.696.46-1.109a1.572 1.572 0 00-1.57-1.568c-.412 0-.817.167-1.108.46z" />
            </svg>
          </Feature>
          {/* Boost YOur Exposure */}
          <Feature
            isFeaturePage="true"
            title="Boost Your Exposure"
            text="Users that viewed your story or gallery can easily get notifed of new and featured 
  stories with our built in mailing list."
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72">
              <path d="M64.5 27h-15a1.5 1.5 0 000 3h15c2.481 0 4.5 2.019 4.5 4.5v30c0 2.481-2.019 4.5-4.5 4.5h-30a4.505 4.505 0 01-4.5-4.5v-12a1.5 1.5 0 00-3 0v12c0 4.134 3.366 7.5 7.5 7.5h30c4.134 0 7.5-3.366 7.5-7.5v-30c0-4.134-3.366-7.5-7.5-7.5zm-42 15H21a1.5 1.5 0 000 3h1.5a1.5 1.5 0 000-3zM8.823 0H7.5a7.54 7.54 0 00-2.106.3 1.505 1.505 0 00-1.02 1.863A1.502 1.502 0 006.237 3.18C6.645 3.06 7.068 3 7.5 3h1.323a1.499 1.499 0 100-3zM3 36.171v-3.033a1.5 1.5 0 00-3 0v3.033a1.5 1.5 0 003 0zm-1.5-7.599a1.5 1.5 0 001.5-1.5v-3.033a1.5 1.5 0 00-3 0v3.033a1.5 1.5 0 001.5 1.5zm0-18.195a1.5 1.5 0 001.5-1.5V7.5c0-.417.057-.828.168-1.224a1.498 1.498 0 00-1.035-1.851A1.49 1.49 0 00.283 5.46 7.557 7.557 0 000 7.5v1.377a1.5 1.5 0 001.5 1.5zm0 9.099a1.5 1.5 0 001.5-1.5v-3.033a1.5 1.5 0 00-3 0v3.033a1.5 1.5 0 001.5 1.5zm4.77 22.353a4.515 4.515 0 01-1.938-1.137 1.501 1.501 0 00-2.121.006 1.498 1.498 0 00.006 2.121 7.49 7.49 0 003.234 1.896 1.498 1.498 0 001.851-1.032A1.498 1.498 0 006.27 41.83zM43.257 7.308c.138 0 .279-.018.42-.063a1.5 1.5 0 001.02-1.86 7.506 7.506 0 00-1.923-3.22 1.498 1.498 0 00-2.121.013 1.501 1.501 0 00.012 2.12c.54.54.942 1.207 1.152 1.93.192.654.789 1.08 1.44 1.08zM36.117 0h-3.033a1.5 1.5 0 000 3h3.033a1.5 1.5 0 000-3zm-21.18 42h-3.033a1.5 1.5 0 000 3h3.033a1.5 1.5 0 000-3zM43.5 10.35a1.5 1.5 0 00-1.5 1.5v3.033a1.5 1.5 0 003 0V11.85c0-.831-.672-1.5-1.5-1.5zM27.021 0h-3.033a1.5 1.5 0 000 3h3.03a1.501 1.501 0 10.003-3zm-9.099 0h-3.033a1.5 1.5 0 000 3h3.033a1.5 1.5 0 000-3zM43.5 19.5A1.5 1.5 0 0042 21v1.5a1.5 1.5 0 003 0V21a1.5 1.5 0 00-1.5-1.5z" />
              <path d="M49.212 26.088l-4.65-4.65a4.69 4.69 0 00-6.621 0 4.66 4.66 0 00-1.15 1.887c-1.634-.57-3.59-.147-4.85 1.113a4.662 4.662 0 00-1.284 2.424 4.723 4.723 0 00-3.966 1.326 4.672 4.672 0 00-1.36 3.636 4.658 4.658 0 00-2.675 1.329 4.652 4.652 0 00-1.371 3.312c0 1.251.486 2.43 1.37 3.312L24 41.121V46.5c0 4.134 3.366 7.5 7.5 7.5h6.15C46.665 54 54 46.665 54 37.65c0-4.365-1.701-8.472-4.788-11.562zM37.65 51H31.5a4.505 4.505 0 01-4.5-4.5v-2.379l3.441 3.441a1.501 1.501 0 002.121 0 1.507 1.507 0 000-2.124l-7.785-7.785a1.665 1.665 0 01-.492-1.188c0-.447.174-.87.492-1.188.636-.636 1.743-.636 2.379 0l3.285 3.285a1.501 1.501 0 002.121 0 1.507 1.507 0 000-2.121l-3.75-3.75a1.682 1.682 0 010-2.379c.636-.636 1.743-.636 2.379 0l2.25 2.25a1.501 1.501 0 002.121 0 1.507 1.507 0 000-2.121l-1.5-1.5a1.682 1.682 0 010-2.379c.636-.636 1.743-.636 2.379 0l1.5 1.5a1.501 1.501 0 002.121 0 1.507 1.507 0 00-.003-2.124 1.66 1.66 0 01-.492-1.188c0-.45.177-.873.495-1.188a1.682 1.682 0 012.379 0l4.65 4.65A13.264 13.264 0 0151 37.65C51 45.012 45.012 51 37.65 51z" />
            </svg>
          </Feature>
          {/* Drag & Drop Image */}
          <Feature
            isFeaturePage="true"
            title="Drag & Drop Image"
            text="Easily drag and drop your image and get beautiful shots everytime. No over the top 
  tooling to add friction to creating stories."
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="91" height="72">
              <path d="M45.176 57.627a7.122 7.122 0 00-7.114 7.114 7.122 7.122 0 007.114 7.114 7.122 7.122 0 007.115-7.114 7.122 7.122 0 00-7.115-7.114zm0 10.671a3.561 3.561 0 01-3.557-3.557 3.561 3.561 0 013.557-3.557 3.561 3.561 0 013.558 3.557 3.561 3.561 0 01-3.558 3.557zm-24.9-9.604a6.054 6.054 0 00-6.047 6.047 6.054 6.054 0 006.047 6.047 6.054 6.054 0 006.047-6.047 6.054 6.054 0 00-6.047-6.047zm0 8.537a2.493 2.493 0 01-2.49-2.49 2.493 2.493 0 012.49-2.49 2.493 2.493 0 012.49 2.49 2.493 2.493 0 01-2.49 2.49zm49.8-8.537a6.054 6.054 0 00-6.046 6.047 6.054 6.054 0 006.047 6.047 6.054 6.054 0 006.047-6.047 6.054 6.054 0 00-6.047-6.047zm0 8.537a2.493 2.493 0 01-2.49-2.49 2.493 2.493 0 012.49-2.49 2.493 2.493 0 012.49 2.49 2.493 2.493 0 01-2.49 2.49zm-10.67-40.908c5.295 0 9.604-4.308 9.604-9.604 0-5.296-4.309-9.605-9.605-9.605s-9.604 4.309-9.604 9.605 4.308 9.604 9.604 9.604zm0-15.651a6.054 6.054 0 016.047 6.047 6.054 6.054 0 01-6.048 6.047 6.054 6.054 0 01-6.047-6.047 6.054 6.054 0 016.047-6.047zM88.573 25.09c.98 0 1.779.798 1.779 1.778s-.799 1.779-1.779 1.779c-.98 0-1.778-.799-1.778-1.779 0-.98.798-1.778 1.778-1.778zM1.78 28.648A1.78 1.78 0 010 26.869c0-.98.799-1.778 1.779-1.778.98 0 1.778.798 1.778 1.778a1.78 1.78 0 01-1.778 1.779zM85.017 5.272h-8.893V1.78C76.124.796 75.328 0 74.346 0H16.007c-.982 0-1.778.796-1.778 1.779v3.557H5.336A5.336 5.336 0 000 10.672v8.132c0 .946.711 1.774 1.655 1.838a1.781 1.781 0 001.902-1.774v-8.196c.002-.979.8-1.777 1.779-1.779h8.893v36.64H5.336a1.786 1.786 0 01-1.779-1.78v-8.88c0-1.02-.866-1.845-1.902-1.774C.711 33.163 0 33.99 0 34.937v8.817a5.336 5.336 0 005.336 5.335h8.893v3.558c0 .982.796 1.778 1.778 1.778h58.339c.982 0 1.778-.796 1.778-1.778v-3.621h8.893a5.336 5.336 0 005.336-5.336v-8.817c0-.946-.711-1.774-1.655-1.838a1.781 1.781 0 00-1.902 1.774v8.88a1.786 1.786 0 01-1.779 1.78h-8.893V8.829h8.893c.978.002 1.777.8 1.779 1.779v8.196c0 1.02.866 1.845 1.902 1.774.944-.064 1.655-.892 1.655-1.838v-8.132a5.336 5.336 0 00-5.336-5.336zm-12.45-1.715v46.63L48.87 28.037c-3.02-2.823-7.75-2.823-10.769 0l-5.318 4.971L19.78 16.754a4.816 4.816 0 00-1.994-1.475V3.557h54.78zM17.786 19.955l17.715 22.144c1.48 1.85 4.258-.372 2.778-2.223l-3.266-4.082 5.518-5.159a4.34 4.34 0 015.911 0l21.644 20.233h-50.3V19.955z" />
            </svg>
          </Feature>
        </main>
        {/* move to feature page */}
        {/* move to pricing page */}
        <article
          id="toggle-btn-cards-selector"
          data-monthoryear="month"
          className={styles[`toggle-cards-container`]}
        >
          {/* toggle button component */}
          <ToggleButton />
          {/* card container */}
          {/* month */}

          <div className={styles[`cards-container`]}>
            {/* basic */}
            {/* <FeatureCard
              planTitle="Basic"
              description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
              price="$19.00"
              monthOrYear="month"
            /> */}
            {/* pro */}
            {/* <FeatureCard
              planTitle="Pro"
              description="More advanced features available. Recommended for photography veterans and professionals."
              price="$39.00"
              monthOrYear="month"
            /> */}
            {/* business */}
            {/* <FeatureCard
              planTitle="Business"
              description="Additional features available such as more detailed metrics. Recommended for business owners."
              price="$99.00"
              monthOrYear="month"
            /> */}
          </div>

          {/* year */}
          <div className={styles[`cards-container`]}>
            {/* basic */}
            {/* <FeatureCard
              planTitle="Basic"
              description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
              price="$190.00"
              monthOrYear="year"
            /> */}
            {/* pro */}
            {/* <FeatureCard
              planTitle="Pro"
              description="More advanced features available. Recommended for photography veterans and professionals."
              price="$390.00"
              monthOrYear="year"
            /> */}
            {/* business */}
            {/* <FeatureCard
              planTitle="Business"
              description="Additional features available such as more detailed metrics. Recommended for business owners."
              price="$990.00"
              monthOrYear="year"
            /> */}
          </div>
        </article>
        {/* move to pricing page */}
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

function ToggleButton({ children }) {
  return (
    <div className={styles[`text-toggle-btn-container`]}>
      <span>Monthly</span>
      <button onClick={switchPricing}>
        {/* use pseudo element for toggle button */}
        <span className={styles[`toggle-btn-circle`]}></span>
      </button>
      <span>Yearly</span>
    </div>
  );
}

function switchPricing(event) {
  const clickedBtn = event.target.closest("BUTTON");
  console.log(clickedBtn, "clickedBtn");
  // select article element with id toggle-btn-cards-selector
  const articleElement = document.getElementById("toggle-btn-cards-selector");
  const articleElementAttrValue =
    articleElement.getAttribute("data-monthoryear");
  // if attr of data-monthoryear is "month" change to "year"
  if (articleElementAttrValue == "month") {
    articleElement.setAttribute("data-monthoryear", "year");
    return;
  }
  // if attr of data-monthoryear is "year" change to "month"
  if (articleElementAttrValue == "year") {
    articleElement.setAttribute("data-monthoryear", "month");
    return;
  }
}
