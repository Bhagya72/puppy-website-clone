import "./globals.css";
import Link from "next/link";
import Nav from "../components/Nav";
import { WA } from "../data/puppies";
export const metadata = { title: "TeddyPups U.A.E. — Premium teacup puppies in Dubai", description: "Teddy bear and teacup puppies in Dubai. Meet local puppies in our Downtown Dubai showroom or bring home a rare breed imported from trusted breeders." };
export const viewport = { width: "device-width", initialScale: 1 };
export default function Root({ children }) {
  return (
    <html lang="en"><body>
      <Nav /><main>{children}</main>
      <footer><div className="w foot">
        <div><b>TeddyPups U.A.E.</b><p>Dubai-based brand specializing in miniature puppies, with worldwide shipping.</p></div>
        <div><b>Explore</b><br /><Link href="/puppies">Available puppies</Link><br /><Link href="/gone-home">Gone home</Link><br /><Link href="/happy-families">Happy families</Link><br /><Link href="/how-it-works">How it works</Link><br /><Link href="/faq">FAQ</Link></div>
        <div><b>Say hello</b><br /><a href={WA}>WhatsApp +971 50 000 0000</a><br />Downtown Dubai, UAE<br /><a href="tel:+971500000000">Call</a></div>
      </div><p className="w copy">© 2026 TeddyPups U.A.E. · Practice clone</p></footer>
      <a className="wa" href={WA} target="_blank">💬 Chat</a>
    </body></html>
  );
}
