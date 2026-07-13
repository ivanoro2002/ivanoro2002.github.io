let data = null;

const select = (selector) => document.querySelector(selector);

const themePresets = {
  green: {
    bg: "#eefaf3",
    dark: "#0b1312",
    dark2: "#13211f",
    dark3: "#20312d",
    primary: "#20c978",
    primaryDark: "#12865d",
    primarySoft: "#c8f7dc",
    secondary: "#67b7ff",
    warm: "#f0b84a",
    alert: "#ff8c7a",
  },
  blue: {
    bg: "#eef6ff",
    dark: "#08111f",
    dark2: "#101d33",
    dark3: "#1d3357",
    primary: "#3b82f6",
    primaryDark: "#1d4ed8",
    primarySoft: "#dbeafe",
    secondary: "#20c978",
    warm: "#f59e0b",
    alert: "#fb7185",
  },
  violet: {
    bg: "#f6f1ff",
    dark: "#130b24",
    dark2: "#20133a",
    dark3: "#342059",
    primary: "#8b5cf6",
    primaryDark: "#6d28d9",
    primarySoft: "#ede9fe",
    secondary: "#22c55e",
    warm: "#f59e0b",
    alert: "#fb7185",
  },
  amber: {
    bg: "#fff8e8",
    dark: "#1a1206",
    dark2: "#2b1d0a",
    dark3: "#463111",
    primary: "#f59e0b",
    primaryDark: "#b45309",
    primarySoft: "#fef3c7",
    secondary: "#3b82f6",
    warm: "#10b981",
    alert: "#f97316",
  },
  coral: {
    bg: "#fff3ef",
    dark: "#1d0e0a",
    dark2: "#311711",
    dark3: "#52271d",
    primary: "#f9735b",
    primaryDark: "#c2412d",
    primarySoft: "#ffe4dc",
    secondary: "#38bdf8",
    warm: "#f59e0b",
    alert: "#fb7185",
  },
  ruby: {
    bg: "#fff1f3",
    dark: "#1d0b10",
    dark2: "#33121c",
    dark3: "#562033",
    primary: "#e11d48",
    primaryDark: "#9f1239",
    primarySoft: "#ffe4e6",
    secondary: "#38bdf8",
    warm: "#f59e0b",
    alert: "#fb7185",
  },
  indigo: {
    bg: "#f2f5ff",
    dark: "#0d1024",
    dark2: "#171b3a",
    dark3: "#262d5f",
    primary: "#6366f1",
    primaryDark: "#4338ca",
    primarySoft: "#e0e7ff",
    secondary: "#22d3ee",
    warm: "#f59e0b",
    alert: "#fb7185",
  },
};

const hexToRgb = (hex) => {
  const normalized = hex.replace("#", "");
  return [
    Number.parseInt(normalized.slice(0, 2), 16),
    Number.parseInt(normalized.slice(2, 4), 16),
    Number.parseInt(normalized.slice(4, 6), 16),
  ].join(", ");
};

const applyAppearance = () => {
  const themeName = data?.appearance?.theme || "green";
  const theme = themePresets[themeName] || themePresets.green;
  const root = document.documentElement;
  const themeColor = document.querySelector('meta[name="theme-color"]');

  root.style.setProperty("--bg", theme.bg);
  root.style.setProperty("--dark", theme.dark);
  root.style.setProperty("--dark-2", theme.dark2);
  root.style.setProperty("--dark-3", theme.dark3);
  root.style.setProperty("--green", theme.primary);
  root.style.setProperty("--green-2", theme.primaryDark);
  root.style.setProperty("--mint", theme.primarySoft);
  root.style.setProperty("--blue", theme.secondary);
  root.style.setProperty("--amber", theme.warm);
  root.style.setProperty("--rose", theme.alert);
  root.style.setProperty("--green-rgb", hexToRgb(theme.primary));
  root.style.setProperty("--blue-rgb", hexToRgb(theme.secondary));
  root.style.setProperty("--amber-rgb", hexToRgb(theme.warm));

  if (themeColor) themeColor.setAttribute("content", theme.dark);
};

const icons = {
  briefcase: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 5.5A2.5 2.5 0 0 1 11.5 3h1A2.5 2.5 0 0 1 15 5.5V7h3.5A2.5 2.5 0 0 1 21 9.5v8A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-8A2.5 2.5 0 0 1 5.5 7H9V5.5Zm1.5 0V7h3V5.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1ZM5.5 8.5a1 1 0 0 0-1 1v1.9c1.95 1.1 4.45 1.73 7.5 1.73s5.55-.63 7.5-1.73V9.5a1 1 0 0 0-1-1h-13Zm14 4.6c-2.06.98-4.56 1.47-7.5 1.47s-5.44-.49-7.5-1.47v4.4a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-4.4Z"/>
    </svg>
  `,
  download: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11.25 4a.75.75 0 0 1 1.5 0v8.2l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V4ZM5 15.75a.75.75 0 0 1 .75.75v2h12.5v-2a.75.75 0 0 1 1.5 0v2.25A1.25 1.25 0 0 1 18.5 20H5.5a1.25 1.25 0 0 1-1.25-1.25V16.5a.75.75 0 0 1 .75-.75Z"/>
    </svg>
  `,
  external: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 5.25A1.75 1.75 0 0 0 5.25 7v10A1.75 1.75 0 0 0 7 18.75h10A1.75 1.75 0 0 0 18.75 17v-3a.75.75 0 0 0-1.5 0v3a.25.25 0 0 1-.25.25H7a.25.25 0 0 1-.25-.25V7A.25.25 0 0 1 7 6.75h3a.75.75 0 0 0 0-1.5H7Zm6.5 0a.75.75 0 0 0 0 1.5h2.69l-5.22 5.22a.75.75 0 1 0 1.06 1.06l5.22-5.22v2.69a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-.75-.75h-4.5Z"/>
    </svg>
  `,
  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.25a9.75 9.75 0 0 0-3.08 19c.49.09.67-.21.67-.47v-1.67c-2.73.59-3.31-1.17-3.31-1.17-.45-1.13-1.09-1.44-1.09-1.44-.89-.61.07-.6.07-.6.98.07 1.5 1.01 1.5 1.01.88 1.5 2.31 1.07 2.87.82.09-.64.34-1.07.62-1.32-2.18-.25-4.47-1.09-4.47-4.86 0-1.07.38-1.95 1.01-2.64-.1-.25-.44-1.25.1-2.6 0 0 .83-.26 2.69 1a9.33 9.33 0 0 1 4.9 0c1.86-1.26 2.68-1 2.68-1 .54 1.35.2 2.35.1 2.6.63.69 1.01 1.57 1.01 2.64 0 3.78-2.3 4.61-4.49 4.85.35.31.67.91.67 1.84v2.72c0 .26.18.57.68.47A9.75 9.75 0 0 0 12 2.25Z"/>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.4 8.62h3.08v9.88H5.4V8.62Zm1.54-4.91a1.78 1.78 0 1 1 0 3.56 1.78 1.78 0 0 1 0-3.56Zm3.47 4.91h2.95v1.35h.04c.41-.78 1.42-1.6 2.92-1.6 3.12 0 3.7 2.05 3.7 4.72v5.41h-3.08v-4.8c0-1.14-.02-2.61-1.59-2.61-1.6 0-1.84 1.25-1.84 2.53v4.88h-3.1V8.62Z"/>
    </svg>
  `,
  mail: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 6.75h15a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5Zm.72 1.5L12 12.88l6.78-4.63H5.22Zm14.28 1.34-6.66 4.54a1.5 1.5 0 0 1-1.68 0L4.5 9.59v6.16h15V9.59Z"/>
    </svg>
  `,
  whatsapp: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.05 3.2a8.64 8.64 0 0 0-7.46 13.02L3.6 20.8l4.69-1.2a8.63 8.63 0 1 0 3.76-16.4Zm0 1.55a7.08 7.08 0 1 1-3.4 13.3l-.28-.15-2.66.68.56-2.6-.18-.29a7.08 7.08 0 0 1 5.96-10.94Zm-3.1 3.7c-.16 0-.41.06-.63.3-.22.25-.83.81-.83 1.98 0 1.17.85 2.3.97 2.46.12.16 1.65 2.64 4.05 3.6 2 .8 2.4.64 2.84.6.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.18-1.4-1.32-1.64-.14-.24-.01-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.41h-.44Z"/>
    </svg>
  `,
  python: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.1 2.5c-3.1 0-3.5 1.35-3.5 1.35v2.2h3.6v.75H6.8S4 6.5 4 10.35s2.45 3.7 2.45 3.7H8v-2.2s-.08-2.45 2.4-2.45h3.55s2.1.03 2.1-2.02V4.2s.32-1.7-3.95-1.7Zm-1.95 1.25c.36 0 .65.29.65.65s-.29.65-.65.65-.65-.29-.65-.65.29-.65.65-.65Z"/>
      <path d="M11.9 21.5c3.1 0 3.5-1.35 3.5-1.35v-2.2h-3.6v-.75h5.4s2.8.3 2.8-3.55-2.45-3.7-2.45-3.7H16v2.2s.08 2.45-2.4 2.45h-3.55s-2.1-.03-2.1 2.02v3.18s-.32 1.7 3.95 1.7Zm1.95-1.25a.65.65 0 1 1 0-1.3.65.65 0 0 1 0 1.3Z"/>
    </svg>
  `,
  java: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.7 2.6c1.4 1.3-.4 2.1-1.2 3.1-.63.8.23 1.5.23 1.5-1.9-1.2-1.45-2.35-.58-3.22.72-.72 1.9-1.28 1.55-1.38Zm2.1 3.1c2 1.8-2.02 2.85-1.25 4.65.22.5.9.98.9.98-2.35-.85-2.42-2.15-1.55-3.25.72-.92 2.4-1.48 1.9-2.38ZM8.2 13.5c-1 .35-1.55.82-1.55 1.32 0 1.18 3.15 1.8 6.25 1.18-.5.37-1.13.68-1.88.92-3.52.23-6.27-.58-6.27-1.93 0-.78 1.35-1.4 3.45-1.49Zm8.2-.32c1.25.32 2.05.9 2.05 1.58 0 .92-1.43 1.65-3.55 2.02.6-.42 1.02-.88 1.25-1.38.65-.28 1.02-.62 1.02-.98 0-.43-.3-.8-.77-1.24ZM7.1 18.05c2.55.88 7.55.8 10.2-.12-.6.78-2.65 1.47-5.15 1.47-2.75 0-4.55-.52-5.05-1.35Z"/>
    </svg>
  `,
  html: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m4 2 1.45 17L12 21.8 18.55 19 20 2H4Zm12.2 5.5H8l.2 2.1H16l-.65 6.55L12 17.3l-3.34-1.15-.22-2.5h2.05l.1.95 1.41.45 1.42-.45.28-2.86H8.35L7.75 5.4h8.65l-.2 2.1Z"/>
    </svg>
  `,
  css: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m4 2 1.45 17L12 21.8 18.55 19 20 2H4Zm12.3 3.45-.25 2.08H10.2l.13 2.03h5.5l-.65 6.55L12 17.3l-3.2-1.18-.2-2.42h2.04l.1.9 1.26.46 1.34-.46.22-2.83H8.45l-.5-6.32h8.35Z"/>
    </svg>
  `,
  database: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5c4.14 0 7.5 1.34 7.5 3s-3.36 3-7.5 3-7.5-1.34-7.5-3 3.36-3 7.5-3Zm-7.5 5c1.32 1.23 4.02 2 7.5 2s6.18-.77 7.5-2v3c0 1.66-3.36 3-7.5 3s-7.5-1.34-7.5-3v-3Zm0 5c1.32 1.23 4.02 2 7.5 2s6.18-.77 7.5-2v3c0 1.66-3.36 3-7.5 3s-7.5-1.34-7.5-3v-3Z"/>
    </svg>
  `,
  git: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.2 10.8 13.2 2.8a1.7 1.7 0 0 0-2.4 0L9.2 4.4l2.1 2.1a2 2 0 0 1 2.2 2.65l2.02 2.02a2 2 0 1 1-1.06 1.06l-1.9-1.9v5.1a2 2 0 1 1-1.5 0V10.2a2 2 0 0 1-.82-2.62L8.14 5.48 2.8 10.8a1.7 1.7 0 0 0 0 2.4l8 8a1.7 1.7 0 0 0 2.4 0l8-8a1.7 1.7 0 0 0 0-2.4Z"/>
    </svg>
  `,
  vscode: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.7 4.1 15.3 2 7.2 9.4 3.9 6.9 2.6 8.1 5.55 12 2.6 15.9l1.3 1.2 3.3-2.5L15.3 22l4.4-2.1c.43-.2.7-.63.7-1.1V5.2c0-.47-.27-.9-.7-1.1Zm-4.4 12.2L9.7 12l5.6-4.3v8.6Z"/>
    </svg>
  `,
  office: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.7 19.5 5v14L12 21.3 4.5 19V5L12 2.7Zm0 2.1L6.4 6.5v11l5.6 1.7 5.6-1.7v-11L12 4.8Zm-2.6 4h5.2v1.7h-3.2v1.4h2.9v1.65h-2.9v1.75h3.35V17H9.4V8.8Z"/>
    </svg>
  `,
  deploy: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5c2.3 1.45 3.75 3.55 3.75 6.15 0 1.62-.55 3.07-1.48 4.28l.52 2.42-2.12-1.24a7.2 7.2 0 0 1-1.34 0l-2.12 1.24.52-2.42a6.75 6.75 0 0 1-1.48-4.28C8.25 7.05 9.7 4.95 12 3.5Zm0 2.04c-1.4 1.15-2.25 2.55-2.25 4.1 0 1.38.62 2.62 1.62 3.4h1.26a4.2 4.2 0 0 0 1.62-3.4c0-1.55-.85-2.95-2.25-4.1ZM7.7 15.2l-1.25 2.35 2.55-.72 1.35-1.35-2.65-.28Zm8.6 0-2.65.28L15 16.83l2.55.72-1.25-2.35ZM12 8.2a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z"/>
    </svg>
  `,
  javascript: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4h16v16H4V4Zm4.5 12.1c.35.58.9 1.05 1.8 1.05.78 0 1.28-.39 1.28-1.55V9h-1.8v6.55c0 .48-.2.6-.5.6-.32 0-.55-.22-.78-.62l-1.5.57Zm4.15-.1c.52.86 1.55 1.3 2.85 1.3 1.48 0 2.6-.76 2.6-2.16 0-1.28-.75-1.85-2.1-2.43l-.48-.2c-.68-.3-.98-.5-.98-.98 0-.4.3-.7.78-.7.46 0 .75.2 1.04.7l1.42-.92c-.55-.98-1.32-1.35-2.46-1.35-1.55 0-2.54.98-2.54 2.27 0 1.4.82 2.04 2.05 2.56l.48.2c.72.32 1.15.52 1.15 1.03 0 .43-.4.75-1.03.75-.75 0-1.17-.39-1.5-.94l-1.48.86Z"/>
    </svg>
  `,
  react: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 10.6a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8Zm0-2.1c4.6 0 8.35 1.57 8.35 3.5S16.6 15.5 12 15.5 3.65 13.93 3.65 12 7.4 8.5 12 8.5Zm0 1.25c-3.8 0-7.05 1.1-7.05 2.25S8.2 14.25 12 14.25s7.05-1.1 7.05-2.25S15.8 9.75 12 9.75Zm3.1-2.43c2.3 3.98 2.8 8.01 1.13 8.98-1.67.96-4.87-1.54-7.17-5.53-2.3-3.98-2.8-8.01-1.13-8.98 1.67-.96 4.87 1.54 7.17 5.53Zm-1.08.62C12.12 4.65 9.67 2.3 8.57 2.93 7.47 3.57 8.2 6.9 10.1 10.18c1.9 3.29 4.35 5.64 5.45 5.01 1.1-.64.37-3.97-1.53-7.25Zm-5.12-.62c2.3-3.99 5.5-6.49 7.17-5.53 1.67.97 1.17 5-1.13 8.98-2.3 3.99-5.5 6.49-7.17 5.53-1.67-.97-1.17-5 1.13-8.98Zm1.08.62c-1.9 3.28-2.63 6.61-1.53 7.25 1.1.63 3.55-1.72 5.45-5.01 1.9-3.28 2.63-6.61 1.53-7.25-1.1-.63-3.55 1.72-5.45 5.01Z"/>
    </svg>
  `,
  server: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.5 4h13A1.5 1.5 0 0 1 20 5.5v4A1.5 1.5 0 0 1 18.5 11h-13A1.5 1.5 0 0 1 4 9.5v-4A1.5 1.5 0 0 1 5.5 4Zm0 9h13a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-4A1.5 1.5 0 0 1 5.5 13ZM7 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm0 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/>
    </svg>
  `,
  testing: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 3.5h6v1.7l3.85 6.67A5.7 5.7 0 0 1 13.9 20.4H10.1a5.7 5.7 0 0 1-4.95-8.53L9 5.2V3.5Zm1.5 2.1-4.05 7.02A4.2 4.2 0 0 0 10.1 18.9h3.8a4.2 4.2 0 0 0 3.65-6.28L13.5 5.6h-3Zm-.6 7.1 1.35 1.35 2.95-2.95 1.06 1.06-4.01 4.01-2.41-2.41L9.9 12.7Z"/>
    </svg>
  `,
  check: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.75 20.25 6v5.9c0 4.3-2.72 7.63-8.25 9.35-5.53-1.72-8.25-5.05-8.25-9.35V6L12 2.75Zm3.95 6.5-4.75 4.75-2.15-2.15-1.1 1.1 3.25 3.25 5.85-5.85-1.1-1.1Z"/>
    </svg>
  `,
  team: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 10.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM4.5 18.5c0-2.65 2-4.75 4.5-4.75s4.5 2.1 4.5 4.75V20h-9v-1.5Zm10.25.25c0-1.55-.55-2.95-1.47-4 .5-.32 1.08-.5 1.72-.5 2.2 0 4 1.85 4 4.25V20h-4.25v-1.25Z"/>
    </svg>
  `,
  adapt: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4a8 8 0 0 1 7.7 5.84l1.05-1.05 1.06 1.06-2.9 2.9-2.9-2.9 1.06-1.06 1.1 1.1A6.5 6.5 0 0 0 5.5 12H4a8 8 0 0 1 8-8Zm-6.9 7.25 2.9 2.9-1.06 1.06-1.1-1.1A6.5 6.5 0 0 0 18.5 12H20a8 8 0 0 1-15.7 2.16l-1.05 1.05-1.06-1.06 2.91-2.9Z"/>
    </svg>
  `,
  problem: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5a7 7 0 0 1 3.42 13.1l-.92 3.9h-5l-.92-3.9A7 7 0 0 1 12 3.5Zm0 1.5a5.5 5.5 0 0 0-2.3 10.5l.36.17.78 3.33h2.32l.78-3.33.36-.17A5.5 5.5 0 0 0 12 5Zm-2.6 5.45 1.06-1.06L12 10.93l1.54-1.54 1.06 1.06L13.06 12l1.54 1.54-1.06 1.06L12 13.06l-1.54 1.54-1.06-1.06L10.94 12 9.4 10.45Z"/>
    </svg>
  `,
  spark: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 2.8 1.85 5.35L19.2 10l-5.35 1.85L12 17.2l-1.85-5.35L4.8 10l5.35-1.85L12 2.8Zm6.2 11.2.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6ZM5.7 14.2l.65 1.85 1.85.65-1.85.65-.65 1.85-.65-1.85-1.85-.65 1.85-.65.65-1.85Z"/>
    </svg>
  `,
};

const createLink = ({ label, href, kind = "ghost", disabled = false, icon = "external" }) => {
  const link = document.createElement("a");
  link.className = `btn ${kind}${disabled ? " disabled" : ""}`;
  link.innerHTML = `<span class="link-icon">${icons[icon] || ""}</span><span>${label}</span>`;

  if (disabled || !href) {
    link.href = "#";
    link.setAttribute("aria-disabled", "true");
  } else {
    link.href = href;
    if (href.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  }

  return link;
};

const fillText = (selector, text) => {
  const element = select(selector);
  if (element) element.textContent = text;
};

const renderHero = () => {
  fillText("#hero-summary", data.profile.summary);

  const actions = select("#hero-actions");
  actions.append(
    createLink({ label: "Ver proyectos", href: "#proyectos", kind: "primary", icon: "briefcase" }),
    createLink({ label: "Contacto", href: "#contacto", icon: "mail" }),
    createLink({
      label: data.profile.cvUrl ? "Descargar CV" : "CV pendiente",
      href: data.profile.cvUrl,
      disabled: !data.profile.cvUrl,
      icon: "download",
    }),
  );

  const quickFacts = select("#quick-facts");
  (data.quickFacts || []).forEach((fact) => {
    const item = document.createElement("div");
    item.innerHTML = `<dt>${fact.label}</dt><dd>${fact.value}</dd>`;
    quickFacts.append(item);
  });

  const focusList = select("#focus-list");
  (data.focus || []).forEach((item) => {
    const row = document.createElement("div");
    row.className = "focus-item";
    row.innerHTML = `<i class="focus-dot" aria-hidden="true"></i><span>${item}</span>`;
    focusList.append(row);
  });

  const signal = select("#hero-signal");
  const skillCount = (data.skills || []).reduce((total, category) => total + (category.items || []).length, 0);
  const signals = [
    { value: (data.projects || []).length, label: "proyectos" },
    { value: skillCount, label: "habilidades" },
    { value: data.learning?.length || 0, label: "cursos" },
  ];

  signals.forEach((item) => {
    const pill = document.createElement("div");
    pill.className = "signal-pill";
    pill.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
    signal.append(pill);
  });
};

const renderAbout = () => {
  fillText("#about-main", data.about.main);
  fillText("#about-secondary", data.about.secondary);

  const strip = select("#profile-strip");
  (data.profileStrip || []).forEach((item) => {
    const card = document.createElement("div");
    card.className = "strip-item";
    card.innerHTML = `<span>${item.label}</span><strong>${item.value}</strong>`;
    strip.append(card);
  });
};

const renderOpportunityCards = () => {
  const grid = select("#opportunity-grid");
  if (!grid || !Array.isArray(data.opportunityCards)) return;

  data.opportunityCards.forEach((item) => {
    const card = document.createElement("article");
    card.className = "opportunity-card";
    card.innerHTML = `
      <span>${item.label}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    grid.append(card);
  });
};

const renderProjects = () => {
  const grid = select("#project-grid");
  const filters = select("#project-filters");
  const count = select("#project-count");
  const projects = Array.isArray(data.projects) ? data.projects : [];
  const projectTypes = ["Todos", ...new Set(projects.map((project) => project.type).filter(Boolean))];

  const updateCount = (visibleCount) => {
    count.textContent = `${visibleCount} proyecto${visibleCount === 1 ? "" : "s"} visible${visibleCount === 1 ? "" : "s"}`;
  };

  const setProjectFilter = (filter) => {
    let visibleCount = 0;
    grid.querySelectorAll(".project-card").forEach((card) => {
      const isVisible = filter === "Todos" || card.dataset.type === filter;
      card.classList.toggle("is-hidden", !isVisible);
      if (isVisible) visibleCount += 1;
    });

    filters.querySelectorAll(".project-filter").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
    });

    updateCount(visibleCount);
  };

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.dataset.type = project.type;

    const tags = (project.tags || []).map((tag) => `<li>${tag}</li>`).join("");
    const image = project.image
      ? `<div class="project-image"><img src="${project.image}" alt="Vista previa de ${project.name}"></div>`
      : "";
    const projectDetails = [
      { label: "Objetivo", text: project.problem },
      { label: "Aprendizaje", text: project.learning },
      { label: "Proximo paso", text: project.nextStep },
    ]
      .filter((detail) => detail.text)
      .map(
        (detail) => `
          <div class="project-detail">
            <span>${detail.label}</span>
            <p>${detail.text}</p>
          </div>
        `,
      )
      .join("");
    const links = (project.links || [])
      .map((link) => {
        const disabled = !link.href;
        const attrs = disabled
          ? 'href="#" aria-disabled="true" class="disabled"'
          : `href="${link.href}"${link.href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}`;
        return `<a ${attrs}><span class="project-link-icon">${icons[link.icon || "external"] || ""}</span><span>${link.label}</span></a>`;
      })
      .join("");

    card.innerHTML = `
      <div class="project-status">
        <span>${project.status}</span>
        <span>${project.type}</span>
      </div>
      <h3>${project.name}</h3>
      ${image}
      <p>${project.description}</p>
      ${projectDetails ? `<div class="project-details">${projectDetails}</div>` : ""}
      <ul class="tag-list" aria-label="Tecnologias usadas">${tags}</ul>
      <div class="project-links">${links}</div>
    `;

    grid.append(card);
  });

  projectTypes.forEach((type) => {
    const button = document.createElement("button");
    button.className = "project-filter";
    button.type = "button";
    button.dataset.filter = type;
    button.textContent = type;
    button.setAttribute("aria-pressed", String(type === "Todos"));
    button.addEventListener("click", () => setProjectFilter(type));
    filters.append(button);
  });

  updateCount(projects.length);
};

const renderSkills = () => {
  const tabs = select("#skill-tabs");
  const panel = select("#skill-panel");

  const setActive = (categoryId) => {
    tabs.querySelectorAll(".skill-tab").forEach((tab) => {
      tab.setAttribute("aria-selected", String(tab.dataset.category === categoryId));
    });

    const category = data.skills.find((item) => item.id === categoryId);
    panel.innerHTML = category.items
      .map(
        (item) => `
          <div class="skill-item" style="--skill-accent: ${item.accent || "#20c978"}">
            <span class="skill-icon">${icons[item.icon || "external"] || ""}</span>
            <span class="skill-copy">
              <strong>${item.name}</strong>
              <span>${item.note}</span>
            </span>
          </div>
        `,
      )
      .join("");
  };

  (data.skills || []).forEach((category, index) => {
    const tab = document.createElement("button");
    tab.className = "skill-tab";
    tab.type = "button";
    tab.role = "tab";
    tab.dataset.category = category.id;
    tab.textContent = category.label;
    tab.setAttribute("aria-selected", String(index === 0));
    tab.addEventListener("click", () => setActive(category.id));
    tabs.append(tab);
  });

  if (data.skills?.[0]) setActive(data.skills[0].id);
};

const renderLearning = () => {
  const list = select("#learning-list");
  if (!list || !Array.isArray(data.learning)) return;

  data.learning.forEach((item) => {
    const row = document.createElement("article");
    row.className = "learning-item";
    row.innerHTML = `
      <span>${item.status}</span>
      <div>
        <h3>${item.title}</h3>
        <strong>${item.provider}</strong>
        <p>${item.description}</p>
      </div>
    `;
    list.append(row);
  });
};

const renderTimeline = () => {
  const timeline = select("#timeline");
  (data.timeline || []).forEach((item) => {
    const row = document.createElement("article");
    row.className = "timeline-item";
    row.innerHTML = `<span>${item.period}</span><h3>${item.title}</h3><p>${item.description}</p>`;
    timeline.append(row);
  });
};

const renderProfiles = () => {
  const actions = select("#profile-actions");
  (data.profileLinks || []).forEach((item) => {
    const link = document.createElement("a");
    link.className = "profile-action";
    link.href = item.href || "#";

    if (!item.href) {
      link.setAttribute("aria-disabled", "true");
      link.classList.add("disabled");
    } else if (item.href.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }

    link.innerHTML = `
      <span class="profile-action-icon">${icons[item.icon || "external"] || ""}</span>
      <span>
        <strong>${item.label}</strong>
        <span>${item.description}</span>
      </span>
      <em>${item.cta}</em>
    `;
    actions.append(link);
  });
};

const renderContact = () => {
  const links = select("#contact-links");
  (data.contactLinks || []).forEach((item) => {
    const link = document.createElement("a");
    link.className = `contact-button ${item.icon || ""}`;
    link.href = item.href || "#";
    link.innerHTML = `
      <span class="contact-icon">${icons[item.icon] || ""}</span>
      <span class="contact-copy">
        <strong>${item.label}</strong>
        <span>${item.detail || ""}</span>
      </span>
    `;
    if (item.ariaLabel) link.setAttribute("aria-label", item.ariaLabel);
    if (!item.href) {
      link.classList.add("disabled");
      link.setAttribute("aria-disabled", "true");
    } else if (item.href.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    links.append(link);
  });
};

const setupNav = () => {
  const navToggle = select(".nav-toggle");
  const navMenu = select(".nav-menu");

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navMenu.classList.remove("open");
      document.body.classList.remove("menu-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
};

const setupReveal = () => {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
  );

  revealItems.forEach((item) => observer.observe(item));
};

const init = () => {
  if (!data) return;
  applyAppearance();
  renderHero();
  renderAbout();
  renderOpportunityCards();
  renderProjects();
  renderSkills();
  renderLearning();
  renderTimeline();
  renderProfiles();
  renderContact();
  setupNav();
  setupReveal();
  fillText("#year", new Date().getFullYear());
};

fetch("content/portfolio.json", { cache: "no-store" })
  .then((response) => {
    if (!response.ok) throw new Error("No se pudo cargar content/portfolio.json");
    return response.json();
  })
  .then((portfolioData) => {
    data = portfolioData;
    init();
  })
  .catch((error) => {
    console.error(error);
    document.body.insertAdjacentHTML(
      "afterbegin",
      '<div style="padding:16px;background:#ffebe6;color:#601b12;font-weight:700">No se pudo cargar el contenido del portafolio.</div>',
    );
  });
