
"use client";
import Link from "next/link";
import { useState } from "react";
import { WA } from "../data/puppies";
const links = [["/","Home"],["/puppies","Puppies"],["/happy-families","Happy families"],["/how-it-works","How it works"],["/faq","FAQ"],["/contact","Visit & contact"]];
export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="hdr"><div className="w bar">
      <Link href="/" className="logo">🐾 TeddyPups</Link>
      <nav className={open ? "open" : ""}>{links.map(([h,t]) => <Link key={h} href={h} onClick={() => setOpen(false)}>{t}</Link>)}</nav>
      <a className="btn hide-m" href={WA} target="_blank">WhatsApp us</a>
      <button className="menu" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
    </div></header>
  );
}
