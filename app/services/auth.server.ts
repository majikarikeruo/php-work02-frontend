import type { User } from "@prisma/client";
import { Authenticator } from "remix-auth";
import {
  GitHubStrategy,
  GoogleStrategy,
  FacebookStrategy,
  SocialsProvider,
} from "remix-auth-socials";
import { db } from "../db.server";
import { sessionStorage } from "./session.server";

export let authenticator = new Authenticator<User>(sessionStorage, {
  throwOnError: true,
});

const getCallback = (provider: SocialsProvider) => {
  console.log(`${process.env.APP_URL}/auth/${provider}/callback`);
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

authenticator.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: getCallback(SocialsProvider.GOOGLE),
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

authenticator.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: getCallback(SocialsProvider.FACEBOOK),
      scope: ["email"],
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
