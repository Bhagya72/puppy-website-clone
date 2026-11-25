
import { WA } from "../../data/puppies";
export const metadata = { title: "Visit & contact — TeddyPups" };
export default function Page() {
  return (<div className="w page"><h1>Visit &amp; contact</h1><div className="panel"><p><b>Showroom:</b> Downtown Dubai, United Arab Emirates</p><p><b>Phone:</b> <a href="tel:+971500000000">+971 50 000 0000</a></p>
    <a className="btn" href={WA} target="_blank">Say hello on WhatsApp</a></div></div>);
}
