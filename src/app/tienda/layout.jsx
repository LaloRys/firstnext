import Link from "next/link"

export const metadata = {
  title: "Seccion Tienda"
}

function TiendaLayout({children}) {
  return (
    <>
    <nav className="flex bg-slate-600 p-3 h-15">
      <div className="bg-slate-800">
        <h3 className="mr-2 bg-slate-800 p-2">Seccion Tienda</h3>
      </div>
      <ul className="flex">
        <li className="mr-2">
          <Link href="/tienda/categorias">Categorias</Link>
        </li>
        <li className="mr-2">
          <Link href="/tienda/categorias/computadoras">Computadoras</Link>
        </li>
        <li className="mr-2">
          <Link href="/tienda/categorias/celulares">Celulares</Link> 
        </li>
      </ul>
    </nav>
    {children}
    </>
  )
}

export default TiendaLayout