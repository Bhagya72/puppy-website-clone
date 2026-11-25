
import { faqs } from "../../data/puppies";
export const metadata = { title: "FAQ — TeddyPups" };
export default function Page() {
  return (<div className="w page"><h1>Questions, answered</h1>{faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>);
}
