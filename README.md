# News website

This application consume the news api (https://newsapi.org/docs/endpoints/everything).

## Deployment

Deployed url: <a href="http://news-workit.s3-website.eu-west-2.amazonaws.com/">http://news-workit.s3-website.eu-west-2.amazonaws.com/</a>

The application has a CI that build the app and deploy it to AWS (S3 + cloudfront)

## Getting started

Start with creating `.env` file, copy the .env.sample and rename it to .env and change the values inside.

### Install packages

`npm install`

### Run the application

`npm run start`

### Run tests

`npm run test`

### Test coverage

`npm run coverage`

### Run storybook

`npm run storybook`

### Prod build

`npm run build`
