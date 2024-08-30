require("dotenv").config();
const express = require("express");

const app = express();

const port = 4000;

const githubData = {
  login: "SayanBiswas23",
  id: 70705432,
  node_id: "MDQ6VXNlcjcwNzA1NDMy",
  avatar_url: "https://avatars.githubusercontent.com/u/70705432?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/SayanBiswas23",
  html_url: "https://github.com/SayanBiswas23",
  followers_url: "https://api.github.com/users/SayanBiswas23/followers",
  following_url:
    "https://api.github.com/users/SayanBiswas23/following{/other_user}",
  gists_url: "https://api.github.com/users/SayanBiswas23/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/SayanBiswas23/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/SayanBiswas23/subscriptions",
  organizations_url: "https://api.github.com/users/SayanBiswas23/orgs",
  repos_url: "https://api.github.com/users/SayanBiswas23/repos",
  events_url: "https://api.github.com/users/SayanBiswas23/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/SayanBiswas23/received_events",
  type: "User",
  site_admin: false,
  name: "Sayan Biswas",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 3,
  public_gists: 0,
  followers: 1,
  following: 7,
  created_at: "2020-09-03T13:31:42Z",
  updated_at: "2024-08-30T07:04:25Z",
};

app.get("/", (req, res) => {
  res.send("hello World");
});

app.get("/github", (req, res) => {
  res.json(githubData.name);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app is listening to port ${port}`);
});
