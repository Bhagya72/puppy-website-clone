
import { steps } from "../../data/puppies";
export const metadata = { title: "How it works — TeddyPups" };
export default function Page() {
  return (<div className="w page"><h1>How it works</h1><div className="steps">{steps.map(([t,d],i) => <div className="step" key={t}><div className="num">{i+1}</div><h3>{t}</h3><p>{d}</p></div>)}</div>
    <h2 id="delivery" style={{marginTop:40}}>Delivery &amp; collection</h2><p>Local puppies can go home the same day from our Downtown Dubai showroom. Imported puppies are delivered safely across the UAE once your order is confirmed.</p></div>);
}
