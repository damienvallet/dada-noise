import styles from "./Disciplines.module.css";
import Link from "next/link";

const disciplines = [
  {
    number: "01",
    category: "Sound Design",
    title: "Making things sound alive",
    description:
      "Designing sounds and instruments for musicians — sample libraries, software instruments, and sonic tools built at the intersection of music and technology.",
    href: "/projects?tab=sound",
  },
  {
    number: "02",
    category: "Developement",
    title: "Building what I need",
    description:
      "From user interfaces to audio tooling — development driven by creative necessity and a craftsman's attention to detail.",
    href: "/projects?tab=dev",
  },
];

export default function Disciplines() {
  return (
    <div className={styles.disciplines}>
      {disciplines.map((card) => (
        <Link key={card.number} className={styles.disc} href={card.href}>
          <div className={styles.discNum}>{card.number}</div>
          <div className={styles.discBody}>
            <div className={styles.discCat}>{card.category}</div>
            <div className={styles.discTitle}>{card.title}</div>
            <div className={styles.discText}>{card.description}</div>
            <div className={styles.discArrow}>→</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
