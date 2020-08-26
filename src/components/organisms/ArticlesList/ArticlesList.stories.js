import React from "react"
import ArticlesList from "./ArticlesList"

export const Default = () => (
  <ArticlesList
    articles={[
      {
        source: {},
        author: "Nicole Lee",
        title: "Tampa teenager arrested for Twitter Bitcoin hack",
        description:
          "Authorities in Tampa, Florida have arrested a 17-year-old for being the alleged “mastermind” behind the Twitter Bitcoin hack that targeted several high-profile accounts on July 15th, 2020. His name has not been revealed due to his underage status. According t…",
        url:
          "https://www.engadget.com/teenager-arrested-twitter-bitcoin-hack-183302700.html",
        urlToImage:
          "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-images%2F2020-07%2F80319ad0-c77f-11ea-adfe-d560f6400e1e&client=amp-blogside-v2&signature=3ae5e1a0ea67905f52a03c1a851c07fc1c61bdbb",
        publishedAt: "2020-07-31T18:33:02Z",
        content:
          "Authorities in Tampa, Florida have arrested a 17-year-old for being the alleged “mastermind” behind the Twitter Bitcoin hack that targeted several high-profile accounts on July 15th, 2020. His name h… [+463 chars]",
      },
      {
        source: {
          id: "techcrunch",
          name: "TechCrunch",
        },
        author: "Jonathan Shieber",
        title: "Casa pivots to provide self-custody services to secure bitcoin",
        description:
          "Casa, a Colorado-based provider of bitcoin security services, is launching a managed service allowing customers to buy and hold their own bitcoin, rather than using an external custodian like Coinbase. “With self-custody using Casa it’s impossible to be hacke…",
        url:
          "http://techcrunch.com/2020/08/06/casa-pivots-to-provide-self-custody-services-to-secure-bitcoin/",
        urlToImage:
          "https://techcrunch.com/wp-content/uploads/2019/06/GettyImages-1050523528.jpg?w=600",
        publishedAt: "2020-08-06T18:25:29Z",
        content:
          "Casa, a Colorado-based provider of bitcoin security services, is launching a managed service allowing customers to buy and hold their own bitcoin, rather than using an external custodian like Coinbas… [+1571 chars]",
      },
      {
        source: {
          id: "wired",
          name: "Wired",
        },
        author: "Brian Barrett",
        title: "How the Alleged Twitter Hackers Got Caught",
        description:
          "Bitcoin payments and IP addresses led investigators to two of the alleged perpetrators in just over two weeks.",
        url:
          "https://www.wired.com/story/how-alleged-twitter-hackers-got-caught-bitcoin/",
        urlToImage:
          "https://media.wired.com/photos/5f246ee3888ca6bc8f78ae9d/191:100/w_1280,c_limit/Sec_twitter_1227655812.jpg",
        publishedAt: "2020-08-01T00:12:01Z",
        content:
          "On July 15, a Discord user with the handle Kirk#5270 made an enticing proposition. I work for Twitter, they said, according to court documents released Friday. I can claim any name, let me know if yo… [+3660 chars]",
      },
    ]}
  />
)

export default {
  title: "Components/Organisms/ArticlesList",
  component: ArticlesList,
}
