"use client"
import Link from "next/link";
import {useRouter} from 'next/navigation'

// export const metadata = {
//   title: "About",
// };

function AboutPage() {

  const router = useRouter()

  return (
    <section>
      <h1>AboutPage</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet fugiat
        repellendus dolor minus. Animi laboriosam velit magnam dolore
        dignissimos, eius omnis nam, officiis, aliquid eligendi sapiente
        aspernatur modi ipsa praesentium?
      </p>
      <button
        className="bg-sky-400 px-3 py-2 rounded-md hover:bg-sky-600"
        onClick={() => {
          alert("Executing code")
          router.push('/')
        }}
      >
        Click
      </button>
    </section>
  );
}

export default AboutPage;
