import { ghpages } from "gh-pages";

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/LLxD/codeswap-front.git", // Update to point to your repository
    user: {
      name: "LL", // update to use your name
      email: "limalucas454@gmail.com", // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
