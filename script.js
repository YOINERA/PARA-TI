:root{
  --bg: #0f1724;
  --card-bg: #fff6f8;
  --accent: #ff6b81;
  --muted: #b8c1cf;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  background: linear-gradient(180deg,#071226 0%, #0f1724 100%);
  color: #e6eef8;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  display:flex;
  flex-direction:column;
  align-items:center;
  min-height:100vh;
  padding:20px;
}

/* Header */
.header{
  text-align:center;
  margin-bottom:14px;
}
.header h1{
  margin:0;
  font-size:clamp(20px,4vw,34px);
  letter-spacing:0.6px;
}
.header p{ margin:6px 0 18px; color:var(--muted) }

/* Grid of cards */
.grid{
  width:100%;
  max-width:1100px;
  display:grid;
  gap:10px;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  align-items:stretch;
}

/* Individual card */
.card{
  background: linear-gradient(180deg,#fff 0%, #fff0f4 100%);
  border-radius:12px;
  padding:10px;
  min-height:110px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  box-shadow: 0 6px 18px rgba(8,7,16,0.45);
  cursor:pointer;
  transition: transform .16s ease, box-shadow .16s ease;
  color:#222;
  user-select:none;
  position:relative;
  overflow:hidden;
}
.card:hover{ transform:translateY(-6px); box-shadow:0 14px 30px rgba(0,0,0,0.45) }
.card .emoji{ font-size:22px; margin-bottom:6px }
.card .short{ font-size:13px; text-align:center; padding:0 6px; color:#333; }

/* Small heart accent */
.card::after{
  content:"❤";
  position:absolute;
  right:8px;
  top:8px;
  font-size:12px;
  opacity:.12;
}

/* Modal full screen */
.modal{
  position:fixed;
  inset:0;
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:1000;
}
.modal.hidden{ display:none }
#fireworksCanvas{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  z-index:100;
  pointer-events:none;
}

/* modal content box (text and close) */
.modal-content{
  position:relative;
  z-index:200;
  width:min(940px,92%);
  max-width:1200px;
  padding:28px 26px 36px;
  border-radius:14px;
  text-align:center;
  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
  box-shadow: 0 10px 40px rgba(2,6,23,0.7);
  color: #fff;
  display:flex;
  flex-direction:column;
  gap:18px;
  align-items:center;
}

/* TE AMO big */
.te-amo{
  font-weight:900;
  font-size:clamp(36px,8vw,96px);
  letter-spacing:0.02em;
  color:var(--accent);
  text-shadow: 0 4px 12px rgba(255,107,129,0.4), 0 2px 6px rgba(0,0,0,0.6);
  transform:translateY(4px);
  pointer-events:none;
}

/* message */
.cart-message{
  background:rgba(255,255,255,0.06);
  padding:14px 18px;
  border-radius:10px;
  max-height:28vh;
  overflow:auto;
  width:100%;
  font-size:18px;
  line-height:1.4;
  color:#f8f9fb;
  box-shadow: inset 0 -6px 18px rgba(0,0,0,0.25);
}

/* close button */
.close{
  position:absolute;
  right:12px;
  top:12px;
  border: none;
  background: rgba(255,255,255,0.06);
  color:#fff;
  font-size:18px;
  padding:8px 10px;
  border-radius:8px;
  cursor:pointer;
  z-index:300;
}

/* footer */
.footer{ margin-top:18px; color:var(--muted) }
@media (max-width:520px){
  .card{ min-height:90px }
  .modal-content{ padding:18px }
}
