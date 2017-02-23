import { thoughts } from '../../data';
import Blog from '../../components/blog/Blog';

// เกร่น 10 มีอะไรบ้าง
// เป้าหมายคือไร นี่เป็นแค่ opinion
// ไล่ไปทีละข้อ
// สรุป

export default ({ url }) => {
  const thought = thoughts.find(w => w.page === '/2017/good-design');
  return (
    <Blog url={url} thought={thought} subHeader="Thoughts">
      <br />
      <p>"Gutes Design ist so wenig Design wie möglich" -- Dieter Rams</p>
      <p>Good design is as little design as possible. It is one the most famous design quote in the design world, especially in Industrial Design. It came from legendary German industrial designer, Dieter Rams. I was very fascinated of his believe that the world around him is “an impenetrable confusion of forms, colors and noises”, which has similarity to my believe.</p>
      <p>In everyday life of human, we perceive the environment that is not systematic but chaotic by natural. We exist in the spacetime that is physically and abstractly composed of moving individual parts that is not aligned to each others. It is only physical force or us, conscious being, that can eliminate this entropy of the universe. And one of those who can do this job is a designer.</p>
      <p>Good design is as little design as possible is one of the ten principles that are characteristic of “Good Design”. These are Dieter Rams 10 principles of good design..</p>
      <blockquote>
        <ol>
          <li>Good design is innovative (Gutes Design ist innovativ)</li>
          <li>Good design makes a product useful (Gutes Design macht ein Produkt brauchbar)</li>
          <li>Good design is aesthetic (Gutes Design ist ästhetisch)</li>
          <li>Good design makes a product understandable (Gutes Design macht ein Produkt verständlich)</li>
          <li>Good design is unobtrusive (Gutes Design ist unaufdringlich)</li>
          <li>Good design is honest (Gutes Design ist ehrlich)</li>
          <li>Good design is long-lived (Gutes Design ist langlebig)</li>
          <li>Good design is through down to the last detail (Gutes Design ist konsequent bis ins letzte Detail)</li>
          <li>Good design is environmental friendly (Gutes Design ist umwelt­freundlich)</li>
          <li>Good design is as little design as possible (Gutes Design ist so wenig Design wie möglich)</li>
        </ol>
      </blockquote>
      <p>If you look into it throughly. You may feel, as i felt, that these principles are at high level of concept. They are universal, very simple and understandable but yet so effective when I apply these principles to my design. they act like a high level guideline that shape my way of thinking when i design which is very helpful. I can take a first bold step that leads me to more developed design and make my design improve incrementally and systematically. </p>
      <p>For me, one of designer's job is to clarify noises around us. And, aside from passion and experience, it is better when you have design framework, or design believes in mind.</p>
    </Blog>
  );
};
