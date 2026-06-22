// CORTEX website chrome — topbar, sticky nav with dropdowns, footer.
// Recreation of cortex.eu navigation. Self-contained; uses brand tokens.

function Topbar({ lang, setLang }) {
  const langs = ["LV", "RU", "EN"];
  return (
    <div style={{ background: "var(--cx-topbar)", padding: "6px 48px", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "16px", fontSize: "0.75rem" }}>
      <span style={{ color: "rgba(255,255,255,.55)" }}>+371 67 505 603</span>
      <span style={{ color: "rgba(255,255,255,.18)" }}>|</span>
      <a href="#" style={{ color: "rgba(255,255,255,.5)", textDecoration: "none" }}>info@cortex.lv</a>
      <span style={{ color: "rgba(255,255,255,.18)" }}>|</span>
      <a href="#" style={{ color: "rgba(255,255,255,.5)", textDecoration: "none" }}>Personīgais kabinets</a>
      <div style={{ display: "flex", gap: "4px", marginLeft: "8px" }}>
        {langs.map((l) => (
          <button key={l} onClick={() => setLang(l)}
            style={{ background: lang === l ? "var(--cx-cyan)" : "none", border: "1px solid " + (lang === l ? "var(--cx-cyan)" : "rgba(255,255,255,.2)"), color: lang === l ? "var(--cx-navy)" : "rgba(255,255,255,.45)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.04em", padding: "2px 7px", borderRadius: "3px", cursor: "pointer", fontFamily: "inherit" }}>
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}

const NAV = [
  { label: "Sistēmas", items: ["Globālais monitorings", "Retranslācijas tīkls", "UHF / VHF", "GSM / GPRS", "Ethernet"] },
  { label: "Katalogs", items: ["Raidītāji", "Interfeisa moduļi", "Apsardzes pultis", "Retranslatori", "Win SC", "Defendex 2.0"] },
  { label: "Lejuplādēt" },
  { label: "Tehniskais atbalsts" },
  { label: "Par mums", items: ["Par kompāniju", "Partneri", "Jaunumi", "Kontakti"] },
];

function Nav() {
  const [open, setOpen] = React.useState(null);
  return (
    <nav style={{ background: "#fff", boxShadow: "var(--shadow-md)", position: "sticky", top: 0, zIndex: 200 }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "stretch", padding: "0 48px" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", padding: "10px 0", marginRight: "40px", flexShrink: 0 }}>
          <img src="../../assets/logo.png" alt="CORTEX" style={{ height: "50px", width: "auto" }} />
        </a>
        <ul style={{ display: "flex", alignItems: "stretch", flex: 1, listStyle: "none", margin: 0, padding: 0 }}>
          {NAV.map((n, i) => (
            <li key={i} style={{ position: "relative" }} onMouseEnter={() => setOpen(i)} onMouseLeave={() => setOpen(null)}>
              <span style={{ display: "flex", alignItems: "center", gap: "5px", padding: "0 16px", height: "72px", color: open === i ? "var(--cx-sky)" : "var(--cx-navy)", fontSize: "0.875rem", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", borderBottom: "3px solid " + (open === i ? "var(--cx-sky)" : "transparent"), transition: "color .2s" }}>
                {n.label}{n.items && <span style={{ fontSize: "0.65rem", opacity: 0.5 }}>▾</span>}
              </span>
              {n.items && open === i && (
                <div style={{ position: "absolute", top: "100%", left: 0, background: "#fff", border: "1.5px solid var(--cx-bd2)", borderTop: "3px solid var(--cx-sky)", borderRadius: "0 0 12px 12px", minWidth: "240px", boxShadow: "var(--shadow-xl)", zIndex: 300 }}>
                  {n.items.map((it, j) => (
                    <a key={j} href="#" style={{ display: "block", padding: "11px 20px", color: "var(--cx-tx)", textDecoration: "none", fontSize: "0.855rem", fontWeight: 500, borderBottom: j < n.items.length - 1 ? "1px solid var(--cx-bd2)" : "none" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "var(--cx-ice)"; e.currentTarget.style.color = "var(--cx-sky)"; e.currentTarget.style.paddingLeft = "26px"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--cx-tx)"; e.currentTarget.style.paddingLeft = "20px"; }}>
                      {it}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <a href="#" style={{ display: "flex", alignItems: "center", color: "var(--cx-tm)", padding: "0 12px" }}>
          <i data-lucide="search" style={{ width: "18px", height: "18px" }}></i>
        </a>
        <div style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}>
          <a href="#" style={{ background: "var(--cx-cyan)", color: "var(--cx-navy)", padding: "9px 22px", borderRadius: "6px", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", boxShadow: "var(--shadow-md)" }}>Ieiet</a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  const cols = [
    { h: "Katalogs", links: ["RT4-5GP/GL", "RS-4000/RS-63", "Defendex 2.0", "Win SC"] },
    { h: "Sistēmas", links: ["Globālais monitorings", "Retranslācijas tīkls", "Mazās sistēmas"] },
    { h: "Uzstādītājiem", links: ["Portāls", "Lejuplādēt", "Atbalsts"] },
    { h: "Uzņēmums", links: ["Par mums", "Partneri", "Kontakti"] },
  ];
  return (
    <footer style={{ background: "var(--cx-ink)", padding: "64px 48px 28px", color: "rgba(255,255,255,.45)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2.2fr 1fr 1fr 1fr 1fr", gap: "40px", marginBottom: "48px" }}>
          <div>
            <img src="../../assets/logo.png" alt="CORTEX" style={{ height: "46px", width: "auto", filter: "brightness(0) invert(1) opacity(.85)", marginBottom: "16px" }} />
            <p style={{ fontSize: "0.81rem", lineHeight: 1.75, maxWidth: "240px", margin: 0 }}>Profesionālas apsardzes monitoringa sistēmas. Ražošana un atbalsts Latvijā kopš 1992. gada.</p>
            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "7px", fontSize: "0.81rem" }}>
              <span>+371 67 505 603</span>
              <span>info@cortex.lv</span>
              <span>Liksnas iela 7, Rīga, LV-1006</span>
            </div>
          </div>
          {cols.map((c, i) => (
            <div key={i}>
              <h4 style={{ color: "#fff", fontWeight: 600, fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: "14px" }}>{c.h}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {c.links.map((l, j) => (
                  <li key={j} style={{ marginBottom: "9px" }}>
                    <a href="#" style={{ color: "rgba(255,255,255,.4)", textDecoration: "none", fontSize: "0.8rem" }}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.07)", paddingTop: "22px", display: "flex", justifyContent: "space-between", fontSize: "0.73rem" }}>
          <span>© 2025 SIA KORTEKS. Visas tiesības aizsargātas.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Topbar, Nav, Footer });
