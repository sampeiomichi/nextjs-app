import {client} from "../../lib/client";
import {withSession} from "../../lib/withSession";

async function handler(req, res) {
  const {token} = req.query;

  try {
    const response = await client.magicLinks.authenticate (token);
    req.session.destroy();
    req.session.set('user', {
        user_id: response.user_id,
    });
    await req.session.save();
    return res.redirect('/');

  } catch (e) {
    const errorString = JSON.stringify(e);
    return res.status(400).send(errorString);
  }
}

export default withSession(handler);