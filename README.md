# Code Yor Future
---

[![CircleCI](https://circleci.com/gh/apmaros/code-your-future-web/tree/master.svg?style=svg&circle-token=b43e2591c0bb4c09883aa92396ed557616245dd0)](https://circleci.com/gh/apmaros/code-your-future-web/tree/master)

## Requirements

- node

## Install

- npm install
- gulp rebuild # to build index to ./build folder
- gulp watch # automatically rebuild when source is modified

## Present

To present merge your changes to `demo` branch. CI build deploy it to S3 on URL:
- [demo-codeyourfuture.s3-website-us-west-2.amazonaws.com](demo-codeyourfuture.s3-website-us-west-2.amazonaws.com)

Currently, there is only one release candidate branch `staging` accessible on:
- [staging-codeyourfuture.s3-website-us-west-2.amazonaws.com](demo-codeyourfuture.s3-website-us-west-2.amazonaws.com)

## Contribute

To contribute please follow instructions: 

1. let us know what you are working on to prevent unecessary conflicts and duplication (TRELLO?)
- create a new branch and submit PR for review
- the code is approved by adding _LGTM_ to comment
- after the PR is approved the reviewer, or contributor merges PR
- (to-implement) after merge the site will be automatically deployed

http://codeyourfuture.s3-website-us-west-2.amazonaws.com/