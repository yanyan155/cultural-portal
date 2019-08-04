import React from "react";
import i18next from "i18next";

import AuthorOfTheDayComponent from "../AuthorOfTheDayComponent/AuthorOfTheDayComponent";
import MemberOfTheTeamComponent from "../MemberOfTheTeamComponent/MemberOfTheTeamComponent";
import "./PortalDescriptionComponent.css";

const PortalDescriptionComponent = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8">
          <p
            dangerouslySetInnerHTML={{
              __html: i18next.t("Main-content-1", {
                interpolation: { escapeValue: false }
              })
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: i18next.t("Main-content-2", {
                interpolation: { escapeValue: false }
              })
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: i18next.t("Main-content-3", {
                interpolation: { escapeValue: false }
              })
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: i18next.t("Main-content-4", {
                interpolation: { escapeValue: false }
              })
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: i18next.t("Main-content-5", {
                interpolation: { escapeValue: false }
              })
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: i18next.t("Main-content-6", {
                interpolation: { escapeValue: false }
              })
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: i18next.t("Main-content-7", {
                interpolation: { escapeValue: false }
              })
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: i18next.t("Main-content-8", {
                interpolation: { escapeValue: false }
              })
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: i18next.t("Main-content-9", {
                interpolation: { escapeValue: false }
              })
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: i18next.t("Main-content-10", {
                interpolation: { escapeValue: false }
              })
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: i18next.t("Main-content-11", {
                interpolation: { escapeValue: false }
              })
            }}
          />
        </div>
        <div className="col-12 col-lg-4">
          <AuthorOfTheDayComponent />
          <MemberOfTheTeamComponent />
        </div>
      </div>
    </div>
  );
};

export default PortalDescriptionComponent;
