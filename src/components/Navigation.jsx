import react from "../assets/react.svg"

export function Navigation() {
    return (
        <header className="bg-violet-500 rounded-lg">
            <nav>
                <ul className="flex  items-center">
                    <a href="#">
                        <img src={react} className="w-16">
                            
                        </img>
                    </a>
                    <a className="basis-1/2 font-sans border-l-2 text-white font-semibold hover:underline text-3xl p-2" href="#">
                        <li className="h-full">
                            Inicio
                        </li>
                    </a>
                    <a className="font-semibold text-3xl basis-1/2 font-sans border-l-2 hover:underline text-white p-2" href="#">
                        <li >
                            Perfil
                        </li>
                    </a>
                    
                </ul>
            </nav>
        </header>
    )
}