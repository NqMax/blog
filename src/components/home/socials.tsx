import { FaGithub } from "react-icons/fa";

export function Socials() {
  const socials = [
    {
      name: "GitHub",
      label: "GitHub (Opens in a new tab)",
      url: "https://github.com/NqMax",
      icon: FaGithub,
    },
  ];

  return (
    <ul className="flex items-center">
      {socials.map((social) => (
        <li key={social.name}>
          <a
            href={social.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={social.label}
          >
            <span className="sr-only">{social.name}</span>
            <social.icon className="h-6 w-6 text-main transition hover:drop-shadow-[0px_0px_5px_theme('colors.main')]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
