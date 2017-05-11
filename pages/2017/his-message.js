import { thoughts } from '../../data';
import Blog from '../../components/blog/Blog';

export default ({ url }) => {
  const thought = thoughts.find(w => w.page === '/2017/his-message');
  return (
    <Blog url={url} thought={thought} subHeader="Thoughts">
      <p>Our own planet is only a tiny part of the vast cosmic tapestry a starry fabric of worlds yet untold.</p>
      <p>Those worlds in space are as countless as all the grains of sand on all the beaches of the Earth.</p>
      <p><i>Each of those worlds is as real as ours.</i></p>
      <p>In every one of them, there's a succession of incidents, events, occurrences which influence its future.</p>
      <p>Countless worlds, numberless moments an immensity of space and time.</p>
      <p>And our small planet, at this moment here, <i>we face a critical branchpoint in history.</i></p>
      <h4>What we do with our world right now will propagate down through the centuries and powerfully affect the destiny of our descendants.</h4>
      <p>It is well within our power to <i>destroy</i> our civilization and perhaps our species as well.</p>
      <p>If we capitulate to superstition or greed or stupidity.</p>
      <p><i>we can plunge our world into a darkness deeper than the time between the collapse of classical civilization and Italian Renaissance.</i></p>
      <p>But we are also capable of <i>using our compassion and our intelligence our technology and our wealth</i> to make an abundant and meaningful life for every inhabitant of this planet to enhance enormously our understanding of the universe..</p>
      <p>and to carry us to the stars.</p>
      <hr />
      <sub>Derived from Carl Sagan's Cosmos episode 7, "Journeys in Space and Time".</sub>
    </Blog>
  );
};
