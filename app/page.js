import Link from "next/link";
import Card from "../components/Card";
import { puppies, steps, trust, faqs, families, showroomImg, WA } from "../data/puppies";
export default function Home() {
  return (<>
    <section className="hero"><div className="w">
      <div className="eyebrow">every puppy is family</div>
      <h1>Premium teacup puppies in Dubai</h1>
      <p>Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.</p>
      <Link className="btn" href="/puppies">View available puppies</Link> <a className="btn o" href={WA} target="_blank">Enquire on WhatsApp</a>
    </div></section>
    <section className="w"><h2>Meet the pups</h2><p className="sub">Real puppies, real photos, looking for their families right now.</p>
      <div className="grid">{puppies.map(p => <Card key={p.slug} p={p} />)}</div>
      <p style={{textAlign:"center"}}><Link className="btn" href="/puppies">Meet them all</Link></p></section>
    <section className="w"><h2>Two ways to meet your puppy</h2><div className="two">
      <div className="panel"><img src={showroomImg} alt="Teddy bear puppy in the showroom" /><div className="eyebrow">In our showroom</div><h3>Puppies in Dubai</h3><p>See them, love them, take them home. Come meet our locally available puppies before you decide.</p><Link className="btn" href="/puppies?origin=local">Meet local puppies</Link></div>
      <div className="panel"><div className="eyebrow">Korea → Dubai</div><h3>Imported for you</h3><p>Exclusive Korean teacup puppies, delivered. Order from the world's most reputable breeders and let us handle the import.</p><Link className="btn" href="/puppies?origin=imported">See imported puppies</Link></div></div></section>
    <section className="w"><h2>Your puppy journey</h2><p className="sub">A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.</p>
      <div className="steps">{steps.map(([t,d],i) => <div className="step" key={t}><div className="num">{i+1}</div><h3>{t}</h3><p>{d}</p></div>)}</div></section>
    <section className="w"><h2>Why families trust TeddyPups</h2><div className="trust">{trust.map(([t,d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}</div></section>
    <section className="w"><h2>Happy families &amp; puppies</h2>
      <blockquote>“TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect.”<cite>Sarah M., Dubai, UAE</cite></blockquote>
      <div className="grid sm">{families.slice(0,4).map(f => <img key={f.img} src={f.img} alt={f.caption} loading="lazy" />)}</div>
      <p style={{textAlign:"center"}}><Link className="btn o" href="/happy-families">See every happy family</Link></p></section>
    <section className="w"><h2>Questions, answered</h2>{faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      <p><Link href="/faq">Read all questions →</Link></p></section>
    <section className="w"><div className="cta"><h2>Ready to meet your new best friend?</h2><p className="sub">Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way.</p>
      <a className="btn" href={WA} target="_blank">Enquire on WhatsApp</a> <Link className="btn o" href="/contact">Visit &amp; contact</Link></div></section>
  </>);
}
