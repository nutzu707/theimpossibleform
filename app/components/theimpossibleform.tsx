"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";

// ... countryList and countryNeighbors unchanged ...

const countryList = [
  // ... (unchanged, omitted for brevity)
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Congo (Democratic Republic of the)",
  "Costa Rica",
  "Côte d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini (fmr. Swaziland)",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (formerly Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

const countryNeighbors: { [country: string]: number } = {
  // ... (unchanged, omitted for brevity)
  "Afghanistan": 6,
  "Albania": 4,
  "Algeria": 7,
  "Andorra": 2,
  "Angola": 4,
  "Antigua and Barbuda": 0,
  "Argentina": 5,
  "Armenia": 4,
  "Australia": 0,
  "Austria": 8,
  "Azerbaijan": 5,
  "Bahamas": 0,
  "Bahrain": 0,
  "Bangladesh": 2,
  "Barbados": 0,
  "Belarus": 5,
  "Belgium": 4,
  "Belize": 2,
  "Benin": 4,
  "Bhutan": 2,
  "Bolivia": 5,
  "Bosnia and Herzegovina": 3,
  "Botswana": 4,
  "Brazil": 10,
  "Brunei": 1,
  "Bulgaria": 5,
  "Burkina Faso": 6,
  "Burundi": 3,
  "Cabo Verde": 0,
  "Cambodia": 3,
  "Cameroon": 6,
  "Canada": 1,
  "Central African Republic": 6,
  "Chad": 6,
  "Chile": 3,
  "China": 14,
  "Colombia": 5,
  "Comoros": 0,
  "Congo (Congo-Brazzaville)": 5,
  "Congo (Democratic Republic of the)": 9,
  "Costa Rica": 2,
  "Côte d'Ivoire": 5,
  "Croatia": 5,
  "Cuba": 0,
  "Cyprus": 0,
  "Czechia (Czech Republic)": 4,
  "Denmark": 1,
  "Djibouti": 3,
  "Dominica": 0,
  "Dominican Republic": 1,
  "Ecuador": 2,
  "Egypt": 4,
  "El Salvador": 2,
  "Equatorial Guinea": 2,
  "Eritrea": 3,
  "Estonia": 2,
  "Eswatini (fmr. Swaziland)": 2,
  "Ethiopia": 5,
  "Fiji": 0,
  "Finland": 3,
  "France": 8,
  "Gabon": 3,
  "Gambia": 1,
  "Georgia": 4,
  "Germany": 9,
  "Ghana": 3,
  "Greece": 4,
  "Grenada": 0,
  "Guatemala": 4,
  "Guinea": 6,
  "Guinea-Bissau": 2,
  "Guyana": 3,
  "Haiti": 1,
  "Honduras": 3,
  "Hungary": 7,
  "Iceland": 0,
  "India": 6,
  "Indonesia": 3,
  "Iran": 7,
  "Iraq": 6,
  "Ireland": 1,
  "Israel": 4,
  "Italy": 6,
  "Jamaica": 0,
  "Japan": 0,
  "Jordan": 5,
  "Kazakhstan": 5,
  "Kenya": 5,
  "Kiribati": 0,
  "Kuwait": 2,
  "Kyrgyzstan": 4,
  "Laos": 5,
  "Latvia": 4,
  "Lebanon": 2,
  "Lesotho": 1,
  "Liberia": 3,
  "Libya": 6,
  "Liechtenstein": 2,
  "Lithuania": 4,
  "Luxembourg": 3,
  "Madagascar": 0,
  "Malawi": 3,
  "Malaysia": 3,
  "Maldives": 0,
  "Mali": 7,
  "Malta": 0,
  "Marshall Islands": 0,
  "Mauritania": 4,
  "Mauritius": 0,
  "Mexico": 3,
  "Micronesia": 0,
  "Moldova": 2,
  "Monaco": 1,
  "Mongolia": 2,
  "Montenegro": 3,
  "Morocco": 5,
  "Mozambique": 4,
  "Myanmar (formerly Burma)": 5,
  "Namibia": 4,
  "Nauru": 0,
  "Nepal": 2,
  "Netherlands": 2,
  "New Zealand": 0,
  "Nicaragua": 2,
  "Niger": 7,
  "Nigeria": 4,
  "North Korea": 3,
  "North Macedonia": 5,
  "Norway": 3,
  "Oman": 3,
  "Pakistan": 4,
  "Palau": 0,
  "Palestine State": 2,
  "Panama": 2,
  "Papua New Guinea": 1,
  "Paraguay": 3,
  "Peru": 5,
  "Philippines": 0,
  "Poland": 7,
  "Portugal": 1,
  "Qatar": 1,
  "Romania": 5,
  "Russia": 16,
  "Rwanda": 4,
  "Saint Kitts and Nevis": 0,
  "Saint Lucia": 0,
  "Saint Vincent and the Grenadines": 0,
  "Samoa": 0,
  "San Marino": 1,
  "Sao Tome and Principe": 0,
  "Saudi Arabia": 7,
  "Senegal": 4,
  "Serbia": 8,
  "Seychelles": 0,
  "Sierra Leone": 2,
  "Singapore": 1,
  "Slovakia": 5,
  "Slovenia": 4,
  "Solomon Islands": 0,
  "Somalia": 3,
  "South Africa": 6,
  "South Korea": 2,
  "South Sudan": 6,
  "Spain": 5,
  "Sri Lanka": 0,
  "Sudan": 7,
  "Suriname": 2,
  "Sweden": 2,
  "Switzerland": 5,
  "Syria": 5,
  "Tajikistan": 4,
  "Tanzania": 8,
  "Thailand": 4,
  "Timor-Leste": 1,
  "Togo": 3,
  "Tonga": 0,
  "Trinidad and Tobago": 0,
  "Tunisia": 2,
  "Turkey": 8,
  "Turkmenistan": 4,
  "Tuvalu": 0,
  "Uganda": 5,
  "Ukraine": 7,
  "United Arab Emirates": 2,
  "United Kingdom": 1,
  "United States of America": 2,
  "Uruguay": 2,
  "Uzbekistan": 5,
  "Vanuatu": 0,
  "Vatican City": 1,
  "Venezuela": 3,
  "Vietnam": 3,
  "Yemen": 2,
  "Zambia": 8,
  "Zimbabwe": 4
};

const fields = [
  { name: "firstname", label: "Enter your first name", type: "text" },
  { name: "lastname", label: "Enter your last name", type: "text" },
  { name: "email", label: "Enter your email", type: "email" },
  { name: "birthdate", label: "Enter your birth date", type: "date" },
  // The math equation field will be handled separately, not in this array
  // Country will be handled separately
  // Neighbors will be handled separately
];

type ValuesType = { [key: string]: string };

function hasNumber(str: string) {
  return /\d/.test(str);
}

function onlyLetters(str: string) {
  return /^[a-zA-Z]*$/.test(str);
}

function allVowelsUppercased(str: string) {
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if ("aeiouAEIOU".includes(c)) {
      if (!"AEIOU".includes(c)) {
        return false;
      }
    }
  }
  return true;
}

// New: All consonants must be lowercase
function allConsonantsLowercased(str: string) {
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (/[a-zA-Z]/.test(c) && !"aeiouAEIOU".includes(c)) {
      if (c !== c.toLowerCase()) {
        return false;
      }
    }
  }
  return true;
}

// Email validation: must include "@" and "."
function isValidEmail(str: string) {
  return str.includes("@") && str.includes(".");
}

// Leet speak mapping
const leetMap: { [key: string]: string } = {
  a: "4",
  A: "4",
  e: "3",
  E: "3",
  i: "1",
  I: "1",
  o: "0",
  O: "0",
  s: "5",
  S: "5",
  t: "7",
  T: "7",
  l: "1",
  L: "1",
  b: "8",
  B: "8",
  g: "9",
  G: "9",
  z: "2",
  Z: "2",
};

// Improved leet email check: all leet-mappable letters must be replaced, but ignore @ and .
function isLeetEmail(str: string) {
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c === "@" || c === ".") continue;
    // If this is a letter that can be leet-mapped, it must be replaced
    if (leetMap[c]) {
      if (str[i] !== leetMap[c]) {
        return false;
      }
    }
    // If this is a leet replacement, that's fine
    // If this is a letter that can't be leet-mapped, that's fine
  }
  return true;
}

// Leet speak tooltip content
const leetTooltip = (
  <>
    Leet speak means replacing certain letters with numbers or symbols:<br />
    A &rarr; 4, E &rarr; 3, I &rarr; 1, O &rarr; 0, S &rarr; 5, T &rarr; 7, L &rarr; 1, B &rarr; 8, G &rarr; 9, Z &rarr; 2<br />
    For example: &quot;email&quot; &rarr; &quot;3m41l&quot;
  </>
);

function LeetTooltipButton() {
  return (
    <span className="relative group ml-1 align-middle">
      <button
        type="button"
        tabIndex={-1}
        className="bg-gray-200 rounded-full w-6 h-6 text-sm font-bold text-gray-700 flex items-center justify-center border border-gray-400 cursor-pointer"
        aria-label="What is leet speak?"
        style={{ lineHeight: "1" }}
      >
        ?
      </button>
      <span className="absolute left-7 top-1/2 -translate-y-1/2 z-10 hidden group-hover:block bg-white border border-gray-300 rounded p-3 text-sm text-gray-800 shadow-lg w-72">
        {leetTooltip}
      </span>
    </span>
  );
}

// Helper to calculate age from birthdate string (YYYY-MM-DD)
function getAge(birthdate: string): number | null {
  if (!birthdate) return null;
  const birth = new Date(birthdate);
  if (isNaN(birth.getTime())) return null;
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

// Helper to check if a string is a valid math equation using only + - * /
function isValidMathEquation(str: string) {
  // Only allow digits, spaces, +, -, *, /
  return /^[\d\s+\-*/()]+$/.test(str);
}

// Helper to check if a string contains at least one math operator (+, -, *, /)
function containsMathOperator(str: string) {
  return /[+\-*/]/.test(str);
}

// Helper to safely evaluate a math equation string
function safeEval(expr: string): number | null {
  // Only allow digits, spaces, +, -, *, /, and parentheses
  if (!/^[\d\s+\-*/()]+$/.test(expr)) return null;
  try {
    // Use Function constructor for safe evaluation (no variables, only math)
    // Remove double operators, e.g. "++", "--", etc.
    if (/[\+\-\*\/]{2,}/.test(expr.replace(/\s+/g, ""))) return null;
    // Remove leading/trailing operators
    if (/^[\+\*\/]/.test(expr.trim()) || /[\+\-\*\/]$/.test(expr.trim())) return null;
    // Evaluate
    const fn = new Function(`return (${expr})`);
    const result = fn();
    if (typeof result === "number" && isFinite(result)) {
      return result;
    }
    return null;
  } catch {
    return null;
  }
}

// Fisher-Yates shuffle for randomizing country order
function shuffleArray<T>(array: T[]): T[] {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 🎉 Confetti/Emoji Animation Component
const emojiList = [
  "🎉", "🎊", "✨", "🥳", "🎈", "🎂", "🎆", "🌟", "💫", "🪅", "🦄", "🍾", "🥂", "😃", "😎"
];

function randomBetween(a: number, b: number) {
  return Math.random() * (b - a) + a;
}

function FlyingEmojis({ trigger }: { trigger: boolean }) {
  const [emojis, setEmojis] = useState<{id: number, emoji: string, left: number, duration: number, size: number, rotate: number}[]>([]);
  const nextId = useRef(0);

  useEffect(() => {
    if (trigger) {
      // Generate a burst of emojis
      const newEmojis = Array.from({ length: 100 }).map(() => ({
        id: nextId.current++,
        emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
        left: randomBetween(0, 100), // percent
        duration: randomBetween(.5, 3), // seconds
        size: randomBetween(48, 128), // px
        rotate: randomBetween(-30, 30),
      }));
      setEmojis(newEmojis);

      // Remove emojis after animation
      const timeout = setTimeout(() => setEmojis([]), 8000);
      return () => clearTimeout(timeout);
    }
  }, [trigger]);

  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 50,
        overflow: "hidden"
      }}
      aria-hidden="true"
    >
      {emojis.map(({ id, emoji, left, duration, size, rotate }) => (
        <span
          key={id}
          style={{
            position: "absolute",
            left: `${left}%`,
            top: "-60px",
            fontSize: `${size}px`,
            transform: `rotate(${rotate}deg)`,
            animation: `fly-emoji ${duration}s cubic-bezier(.23,1.02,.47,.98) forwards`
          }}
        >
          {emoji}
        </span>
      ))}
      <style>
        {`
        @keyframes fly-emoji {
          0% {
            opacity: 0.7;
            transform: translateY(0) scale(1) rotate(var(--emoji-rotate, 0deg));
          }
          10% {
            opacity: 1;
            transform: translateY(20px) scale(1.1) rotate(var(--emoji-rotate, 0deg));
          }
          80% {
            opacity: 1;
            transform: translateY(70vh) scale(1.1) rotate(var(--emoji-rotate, 0deg));
          }
          100% {
            opacity: 0;
            transform: translateY(90vh) scale(0.8) rotate(var(--emoji-rotate, 0deg));
          }
        }
        `}
      </style>
    </div>
  );
}

// --- Terms and Conditions Modal Component ---
async function fetchTerms() {
  const response = await fetch('/terms.txt');
  if (!response.ok) {
    throw new Error('Failed to fetch terms and conditions');
  }
  return response.text();
}

function TermsModal({
  open,
  onClose,
  onAccept,
}: {
  open: boolean;
  onClose: () => void;
  onAccept: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [termsText, setTermsText] = useState<string>("");

  useEffect(() => {
    if (open) {
      fetchTerms().then(setTermsText).catch(console.error);
    }
  }, [open]);

  // Only allow scroll via mouse wheel, block all other scroll methods
  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current;
    if (!el) return;

    // Hide scrollbar via CSS
    el.style.scrollbarWidth = "none";
    el.style.setProperty("-ms-overflow-style", "none", "important");
    el.style.overflowY = "scroll";
    el.style.setProperty("overflow-y", "scroll", "important");
    el.style.setProperty("scrollbar-width", "none", "important");

    // For webkit browsers
    el.classList.add("hide-scrollbar");

    // Prevent keyboard navigation (arrows, page up/down, space, home/end)
    const preventKeys = (e: KeyboardEvent) => {
      const keys = [
        "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight",
        "PageDown", "PageUp", "Home", "End", " ", "Spacebar"
      ];
      if (keys.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Prevent touch events (mobile scroll)
    const preventTouch = (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    // Prevent mouse drag selection (which can scroll)
    const preventDrag = (e: MouseEvent) => {
      if (e.buttons === 1) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Prevent middle mouse click (auto-scroll)
    const preventMiddleClick = (e: MouseEvent) => {
      if (e.button === 1) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Prevent scroll via scrollbar (by hiding it and disabling pointer events)
    el.style.pointerEvents = "auto";

    // Only allow scroll via wheel
    const allowWheel = (e: WheelEvent) => {
      // Allow wheel event to scroll
      // But prevent if shift is held (horizontal scroll)
      if (e.shiftKey) {
        e.preventDefault();
        e.stopPropagation();
      }
      // Otherwise, allow
    };

    // Prevent focus (so keyboard can't be used)
    el.setAttribute("tabIndex", "-1");

    // --- Prevent middle mouse button from triggering autoscroll ---
    // This is the key addition for the prompt:
    const preventMiddleMouseAutoscroll = (e: MouseEvent) => {
      // Middle mouse button is button 1
      if (e.button === 1) {
        e.preventDefault(); // Prevent auto-scroll
        e.stopPropagation();
      }
    };
    el.addEventListener("mousedown", preventMiddleMouseAutoscroll, { passive: false });

    // Attach listeners
    el.addEventListener("keydown", preventKeys, { passive: false });
    el.addEventListener("touchstart", preventTouch, { passive: false });
    el.addEventListener("touchmove", preventTouch, { passive: false });
    el.addEventListener("mousedown", preventDrag, { passive: false });
    el.addEventListener("mouseup", preventDrag, { passive: false });
    el.addEventListener("click", preventMiddleClick, { passive: false });
    el.addEventListener("wheel", allowWheel, { passive: false });

    // Remove listeners on cleanup
    return () => {
      el.removeEventListener("keydown", preventKeys);
      el.removeEventListener("touchstart", preventTouch);
      el.removeEventListener("touchmove", preventTouch);
      el.removeEventListener("mousedown", preventDrag);
      el.removeEventListener("mouseup", preventDrag);
      el.removeEventListener("click", preventMiddleClick);
      el.removeEventListener("wheel", allowWheel);
      el.removeEventListener("mousedown", preventMiddleMouseAutoscroll);
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setScrolledToBottom(false);
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }
  }, [open]);

  // Only count as scrolled to bottom if user used the wheel
  const handleScroll = () => {
    const el = scrollRef.current;
    if (el) {
      // Allow a small threshold for bottom
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
        setScrolledToBottom(true);
      }
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full relative flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-center">Terms and Conditions</h2>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-y-auto border border-gray-300 rounded p-4 mb-4 w-full hide-scrollbar"
          style={{
            maxHeight: "340px",
            minHeight: "220px",
            background: "#f9f9f9",
            fontSize: "1.1rem",
            whiteSpace: "pre-line",
            outline: "none",
            userSelect: "none",
            // Hide scrollbar for all browsers
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            pointerEvents: "auto",
            // Prevent drag selection
            WebkitUserSelect: "none",
            // Prevent touch scroll
            touchAction: "none",
          }}
          tabIndex={-1}
        >
          {termsText}
        </div>
        <style>
          {`
            .hide-scrollbar {
              scrollbar-width: none !important;
              -ms-overflow-style: none !important;
            }
            .hide-scrollbar::-webkit-scrollbar {
              display: none !important;
              width: 0 !important;
              background: transparent !important;
            }
          `}
        </style>
        <div className="flex gap-4 w-full justify-between">
          <button
            className="px-5 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold"
            onClick={onClose}
            type="button"
          >
            Cancel
          </button>
          <button
            className={`px-5 py-2 rounded font-semibold ${
              scrolledToBottom
                ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            onClick={() => {
              if (scrolledToBottom) onAccept();
            }}
            type="button"
            disabled={!scrolledToBottom}
            aria-disabled={!scrolledToBottom}
          >
            I Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TheImpossibleForm() {
  // Helper to generate a random 5-character code
  function generateRandomCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  // Google Maps locations
  const mapLocations = [
    {
      country: "Romania",
      src: "https://www.google.com/maps/embed?pb=!4v1750509378155!6m8!1m7!1sQbpJo3AqW_v2vivRJdp5Rg!2m2!1d46.96870856179091!2d25.15226356180779!3f299.9146786156652!4f-0.34119820018321434!5f0.7820865974627469"
    },
    {
      country: "Japan",
      src: "https://www.google.com/maps/embed?pb=!4v1750509477498!6m8!1m7!1sVaLI51zQHIpT7Nlf7WlqjQ!2m2!1d34.50471328179037!2d135.5957048743215!3f64.82174331187719!4f-15.163396811668761!5f0.7820865974627469"
    },
    {
      country: "Turkey",
      src: "https://www.google.com/maps/embed?pb=!4v1750514318829!6m8!1m7!1svjithIMrCYU9UOJ9wCnkOw!2m2!1d39.46225319660574!2d38.55973595476882!3f243.9739855805657!4f6.313731241209595!5f0.7820865974627469"
    },
    {
      country: "India",
      src: "https://www.google.com/maps/embed?pb=!4v1750514408770!6m8!1m7!1sjVNgyY9SEyqmlJoyYAchAg!2m2!1d20.38375198587597!2d78.13757081524331!3f3.437396480743509!4f-0.7706907875102047!5f0.7820865974627469"
    }
  ];

  // Morse code sentences and their translations
  const morseSentences = [
    { sentence: "cat sat mat", morse: "-.-. .- - / ... .- - / -- .- -" },
    { sentence: "dog ran fast", morse: "-.. --- --. / .-. .- -. / ..-. .- ... -" },
    { sentence: "big red ball", morse: "-... .. --. / .-. . -.. / -... .- .-.. .-.." },
    { sentence: "sun is hot", morse: "... ..- -. / .. ... / .... --- -" },
    { sentence: "sky is blue", morse: "... -.- -.-- / .. ... / -... .-.. ..- ." },
    { sentence: "fish swim fast", morse: "..-. .. ... .... / ... .-- .. -- / ..-. .- ... -" },
    { sentence: "bird can fly", morse: "-... .. .-. -.. / -.-. .- -. / ..-. .-.. -.--" },
    { sentence: "tree is tall", morse: "- .-. . . / .. ... / - .- .-.. .-.." },
    { sentence: "moon is bright", morse: "-- --- --- -. / .. ... / -... .-. .. --. .... -" },
    { sentence: "stars are far", morse: "... - .- .-. ... / .- .-. . / ..-. .- .-." },
    { sentence: "grass is green", morse: "--. .-. .- ... ... / .. ... / --. .-. . . -." },
    { sentence: "water is wet", morse: ".-- .- - . .-. / .. ... / .-- . -" },
    { sentence: "fire is hot", morse: "..-. .. .-. . / .. ... / .... --- -" },
    { sentence: "wind is cold", morse: ".-- .. -. -.. / .. ... / -.-. --- .-.. -.." },
    { sentence: "earth is round", morse: ". .- .-. - .... / .. ... / .-. --- ..- -. -.." },
    { sentence: "ocean is deep", morse: "--- -.-. . .- -. / .. ... / -.. . . .--." },
    { sentence: "mountain is high", morse: "-- --- ..- -. - .- .. -. / .. ... / .... .. --. ...." },
    { sentence: "river is long", morse: ".-. .. ...- . .-. / .. ... / .-.. --- -. --." },
    { sentence: "cloud is white", morse: "-.-. .-.. --- ..- -.. / .. ... / .-- .... .. - . ." },
    { sentence: "rain is wet", morse: ".-. .- .. -. / .. ... / .-- . -" },
  ];

  // --- State hooks ---
  const [values, setValues] = useState<ValuesType>(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [mathEquation, setMathEquation] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [neighbors, setNeighbors] = useState<string>("");

  const [submitError, setSubmitError] = useState<string>("");
  const [congrats, setCongrats] = useState<boolean>(false);

  const [termsChecked, setTermsChecked] = useState<boolean>(false);
  const [termsModalOpen, setTermsModalOpen] = useState<boolean>(false);

  // Fix: generateRandomCode must be defined before useState
  // eslint-disable-next-line 
  const [captchaCode, setCaptchaCode] = useState<string>(() => generateRandomCode());
  const [captchaInput, setCaptchaInput] = useState<string>("");

  const [morseInput, setMorseInput] = useState<string>("");
  const [googleMapsInput, setGoogleMapsInput] = useState<string>("");

  // Timer state
  const [timer, setTimer] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [timerStopped, setTimerStopped] = useState<boolean>(false);

  // Randomly select a morse sentence
  const selectedMorse = useMemo(() => {
    return morseSentences[Math.floor(Math.random() * morseSentences.length)];
  }, []);

  // Randomly select a map location
  const selectedMap = useMemo(() => {
    return mapLocations[Math.floor(Math.random() * mapLocations.length)];
  }, []);

  // Start timer on mount
  useEffect(() => {
    setTimer(0);
    setTimerStopped(false);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Stop timer when user wins
  useEffect(() => {
    if (congrats && !timerStopped) {
      if (timerRef.current) clearInterval(timerRef.current);
      setTimerStopped(true);
    }
  }, [congrats, timerStopped]);

  // Memoize the shuffled country list so it only shuffles once per mount
  const shuffledCountries = useMemo(() => shuffleArray(countryList), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Validation for firstname and lastname
  const firstname = values["firstname"] || "";
  const lastname = values["lastname"] || "";
  const email = values["email"] || "";
  const birthdate = values["birthdate"] || "";

  const firstnameHasNumber = hasNumber(firstname);
  const lastnameHasNumber = hasNumber(lastname);

  const firstnameOnlyLetters = onlyLetters(firstname);
  const lastnameOnlyLetters = onlyLetters(lastname);

  const firstnameVowelsUpper = allVowelsUppercased(firstname);
  const lastnameVowelsUpper = allVowelsUppercased(lastname);

  const firstnameConsonantsLower = allConsonantsLowercased(firstname);
  const lastnameConsonantsLower = allConsonantsLowercased(lastname);

  const emailValid = isValidEmail(email);
  const emailLeet = emailValid && isLeetEmail(email);

  const age = getAge(birthdate);

  // Math equation validation
  const showMathEquationField =
    !!values["birthdate"] && age !== null && age <= 19;

  let mathEquationError = "";
  let mathEquationValid = false;
  if (showMathEquationField) {
    if (mathEquation.trim() === "") {
      mathEquationError = "";
      mathEquationValid = false;
    } else if (!isValidMathEquation(mathEquation)) {
      mathEquationError =
        "Equation can only use numbers, spaces, +, -, *, /, and parentheses.";
      mathEquationValid = false;
    } else if (!containsMathOperator(mathEquation)) {
      mathEquationError =
        "Equation must include at least one operator (+, -, *, /).";
      mathEquationValid = false;
    } else {
      const result = safeEval(mathEquation);
      if (result === null) {
        mathEquationError = "Invalid equation.";
        mathEquationValid = false;
      } else if (result !== age) {
        mathEquationError = `Equation does not evaluate to your age (${age}).`;
        mathEquationValid = false;
      } else {
        mathEquationError = "";
        mathEquationValid = true;
      }
    }
  }

  // Show country picker only after math equation is valid (if shown), or after all fields if not shown
  const showCountryPicker =
    (showMathEquationField && mathEquationValid) ||
    (!showMathEquationField && fields.every((field, idx) => idx === 0 || (values[fields[idx - 1].name] || "").trim() !== ""));

  // Show neighbors field only after country is selected
  const showNeighborsField = showCountryPicker && country.trim() !== "";

  // Validate neighbors field
  let neighborsError = "";
  let neighborsValid = false;
  let correctNeighbors: number | null = null;
  if (showNeighborsField) {
    correctNeighbors = countryNeighbors[country] ?? null;
    if (neighbors.trim() === "") {
      neighborsError = "";
      neighborsValid = false;
    } else if (!/^\d+$/.test(neighbors.trim())) {
      neighborsError = "Please enter a valid number.";
      neighborsValid = false;
    } else if (correctNeighbors !== null && parseInt(neighbors.trim(), 10) !== correctNeighbors) {
      neighborsError = `Incorrect.`;
      neighborsValid = false;
    } else {
      neighborsError = "";
      neighborsValid = true;
    }
  }

  // All fields completed and valid (except terms)
  const allInputsValid =
    !fields.some((field) => (values[field.name] || "").trim() === "") &&
    (!showMathEquationField || mathEquationValid) &&
    showCountryPicker &&
    country.trim() !== "" &&
    (!showNeighborsField || neighborsValid) &&
    (values["email"].length === 0 || (isValidEmail(values["email"]) && isLeetEmail(values["email"]))) &&
    !(age !== null && age > 19);

  // Fix: ensure disabled is always boolean, not "".
  const isSubmitDisabled =
    fields.some((field) => (values[field.name] || "").trim() === "") ||
    (showMathEquationField && !mathEquationValid) ||
    !showCountryPicker ||
    country.trim() === "" ||
    (showNeighborsField && !neighborsValid) ||
    (values["email"].length > 0 && (!isValidEmail(values["email"]) || !isLeetEmail(values["email"]))) ||
    (age !== null && age > 19) ||
    !termsChecked || // Add termsChecked to disable submit if not checked
    captchaInput !== captchaCode || // Add captcha validation
    morseInput !== selectedMorse.morse || // Add morse code validation
    googleMapsInput.toLowerCase() !== selectedMap.country.toLowerCase(); // Add Google Maps validation

  // Handler for submit button
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitDisabled) {
      setCongrats(false);
      if (!termsChecked) {
        setSubmitError("You must agree to the terms and conditions before submitting.");
      } else if (captchaInput !== captchaCode) {
        setSubmitError("Captcha code is incorrect.");
      } else if (morseInput !== selectedMorse.morse) {
        setSubmitError("Morse code is incorrect.");
      } else if (googleMapsInput.toLowerCase() !== selectedMap.country.toLowerCase()) {
        setSubmitError("Google Maps country is incorrect.");
      } else {
        setSubmitError("Please complete all fields correctly before submitting.");
      }
      return;
    }
    setSubmitError("");
    setCongrats(true);
    // You can add actual submit logic here if needed
  };

  // Clear submit error and congrats when any input changes
  useEffect(() => {
    if (submitError) setSubmitError("");
    if (congrats) setCongrats(false);
    // eslint-disable-next-line
  }, [values, mathEquation, country, neighbors, termsChecked, captchaInput, morseInput, googleMapsInput]);

  // Helper to format timer as mm:ss
  function formatTimer(seconds: number) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  // --- Blur effect for modal ---
  // If modal is open, blur the form
  const blurClass = termsModalOpen ? "blur-sm pointer-events-none select-none" : "";

  // --- Get today's date in YYYY-MM-DD format for max birthdate ---
  function getTodayDateString() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }
  const maxBirthdate = getTodayDateString();

  return (
    <>
      {/* Terms Modal */}
      <TermsModal
        open={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
        onAccept={() => {
          setTermsChecked(true);
          setTermsModalOpen(false);
        }}
      />

      <form
        className={`lg:w-1/2 w-3/4 bg-gray-100 mt-32 flex flex-col gap-4 p-8 border-2 rounded-xl text-lg mb-32 transition-all duration-200 ${blurClass}`}
        onSubmit={handleSubmit}
        autoComplete="off"
        style={termsModalOpen ? { filter: "blur(6px)", pointerEvents: "none", userSelect: "none" } : {}}
      >
        {/* Emoji Confetti Animation */}
        <FlyingEmojis trigger={congrats} />

        {fields.map((field, idx) => {
          // Show the first label/input always, others only if previous is filled
          if (idx === 0 || (values[fields[idx - 1].name] || "").trim() !== "") {
            return (
              <React.Fragment key={field.name}>
                <label htmlFor={field.name} className="mb-1 font-medium">{field.label}</label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  className="border-2 border-gray-300 rounded-md p-3 text-lg"
                  value={values[field.name]}
                  onChange={handleChange}
                  autoComplete="off"
                  {...(field.name === "birthdate" ? { max: maxBirthdate } : {})}
                />
                {field.name === "firstname" && firstnameHasNumber && (
                  <div className="text-red-500 text-base">
                    First name should only contain letters.
                  </div>
                )}
                {field.name === "firstname" && !firstnameHasNumber && firstname.length > 0 && !firstnameOnlyLetters && (
                  <div className="text-red-500 text-base">
                    First name should only contain letters.
                  </div>
                )}
                {field.name === "firstname" && !firstnameHasNumber && firstnameOnlyLetters && firstname.length > 0 && !firstnameVowelsUpper && (
                  <div className="text-red-500 text-base">
                    All vowels in your first name should be uppercased.
                  </div>
                )}
                {field.name === "firstname" && !firstnameHasNumber && firstnameOnlyLetters && firstnameVowelsUpper && firstname.length > 0 && !firstnameConsonantsLower && (
                  <div className="text-red-500 text-base">
                    All consonants in your first name should be lowercase.
                  </div>
                )}
                {field.name === "lastname" && lastnameHasNumber && (
                  <div className="text-red-500 text-base">
                    Last name should only contain letters.
                  </div>
                )}
                {field.name === "lastname" && !lastnameHasNumber && lastname.length > 0 && !lastnameOnlyLetters && (
                  <div className="text-red-500 text-base">
                    Last name should only contain letters.
                  </div>
                )}
                {field.name === "lastname" && !lastnameHasNumber && lastnameOnlyLetters && lastname.length > 0 && !lastnameVowelsUpper && (
                  <div className="text-red-500 text-base">
                    All vowels in your last name should be uppercased.
                  </div>
                )}
                {field.name === "lastname" && !lastnameHasNumber && lastnameOnlyLetters && lastnameVowelsUpper && lastname.length > 0 && !lastnameConsonantsLower && (
                  <div className="text-red-500 text-base">
                    All consonants in your last name should be lowercase.
                  </div>
                )}
                {field.name === "email" && email.length > 0 && !emailValid && (
                  <div className="text-red-500 text-base">
                    Email must include &quot;@&quot; and &quot;.&quot;.
                  </div>
                )}
                {field.name === "email" && email.length > 0 && emailValid && !emailLeet && (
                  <div className="text-red-500 text-base flex items-center">
                    Email must be in leet speak.
                    <LeetTooltipButton />
                  </div>
                )}
                {field.name === "birthdate" && age !== null && age > 19 && (
                  <div className="text-red-500 text-base">
                    You are too old for this game
                  </div>
                )}
                {field.name === "birthdate" && values["birthdate"] && new Date(values["birthdate"]) > new Date(maxBirthdate) && (
                  <div className="text-red-500 text-base">
                    You can&apos;t be born in the future!
                  </div>
                )}
              </React.Fragment>
            );
          }
          return null;
        })}
        {/* Math equation field: only show if birthdate is filled and age is valid */}
        {showMathEquationField && (
          <React.Fragment>
            <label htmlFor="mathEquation" className="mb-1 font-medium">
              Write a math equation (using only +, -, *, /) that equals your age ({age}):
            </label>
            <input
              id="mathEquation"
              name="mathEquation"
              type="text"
              className="border-2 border-gray-300 rounded-md p-3 text-lg"
              value={mathEquation}
              onChange={e => setMathEquation(e.target.value)}
              autoComplete="off"
            />
            {mathEquationError && (
              <div className="text-red-500 text-base">{mathEquationError}</div>
            )}
          </React.Fragment>
        )}
        {/* Country picker: show after math equation (if present), or after all fields if not */}
        {showCountryPicker && (
          <React.Fragment>
            <label htmlFor="country" className="mb-1 font-medium">Where are you from?</label>
            <select
              id="country"
              name="country"
              className="border-2 border-gray-300 rounded-md p-3 text-lg"
              value={country}
              onChange={e => {
                setCountry(e.target.value);
                setNeighbors(""); // Reset neighbors field when country changes
              }}
            >
              <option value="">Select your country</option>
              {shuffledCountries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {country === "" && (
              <div className="text-red-500 text-base">
                Please select your country.
              </div>
            )}
          </React.Fragment>
        )}
        {/* Neighbors field: show after country is selected */}
        {showNeighborsField && (
          <React.Fragment>
            <label htmlFor="neighbors" className="mb-1 font-medium">
              How many other countries share a land border with {country}?
            </label>
            <input
              id="neighbors"
              name="neighbors"
              type="number"
              className="border-2 border-gray-300 rounded-md p-3 text-lg"
              value={neighbors}
              onChange={e => setNeighbors(e.target.value)}
              autoComplete="off"
              min={0}
              step={1}
            />
            {neighborsError && (
              <div className="text-red-500 text-base">{neighborsError}</div>
            )}
          </React.Fragment>
        )}

        {/* Google Maps challenge: show only after all inputs are valid and before morse code */}
        {allInputsValid && (
          <div className="flex flex-col items-center mt-4">
            <div className="text-lg font-bold mb-2">
              Identify the country from this Google Street View:
            </div>
            <iframe
              src={selectedMap.src}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              frameBorder="0"
              tabIndex={0}
            ></iframe>
            <input
              id="googleMaps"
              name="googleMaps"
              type="text"
              className="border-2 border-gray-300 rounded-md p-3 text-lg mt-2"
              placeholder="Enter the country name"
              value={googleMapsInput}
              onChange={e => setGoogleMapsInput(e.target.value)}
              autoComplete="off"
            />
            {googleMapsInput.toLowerCase() !== selectedMap.country.toLowerCase() && googleMapsInput.length > 0 && (
              <div className="text-red-500 text-base">
                Google Maps country is incorrect.
              </div>
            )}
          </div>
        )}

        {/* Morse code challenge: show only after all inputs are valid and before captcha */}
        {allInputsValid && (
          <div className="flex flex-col items-center mt-4">
            <div className="text-lg font-bold mb-2">
              Translate the following sentence to Morse code:
            </div>
            <div className="text-xl font-mono mb-2">
              {selectedMorse.sentence}
            </div>
            <input
              id="morse"
              name="morse"
              type="text"
              className="border-2 border-gray-300 rounded-md p-3 text-lg"
              placeholder="Enter Morse code"
              value={morseInput}
              onChange={e => setMorseInput(e.target.value)}
              autoComplete="off"
            />
            {morseInput !== selectedMorse.morse && morseInput.length > 0 && (
              <div className="text-red-500 text-base">
                Morse code is incorrect.
              </div>
            )}
          </div>
        )}

        {/* Captcha code: show only after all inputs are valid and before terms and conditions */}
        {allInputsValid && (
          <div className="flex flex-col items-center mt-4">
            <div className="relative text-2xl font-bold mb-2">
              <span className="captcha-code">{captchaCode}</span>
              <style>
                {`
                  .captcha-code {
                    position: relative;
                    display: inline-block;
                    color: #000;
                    user-select: none;
                  }
                  .captcha-code::before, .captcha-code::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background: #000;
                    top: 50%;
                    left: 0;
                    transform: rotate(-15deg);
                  }
                  .captcha-code::after {
                    transform: rotate(15deg);
                  }
                `}
              </style>
            </div>
            <input
              id="captcha"
              name="captcha"
              type="text"
              className="border-2 border-gray-300 rounded-md p-3 text-lg"
              placeholder="Enter the code above"
              value={captchaInput}
              onChange={e => setCaptchaInput(e.target.value)}
              autoComplete="off"
            />
            {captchaInput !== captchaCode && captchaInput.length > 0 && (
              <div className="text-red-500 text-base">
                Captcha code is incorrect.
              </div>
            )}
          </div>
        )}

        {/* Terms and Conditions checkbox: only show at the end after all other inputs until it has been completed */}
        {(allInputsValid || termsChecked) ? (
          <div className="flex items-center mt-2">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={termsChecked}
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              onChange={e => {
                // Only allow checking via modal
                if (!termsChecked) {
                  setTermsModalOpen(true);
                } else {
                  setTermsChecked(false);
                }
              }}
              className="mr-2 w-5 h-5 cursor-pointer"
              disabled={false}
              // Prevent direct checking
              style={{ pointerEvents: "auto" }}
            />
            <label
              htmlFor="terms"
              className="text-base select-none cursor-pointer"
              onClick={e => {
                e.preventDefault();
                setTermsModalOpen(true);
              }}
              tabIndex={0}
              style={{ textDecoration: "underline", color: "#2563eb" }}
            >
              I have read the terms and conditions
            </label>
          </div>
        ) : null}

        {submitError && (
          <div className="text-red-500 text-base font-semibold">{submitError}</div>
        )}
        {congrats && (
          <div className="text-green-600 text-3xl font-bold text-center mt-2 relative z-20">
            🎉 Congratulations! You completed the impossible form! 🎉
            <div className="mt-2 text-xl text-gray-700">
              Total Time: <span className="font-mono">{formatTimer(timer)}!</span>
            </div>
          </div>
        )}
        <button
          className="bg-blue-500 text-white p-3 rounded-md text-lg font-semibold cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}