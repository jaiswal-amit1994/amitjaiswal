"use client";

import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  useEffect(() => {
    // Ensure this code runs only in the client (browser)
    if (typeof window !== "undefined") {
      const locomotiveScroll = new LocomotiveScroll();
    }
  }, []);

  return (
    <div style={{ maxWidth: "700px", padding: "0px 20px", margin: "0 auto" }}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laboriosam
        tempore placeat accusamus quasi labore repudiandae maxime, aliquid
        neque! Nisi corporis quasi in esse consectetur. Suscipit minima
        consequuntur impedit earum quae veniam repudiandae veritatis? Quae,
        optio delectus excepturi necessitatibus obcaecati vero quas alias
        reprehenderit mollitia. Consectetur a quidem aliquid, repudiandae
        aspernatur, optio qui, voluptatibus fugit cumque blanditiis magnam esse?
        Amet minus dolorem dolore maxime nulla rem ad quo voluptate eum quasi,
        quas aut ipsam eligendi voluptas? Autem mollitia rem soluta perferendis
        voluptates adipisci minus eaque saepe, pariatur quasi nesciunt. Aliquid
        atque accusantium dolores, assumenda hic id consectetur explicabo ab
        maxime officia! Ratione dolores iure minus repellat, deleniti, ipsam
        esse, doloribus aliquid accusamus accusantium ut. Error, nihil
        reiciendis illo doloribus amet est ducimus sint voluptatibus
        necessitatibus, unde quasi animi perferendis hic quas delectus debitis
        nobis, nostrum quisquam maxime recusandae dolore repudiandae eum. Autem
        culpa velit fugiat praesentium. Odit minus commodi dolorum dolores? Rem
        quibusdam ab maxime consequatur aliquid qui. Magni architecto eaque
        recusandae odio, ipsam fugit quod explicabo maiores ex maxime, saepe
        soluta corporis inventore molestiae accusamus pariatur assumenda
        ratione? Accusamus officia repudiandae quia temporibus animi impedit
        blanditiis molestiae minima quis sunt tempore eveniet doloremque placeat
        consequatur aliquam mollitia, voluptatum magni? Eveniet pariatur
        consequatur voluptatem sit reprehenderit, recusandae est placeat unde
        cupiditate ut maiores odio omnis provident nobis maxime itaque rem. Et
        id tempora doloremque ducimus minima veritatis reiciendis nostrum
        recusandae incidunt officiis sunt enim cupiditate, asperiores, dolorum
        explicabo at nisi odit reprehenderit. Pariatur quis quos, aliquid
        corrupti nulla doloremque esse soluta odio nesciunt quaerat,
        perspiciatis mollitia? Quae dicta veniam optio sint, velit aperiam
        exercitationem aspernatur alias beatae modi. Culpa quae harum a
        obcaecati, sint, consequatur nesciunt eveniet omnis reiciendis qui
        aliquam rem est quas magni id nihil, ullam tempora corporis laborum
        assumenda debitis nemo sapiente. Illum error accusantium officia iure
        distinctio eum ipsam, aspernatur voluptas. Eveniet aperiam dolore,
        repellendus officia necessitatibus ex! Sapiente officiis quasi obcaecati
        dolorem porro veritatis pariatur qui eius sed quisquam deserunt ut,
        eveniet vero dicta illum sunt quis minus aliquam enim nisi tenetur aut.
        Tenetur quas natus temporibus distinctio expedita maxime at illum optio,
        voluptatibus dicta, accusamus magnam magni voluptas veniam fugit
        molestiae fuga ullam autem cupiditate totam labore aspernatur? Culpa
        sint hic ex ratione illum, impedit aliquid. Eos, mollitia distinctio
        ipsum, fuga expedita rerum sapiente porro dolorem officia perspiciatis
        animi, labore at autem debitis facere quasi? Excepturi, maxime! Facilis
        blanditiis ducimus magnam placeat perferendis dolores dolore tenetur
        modi! Magni praesentium tempora molestiae voluptate fuga. Nemo alias
        quaerat, labore recusandae ex consectetur commodi maiores enim,
        necessitatibus ratione explicabo dolore cum, dignissimos impedit omnis
        porro maxime perspiciatis. Quam perspiciatis sit labore ducimus iusto?
        Odio officiis, ducimus at recusandae numquam, alias reprehenderit
        consectetur unde ex, esse debitis. Sint aperiam incidunt vel harum
        asperiores labore neque! Illum iusto veritatis at tempore excepturi
        aliquid inventore repellendus labore! Delectus repudiandae omnis cumque
        officia dignissimos doloribus similique distinctio. Pariatur at ipsa
        aspernatur! Eius corrupti maxime dolore explicabo ut commodi iusto
        necessitatibus est tenetur assumenda aliquid, unde distinctio, rerum
        quibusdam doloribus fugiat repudiandae?
      </p>
    </div>
  );
}
