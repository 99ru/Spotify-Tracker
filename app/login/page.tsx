'use client'
import Image from "next/image";
import { getProviders } from "next-auth/react";
import React from "react";

import ProviderButton from "@/components/ProviderButton";

export default async function Login(): Promise<React.JSX.Element> {
	const providers = await getProviders();
	console.log(providers)
	return (
		<div className="h-screen overflow-hidden bg-black">
			<div className="flex h-full flex-col items-center justify-center">
				<div className="flex flex-col items-center justify-center space-y-10">
					<Image src="/logo.png" width={200} height={200} alt={"Spotify Clone Logo"} />
					<h1 className="text-4xl font-bold text-white">Welcome to My App</h1>
					{providers &&
						Object.values(providers).map((provider) => (
							<ProviderButton key={provider.name} id={provider.id} name={provider.name} callback={"/"} />
						))}
				</div>
				<p className="text-gray-400 p-8">This app goes beyond Spotify Wrapped, instead of waiting every year, you get to see your current stats</p>
			</div>
		</div>
	);
	
}



