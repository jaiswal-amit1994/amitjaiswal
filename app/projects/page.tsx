'use client'

import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

export default function page() {
    useEffect(() => {
        // Ensure this code runs only in the client (browser)
        if (typeof window !== 'undefined') {
            const locomotiveScroll = new LocomotiveScroll()
        }
    }, [])
    return (
        <section className="flex py-10">
            <div className="container mx-auto max-w-3xl">
                <h1 className="title mb-8 text-lg font-medium">Projects</h1>
                <p className="pb-4 font-light text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore nulla sunt excepturi quidem incidunt est numquam
                    repellat corporis aut minima distinctio, quasi perferendis
                    deleniti ex magni laboriosam earum voluptatem sint nam?
                    Ipsam, corrupti. Temporibus autem repellendus nulla ea hic
                    quia assumenda explicabo cumque. Culpa nesciunt ea sunt,
                    voluptate impedit at! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Officia iste corrupti eum vitae unde
                    necessitatibus quae, illum rerum vel soluta iure voluptas
                    illo. Sit, atque veniam minus amet id delectus? Commodi,
                    repudiandae facilis obcaecati cupiditate excepturi id!
                    Tempore, corrupti aut! Autem ratione voluptatum explicabo
                    veritatis dicta quam omnis excepturi non ab rem, sit
                    asperiores labore! Sunt saepe, nostrum ad laborum vel
                    ducimus non accusantium inventore. Repudiandae odit neque
                    repellat accusantium nam sapiente deserunt optio, magnam
                    dolores impedit pariatur rerum illo! Nesciunt at cupiditate
                    consequuntur est minus iusto necessitatibus impedit
                    praesentium aperiam exercitationem nihil aspernatur
                    corporis, odit esse rem, quae natus harum consequatur quas
                    culpa voluptatibus expedita eos. Ea facere voluptates non
                    vero corporis officia at consequuntur nihil iusto
                    perferendis hic labore commodi sunt dolorem, debitis
                    reiciendis minus ipsam! Quia eius accusantium aperiam
                    repellat ab reiciendis distinctio dicta dolor sint debitis,
                    vero quisquam nihil officiis necessitatibus ipsam iste quos
                    consequuntur a officia corrupti magnam minima nulla
                    architecto modi! Architecto doloribus ipsam quae cum
                    voluptas consequuntur et recusandae numquam, error
                    accusantium beatae enim deleniti quisquam tempore amet a
                    blanditiis. Perspiciatis, assumenda. Quisquam nobis nostrum,
                    illum aperiam incidunt, ex maxime dolorem a explicabo
                    tenetur iusto laboriosam. Fuga, iusto. Reprehenderit maxime
                    modi in repudiandae quisquam tempora necessitatibus delectus
                    ea nam maiores consectetur harum voluptate voluptatum
                    exercitationem neque, rem dicta. Porro commodi architecto
                    facilis saepe? Maiores dignissimos quia sint nemo illo,
                    blanditiis numquam, iste praesentium, recusandae quis
                    perferendis optio accusamus. Expedita amet dolorem maiores
                    maxime molestias deleniti accusamus porro neque voluptatibus
                    excepturi voluptatem quidem exercitationem optio voluptate
                    placeat consequuntur animi nesciunt, fugit dolor non
                    doloribus. Cumque eius vitae odio laudantium tempore fuga
                    architecto at non expedita repellendus. Dolorum reiciendis
                    veritatis voluptas, tenetur architecto quod sequi deleniti
                    dolorem blanditiis, a ullam laborum ratione magni commodi
                    beatae iure sint, suscipit eos. Vitae necessitatibus eius
                    quaerat optio eaque soluta commodi. Quos natus modi,
                    assumenda facere eum facilis, deleniti sequi id accusantium
                    debitis dolore voluptas itaque illum rem quod sed magni
                    quis? Corrupti amet accusantium enim voluptates nobis veniam
                    sed consequatur doloremque minus molestiae non dolor
                    deserunt, est ipsum ratione cum dolore nemo voluptatum eaque
                    praesentium assumenda necessitatibus! Totam molestiae
                    consectetur, distinctio eius libero a eligendi cum delectus
                    consequatur corporis, unde vitae, blanditiis voluptas
                    veniam. Quas itaque possimus odio sapiente porro impedit
                    maiores dicta magni. Expedita cum eligendi in libero eaque
                    ipsam laborum laudantium dicta similique, pariatur ut
                    provident inventore vel vero consequatur quasi asperiores
                    optio velit qui, corporis sit dolor mollitia impedit
                    perferendis. Atque culpa facere distinctio deleniti non
                    obcaecati ducimus praesentium in ratione id? Eius quod ab
                    doloremque aut vitae error est et cum sit perferendis iusto
                    modi tempora nisi ratione amet, alias cupiditate. Ea
                    reprehenderit quaerat suscipit doloribus esse atque nemo
                    aliquam corrupti quia repudiandae? Ullam voluptates fuga
                    eos, cupiditate qui esse accusantium? Vitae magnam quos
                    dicta, perspiciatis optio eum alias recusandae possimus
                    officia explicabo hic delectus asperiores dolores veritatis
                    nulla. Repellat exercitationem aspernatur illo velit nemo
                    neque. Eos voluptate quaerat omnis adipisci cumque, dolor
                    blanditiis, ad, praesentium aspernatur enim veritatis qui
                    aliquid non. Repellendus, voluptatem!
                </p>
            </div>
        </section>
    )
}
