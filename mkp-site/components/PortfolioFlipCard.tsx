"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioFlipCard({ title, href, image, summary }: { title: string; href: string; image: string; summary: string }) {
  return (
    <Link href={href} target="_blank" className="group block [perspective:1000px]">
      <div className="relative h-80 rounded-2xl border border-capeCod/40 bg-capeCod/30 shadow-card transition-transform [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-500">
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Image src={image} alt={title} fill className="object-cover object-top rounded-2xl" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/0 to-black/40" />
          <div className="absolute left-0 right-0 bottom-0">
            <div className="w-full m-0 rounded-b-xl backdrop-blur-0 bg-codGray/50 border border-capeCod/40 px-4 py-3 flex items-center justify-between">
              <h3 className="font-semibold">{title}</h3>
              <span className="text-fuelYellow">↗</span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 rounded-2xl p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center text-center">
          <p className="text-osloGray">{summary}</p>
        </div>
      </div>
    </Link>
  );
}


