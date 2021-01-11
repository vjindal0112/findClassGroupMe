import React from "react";
import { Helmet } from "react-helmet";

export default function Helm({title, description}) {
  return (
    <>
      <Helmet
        title={title ? `${title} | FindMyClassGroup.Me` : "FindMyClassGroup.Me"}
        meta={[
          {
            name: "description",
            content:
              description ? description : "Find the GroupMe for your class at UMich. Having people to reach out to makes things easier.",
          },
          {
            name: "og:title", 
            content: title ? `${title} | FindMyClassGroup.Me` : "FindMyClassGroup.Me",
          },
          {
            name: "og:description",
            content:
            description ? description : "Find the GroupMe for your class at UMich. Having people to reach out to makes things easier.",
          },
          { name: "og:url", content: "https://findmyclassgroup.me" },
          {
            name: "og:image",
            content: "https://findmyclassgroup.me/SocialSharing.png",
          },
          {
            name: "twitter:url",
            content: "https://findmyclassgroup.me",
          },
          {
            name: "twitter:title",
            content: title ? `${title} | FindMyClassGroup.Me` : "FindMyClassGroup.Me",
          },
          {
            name: "twitter:description",
            content: "Find the GroupMe for your class at UMich",
          },
          {
            name: "twitter:image",
            content: "https://findmyclassgroup.me/SocialSharing.png",
          },
        ]}
      >
        <link rel="canonical" href="https://findmyclassgroup.me" />
      </Helmet>
    </>
  );
}
