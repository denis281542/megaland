(()=>{let e=document.getElementById("nav-toggle"),t=document.querySelector(".burger"),c=document.querySelector(".nav-btn"),o=document.getElementById("nav-menu"),l=document.querySelector(".left-nav"),s=document.querySelector(".rigth-nav"),n=document.querySelector(".logo-wrapper"),a=document.querySelector(".container");function i(){t.classList.remove("active"),o.classList.remove("active"),l.classList.remove("active"),s.classList.remove("active"),a.classList.remove("active"),n.classList.remove("active")}e.addEventListener("click",(function(){t.classList.toggle("active"),o.classList.toggle("active"),l.classList.toggle("active"),s.classList.toggle("active"),a.classList.toggle("active"),n.classList.toggle("active")}));let r=document.getElementById("park"),d=document.querySelector(".attractions"),m=document.getElementById("cafe"),v=document.querySelector(".cafe"),u=document.getElementById("contacts"),y=document.querySelector(".contacts"),g=document.getElementById("logo"),L=document.querySelector(".intro");r.addEventListener("click",(function(){d.scrollIntoView({behavior:"smooth"}),i()})),m.addEventListener("click",(function(){v.scrollIntoView({behavior:"smooth"}),i()})),u.addEventListener("click",(function(){y.scrollIntoView({behavior:"smooth"}),i()})),g.addEventListener("click",(function(){L.scrollIntoView({behavior:"smooth"}),i()}));let h=0;window.scrollY,window.addEventListener("scroll",(function(){let e=window.scrollY;e<h?(o.classList.remove("nav-scroll"),c.classList.remove("nav-btn--scroll")):(o.classList.add("nav-scroll"),c.classList.add("nav-btn--scroll")),h=e}));var w=1;!function(e){var t,c=document.getElementsByClassName("attractions-item");for(e>3&&(w=1),e<1&&(w=c.length),t=0;t<c.length;t++)c[t].style.display="none";window.matchMedia("(min-width: 915px)").matches?(c[w-1].style.display="block",c[w].style.display="block",c[w+1].style.display="block"):window.matchMedia("(min-width: 670px)").matches?(c[w-1].style.display="block",c[w].style.display="block"):c[w].style.display="block"}(w),document.querySelector(".next-btn"),document.querySelector(".prev-btn"),document.getElementById("order").addEventListener("click",(()=>{location.assign("/assets/templates/pages/order.html")}))})();