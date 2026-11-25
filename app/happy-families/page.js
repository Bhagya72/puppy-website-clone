
import { families } from "../../data/puppies";
export const metadata = { title: "Happy families — TeddyPups" };
export default function Page() {
  return (<div className="w page"><h1>Happy families &amp; puppies</h1><p className="sub">We are truly honored to see our puppies become cherished members of loving families.</p>
    <div className="grid">{families.map(f => <figure key={f.img} className="card"><img src={f.img} alt={f.caption} loading="lazy" /><figcaption className="t">{f.caption} 🧸</figcaption></figure>)}</div></div>);
}
