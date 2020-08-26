import React from "react"
import ArticlePreview from "./ArticlePreview"

export const Default = () => (
  <ArticlePreview
    article={{
      title: "Title of article",
      urlToImage:
        "https://lh3.googleusercontent.com/w5zAdJ2zDj8ActvZEVESIqL0pevo1s4B7uzLhjn8bc9LRqPo5QM78OzLyCqjcDNYa6w",
      description:
        "The various threat intelligence stories in this iteration of the Weekly Threat Briefing discuss the following topics: APT, Backdoor, GoldenSpy, Phishing, Ransomware, and Vulnerabilities. The IOCs related to these stories are attached to the Weekly Threat Brie…",
      publishedAt: "2020-08-25T14:30:00Z",
    }}
  />
)

export default {
  title: "Components/Molecules/ArticlePreview",
  component: ArticlePreview,
}
