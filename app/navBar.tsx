import Link from "next/link";
import { NameLink } from "./nameLink";

class NavLink extends NameLink {
    constructor(name: string, customLink?: string) {
        super(name, customLink ? customLink : "/" + name.toLowerCase())
    }    
}

export default function NavBar({currentPage}: {currentPage: string}) {
    
    const PAGES = [
        new NavLink("Home", "/"),
        new NavLink("Projects"),
        new NavLink("Contact")
    ]

    const pageLinks = PAGES.map(page => {
        const name = page.getName();
        let style = "text-2xl";
        if (currentPage == name) {
            style += " underline";
        }
        return <Link className={style} key={name} href={page.getLink()}>{name}</Link>
    })

    return (
        <div className="flex justify-between p-10">
            <Link className="basis-1/2 text-4xl" href={"/"}>Luke Christopher Shephard</Link>
            <div className="basis-1/2 flex justify-around">
                {pageLinks}
            </div>
        </div>

    )
}

