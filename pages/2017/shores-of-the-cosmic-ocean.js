import { thoughts } from '../../data';
import Blog from '../../components/blog/Blog';

export default ({ url }) => {
  const thought = thoughts.find(w => w.page === '/2017/shores-of-the-cosmic-ocean');
  return (
    <Blog url={url} thought={thought} subHeader="Thoughts">
      <p><i>The cosmos is all that is or ever was or ever will be.</i></p>
      <p>Our contemplations of the cosmos stir us.</p>
      <p>There is a tingling in the spine, a catch in the voice a faint sensation, as if a distant memory of falling.. from a great height.</p>
      <p>We know we are approaching the grandest of mysteries. The size and age of the cosmos are beyond ordinary human understanding. Lost somewhere between immensity and eternity is our tiny planetary home.. the Earth.</p>
      <p>For the first time, we have the power to decide the fate of our planet and ourselves.</p>
      <p><i>This is a time of great danger.</i></p>
      <p>But our species is young and curious and brave. <i>It shows much promise.</i></p>
      <p>In the last few millennia, we've made the most astonishing and unexpected discoveries about the cosmos and our place within it. </p>
      <p>I believe our future depends powerfully on how well we understand this cosmos.In which we float, like a mote of dust.</p>
      <p>In the morning sky.</p>
      <p>...</p>
      <p>We wish to pursue the truth, no matter where it leads.</p>
      <p>But to find the truth, we need imagination and skepticism both.</p>
      <p>We will not be afraid to speculate. But we will be careful to distinguish speculation from fact.</p>
      <p>The cosmos is full beyond measure of elegant truths of exquisite interrelationships of the awesome machinery of nature.</p>
      <p><i>The surface of the Earth is the shore of the cosmic ocean.</i></p>
      <p>On this shore, we have learned most of what we know.</p>
      <p>Recently, we've waded a little way out maybe ankle-deep, and the water seems inviting.</p>
      <p>Some part of our being knows this is where we came from.</p>
      <p>We long to return. And we can.</p>
      <p>Because the cosmos is also within us. We're made of star-stuff.</p>
      <p>We are a way for the cosmos to know itself.</p>
      <p>The journey for each of us begins here.</p>
      <p>...</p>
      <p><i>Come with me.</i></p>
      <hr />
      <sub>Derived from Carl Sagan's Cosmos episode 1, "The Shores of the Cosmic Ocean".</sub>
    </Blog>
  );
};
