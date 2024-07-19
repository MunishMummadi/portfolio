import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = "Munish - developer";
	const description = "Hey, Munish here, a developer";

	return {
		title,
		description,
		canonical: `https://munishdev.fun/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'nuro',
			url: `https://munishdev.fun/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://munishdev.fun/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@munishmummadi',
			site: '@munishdev',
		},
		...props,
	};
}
