import React from "react"
import { render } from "@testing-library/react"
import ArticlePreview from "./ArticlePreview"

describe("Article Preview", () => {
  it("should match snapshot", () => {
    const { wrapper } = render(
      <ArticlePreview
        article={{
          title: "Title of article",
          url: "path/to/article",
          urlToImage:
            "https://lh3.googleusercontent.com/w5zAdJ2zDj8ActvZEVESIqL0pevo1s4B7uzLhjn8bc9LRqPo5QM78OzLyCqjcDNYa6w",
          description:
            "The various threat intelligence stories in this iteration of the Weekly Threat Briefing discuss the following topics: APT, Backdoor, GoldenSpy, Phishing, Ransomware, and Vulnerabilities. The IOCs related to these stories are attached to the Weekly Threat Brie…",
          publishedAt: "2020-08-25T14:30:00Z",
          source: {
            name: "Source of news",
          },
        }}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
