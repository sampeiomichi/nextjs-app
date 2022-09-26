import { client } from "../../lib/client";

export default async function handler(req, res) {
  const response = await client.magicLinks.email.loginOrCreate({
    email: req.body.email,
    login_magic_link_url: 'https://nextjs-app-nine-tau.vercel.app/api/authenticate',
    signup_magic_link_url: 'https://nextjs-app-nine-tau.vercel.app/api/authenticate',
  });

  console.log(response);
  res.json(response);
}
  