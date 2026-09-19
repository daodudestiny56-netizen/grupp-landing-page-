'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * YouTube facade: poster frame plus a play button, with the iframe injected
 * only on click. Four eager embeds would cost roughly a megabyte of
 * third-party JavaScript; this costs four images.
 */
export default function VideoCard({ testimonial }) {
  const [playing, setPlaying] = useState(false);
  const { id, name, role, quote } = testimonial;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-[var(--line)] bg-white">
      <div className="relative aspect-video bg-[var(--ink)]">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={`Grupp partner success story: ${name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play success story: ${name}, ${role}`}
            className="group absolute inset-0 h-full w-full"
          >
            <Image
              src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
              alt=""
              fill
              sizes="(min-width: 1024px) 34vw, 92vw"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-[var(--navy)]/25 transition-colors duration-200 group-hover:bg-[var(--navy)]/10" />
            <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 shadow-lg transition-transform duration-200 group-hover:scale-105">
              <svg width="20" height="22" viewBox="0 0 20 22" aria-hidden>
                <path d="M19 11 0 22V0l19 11Z" fill="var(--brand)" />
              </svg>
            </span>
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <blockquote className="flex-1 text-[14.5px] leading-[1.7] text-[var(--body)]">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <footer className="mt-5 border-t border-[var(--line)] pt-4">
          <p className="text-[14px] font-bold text-[var(--ink)]">{name}</p>
          <p className="mt-0.5 text-[12.5px] text-[var(--muted)]">{role}</p>
        </footer>
      </div>
    </article>
  );
}
