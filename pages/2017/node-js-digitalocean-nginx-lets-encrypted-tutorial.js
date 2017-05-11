import { thoughts } from '../../data';
import Blog from '../../components/blog/Blog';

export default ({ url }) => {
  const thought = thoughts.find(w => w.page === '/2017/node-js-digitalocean-nginx-lets-encrypt-tutorial');
  return (
    <Blog url={url} thought={thought} subHeader="Thoughts">
      <p>What the fuck.</p>
      <p>Why the fuck it took me so long to do my first fucking Node.js app deployment. Why the fuck i had to open 20 tabs to learn why the fuck it crashed and still had to delete my droplet and start it all over again.</p>
      <p>It just took too much fucking time especially when your fucking site is not just some fucking hobby but a prototype of your fucking day dream (soon-to-be-in-bubble Thai) startup bullshit.</p>
      <p>Yeah it may be because i'm dumb as fuck. But you know what, If you wasn't that desperated. You wouldn't have ended up here in this dump as fuck blog in the first place.</p>
      <p>Fuck you and fuck everything. My site is fucking online now and I'm gonna tell you how the fuck i did it IN THIS ONE FUCKING PAGE. If you open other tutorials on other tabs, close it motherfucker. Fucking open only this fucking one and read it to the end. You will get motherfucking Node.js + Nginx + Let's Encrypt on great motherfucking DigitalOcean.</p>
      <p>First, Im gonna calm the fuck down cause there are too many fucks in this tutorial already.</p>
      <p>There are 8 steps.</p>
      <blockquote>
        <ol>
          <li>node one click + server setup</li>
          <li>swap  firewall</li>
          <li>install nginx</li>
          <li>install let’s encrypted</li>
          <li>install mongodb</li>
          <li>install git + pm2</li>
          <li>pull build serve</li>
          <li>redirect</li>
        </ol>
      </blockquote>
    </Blog>
  );
};
