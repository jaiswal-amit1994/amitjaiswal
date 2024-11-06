'use client'

import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

export default function Page() {
    useEffect(() => {
        // Ensure this code runs only in the client (browser)
        if (typeof window !== 'undefined') {
            const locomotiveScroll = new LocomotiveScroll()
        }
    }, [])
    return (
        <section className="flex py-10">
            <div className="container mx-auto max-w-3xl">
                <h1 className="title mb-8 text-lg font-medium">Who I Am</h1>
                <p className="pb-4 font-light text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore nulla sunt excepturi quidem incidunt est numquam
                    repellat corporis aut minima distinctio, quasi perferendis
                    deleniti ex magni laboriosam earum voluptatem sint nam?
                    Ipsam, corrupti. Temporibus autem repellendus nulla ea hic
                    quia assumenda explicabo cumque. Culpa nesciunt ea sunt,
                    voluptate impedit at! Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Facilis ipsum ratione magni
                    cumque commodi quo expedita! Aut temporibus ea nesciunt sunt
                    dolores, incidunt quis ad labore pariatur blanditiis odit,
                    perferendis repellendus. Nihil sapiente sint libero expedita
                    exercitationem magnam necessitatibus eaque at odio!
                    Accusamus, quia ratione beatae odit consequuntur optio
                    dolorem tempore? Praesentium provident veniam ipsam sunt est
                    aperiam, itaque necessitatibus ipsum voluptatem facere porro
                    consectetur atque quisquam sed ad aliquam assumenda
                    quibusdam at vitae, aspernatur eos ducimus! Suscipit, eos
                    assumenda error non provident blanditiis laudantium nostrum
                    quisquam mollitia sit modi et repellendus, eveniet veritatis
                    maiores quod consectetur possimus ea incidunt expedita.
                    Dignissimos architecto eos hic, nobis aliquam delectus est
                    labore corrupti placeat maiores rem quod molestias eius odio
                    numquam? Laboriosam qui quasi voluptatem itaque delectus ab
                    labore, placeat suscipit fugit beatae sint consequuntur
                    consectetur? Neque veritatis vitae unde laudantium cumque,
                    repellendus minus tempora animi est, esse odit possimus
                    alias necessitatibus! Doloremque dolorum excepturi
                    exercitationem commodi dignissimos suscipit quisquam nostrum
                    necessitatibus impedit aut totam, aspernatur amet, maxime
                    accusantium ipsa ad corrupti labore sit atque officia
                    inventore repudiandae dicta doloribus velit. Quidem sunt
                    fuga ut repellat officia nesciunt at est consequatur, cumque
                    fugit obcaecati ullam distinctio, beatae tenetur culpa
                    laborum minima odio accusamus esse quo deserunt sit maiores
                    sint. Natus quia aliquam, molestiae nulla aspernatur hic
                    tempora! Doloremque soluta nobis magnam distinctio
                    laudantium, eius exercitationem. Autem expedita magni dolor
                    repudiandae. Quisquam, voluptatum et? Aut facilis debitis
                    sint maxime eligendi nisi quaerat doloribus aperiam
                    reiciendis, tenetur dignissimos, culpa minima! Obcaecati ut
                    recusandae officiis ducimus dignissimos. Hic tempore quidem
                    rem repellat illum ea beatae pariatur necessitatibus
                    excepturi. Soluta sit enim vel? Adipisci illo nobis
                    veritatis earum officia qui id vel tenetur ab, ratione
                    praesentium molestias officiis nesciunt laudantium, saepe
                    nemo maiores perferendis vitae aspernatur? Et quaerat
                    perspiciatis, animi distinctio similique omnis ducimus rem
                    obcaecati esse numquam dolorem ex amet magnam, delectus
                    minima atque! Illo maxime obcaecati eligendi nesciunt quos
                    eaque architecto, voluptates quia sint accusamus itaque
                    harum adipisci inventore, pariatur ex doloribus maiores
                    consequatur facilis tempore laborum laudantium? Natus at
                    cumque doloribus officia nisi. Rerum perspiciatis quia
                    excepturi laudantium harum neque placeat, vel modi fugit
                    cupiditate! Quo consequatur delectus accusantium assumenda
                    voluptates? Consectetur illum beatae non cum ratione
                    distinctio voluptatibus laboriosam consequuntur, earum
                    blanditiis cupiditate repellat! Autem possimus blanditiis
                    reprehenderit minima praesentium earum necessitatibus quos
                    cupiditate in voluptatem deserunt, quibusdam voluptatibus
                    numquam vero ut iure laboriosam corrupti architecto, tempore
                    voluptatum suscipit nam. Nemo autem sit, vitae veniam quo
                    odio modi consequuntur quis expedita ad deserunt libero
                    fugit natus necessitatibus! Exercitationem consequuntur
                    consequatur hic odit magni iusto doloremque officia aliquid
                    molestiae voluptatem maxime eligendi eveniet commodi aut,
                    quis, nostrum et? Totam ex, voluptates consectetur libero,
                    nisi consequuntur repudiandae laudantium suscipit iure,
                    magnam voluptatibus quia voluptate accusantium cumque illum
                    quasi corporis eos. Laborum, eligendi exercitationem?
                    Dignissimos modi repudiandae provident impedit ex quasi
                    perferendis eaque ipsum blanditiis, ad officiis nostrum,
                    tempora illum corporis obcaecati, omnis inventore aut quas
                    tenetur accusamus! Fugit in, excepturi ducimus omnis
                    dignissimos voluptate dolore iste minus. Vero, quas earum
                    excepturi quia sint quasi?
                </p>
            </div>
        </section>
    )
}
