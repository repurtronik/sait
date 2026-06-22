// Defendex 2.0 — CORTEX monitoring mobile app (Flutter recreation).
// Faithful to the real app: white surfaces, sky-blue primary, gradient
// action buttons, outlined inputs with leading icons, Material cards.

const DFX = {
  primary: "#2196F3",
  primaryDark: "#1976D2",
  grad: "linear-gradient(135deg, #42A5F5 0%, #1E88E5 55%, #1565C0 100%)",
  ink: "#1A1A2E",
  muted: "#8A94A6",
  line: "#E2E8F0",
  bg: "#F7F9FC",
  iconBg: "#E3F2FD",
  danger: "#E53935",
};

const Lic = ({ n, size = 22, color = DFX.primary, sw = 2 }) => (
  <i data-lucide={n} style={{ width: size, height: size, color, strokeWidth: sw }}></i>
);

// ── Reusable: section label (gray caps) ──
function Caps({ children, style }) {
  return <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: "0.08em", color: DFX.muted, margin: "0 0 10px", ...style }}>{children}</div>;
}

// ── Reusable: outlined field with leading icon chip ──
function Field({ icon, label, value, placeholder, mono = true, focus = false }) {
  return (
    <div style={{ position: "relative", border: `1.5px solid ${focus ? DFX.primary : DFX.line}`, borderRadius: 14, padding: "10px 12px", background: "#fff", display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
      {label && <span style={{ position: "absolute", top: -9, left: 14, background: "#fff", padding: "0 6px", fontSize: 12.5, color: focus ? DFX.primary : DFX.muted }}>{label}</span>}
      <div style={{ width: 40, height: 40, borderRadius: 10, background: DFX.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Lic n={icon} size={20} />
      </div>
      <span style={{ fontSize: 20, fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)", color: value ? DFX.ink : "#B6C0CE", letterSpacing: mono ? "0.02em" : 0 }}>
        {value || placeholder}
      </span>
    </div>
  );
}

// ── Reusable: gradient action button ──
function GradBtn({ icon, children, onClick, color }) {
  return (
    <button onClick={onClick} style={{ width: "100%", border: "none", cursor: "pointer", background: color || DFX.grad, color: "#fff", fontFamily: "var(--font-sans)", fontSize: 17, fontWeight: 700, letterSpacing: "0.04em", padding: "16px", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 12, boxShadow: "0 10px 22px rgba(33,150,243,0.35)" }}>
      {icon && <i data-lucide={icon} style={{ width: 20, height: 20, color: "#fff" }}></i>}
      {children}
    </button>
  );
}

// ── App top bar (the app's own, not Material) ──
function AppBar({ title, onBack, onRefresh, onSettings }) {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "10px 8px", gap: 4, background: "#fff" }}>
      {onBack && <button onClick={onBack} style={iconBtn}><Lic n="arrow-left" size={24} color={DFX.ink} /></button>}
      <div style={{ flex: 1, textAlign: "center", fontSize: 22, fontWeight: 800, letterSpacing: "0.02em", color: DFX.ink }}>{title}</div>
      {onSettings && <button onClick={onSettings} style={iconBtn}><Lic n="settings" size={22} color={DFX.ink} /></button>}
      {onRefresh && <button onClick={onRefresh} style={iconBtn}><Lic n="refresh-cw" size={21} color={DFX.ink} /></button>}
      {!onSettings && !onRefresh && <div style={{ width: 40 }} />}
    </div>
  );
}
const iconBtn = { background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", alignItems: "center", justifyContent: "center" };

// ── LOGIN ──
function LoginScreen({ onSignIn, onSettings }) {
  return (
    <div style={{ minHeight: "100%", background: "#fff", padding: "0 28px", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <img src="../../assets/logo.png" alt="CORTEX" style={{ height: 64, width: "auto", objectFit: "contain", margin: "0 auto 8px" }} />
        <div style={{ textAlign: "center", fontSize: 30, fontWeight: 800, letterSpacing: "0.06em", color: DFX.ink, margin: "0 0 40px" }}>DEFENDEX</div>
        <Field icon="user" value="korteks" mono={false} />
        <Field icon="lock" value="••••••••" mono={false} />
        <div style={{ height: 8 }} />
        <GradBtn icon="log-in" onClick={onSignIn}>SIGN IN</GradBtn>
        <button onClick={onSettings} style={{ background: "none", border: "none", cursor: "pointer", margin: "22px auto 0", display: "flex", alignItems: "center", gap: 8, color: DFX.muted, fontSize: 15, fontWeight: 600, fontFamily: "var(--font-sans)" }}>
          <i data-lucide="settings" style={{ width: 17, height: 17, color: DFX.muted }}></i> Server settings
        </button>
      </div>
    </div>
  );
}

// ── EVENT ARCHIVE ──
const EVENTS = [
  ["0614", "Comm. test", "18.05.2026 00:20:32"],
  ["1011", "Comm. test", "18.05.2026 00:20:31"],
  ["6472", "Comm. test", "18.05.2026 00:20:27"],
  ["9090", "Disarmed",   "18.05.2026 00:20:24"],
  ["2144", "Armed",      "18.05.2026 00:20:16"],
  ["8817", "Comm. test", "18.05.2026 00:19:53"],
  ["9131", "Low battery","18.05.2026 00:19:48"],
  ["1011", "Comm. test", "18.05.2026 00:19:47"],
];
const TYPE_COLOR = { "Comm. test": DFX.muted, "Disarmed": "#93A4B8", "Armed": DFX.primary, "Low battery": "#F59E0B" };

function Dropdown({ icon, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 4px", borderBottom: `1px solid ${DFX.line}` }}>
      <Lic n={icon} size={20} color={DFX.muted} />
      <span style={{ flex: 1, fontSize: 18, color: DFX.ink }}>{label}</span>
      <Lic n="chevron-down" size={22} color={DFX.muted} />
    </div>
  );
}

function EventArchive({ onBack, onRefresh }) {
  return (
    <div style={{ minHeight: "100%", background: DFX.bg }}>
      <AppBar title="EVENT ARCHIVE" onBack={onBack} onRefresh={onRefresh} />
      <div style={{ padding: "8px 16px 0" }}>
        <Dropdown icon="map-pin" label="All objects" />
        <Dropdown icon="filter" label="All types" />
        <div style={{ display: "flex", gap: 14, margin: "14px 0 4px" }}>
          {["From date", "To date"].map((t) => (
            <div key={t} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, border: `1.5px solid ${DFX.line}`, borderRadius: 26, padding: "11px", color: DFX.primary, fontWeight: 600, fontSize: 14.5 }}>
              <Lic n="calendar" size={17} /> {t}
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: DFX.iconBg, color: DFX.primaryDark, fontWeight: 700, fontSize: 15, padding: "12px 18px", margin: "12px 0 0" }}>Events found: 200</div>
      <div>
        {EVENTS.map((e, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderBottom: `1px solid ${DFX.line}`, background: "#fff" }}>
            <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#EEF2F7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Lic n="radio" size={20} color="#AAB4C2" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: DFX.ink }}>{e[0]}</div>
              <div style={{ fontSize: 15, color: "#4A5568" }}>{e[1]}</div>
              <div style={{ fontSize: 13.5, color: DFX.muted, fontFamily: "var(--font-mono)" }}>{e[2]}</div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", color: TYPE_COLOR[e[1]] || DFX.muted }}>TEST</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── SETTINGS ──
function SettingsScreen({ onBack, toast }) {
  const langs = [["🇷🇺", "Русский", false], ["🇬🇧", "English", true], ["🇱🇻", "Latviešu", false]];
  return (
    <div style={{ minHeight: "100%", background: DFX.bg }}>
      <AppBar title="Settings" onBack={onBack} />
      <div style={{ padding: "8px 18px 28px" }}>
        <Caps>LANGUAGE</Caps>
        <div style={{ display: "flex", gap: 12, background: "#fff", borderRadius: 16, padding: 12, marginBottom: 24, boxShadow: "0 2px 10px rgba(20,40,80,0.05)" }}>
          {langs.map(([flag, name, on]) => (
            <div key={name} style={{ flex: 1, textAlign: "center", padding: "12px 4px", borderRadius: 12, background: on ? DFX.primary : "transparent" }}>
              <div style={{ fontSize: 24 }}>{flag}</div>
              <div style={{ fontSize: 14.5, fontWeight: on ? 700 : 500, color: on ? "#fff" : DFX.ink, marginTop: 4 }}>{name}</div>
            </div>
          ))}
        </div>
        <Caps>CORTEX SERVER</Caps>
        <div style={{ background: "#fff", borderRadius: 16, padding: 16, marginBottom: 24, boxShadow: "0 2px 10px rgba(20,40,80,0.05)" }}>
          <Field icon="server" label="IP / Domain" value="192.168.211.149" />
          <Field icon="code" label="Port" value="8010" />
        </div>
        <Caps>COMMUNICATION TEST (GLOBAL)</Caps>
        <div style={{ background: "#fff", borderRadius: 16, padding: 16, boxShadow: "0 2px 10px rgba(20,40,80,0.05)" }}>
          <Field icon="radio" label="Interval (sec)" value="500" focus />
          <div style={{ fontSize: 13.5, color: DFX.muted, margin: "2px 2px 16px" }}>Minimum 30 sec. Applies to all objects.</div>
          <GradBtn icon="save" onClick={toast}>SAVE</GradBtn>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { DFX, LoginScreen, EventArchive, SettingsScreen, AppBar });
