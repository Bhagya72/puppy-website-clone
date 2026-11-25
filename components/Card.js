import Link from "next/link";
export default function Card({ p }) {
  return (
    <Link href={`/puppies/${p.slug}`} className="card">
      <img src={p.img} alt={`${p.name}, ${p.gender} puppy`} loading="lazy" />
      <div className="t"><b>{p.name}</b><small>{p.gender}, {p.age}{p.video ? ", with video" : ""}</small><span className="tag">Available</span></div>
    </Link>
  );
}
