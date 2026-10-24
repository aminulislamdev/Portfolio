interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function TechIcon({ name, size = 20, className = "" }: TechIconProps) {
  const iconKey = name.toLowerCase();

  switch (iconKey) {
    case "react":
      return (
        <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className}>
          <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
          <g stroke="#00d8ff" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case "nextjs":
      return (
        <svg width={size} height={size} viewBox="0 0 180 180" fill="none" className={className}>
          <mask id="nextMask" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
            <circle cx="90" cy="90" r="90" fill="black" />
          </mask>
          <g mask="url(#nextMask)">
            <circle cx="90" cy="90" r="90" fill="currentColor" />
            <path
              d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
              fill="url(#nextGrad)"
            />
            <rect x="115" y="54" width="12" height="72" fill="url(#nextGrad2)" />
          </g>
          <defs>
            <linearGradient id="nextGrad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="nextGrad2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "typescript":
    case "ts":
      return (
        <svg width={size} height={size} viewBox="0 0 256 256" fill="none" className={className}>
          <rect width="256" height="256" rx="32" fill="#3178c6" />
          <path d="M150 156c4 7 12 13 23 13 12 0 19-6 19-15 0-22-37-14-37-43 0-16 13-28 34-28 14 0 24 5 30 14l-11 9c-4-6-11-9-19-9-10 0-16 6-16 13 0 21 37 13 37 43 0 17-13 30-37 30-17 0-29-6-36-17l13-10zM120 95H64v15h21v73h14v-73h21V95z" fill="#ffffff" />
        </svg>
      );

    case "javascript":
    case "js":
      return (
        <svg width={size} height={size} viewBox="0 0 256 256" fill="none" className={className}>
          <rect width="256" height="256" rx="32" fill="#f7df1e" />
          <path d="M125 183c0 23-14 34-34 34-18 0-29-9-35-21l18-11c4 7 8 13 16 13 8 0 13-4 13-14v-64h22v63zm46-1c6 10 15 17 29 17 12 0 20-6 20-15 0-11-8-15-22-21l-7-3c-21-9-35-20-35-43 0-21 17-37 42-37 18 0 31 6 39 21l-17 11c-4-7-10-12-22-12-10 0-17 6-17 13 0 8 7 12 18 17l8 3c24 10 39 21 39 45 0 26-20 39-45 39-24 0-40-11-47-26l17-9z" fill="#000000" />
        </svg>
      );

    case "tailwind":
    case "tailwindcss":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
            fill="#38bdf8"
          />
        </svg>
      );

    case "html":
    case "html5":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M4 2l1.6 18 6.4 2 6.4-2L20 2H4z" fill="#e34f26" />
          <path d="M12 3.8v16.4l5.1-1.6 1.3-14.8H12z" fill="#f06529" />
          <path d="M7.7 7h8.6l-.3 3.2H8l.3 3.3h7.4l-.5 5.5-3.2 1-3.2-1-.2-2.3H6.8l.4 4 4.8 1.5 4.8-1.5.7-7.8H7.4L7.7 7z" fill="#ffffff" />
        </svg>
      );

    case "css":
    case "css3":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M4 2l1.6 18 6.4 2 6.4-2L20 2H4z" fill="#1572b6" />
          <path d="M12 3.8v16.4l5.1-1.6 1.3-14.8H12z" fill="#33a9dc" />
          <path d="M12 7.1H7.7l.3 3.2h4V7.1zm0 6.4H8.3l.3 3.3 3.4.9v-3.2l-1.8-.5-.2-1.3h1.8v.8zm4.3-6.4H12v3.2h3.9l-.3 3.2H12v3.2l3.4-.9.6-6.5.3-2.2z" fill="#ffffff" />
        </svg>
      );

    case "nodejs":
    case "node":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2l8.7 5v10L12 22 3.3 17V7L12 2z" fill="#5fa04e" />
          <path d="M12 11.5c-1.4 0-2.5-.4-2.5-1.5 0-1.2 1-1.7 2.5-1.7s2.5.5 2.5 1.7c0 1.1-1.1 1.5-2.5 1.5zm0 1c2 0 4-.8 4-2.5 0-2-1.8-2.7-4-2.7s-4 .7-4 2.7c0 1.7 2 2.5 4 2.5z" fill="#ffffff" />
        </svg>
      );

    case "express":
    case "expressjs":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="6" fill="#1e293b" />
          <text x="5" y="16.5" fill="#f8fafc" fontFamily="monospace" fontSize="11" fontWeight="bold">ex</text>
        </svg>
      );

    case "mongodb":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2C12 2 7 8.5 7 14c0 3.5 2.2 6.5 5 7.8 2.8-1.3 5-4.3 5-7.8 0-5.5-5-12-5-12z" fill="#47a248" />
          <path d="M12 2v19.8c.2 0 .4-.1.6-.2 2.4-1.2 4.4-4 4.4-7.6 0-5.5-5-12-5-12z" fill="#499d4a" />
          <path d="M12 13.8V21c-.3 0-.6-.1-.9-.2-1.2-.6-2.1-1.6-2.7-2.8 1.4-.4 2.6-1.5 3.6-4.2z" fill="#ffffff" opacity="0.3" />
        </svg>
      );

    case "git":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M21.6 10.7l-8.3-8.3c-.6-.6-1.6-.6-2.2 0L9.4 4.1l2.8 2.8c.6-.2 1.3 0 1.8.5.5.5.7 1.2.5 1.8l2.7 2.7c.6-.2 1.3 0 1.8.5.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.6-.6-.7-1.4-.4-2.1l-2.5-2.5v5.8c.2.2.3.4.3.7 0 .9-.8 1.7-1.7 1.7-.9 0-1.7-.8-1.7-1.7 0-.7.4-1.3 1-1.6v-5.9c-.6-.3-1-.9-1-1.6 0-.6.3-1.1.7-1.4L6.1 4.9 2.4 8.6c-.6.6-.6 1.6 0 2.2l8.3 8.3c.6.6 1.6.6 2.2 0l8.7-8.7c.6-.5.6-1.5 0-2.1z" fill="#f05032" />
        </svg>
      );

    case "github":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case "vercel":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2L23 21H1L12 2Z" />
        </svg>
      );

    case "vscode":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M17.6 2.3l-8.4 7.6-4.5-3.5L2 8.1v7.8l2.7 1.7 4.5-3.5 8.4 7.6 4.4-2.1V4.4l-4.4-2.1zm.4 14.8l-6-4.6 6-4.6v9.2z" fill="#007acc" />
        </svg>
      );

    case "openai":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M22.28 9.37a5.98 5.98 0 00-.52-4.94 6.08 6.08 0 00-6.49-2.88A6 6 0 0010.8.35a6.07 6.07 0 00-5.74 4.17 6.06 6.06 0 00-4 2.9A6.05 6.05 0 002.3 16a5.99 5.99 0 00.52 4.94 6.08 6.08 0 006.49 2.88 6 6 0 004.47 1.2 6.07 6.07 0 005.74-4.17 6.06 6.06 0 004-2.9 6.05 6.05 0 00-1.24-8.58zm-8.8 12.9a4.48 4.48 0 01-2.88-1.04l.14-.08 4.78-2.76a.8.8 0 00.4-.69v-6.74l2.03 1.17v5.57a4.5 4.5 0 01-4.47 4.57zM3.6 18.2a4.48 4.48 0 01-.54-3.02l.14.09 4.78 2.76a.79.79 0 00.8 0l5.84-3.37v2.34l-4.83 2.79a4.5 4.5 0 01-6.19-1.59zm-1.8-9.4A4.5 4.5 0 014.16 6.1l-.01.17v5.52a.8.8 0 00.4.69l5.84 3.37-2.03 1.17-4.83-2.79a4.5 4.5 0 01-1.73-5.43zm16.5 3.37l-5.84-3.37 2.03-1.17 4.83 2.79a4.5 4.5 0 01.7 7.74l-.14-.09-4.78-2.76a.8.8 0 00-.8 0zm2.34-4.4a4.47 4.47 0 01.54 3.02l-.14-.09-4.78-2.76a.8.8 0 00-.8 0L9.62 11.48V9.14l4.83-2.79a4.5 4.5 0 016.19 1.59zM9.47 8.5L7.44 7.33v-5.57a4.5 4.5 0 017.35-1.55l-.14.08-4.78 2.76a.8.8 0 00-.4.69v4.76z" />
        </svg>
      );

    case "socketio":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-3h2.5l-4.5-6v3.5H8.5l4.5 5.5z" />
        </svg>
      );

    case "restapi":
    case "api":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M7 8h2m6 0h2M7 12h10" />
        </svg>
      );

    case "jwt":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 11l2 2 4-4" />
        </svg>
      );

    case "daisyui":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2a4 4 0 00-4 4c0 1.2.5 2.2 1.3 3A4 4 0 006 12a4 4 0 003 3.9A4 4 0 0012 22a4 4 0 004-4c0-1.2-.5-2.2-1.3-3A4 4 0 0018 12a4 4 0 00-3-3.9A4 4 0 0012 2zm0 8a2 2 0 110 4 2 2 0 010-4z" />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
  }
}
