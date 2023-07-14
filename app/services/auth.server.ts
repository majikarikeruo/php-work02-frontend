import type { User } from "@prisma/client";
import { Authenticator } from "remix-auth";
import { GitHubStrategy, SocialsProvider } from "remix-auth-socials";
import { db } from "../db.server";
import { sessionStorage } from "./session.server";

export let authenticator = new Authenticator<User>(sessionStorage, {
  throwOnError: true,
});

const getCallback = (provider: SocialsProvider) => {
  return `${process.env.APP_URL}/auth/${provider}/callback`;
};

authenticator.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      callbackURL: getCallback(SocialsProvider.GITHUB),
    },
    async ({ profile }) => {
      let user = await db.user.findUnique({
        where: {
          email: profile.emails[0].value,
        },
      });

      if (!user) {
        user = await db.user.create({
          data: {
            email: profile.emails[0].value,
            name: profile._json.login,
          },
        });

        if (!user) throw new Error("Unable to create the user");
      }

      return user;
    }
  )
);
