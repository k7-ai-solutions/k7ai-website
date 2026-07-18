const $=s=>document.querySelector(s);
$('.menu').onclick=()=>$('header').classList.toggle('open');
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>$('header').classList.remove('open'));
const replies={'Book an appointment':'Absolutely. What day works best for you? We have availability tomorrow at 11:00 AM and 4:00 PM.','What are your hours?':'We are open Monday to Saturday, 9:00 AM to 7:00 PM. Would you like to book a convenient time?','Talk to a person':'Of course. A team member can follow up shortly. May I have your name and phone number?'};
const box=$('#messages');
function message(text,kind){const el=document.createElement('p');el.className='msg '+kind;el.textContent=text;box.appendChild(el);box.scrollTop=box.scrollHeight}
function send(text){message(text,'user');const typing=document.createElement('p');typing.className='typing';typing.textContent='● ● ●';box.appendChild(typing);setTimeout(()=>{typing.remove();message(replies[text]||'Thanks for your message. I can help with bookings, services, hours, and connecting you to the team. What would you like to know?','bot')},600)}
$('.quick').onclick=e=>{if(e.target.tagName==='BUTTON')send(e.target.textContent)};
$('#form').onsubmit=e=>{e.preventDefault();const input=$('#input'),text=input.value.trim();if(text){send(text);input.value=''}};
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
addEventListener('scroll',()=>$('.progress span').style.width=`${scrollY/(document.documentElement.scrollHeight-innerHeight)*100}%`,{passive:true});$('#year').textContent=new Date().getFullYear();
