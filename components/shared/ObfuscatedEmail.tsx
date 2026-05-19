"use client";

interface Props {
  className?: string;
}

// Email is split and assembled client-side only — invisible to scrapers
const USER = "contact";
const DOMAIN = "logicbevers.com";

export default function ObfuscatedEmail({ className }: Props) {
  const email = `${USER}@${DOMAIN}`;
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `mailto:${email}`;
      }}
      className={className}
      aria-label="Send us an email"
    >
      {email}
    </a>
  );
}
