import React from "react";
import styles from "./FeatureCompare.module.css";

export default function FeatureCompare({ children }) {
  return (
    <section className={styles[`title-feature-compare-container`]}>
      {/* tablet and desktop */}
      <h2 className={styles[`title`]}>COMPARE</h2>
      {/* features compare */}
      <ul role="menubar" className={styles[`features-compare`]}>
        {/* tablet and desktop */}
        <li>
          {/* feature */}
          <span>THE FEATURES</span>
          {/* plan/feature checked */}
          {/* mobile */}
          {/* tablet and desktop */}
          <div className={styles[`tablet-desktop-checked-features`]}>
            <span className={styles[`plan-title`]}>BASIC</span>
            <span className={styles[`plan-title`]}>PRO</span>
            <span className={styles[`plan-title`]}>BUSINESS</span>
          </div>
        </li>
        <li>
          {/* feature */}
          <span>UNLIMITED STORY POSTING</span>
          {/* plan/feature checked */}
          {/* mobile */}
          <div className={styles[`mobile-checked-features`]}>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>BASIC</span>
              {/* svg */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>PRO</span>
              {/* svg */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>BUSINESS</span>
              {/* svg */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
          </div>
          {/* tablet and desktop */}
          <div className={styles[`tablet-desktop-checked-features`]}>
            {/* svg */}
            <span className={styles[`svg-container`]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
            {/* svg */}
            <span className={styles[`svg-container`]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
            {/* svg */}
            <span className={styles[`svg-container`]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
          </div>
        </li>
        <li>
          {/* feature */}
          <span>UNLIMITED PHOTO UPLOAD</span>
          {/* plan/feature checked */}
          {/* mobile */}
          <div className={styles[`mobile-checked-features`]}>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>BASIC</span>
              {/* svg */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>PRO</span>
              {/* svg */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>BUSINESS</span>
              {/* svg */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
          </div>
          {/* tablet and desktop */}
          <div className={styles[`tablet-desktop-checked-features`]}>
            {/* svg */}
            <span className={styles[`svg-container`]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
            {/* svg */}
            <span className={styles[`svg-container`]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
            {/* svg */}
            <span className={styles[`svg-container`]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
          </div>
        </li>
        <li>
          {/* feature */}
          <span>EMBEDDING CUSTOM CONTENT</span>
          {/* plan/feature checked */}
          {/* mobile */}
          <div className={styles[`mobile-checked-features`]}>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>BASIC</span>
              {/* svg */}
            </span>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>PRO</span>
              {/* svg */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>BUSINESS</span>
              {/* svg */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
          </div>
          {/* tablet and desktop */}
          <div className={styles[`tablet-desktop-checked-features`]}>
            {/* svg */}
            <span className={styles[`svg-container`]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
            {/* svg */}
            <span className={styles[`svg-container`]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
            {/* svg */}
          </div>
        </li>
        <li>
          {/* feature */}
          <span>CUSTOMIZE METADATA</span>
          {/* plan/feature checked */}
          {/* mobile */}
          <div className={styles[`mobile-checked-features`]}>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>BASIC</span>
              {/* svg */}
            </span>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>PRO</span>
              {/* svg */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>BUSINESS</span>
              {/* svg */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
          </div>
          {/* tablet and desktop */}
          <div className={styles[`tablet-desktop-checked-features`]}>
            {/* svg */}
            <span className={styles[`svg-container`]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
            {/* svg */}
            <span className={styles[`svg-container`]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
            {/* svg */}
          </div>
        </li>
        <li>
          {/* feature */}
          <span>ADVANCED METRICS</span>
          {/* plan/feature checked */}
          {/* mobile */}
          <div className={styles[`mobile-checked-features`]}>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>BASIC</span>
              {/* svg */}
            </span>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>PRO</span>
              {/* svg */}
            </span>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>BUSINESS</span>
              {/* svg */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
          </div>
          {/* tablet and desktop */}
          <div className={styles[`tablet-desktop-checked-features`]}>
            {/* svg */}
            <span className={styles[`svg-container`]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
            {/* svg */}
            {/* svg */}
          </div>
        </li>
        <li>
          {/* feature */}
          <span>PHOTO DOWNLOADS</span>
          {/* plan/feature checked */}
          {/* mobile */}
          <div className={styles[`mobile-checked-features`]}>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>BASIC</span>
              {/* svg */}
            </span>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>PRO</span>
              {/* svg */}
            </span>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>BUSINESS</span>
              {/* svg */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
          </div>
          {/* tablet and desktop */}
          <div className={styles[`tablet-desktop-checked-features`]}>
            {/* svg */}
            <span className={styles[`svg-container`]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
            {/* svg */}
            {/* svg */}
          </div>
        </li>
        <li>
          {/* feature */}
          <span>SEARCH ENGINE INDEXING</span>
          {/* plan/feature checked */}
          {/* mobile */}
          <div className={styles[`mobile-checked-features`]}>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>BASIC</span>
              {/* svg */}
            </span>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>PRO</span>
              {/* svg */}
            </span>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>BUSINESS</span>
              {/* svg */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
          </div>
          {/* tablet and desktop */}
          <div className={styles[`tablet-desktop-checked-features`]}>
            {/* svg */}
            <span className={styles[`svg-container`]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
            {/* svg */}
            {/* svg */}
          </div>
        </li>
        <li>
          {/* feature */}
          <span>CUSTOM ANALYTICS</span>
          {/* plan/feature checked */}
          {/* mobile */}
          <div className={styles[`mobile-checked-features`]}>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>BASIC</span>
              {/* svg */}
            </span>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>PRO</span>
              {/* svg */}
            </span>
            <span className={styles[`title-checked-img-container`]}>
              <span className={styles[`mobile-plan-title`]}>BUSINESS</span>
              {/* svg */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
          </div>
          {/* tablet and desktop */}
          <div className={styles[`tablet-desktop-checked-features`]}>
            {/* svg */}
            <span className={styles[`svg-container`]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M1 8.124L5.623 13 17 1"
                />
              </svg>
            </span>
            {/* svg */}
            {/* svg */}
          </div>
        </li>
      </ul>
    </section>
  );
}
