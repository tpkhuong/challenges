import styles from "../styles/Page.module.css";
import MarketingPoint from "../app/components/client/MarketingPoint/index";
import React from "react";

export default function Page() {
  return (
    <React.Fragment>
      <h1 className={styles[`title`]}>Hello World</h1>
      <MarketingPoint
        desktop="/home/desktop/create-and-share.jpg"
        tablet="/home/tablet/create-and-share.jpg"
        mobile="/home/mobile/create-and-share.jpg"
        theme="dark"
      />
      <MarketingPoint
        desktop="/home/desktop/beautiful-stories.jpg"
        tablet="/home/tablet/beautiful-stories.jpg"
        mobile="/home/mobile/beautiful-stories.jpg"
        theme="light"
      />
      <MarketingPoint
        desktop="/home/desktop/designed-for-everyone.jpg"
        tablet="/home/tablet/designed-for-everyone.jpg"
        mobile="/home/mobile/designed-for-everyone.jpg"
        theme="light"
      />
    </React.Fragment>
  );
}
