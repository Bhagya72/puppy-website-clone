
import { notFound } from "next/navigation";
import Link from "next/link";
import { puppies } from "../../../data/puppies";
export function generateStaticParams() { return puppies.map(p => ({ slug: p.slug })); }
export default function Detail({ params }) {
  const p = puppies.find(x => x.slug === params.slug);
  if (!p) notFound();
  const wa = `https://wa.me/919898124987?text=${encodeURIComponent(`Hi TeddyPups, I'm interested in ${p.name} (${p.gender}, ${p.age}).`)}`;
  return (<div className="w page"><Link href="/puppies">← All puppies</Link>
    <div className="two" style={{marginTop:16}}><img src={p.img} alt={p.name} className="big" />
      <div><span className="tag">Available</span><h1>{p.name}</h1>
        <p>{p.breed} · {p.gender} · {p.age}</p><p>{p.origin === "imported" ? "Imported from Korea. We handle the import and delivery." : "Available locally in our Downtown Dubai showroom."}</p>
        <p>Vaccinated, dewormed and with a verified health certificate.</p>
        <a className="btn" href={wa} target="_blank">Enquire on WhatsApp</a></div></div></div>);
}
