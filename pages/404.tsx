import { BookOpenIcon, ChevronRightIcon, CircleStackIcon } from '@heroicons/react/20/solid';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const links = [
    {
        href: '/join',
        title: 'Join the program',
        description: 'We can finance you to become a full time bounty hunter',
        icon: BookOpenIcon,
    },
    { href: '/donate', title: 'Donate', description: 'Help us finance more bounty hunters', icon: CircleStackIcon },
];

export default function FourOFour() {
    return (
        <div className="bg-white">
            <Head>
                <title>404 - Caterpillar Auditors</title>
            </Head>
            <main className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                <div className="flex-shrink-0 pt-16">
                    <img className="mx-auto h-12 w-auto" src="/caterpillar_glass.png" alt="Caterpillar Auditors" />
                </div>
                <div className="mx-auto max-w-xl py-16">
                    <div className="text-center">
                        <p className="text-base font-semibold text-emerald-600">404</p>
                        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            This page does not exist.
                        </h1>
                        <p className="mt-2 text-lg text-gray-500">The page you are looking for could not be found.</p>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-base font-semibold text-gray-500">You might be looking for</h2>
                        <ul role="list" className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
                            {links.map((link, linkIdx) => (
                                <li key={linkIdx} className="relative flex items-start space-x-4 py-6">
                                    <div className="flex-shrink-0">
                                        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50">
                                            <link.icon className="h-6 w-6 text-emerald-700" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-base font-medium text-gray-900">
                                            <span className="rounded-sm focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-2">
                                                <Link href={link.href} className="focus:outline-none">
                                                    <span className="absolute inset-0" aria-hidden="true" />
                                                    {link.title}
                                                </Link>
                                            </span>
                                        </h3>
                                        <p className="text-base text-gray-500">{link.description}</p>
                                    </div>
                                    <div className="flex-shrink-0 self-center">
                                        <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <Link href="/" className="text-base font-medium text-emerald-600 hover:text-emerald-500">
                                Or go back home
                                <span aria-hidden="true"> &rarr;</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
