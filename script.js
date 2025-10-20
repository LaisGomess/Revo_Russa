
// Simple hash routing between pages (keeps nav active)
document.addEventListener('click', e=>{
  const a = e.target.closest('a');
  if(a && a.getAttribute('data-scroll')){
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  }
});

// small helper for modals
function openModal(title,html){
  const root = document.getElementById('modal-root');
  root.innerHTML = `<div style="position:fixed;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0.6),rgba(0,0,0,0.85));display:flex;align-items:center;justify-content:center;z-index:120">
    <div style="width:min(900px,96%);background:linear-gradient(180deg,#0f0f0f,#0b0b0d);padding:20px;border-radius:12px">
      <button style="float:right" onclick="closeModal()">Fechar ✕</button>
      <h3>${title}</h3>
      <div style="color:var(--muted);margin-top:8px">${html}</div>
      <div style="display:flex;justify-content:flex-end;margin-top:12px"><button class="btn" onclick="closeModal()">OK</button></div>
    </div>
  </div>`;
  root.style.display='block';
}
function closeModal(){const root=document.getElementById('modal-root');root.style.display='none';root.innerHTML='';}
