import Link from 'next/link'

export default function Navbar(){
    return(
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
        </ul>
    )
}