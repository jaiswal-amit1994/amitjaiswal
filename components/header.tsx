import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
    return(
        <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6">
          <nav className="container mx-auto flex max-w-3xl items-center justify-between">
             <div>
                <Link href="/" className="font-serif text-2xl font-bold">AK</Link>
             </div>

             <ul className="flex items-center gap-6 text-sm font-light">
                   <li className="transition-colors hover:text-foreground">
                    <Link href="/projects">Projects</Link>
                   </li>
                   <li className="transition-colors hover:text-foreground">
                    <Link href="/bio">Bio</Link>
                   </li>
                   <li className="transition-colors hover:text-foreground">
                    <Link href="/connect">Connect</Link>
                   </li>
             </ul>
             
             <div>
                <ThemeToggle />
             </div>
          </nav>
        </header>
    )
}
