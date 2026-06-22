// CORTEX homepage — hero, solutions, catalog, Defendex strip, CTA.
// Recreation of cortex.eu/index.html. Composes design-system components.

function Hero() {
  const NS = window.CORTEXDesignSystem_78fec2;
  const { Button, Stat, Badge } = NS;
  const events = [
    { c: "#a5b4fc", t: "Noliktava №12 — Trauksme zona 4", x: "09:14" },
    { c: "var(--cx-cyan)", t: "Birojs Centrs — Noņemts no apsardzes", x: "09:02" },
    { c: "#93c5fd", t: "Veikals — Zems akumulators", x: "08:55" },
    { c: "var(--cx-cyan)", t: "Villa Jūrmala — Uzstādīts apsardzē", x: "08:41" },
  ];
  return (
    <section style={{ background: "var(--cx-grad-hero)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: "900px", height: "900px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,180,216,.15) 0%, transparent 70%)", top: "-350px", right: "-150px", pointerEvents: "none" }}></div>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)", backgroundSize: "52px 52px", pointerEvents: "none" }}></div>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 48px", display: "grid", gridTemplateColumns: "1fr 420px", gap: "64px", alignItems: "center", position: "relative", zIndex: 1 }}>
        <div>
          <Badge tone="onDark" dot style={{ marginBottom: "28px" }}>Profesionālas drošības sistēmas</Badge>
          <h1 style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.08, margin: "0 0 20px" }}>
            Apsardze un<br />monitorings.<br /><span style={{ color: "var(--cx-cyan)" }}>Signāls. Objekts. Kontrole.</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,.62)", fontSize: "1rem", maxWidth: "500px", margin: "0 0 36px", lineHeight: 1.75 }}>
            CORTEX iekārtas aizsargā tūkstošiem objektu visā Baltijā. Raidītāji, paneļi, Defendex platforma — pilns cikls no uzstādīšanas līdz monitoringam.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
            <Button variant="cyan">Skatīt produktus →</Button>
            <Button variant="outline">Sazināties</Button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: "14px", backdropFilter: "blur(12px)" }}>
            {[["25+", "Gadi tirgū"], ["10 000+", "Objekti"], ["24/7", "Atbalsts"]].map(([v, l], i) => (
              <div key={i} style={{ padding: "20px 16px", borderRight: i < 2 ? "1px solid rgba(255,255,255,.08)" : "none" }}>
                <Stat value={v} label={l} onDark />
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "16px", padding: "20px", boxShadow: "0 20px 64px rgba(0,0,0,.4)", backdropFilter: "blur(12px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px", paddingBottom: "14px", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
            <div style={{ display: "flex", gap: "5px" }}>
              {["#93c5fd", "var(--cx-cyan)", "#67e8f9"].map((c, i) => <div key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }}></div>)}
            </div>
            <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,.38)", flex: 1, textAlign: "center", fontFamily: "var(--font-mono)" }}>Defendex 2.0</div>
            <div style={{ fontSize: "0.65rem", color: "#67e8f9", fontWeight: 700 }}>● Live</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginBottom: "14px" }}>
            {[["142", "Apsardzē", "var(--cx-cyan)"], ["3", "Uzmanību", "#93c5fd"], ["1", "Trauksme", "#a5b4fc"]].map(([n, l, c], i) => (
              <div key={i} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", borderRadius: "8px", padding: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, lineHeight: 1, color: c }}>{n}</div>
                <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,.3)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "4px" }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {events.map((e, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "9px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.07)", borderRadius: "6px", padding: "9px 10px" }}>
                <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: e.c, flexShrink: 0 }}></div>
                <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,.58)", flex: 1, lineHeight: 1.3 }}>{e.t}</div>
                <div style={{ fontSize: "0.62rem", color: "rgba(255,255,255,.25)", fontFamily: "var(--font-mono)" }}>{e.x}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  const NS = window.CORTEXDesignSystem_78fec2;
  const { SectionHeading, FeatureCard } = NS;
  const Ico = ({ n }) => <i data-lucide={n}></i>;
  const sols = [
    ["radio-tower", "Objektu globālais monitorings", "Centralizēts GSM/GPRS un UHF/VHF monitorings. Tūkstošiem objektu vienā sistēmā ar reāllaika statusu."],
    ["network", "Retranslācijas tīkla veidošana", "Pašu UHF/VHF retranslācijas tīkls objektu aizsardzībai reģionos ar vāju GSM pārklājumu."],
    ["shield", "Apsardzes sistēmas maziem objektiem", "RS-63 un ABAS-15 — kompakti risinājumi. Vienkārša uzstādīšana, zemākas izmaksas."],
    ["monitor", "Programmatūra un mākoņplatforma", "Win SC, Defendex 2.0, mobilā lietotne — pilna programmatūras ekosistēma PCO un īpašniekiem."],
  ];
  return (
    <section style={{ background: "#fff", padding: "84px 48px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <SectionHeading label="Risinājumi" title="Visaptveroša drošības ekosistēma" subtitle="No viena objekta līdz valsts mēroga monitoringa tīklam — CORTEX nodrošina visu." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "24px", marginTop: "52px" }}>
          {sols.map((s, i) => <FeatureCard key={i} icon={<Ico n={s[0]} />} title={s[1]} description={s[2]} />)}
        </div>
      </div>
    </section>
  );
}

function Catalog() {
  const NS = window.CORTEXDesignSystem_78fec2;
  const { SectionHeading, ProductCard, Button } = NS;
  const prods = [
    { model: "RT4-5GP/4", title: "GSM/GPRS/LTE Raidītājs", description: "1×SIM, 2×IP, Paradox/NX/DSC iekšā. G2/G4 AUTO.", image: "../../assets/products/RT4-5GP.jpg", badge: "Populārs", tags: ["GSM/LTE", "4G", "Paradox/NX/DSC"] },
    { model: "RT4-5GL/4", title: "Dual SIM 4G Raidītājs", description: "2×SIM, 2×IP. Automātiska pārslēgšanās bez notikumu zuduma.", image: "../../assets/products/RT4-5GL.jpg", badge: "Dual SIM · 4G", badgeTone: "sky", tags: ["Dual SIM", "LTE"] },
    { model: "CU-GSM27", title: "GSM komunikators", description: "Universāls GSM interfeiss esošajām signalizācijas sistēmām.", image: "../../assets/products/CU-GSM27.jpg", badge: "GSM", badgeTone: "soft", tags: ["GSM", "Interfeiss"] },
    { model: "RP-4000", title: "Retranslators", description: "UHF/VHF retranslators tīkla pārklājuma paplašināšanai.", image: "../../assets/products/RP4000.jpg", badge: "UHF/VHF", badgeTone: "indigo", tags: ["UHF/VHF", "Tīkls"] },
    { model: "ABAS-15", title: "Kompakta bāzes stacija", description: "Mazām sistēmām. Autonoma darbība ar akumulatoru.", image: "../../assets/products/ABAS15.jpg", badge: "GSM", badgeTone: "soft", tags: ["GSM", "Kompakts"] },
    { model: "RS1-4", title: "Objekta raidītājs", description: "Ekonomisks risinājums maziem un vidējiem objektiem.", image: "../../assets/products/RS1-4.jpg", badge: "VHF", badgeTone: "sky", tags: ["VHF", "433 MHz"] },
  ];
  return (
    <section style={{ background: "var(--cx-frost)", padding: "84px 48px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "44px", flexWrap: "wrap", gap: "16px" }}>
          <SectionHeading label="Katalogs" title="Objektu ierīces un bāzes sistēmas" />
          <Button variant="cyan" size="sm">Viss katalogs →</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
          {prods.map((p, i) => <ProductCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  );
}

function DefendexStrip() {
  const NS = window.CORTEXDesignSystem_78fec2;
  const { Button, Badge } = NS;
  const feats = ["Reāllaika objektu statuss", "ARM / DISARM no telefona", "Push paziņojumi par trauksmi", "Notikumu arhīvs un atskaites"];
  return (
    <section style={{ background: "var(--cx-grad-cta)", padding: 0 }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 48px", display: "grid", gridTemplateColumns: "1fr 360px", gap: "64px", alignItems: "center" }}>
        <div>
          <Badge tone="onDark" style={{ marginBottom: "20px" }}>Mākoņa platforma</Badge>
          <h2 style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 16px" }}>
            <span style={{ color: "var(--cx-cyan)" }}>Defendex 2.0</span> — monitorings tavā kabatā
          </h2>
          <p style={{ color: "rgba(255,255,255,.58)", fontSize: "0.95rem", lineHeight: 1.75, margin: "0 0 32px", maxWidth: "480px" }}>
            Pilnīgi jauna mākoņa monitoringa platforma objektu īpašniekiem un PCO operatoriem. Pieejama Android un iOS.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
            {feats.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,.7)", fontSize: "0.875rem" }}>
                <span style={{ color: "var(--cx-cyan)", fontWeight: 700 }}>✓</span>{f}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Button variant="cyan">Uzzināt vairāk</Button>
            <Button variant="ghost">Skatīt lietotni</Button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src="../../assets/defendex/dfx7.jpg" alt="Defendex app" style={{ width: "240px", borderRadius: "26px", border: "2px solid rgba(255,255,255,.2)", boxShadow: "0 24px 64px rgba(0,0,0,.45)" }} />
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const NS = window.CORTEXDesignSystem_78fec2;
  const { Button, SectionHeading } = NS;
  return (
    <section style={{ background: "var(--cx-navy)", padding: "88px 48px", textAlign: "center" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <SectionHeading align="center" onDark title="Gatavi sākt sadarbību?" subtitle="Sazinieties ar mūsu komandu — palīdzēsim izvēlēties pareizo risinājumu jūsu objektam." />
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginTop: "36px" }}>
          <Button variant="cyan">Sazināties</Button>
          <Button variant="outline">Kļūt par partneri</Button>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <div>
      <Hero />
      <Solutions />
      <Catalog />
      <DefendexStrip />
      <CTA />
    </div>
  );
}

Object.assign(window, { HomePage });
