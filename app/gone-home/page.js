
import { families } from "../../data/puppies";
export const metadata = { title: "Gone home — TeddyPups" };
export default function Page() {
  return (<div className="w page"><h1>Gone home</h1><p className="sub">Puppies who have found their forever families.</p><div className="grid sm">{families.map(f => <img key={f.img} src={f.img} alt={f.caption} loading="lazy" />)}</div></div>);
}
