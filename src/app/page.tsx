"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		// Redirect to the login page
		router.push("/login");
	}, [router]);

	return null; // Optionally return null as there's nothing to render
}
