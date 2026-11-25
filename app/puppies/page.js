
import Link from "next/link";
import Card from "../../components/Card";
import { puppies, breeds } from "../../data/puppies";
export const metadata = { title: "Available puppies — TeddyPups" };
export default function Puppies({ searchParams }) {
  const { breed, origin } = searchParams;
  const list = puppies.filter(p => (!breed || p.breed.toLowerCase().replace(" ","-") === breed) && (!origin || p.origin === origin));
  const chip = (href, label, on) => <Link key={label} href={href} className={"chip" + (on ? " on" : "")}>{label}</Link>;
  return (<div className="w page"><h1>Available puppies</h1>
    <div className="chips">{chip("/puppies","All",!breed && !origin)}
      {breeds.map(b => { const s = b.toLowerCase().replace(" ","-"); return chip(`/puppies?breed=${s}`, b, breed === s); })}
      {chip("/puppies?origin=local","In Dubai",origin==="local")}{chip("/puppies?origin=imported","Imported",origin==="imported")}</div>
    {list.length ? <div className="grid">{list.map(p => <Card key={p.slug} p={p} />)}</div> : <p>No puppies match this filter right now.</p>}</div>);
}
