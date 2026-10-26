const b=document.querySelector('.burger'),m=document.getElementById('menu');
b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);b.setAttribute('aria-label',o?'Open menu':'Close menu');m.classList.toggle('open',!o)});
m.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{b.setAttribute('aria-expanded','false');m.classList.remove('open')}));
document.getElementById('yr').textContent=new Date().getFullYear();
// Preview fallback: the original Statamic endpoint needs a CSRF token, so until the form is reconnected
// on the live server, open a pre-filled email to info@turfsystems.ca instead.
const f=document.getElementById('contact-form');
f.addEventListener('submit',e=>{
  if(f.dataset.live==='true')return;
  e.preventDefault();
  if(f.comments.value)return;
  const d=new FormData(f),body=`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone')}\nAddress: ${d.get('address')}\n\n${d.get('message')}`;
  location.href='mailto:info@turfsystems.ca?subject='+encodeURIComponent('Free estimate request')+'&body='+encodeURIComponent(body);
  f.querySelector('.form-msg').textContent='Opening your email app. If you have a photo, attach it to the email.';
});
