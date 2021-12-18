import React from "react"

type NavLinkProps = {
    children: any
    href: string
}

export default function NavLink(props: NavLinkProps) {
    return (
        <a href={props.href}>
            <span className="m-2 text-lg cursor-pointer">{props.children}</span>
        </a>
    )

}