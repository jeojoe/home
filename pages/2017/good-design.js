import { thoughts } from '../../data';
import Blog from '../../components/blog/Blog';

export default ({ url }) => {
  const thought = thoughts.find(w => w.page === '/2017/good-design');
  return (
    <Blog url={url} thought={thought} subHeader="Thoughts">
      <br />
      <p>"Gutes Design ist so wenig Design wie möglich" -- Dieter Rams</p>
      <p>Good design is as little design as possible. It is one the most famous design quote in the design world, especially in Industrial Design. It comes from legendary German industrial designer, Dieter Rams. I'm very fascinated of his believe that the world around him is “an impenetrable confusion of forms, colors and noises”, which has similarity to my believes.</p>
      <p>In everyday life of human, we perceive the universe that is not systematic but chaotic by natural. It is only physical force or us, conscious being, that can reduce or eliminate this chaos of the universe. And one of those who can do this job is a designer.</p>
      <p>Good design is as little design as possible is one of the ten principles that are characteristic of “Good Design” according to Rams. These are Dieter Rams's 10 principles of good design..</p>
      <blockquote>
        <ol>
          <li>Good design is innovative <small>(Gutes Design ist innovativ)</small></li>
          <li>Good design makes a product useful <small>(Gutes Design macht ein Produkt brauchbar)</small></li>
          <li>Good design is aesthetic <small>(Gutes Design ist ästhetisch)</small></li>
          <li>Good design makes a product understandable <small>(Gutes Design macht ein Produkt verständlich)</small></li>
          <li>Good design is unobtrusive <small>(Gutes Design ist unaufdringlich)</small></li>
          <li>Good design is honest <small>(Gutes Design ist ehrlich)</small></li>
          <li>Good design is long-lived <small>(Gutes Design ist langlebig)</small></li>
          <li>Good design is through down to the last detail <small>(Gutes Design ist konsequent bis ins letzte Detail)</small></li>
          <li>Good design is environmental friendly <small>(Gutes Design ist umwelt­freundlich)</small></li>
          <li>Good design is as little design as possible <small>(Gutes Design ist so wenig Design wie möglich)</small></li>
        </ol>
      </blockquote>
      <p>If you think about it throughly. You may feel, as I do, that they are very universal, very simple and understandable, but yet very effective when I applied these principles to my design. They acted like a high level guideline that shaped my way of thinking while I was designing which is very helpful. I could take a first bold step that led me to more developed design and made my design improved incrementally and systematically over time.</p>
      <p>For me, one of many designer's jobs is to clarify noises around us. And, aside from passion and experience, it is better when you have design frameworks or design believes in mind.</p>
    </Blog>
  );
};
