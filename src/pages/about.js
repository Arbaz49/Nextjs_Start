import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <style jsx>{`
        h2 {
          text-align: center;
        }
        p {
          width: 70%;
          margin: auto;
          font-size: 1.1rem;
        }
      `}</style>
      <h2>This is About page</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        officia similique quia consequuntur mollitia ut quasi! Eligendi
        quibusdam quis numquam, ipsum sapiente fugiat ab quo voluptates, fuga
        deleniti ea ex asperiores illum debitis quos dolores totam reprehenderit
        quae porro. Eum iste animi iure asperiores numquam tempora distinctio
        beatae porro. Magni ipsam pariatur corporis quis quod dolorem a
        provident iure magnam rerum tempora ratione eaque, odio architecto
        perferendis atque doloribus, reiciendis placeat suscipit laudantium
        saepe odit voluptatem nemo cum? Pariatur, doloremque!
      </p>
    </div>
  );
};

export default About;
