# Code Yor Future
---

[![CircleCI](https://circleci.com/gh/apmaros/code-your-future-web/tree/master.svg?style=svg&circle-token=b43e2591c0bb4c09883aa92396ed557616245dd0)](https://circleci.com/gh/apmaros/code-your-future-web/tree/master)

## Requirements

- node

## Setup

- npm install
- gulp rebuild # to build index to ./build folder
- gulp watch # automatically rebuild when source is modified

## Present

To present merge your changes to `demo` branch. CI build deploy it to S3 on URL:
- [demo-codeyourfuture.s3-website-us-west-2.amazonaws.com](http://demo-codeyourfuture.s3-website-us-west-2.amazonaws.com)

Currently, there is only one release candidate branch `staging` accessible on:
- [staging-codeyourfuture.s3-website-us-west-2.amazonaws.com](http://staging-codeyourfuture.s3-website-us-west-2.amazonaws.com)

## Contribute

Development workflow is tracked on [CYF Web](https://trello.com/b/wLDcxrly/cyf-web) Trello board. There are lists with tasks and their states, e.g. `Todo`, `In Progress`, `In Review` and `Done`

If you found an error, got idea for improvement, or new feature you can submit a new ticket to `Ideas`.

To get access to Trello, email to either `apmaros[at]gmail.com`, or `contact[at]codeyourfuture.co`, or let us know on Slack and we will add you to the project.

To contribute please follow instructions: 

1. select a task from `Todo` list, assign your name and move the task to `In Progress` list.
- create a new branch and apply your changes
- (optional) to discuss your changes, you can merge your branch to `demo` branch and see your changes [demo environment](demo-codeyourfuture.s3-website-us-west-2.amazonaws.com)
- when you are finished, merge your branch to `staging` branch
- Then, submit a PR from `staging` to `master` for review and move the task to `In Review` list (currently, we have only one review environment, so if you see another PR make sure its safe to merge to `staging`)
- the code is approved by adding _LGTM_ to comment
- after the PR is approved the reviewer, or contributor merges PR
- when the PR is merged to master, automatic build on CircleCI deploys the website 
- briefly look on the web to see your changes are fine; [http://codeyourfuture.co/](http://codeyourfuture.co/)
- move task fro in `Review` to `Done`

Thank you.
