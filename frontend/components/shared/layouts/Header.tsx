"use client";

import { useAppContext } from "@/context/appContext";
import {
	getBrandLogo,
	getHomePageContent,
} from "@/services/getHomePageContent";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";

type TNavItem = {
	id: number;
	name: string;
	link: string;

	dropdown_menu?: TNavItem[];
	two_cols?: boolean;
};

export default function Header() {
	const headerRef = useRef<HTMLElement>(null);

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);
	const [activeDropdownId, setActiveDropdownId] = useState(0);
	const [brandLogo, setBrandLogo] = useState<string>("");
	const [header, setHeader] = useState<any>(null);

	const { headerHeightInit } = useAppContext();

	const fetchHomeContent = async () => {
		const [homeContent, brandLogo] = await Promise.all([
			getHomePageContent(),
			getBrandLogo(),
		]);

		setHeader(homeContent?.header);
		setBrandLogo(brandLogo?.logo?.url);
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			const headerHeight = headerRef.current?.clientHeight;
			if (headerHeight) {
				document.body.style.paddingTop = headerHeight + "px";
				headerHeightInit(headerHeight);
			}
		}

		fetchHomeContent();
	}, []);

	const handleSticky = () => {
		const scrollTop = window.scrollY;
		scrollTop > 0 ? setIsSticky(true) : setIsSticky(false);
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", handleSticky);
		}

		return () => {
			window.removeEventListener("scroll", handleSticky);
		};
	}, []);

	return (
		<nav
			className={classNames("navbar navbar-expand-lg fixed-top", {
				"bg-dark": isMenuOpen,
				"headroom--pinned bg-dark": isSticky,
			})}
			ref={headerRef}
			data-bs-theme="dark"
		>
			<div className="container">
				<Link href="/" className="navbar-brand">
					<Image
						src={brandLogo || ""}
						alt="GenAi"
						width={160}
						height={42}
						priority
					/>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					onClick={() => setIsMenuOpen((prev) => !prev)}
				>
					<div className="navbar-toggler-icon">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</button>
				<div
					className={classNames("collapse navbar-collapse", {
						show: isMenuOpen,
					})}
				>
					<div className="navbar-content-inner ms-lg-auto d-flex flex-column flex-lg-row align-lg-center gap-4 gap-lg-10 p-2 p-lg-0">
						<ul className="navbar-nav gap-lg-2 gap-xl-5">
							{header?.nav_links?.map((navLink: any) => (
								<NavbarLinkItem
									key={navLink.id}
									data={navLink}
									activeDropdownId={activeDropdownId}
									setActiveDropdownId={setActiveDropdownId}
									collapseMenu={() => setIsMenuOpen(false)}
								/>
							))}
						</ul>
						{header?.button?.variant === "outlined" && (
							<div className="">
								<Link
									href={header?.button?.url || "#"}
									target={header?.button?.target || "_self"}
									className="btn btn-outline-primary-dark"
								>
									{header?.button?.label}
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}

type TNavbarLinkItemProps = {
	data: TNavItem;
	activeDropdownId: number;
	setActiveDropdownId: React.Dispatch<React.SetStateAction<number>>;
	collapseMenu: () => void;
};

function NavbarLinkItem({
	data,
	activeDropdownId,
	setActiveDropdownId,
	collapseMenu,
}: TNavbarLinkItemProps) {
	const { id, name, link, dropdown_menu, two_cols } = data;

	const handleDropdownToggle = (e: SyntheticEvent) => {
		e.preventDefault();
		if (typeof window !== "undefined") {
			if (window.innerWidth < 992) {
				if (activeDropdownId === id) {
					setActiveDropdownId(0);
				} else {
					setActiveDropdownId(id);
				}
			}
		}
	};

	return (
		<li
			className={classNames("nav-item", {
				dropdown: !!dropdown_menu,
			})}
		>
			{dropdown_menu && dropdown_menu?.length ? (
				<React.Fragment>
					<a
						className={classNames("nav-link dropdown-toggle", {
							active: activeDropdownId === id,
						})}
						href="#"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						aria-current="page"
						onClick={(e) => handleDropdownToggle(e)}
					>
						{name}
					</a>
					<ul
						className={classNames("dropdown-menu", {
							"megamenu megamenu-cols-2": !!two_cols,
							show: activeDropdownId === id,
						})}
					>
						{dropdown_menu.map((dropItem) => (
							<li key={dropItem.id}>
								<Link
									className="dropdown-item "
									href={dropItem.link || ""}
									onClick={collapseMenu}
								>
									{dropItem.name}
								</Link>
							</li>
						))}
					</ul>
				</React.Fragment>
			) : (
				<Link className="nav-link" href={link || ""} onClick={collapseMenu}>
					{name}
				</Link>
			)}
		</li>
	);
}
