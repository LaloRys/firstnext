"use client"

function page() {
  return (
    <section>
      <h1>Hola a todos</h1>
      <button className="bg-red-500 p-4" onClick={() => {alert("hola")}}>Click</button>
    </section>

  )
}

export default page