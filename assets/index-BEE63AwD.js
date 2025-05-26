(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h=async()=>{let s=[];try{s=(await(await fetch("https://amin-khodajoo.github.io/api-dastresi/db.json")).json()).menu.map((l,e)=>{if(!e==0)return`<span class="menu-item flex p-4 shortMenuList">
                <span
                  class="flex flex-1 font-[shabnam] font-[400] text-[16px] leading-[24px] cursor-pointer"
                  >${l.name}</span
                >
                <span class="icon-chevron-left transform -rotate-90"></span>
              </span>
              <!-- #region sub-list-mobile -->
              <div class="sub-list bg-black/5 hidden">
                <span class="flex-col flex p-4 text-gray-500">
                  <a
                    class="menu-item flex text-sm align-middle"
                    href="${l.link}"
                  >
                    <span class="text-sm">همه موارد این دسته</span>
                    <span class="icon-chevron-left align-middle text-sm font-[shabnam-FD]"></span>
                  </a>
                </span>
                ${l.dropdown.map(t=>`
                <span class="flex-col flex pb-4 px-4 font-[shabnam]">
                  <a class="menu-item flex text-sm py-2" href="${t.link}">
                    ${t.name||t.fa+" | "+t.en}
                  </a>
                </span>`).join("")}
              </div>
              <!-- #endregion -->`}),document.querySelector("#MobListMenu").innerHTML=s.join(" ")}catch(a){console.log(a)}document.querySelectorAll(".shortMenuList").forEach(a=>{a.addEventListener("click",()=>{a.nextElementSibling.classList.toggle("hidden")})})};h();const m=async()=>{let s=[],a=[],r=[];try{let e=await(await fetch("https://amin-khodajoo.github.io/api-dastresi/db.json")).json();s=e.burger.map((t,o)=>{if(o==1)return`

        ${t.menu.map(p=>`<a
                    class="block p-3 text-xs text-[#a3a3a3] hover:text-black"
                    href="${p.link}"
                  >
                    ${p.name}
                  </a>`).join("")}`}),a=e.burger.map(t=>{if(t.id==1)return`<a class="border-b border-black/10 p-4" href="${t.link}">
            <img
              class="h-24 mx-auto py-4"
              src="${t.linkImage}"
              alt="${t.alt}"
            />
          </a>`}),r=e.burger.map((t,o)=>{if(o==2)return`<a
              class="p-3 text-sm block text-center rounded-xl mx-4 bg-[#0A295A] text-white hover:text-black mb-16"
              href="${t.link}"
            >
              ${t.name}
            </a>`}),document.querySelector("#TopLine").innerHTML=s.join(" "),document.querySelector("#burgerImg").innerHTML=a.join(" "),document.querySelector("#burgerEnter").innerHTML=r.join(" ")}catch(l){console.log(l)}},b=async()=>{let s=[],a=[],r=[];try{let e=await(await fetch("https://amin-khodajoo.github.io/api-dastresi/db.json")).json("");s=e.footer.map(t=>{if(t.id==1)return`<div
          class="flex flex-col lg:flex-row justify-between p-6 text-sm max-w-screen-xl mx-auto"
        >
          <div class="flex items-center mb-4 lg:mb-0">
            <span class="flex gap-2 items-center text-[#757575]">
              <span class="icon-phone text-lg leading-[18px]"></span>
              <span>${t.phone}</span>
            </span>
          </div>

          <div class="flex items-center mb-4 lg:mb-0 leading-7">
            <span class="flex gap-2 items-center text-[#757575]">
              <span class="icon-clock text-xl leading-[20px]"></span>
              <span>${t.time}</span>
            </span>
          </div>

          <div
            class="flex items-center gap-2 leading-7 lg:items-center text-[#757575]"
          >
            <span class="icon-location text-xl mt-1 lg:mt-0 leading-[20px]"></span>
            <span
              >${t.location}</span>
          </div>
          <div
            id="btn"
            class="hidden xl:flex bg-white text-xs text-[#757575] rounded-xl p-2 pr-2 pl-1 cursor-pointer hover:text-black items-center w-[96px] justify-between leading-5 shadow-md"
          >
            <span>${t.up}</span>
            <span class="icon-up-open text-xs text-[#757575] align-middle p-2"></span>
          </div>
        </div>`}),a=e.footer.map(t=>{if(t.id==2)return`<div
          class="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row gap-8 py-4 lg:py-8"
        >
          <div
            class="justify-center items-center flex flex-col gap-8 pt-8 lg:pt-0"
          >
            <img
              class="max-w-[190px]"
              src="${t.linkImage}"
            />

            <div class="flex flex-row flex-wrap gap-4 justify-center">
              <div class="flex text-sm">${t.connect}</div>
              <a href="${t.instagramLink}" class="px-2">
                <img src="${t.instagram}" />
              </a>
            </div>
          </div>

          <div class="mt-4 md:mt-0">
            <div class="font-bold text-xl text-[#000000de] mb-4">
              ${t.title}
            </div>
            <div class="text-[#0009] leading-7">
            ${t.body}
            </div>
          </div>

          <div class="w-full">
            <h3 class="font-bold text-xl mb-4 text-center md:text-right">
              ${t.topicList}
            </h3>

            <div class="flex flex-row gap-16 justify-between">
              <div class="flex flex-col">
              ${t.dropdown.map(o=>`<a
                  href="${o.link}"
                  class="text-sm text-[#757575] hover:text-black mb-4"
                >
                  ${o.text}
                </a>`).join(" ")}
              </div>
            </div>
          </div>

          <div class="mt-4 md:mt-0 w-full flex items-center justify-center">
            <a
              href="${t.checkLink}"
              ><img
                src="${t.checkImage}"
                alt=""
            /></a>
          </div>
        </div>`}),r=e.footer.map(t=>{if(t.id==3)return`<span>${t.text}</span>`}),document.querySelector("#f1").innerHTML=s.join(""),document.querySelector("#f2").innerHTML=a.join(""),document.querySelector("#f3").innerHTML=r.join("")}catch(l){console.log(l)}document.querySelector("#btn").addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0})},g=async()=>{try{let a=await(await fetch("https://amin-khodajoo.github.io/api-dastresi/db.json")).json();const r=`<div class="header-box-top-left flex  lg:gap-8 items-center max-w-2/3">
              <span id="burger" class="icon-menu text-2xl ml-4 lg:hidden block"></span>
              <img
                class="lg:w-[96px] lg:h-[40.89px] w-[58.67px] h-[24.98px] block"
                src=${a.header[0].linkImage}
                alt="${a.header[0].alt}"
              />

              <div
                id="search-box"
                class="xl:w-[371.23px] lg:w-[300px] h-[40px] bg-[#f7f8fa] pr-[8px] shadow-1 rounded-[12px] lg:flex justify-center items-center duration-500 relative z-[60] hidden"
              >
                <span
                  class="w-[20px] h-[28px] text-xl text-[#999999] icon-search"
                ></span>
                <input
                  id="search"
                  placeholder="${a.header[1].placeholder}"
                  type="search"
                  class="xl:w-[343.22px] lg:w-[270px] h-full py-[8px] pl-[12px] p-[4px] font-[400] text-[16px] leading-[24px] text-[#757575] font-[shabnam] placeholder:text-[#757575] outline-none search-input"
                  aria-label="Search Products"
                />
              </div>

              <div
                class="min-w-[300.77px] h-[45px] lg:flex gap-4 font-[shabnam] font-[400] leading-[21px] text-[14px] text-[#a3a3a3] hidden"
              >

              ${a.header[2].menu.map(p=>`
                  <a
                    href="${p.link}"
                    class="w-fit py-[12px] pl-[12px] cursor-pointer hover:text-[#0a295a] duration-300"
                  >
                    ${p.name}
                  </a>`).join("")}


              </div>
            </div>
            <div class="header-box-top-right flex gap-4 items-center">
                <a href="${a.header[1].link}"><span class="lg:hidden block text-2xl icon-searcher text-[#666666]"></span></a>
                <a href="${a.header[4].link}"><span class="lg:hidden block text-2xl icon-account text-[#666666]"></span></a>
              <a
                href="${a.header[3].link}"
                class="lg:shadow flex items-center justify-center group relative lg:rounded-xl w-[42px] h-[42px] lg:bg-[#F7F8FA]"
              >
                <span
                  class="lg:text-xl text-2xl icon-cart  icon-basket-desktop lg:text-[#FE5F55] lg:group-hover:text-[#000] text-[#666666] duration-300"
                ></span>

                <span
                  class="absolute lg:top-[-10px] lg:right-[-10px] top-[-3px] right-[-3px] font-[shabnam-BFD] font-[500] text-[14px] leading-[21px] rounded-full w-[20px] h-[21px] bg-[#FE5F55] text-white flex justify-center items-center"
                  >${a.header[3].counter}</span
                >
              </a>
              <a
                href="${a.header[4].link}"
                class="h-[42px] shadow lg:flex hidden items-center text-sm rounded-xl bg-[#0A5ABD] text-white hover:bg-[#0A295A] duration-300 font-[400] text-[14px] leading-[21px] font-[shabnam] px-3"
              >
                <span>${a.header[4].name}</span>
              </a>
            </div>`;document.querySelector("#head").innerHTML=r;let l=document.querySelector("#search-box"),e=document.querySelector("#search"),t=document.querySelector("#cover"),o=document.querySelector("#cover-head");e.addEventListener("focus",()=>{l.classList.add("bg-white"),t.classList.add("!z-[50]","bg-black/10"),o.classList.add("!z-[50]","bg-black/10")}),e.addEventListener("blur",()=>{l.classList.remove("bg-white"),t.classList.remove("!z-[50]","bg-black/10"),o.classList.remove("!z-[50]","bg-black/10")}),document.querySelector("#burger").addEventListener("click",()=>{document.querySelector("#burgerMenu").classList.remove("hidden"),t.classList.add("!z-[50]","bg-black/10"),o.classList.add("!z-[50]","bg-black/10")}),document.querySelector("#burgerMenu").addEventListener("mouseleave",()=>{document.querySelector("#burgerMenu").classList.add("hidden"),t.classList.remove("!z-[50]","bg-black/10"),o.classList.remove("!z-[50]","bg-black/10")}),document.addEventListener("touchstart",p=>{const i=p.touches[0],d=document.elementFromPoint(i.clientX,i.clientY);!document.querySelector("#burgerMenu").contains(d)&&!document.querySelector("#burger").contains(d)&&(document.querySelector("#burgerMenu").classList.add("hidden"),t.classList.remove("!z-[50]","bg-black/10"),o.classList.remove("!z-[50]","bg-black/10"))})}catch(s){console.log(s)}},v=async()=>{try{let a=await(await fetch("https://amin-khodajoo.github.io/api-dastresi/db.json")).json(),r=document.createElement("link");r.rel="icon",document.head.appendChild(r),a.icon.map(l=>{r.href=l.href})}catch(s){console.log(s)}},w=async()=>{let s=[];try{let t=await(await fetch("https://amin-khodajoo.github.io/api-dastresi/db.json")).json();s=t.menu.map((o,p)=>p==0?`<li
                class="text-[#fe5f55] border-[#fe5f55] border-solid border-b-[3px] h-[56px]"
              >
                <a
                  href="${o.link}"
                  
                  class=" flex items-center justify-between py-[12px]"
                >
                  <span class="flex items-center h-[30px]">خانه</span></a
                >
                <div class="bline hid w-full h-[3px] bg-[#fe5f55] hidden"></div>
              </li>`:p==t.menu.length-1?`<li
                  class="navList text-[#00000099] border-[#fe5f55] border-solid hover:border-b-[3px] h-[56px]"
                >
                  <div
                    class="hover:text-[#fe5f55] flex items-center justify-between duration-300 py-[12px]"
                  >
                    <a href="${o.link}">
                      <span class="h-[20px]">${o.name}</span>
                      <span class="icon-arrow-down text-xl"></span>
                    </a>
                    <div class="absolute w-full top-[100%] left-0 bg-white  text-[#828282] hidden">
                    <div class="flex flex-row-reverse">
                      ${(()=>{const d=[];for(let c=0;c<o.dropdown.length;c+=6)d.push(o.dropdown.slice(c,c+6));return d.map(c=>`
                            <div class="flex flex-col border-[1px] border-[#DFDFDF] pt-3 basis-1/5">
                              ${c.map(x=>`<a
                                    href="${x.link}"
                                    class="flex justify-between items-center h-[34px] font-[shabnam] font-[400] text-[12px] leading-[18px] hover:text-[#0a5abd] p-[8px] cursor-pointer hover:bg-[#E1E1E1] text-black/60">
                                    <span class="text-xs">${x.fa}</span>
                                    <span class="text-xs">${x.en}</span>
                                  </a>`).join("")}
                            </div>
                          `).join("")})()}
                    </div>
                    ${`
                      <div class="w-full flex p-3">
                        <a href=${o.extra.map(i=>i.link)} class="flex items-center text-[#fe5f55] text-xs">
                        <span>${o.extra.map(i=>i.name)}</span>
                        <span class="icon-chevron-left"></span></a>
                      </div>`}
                    </div>
                  </div>
                  <div class="w-full h-[3px] bg-[#fe5f55] hidden"></div>
                </li>`:`<li
                  class="navList text-[#00000099] border-[#fe5f55] border-solid hover:border-b-[3px] h-[56px]"
                >
                  <div
                    
                    class="hover:text-[#fe5f55] flex items-center justify-between duration-300 py-[12px] relative"
                  >
                    <a href="${o.link}">
                      <span class="h-[20px]">${o.name}</span
                      ><span class="icon-arrow-down text-xl"></span>
                    </a>
                    <div
                      class="absolute top-[100%] right-0 bg-white hidden -z-[1] mt-[1px]  text-[#828282]"
                    >
                      ${o.dropdown.map(i=>i.dropdown.length>0?`<div
                            class="dropdown-childs xl-w-[330px] lg:w-[220px]  h-[42px] font-[shabnam] font-[400] text-[12px] leading-[18px] hover:text-[#0a5abd] cursor-pointer hover:bg-[#E1E1E1] text-black/60 relative">
                            <a class="flex justify-between items-center w-full h-full p-[12px]" href=${i.link}>
                            <span>${i.name}</span>
                            <span class="icon-chevron-left text-xl"></span>
                            </a>


            
                              ${p==t.menu.length-2?`
                              <div class="absolute left-[100%] top-0 bg-white  -z-[1] mt-[1px] hidden text-[#828282]">
                              ${i.dropdown.map(d=>`
                                    <a
                                      href=${d.link}
                                      class="flex justify-between items-center xl-w-[330px] lg:w-[220px]  h-[42px] font-[shabnam] font-[400] text-[12px] leading-[18px] hover:text-[#0a5abd] p-[12px] cursor-pointer hover:bg-[#E1E1E1] text-black/60">
                                      <span>${d.name}</span>
                                    </a>
                                  
                                `).join(" ")}
                              </div>`:`
                              <div class="absolute right-[100%] top-0 bg-white  -z-[1] mt-[1px] hidden text-[#828282]">
                              ${i.dropdown.map(d=>`
                                    <a
                                      href=${d.link}
                                      class="flex justify-between items-center xl-w-[330px] lg:w-[220px]  h-[42px] font-[shabnam] font-[400] text-[12px] leading-[18px] hover:text-[#0a5abd] p-[12px] cursor-pointer hover:bg-[#E1E1E1] text-black/60">
                                      <span>${d.name}</span>
                                    </a>
                                  
                                `).join(" ")}
                              </div>`}



                            </div>`:`<a
                            href=${i.link}
                              class="flex justify-between items-center xl-w-[330px] lg:w-[220px]  h-[42px] font-[shabnam] font-[400] text-[12px] leading-[18px] hover:text-[#0a5abd] p-[12px] cursor-pointer hover:bg-[#E1E1E1] text-black/60">
                              <span>${i.name}</span>
                              </a>`).join(" ")}
                    </div>
                  </div>
                  <div class="w-full h-[3px] bg-[#fe5f55] hidden"></div>
                </li>`),document.querySelector("#menuList").innerHTML=s.join(" ")}catch(e){console.log(e)}let a=document.querySelectorAll(".navList"),r=document.querySelector("#cover");a.forEach(e=>{e.addEventListener("mouseenter",()=>{e.firstElementChild.lastElementChild.classList.remove("hidden"),r.classList.add("!z-[50]","bg-black/10")})}),a.forEach(e=>{e.addEventListener("mouseleave",()=>{e.firstElementChild.lastElementChild.classList.add("hidden"),r.classList.remove("!z-[50]","bg-black/10")})});let l=document.querySelectorAll(".dropdown-childs");l.forEach(e=>{e.addEventListener("mouseenter",()=>{e.lastElementChild.classList.remove("hidden")})}),l.forEach(e=>{e.addEventListener("mouseleave",()=>{e.lastElementChild.classList.add("hidden")})})},y=async()=>{let s=[],a=[],r=[];try{let d=await(await fetch("https://amin-khodajoo.github.io/api-dastresi/db.json")).json();s=d.offer.map(n=>{if(n.id==0)return`<div
                      class="flex items-center gap-2 font-bold text-2xl md:text-4xl font-[shabnam]"
                    >
                      <span
                        class="icon-percent text-[#FE5F55] w-[36px] h-[36px]"
                      ></span>
                      <span class="text-[#757575]"
                        >${n.title}</span
                      >
                    </div>
                    <div class="hidden md:block text-2xl text-[#757575]">
                      <span id="time"
                       class="text-md font-medium font-[shabnam-MFD]"
                        >${n.clock}</span
                      >
                    </div>`}),a=d.offer.map(n=>{if(n.id==1||n.id==2)return`<a href="${n.link}">
                      <div
                        class="shadow hidden lg:flex h-full rounded-xl flex-col bg-white border-l border-b border-[#CBCBCB] p-4 md:ml-6 hover:shadow-2xl"
                      >
                        <div class="relative">
                          <img
                            class=""w-48 md:w-auto mx-auto""
                            alt="${n.alt}"
                            src=${n.linkImage}
                          />
                        </div>

                        <div class="flex flex-col flex-1">
                          <h3
                            class="font-medium font-[shabnam-MFD] text-[#000000de] flex-1 my-5 leading-8"
                          >
                            ${n.title}
                          </h3>

                          <div class="flex flex-col gap-2">
                            <div class="flex flex-row gap-2 justify-between">
                              <span
                                class="font-bold text-[#00000061] text-base line-through font-[shabnam-FD]"
                              >
                                ${n.real}
                              </span>
                              <span
                                class="text-[#FE5F55] rounded-xl font-medium text-sm font-[shabnam-FD]"
                              >
                                ${n.off}
                              </span>
                            </div>
                            <div
                              class="flex flex-row items-center justify-end gap-1"
                            >
                              <span
                                class="text-[#0951B7] font-bold text-xl font-[shabnam-FD]"
                              >
                                ${n.price}
                              </span>
                              <span class="text-[#00000099] text-xs">
                                ${n.toman}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>`}),r=d.offer.map(n=>{if(n.id!=0)return n.id==1||n.id==2?`<a
                        class="lg:hidden mb-6 last:mb-0"
                        href=${n.link}
                      >
                        <div
                          class="rounded-xl shadow flex flex-row items-center bg-white border-l border-b border-[#CBCBCB] hover:shadow-2xl gap-2"
                        >
                          <div class="relative">
                            <img
                              class="w-40 mx-auto rounded-r-xl"
                              alt="${n.alt}"
                              src=${n.linkImage}
                            />
                          </div>
  
                          <div
                            class="flex flex-col flex-1 justify-between gap-2 p-3"
                          >
                            <h3
                              class="overflow-hidden font-[shabnam-MFD] text-sm text-[#000000de] flex-1 leading-7"
                            >
                              ${n.title}
                            </h3>
  
                            <div class="flex flex-col gap-2">
                              <div class="flex flex-row gap-2 justify-between">
                                <span
                                  class="font-bold text-[#00000061] text-base line-through font-[shabnam-FD]"
                                >
                                  ${n.real}
                                </span>
                                <span
                                  class="text-[#FE5F55] rounded-xl font-medium text-sm font-[shabnam-FD]"
                                >
                                  ${n.off}
                                </span>
                              </div>
  
                              <div
                                class="flex flex-row items-center justify-end gap-1"
                              >
                                <span
                                  class="text-[#0951B7] font-bold text-xl font-[shabnam-FD]"
                                >
                                  ${n.price}
                                </span>
                                <span class="text-[#00000099] text-xs">
                                  ${n.toman}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>`:`<a
                        class="mb-6 last:mb-0"
                        href=${n.link}
                      >
                        <div
                          class="rounded-xl shadow flex flex-row items-center bg-white border-l border-b border-[#CBCBCB] hover:shadow-2xl gap-2"
                        >
                          <div class="relative">
                            <img
                              class="w-40 mx-auto rounded-r-xl"
                              alt="${n.alt}"
                              src=${n.linkImage}
                            />
                          </div>
  
                          <div
                            class="flex flex-col flex-1 justify-between gap-2 p-3"
                          >
                            <h3
                              class="overflow-hidden font-[shabnam-MFD] text-sm text-[#000000de] flex-1 leading-7"
                            >
                              ${n.title}
                            </h3>
  
                            <div class="flex flex-col gap-2">
                              <div class="flex flex-row gap-2 justify-between">
                                <span
                                  class="font-bold text-[#00000061] text-base line-through font-[shabnam-FD]"
                                >
                                  ${n.real}
                                </span>
                                <span
                                  class="text-[#FE5F55] rounded-xl font-medium text-sm font-[shabnam-FD]"
                                >
                                  ${n.off}
                                </span>
                              </div>
  
                              <div
                                class="flex flex-row items-center justify-end gap-1"
                              >
                                <span
                                  class="text-[#0951B7] font-bold text-xl font-[shabnam-FD]"
                                >
                                  ${n.price}
                                </span>
                                <span class="text-[#00000099] text-xs">
                                  ${n.toman}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>`}),document.querySelector("#off").innerHTML=s.join(""),document.querySelector("#off-1").innerHTML=a.join(""),document.querySelector("#off-2").innerHTML=r.join("")}catch(i){console.log(i)}function l(i){const d=i.split(":").map(Number),[n,c,x]=d;return n*3600+c*60+x}function e(i,d){let n=i,c,x,f;const u=setInterval(function(){c=parseInt(n/3600,10),x=parseInt(n%3600/60,10),f=parseInt(n%60,10),c=c<10?"0"+c:c,x=x<10?"0"+x:x,f=f<10?"0"+f:f,d.textContent=c+":"+x+":"+f,--n<0&&clearInterval(u)},1e3)}const t=document.querySelector("#time"),o=t.textContent.trim(),p=l(o);e(p,t)},$=async()=>{let s=[];try{s=(await(await fetch("https://amin-khodajoo.github.io/api-dastresi/db.json")).json()).slider1.map(l=>`<a
                href="${l.address}"
              class="swiper-slide flex items-center justify-center text-lg bg-white  cursor-pointer"
            >
              <img
                class="block w-full rounded-xl"
                src="${l.link}"
                alt="${l.alt}"
              />
            </a>`),document.querySelector(".swiper-wrapper").innerHTML=s.join("")}catch(a){console.log(a)}new Swiper(".sliders-1",{slidesPerView:1,spaceBetween:30,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination1",clickable:!0}})},j=async()=>{let s=[],a=[];try{let l=await(await fetch("https://amin-khodajoo.github.io/api-dastresi/db.json")).json();s=l.slider2.map(e=>{if(e.id==0)return`<span>${e.title}</span>`}),a=l.slider2.map(e=>{if(e.id!=0)return`<div class="swiper-slide px-2">
                <a href="${e.address}" class="block">
                <div class="flex flex-col rounded-xl overflow-hidden bg-white">
                <img
                class="w-full"
                src=${e.link}
                alt="${e.alt}"
                />
                </div>
            </a>
        </div> `}),document.querySelector("#slider2-title").innerHTML=s.join(""),document.querySelector("#slider2-swiper").innerHTML=a.join("")}catch(r){console.log(r)}new Swiper(".sliders-2",{slidesPerView:2.5,spaceBetween:10,loop:!0,navigation:{nextEl:".swiper-button-next2",prevEl:".swiper-button-prev2"},autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:3},768:{slidesPerView:5},1024:{slidesPerView:6}}})},k=async()=>{let s=[],a=[];try{let l=await(await fetch("https://amin-khodajoo.github.io/api-dastresi/db.json")).json();s=l.slider3.map(e=>{if(e.id==0)return`<span
              class="text-2xl text-center font-bold text-[#757575] font-[shabnam]"
            >
              ${e.title}
            </span>
            <a
              href=${e.link}
              class="flex text-base font-normal items-center gap-2"
            >
              <span
                class="text-sm hidden md:block font-[shabnam] text-[#4e5e60]"
                >${e.all}</span
              >
              <span class="h-full text-xl icon-arrow-square-left"></span>
            </a>`}),a=l.slider3.map(e=>{if(e.id!=0)return e.check==!0?`<div class="w-[272px] swiper-slide relative">
                <a
                  class="flex flex-col justify-between rounded-xl shadow-md bg-white mb-2 group"
                  href="${e.link}"
                >
                  <div
                    class="hidden md:flex flex-col absolute left-0 p-1 m-0 md:m-2"
                  >
                    <span
                      class="w-3 h-3 m-1 rounded-full border border-[#757575] ${e.color}"
                    ></span>
                  </div>

                  <div class="flex gap-2 flex-col">
                    <img
                      alt="${e.alt}"
                      class="mx-auto rounded-t-xl"
                      src="${e.linkImage}"
                    />

                    <div
                      class="flex flex-col justify-around flex-1 p-2 text-center"
                    >
                      <span
                        class="text-xs text-[#a3a3a3] mb-0 md:mb-2 hidden md:block font-[shabnam] leading-[18px]"
                        >${e.category}</span
                      >
                      <h3
                        class="text-sm md:text-sm text-[#000000de] font-[shabnam] leading-[28px] font-[400] line-clamp-1 group-hover:text-[#0a5abd]"
                      >
                        ${e.title}
                      </h3>
                    </div>
                  </div>
                  <div class="flex flex-col gap-2 px-2 md:px-4">
                    <div
                      class="text-center md:text-left text-[#a3a3a3] font-[shabnam-FD] font-[400] line-through text-sm h-5 leading-[20px]"
                    >
                      ${e.real}
                    </div>
                  </div>

                  <div
                    class="flex flex-row items-center md:justify-end justify-center md:text-left pb-2 md:pb-3 px-2 md:px-4"
                  >
                    <span
                      class="text-[#0a5abd] font-[shabnam-FD] font-bold text-xl"
                    >
                      ${e.price}
                    </span>
                    <span
                      class="text-[#0009] leading-[18px] font-[400] font-[shabnam] text-xs mr-1"
                      >${e.toman}</span
                    >
                  </div>
                </a>
              </div>`:`<div class="w-[272px] swiper-slide relative">
                <a
                  class="flex flex-col justify-between rounded-xl shadow-md bg-white mb-2 group"
                  href="${e.link}"
                >
                  <div
                    class="hidden md:flex flex-col absolute left-0 p-1 m-0 md:m-2"
                  >
                    <span
                      class="w-3 h-3 m-1 rounded-full border border-[#757575] ${e.color}"
                    ></span>
                  </div>

                  <div class="flex gap-2 flex-col">
                    <img
                      alt="${e.alt}"
                      class="mx-auto rounded-t-xl"
                      src="${e.linkImage}"
                    />

                    <div
                      class="flex flex-col justify-around flex-1 p-2 text-center"
                    >
                      <span
                        class="text-xs text-[#a3a3a3] mb-0 md:mb-2 hidden md:block font-[shabnam] leading-[18px]"
                        >${e.category}</span
                      >
                      <h3
                        class="text-sm md:text-sm text-[#000000de] font-[shabnam] leading-[28px] font-[400] line-clamp-1 group-hover:text-[#0a5abd]"
                      >
                        ${e.title}
                      </h3>
                    </div>
                  </div>
                  <div class="flex items-center justify-center border-[#a3a3a3] font-[shabnam] font-[400] border-t bg-red-100 text-[#9b2c2c] text-sm rounded-b-xl py-5 leading-[21px]">
                    ناموجود
                  </div>
                </a>
              </div>`}),document.querySelector("#slider3-title").innerHTML=s.join(""),document.querySelector("#slider3-swiper").innerHTML=a.join("")}catch(r){console.log(r)}new Swiper(".sliders-3",{slidesPerView:2.5,spaceBetween:20,loop:!0,navigation:{nextEl:".swiper-button-next3",prevEl:".swiper-button-prev3"},autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}})},L=async()=>{let s=[],a=[];try{let l=await(await fetch("https://amin-khodajoo.github.io/api-dastresi/db.json")).json();s=l.slider4.map(e=>{if(e.id==0)return`<span
                class="text-2xl text-center font-bold text-[#757575] font-[shabnam]"
              >
                ${e.title}
              </span>
              <a
                href=${e.link}
                class="flex text-base font-normal items-center gap-2"
              >
                <span
                  class="text-sm hidden md:block font-[shabnam] text-[#4e5e60]"
                  >${e.all}</span
                >
                <span class="h-full text-xl icon-arrow-square-left"></span>
              </a>`}),a=l.slider4.map(e=>{if(e.id!=0)return e.check==!0?`<div class="w-[272px] swiper-slide relative">
                  <a
                    class="flex flex-col justify-between rounded-xl shadow-md bg-white mb-2 group"
                    href="${e.link}"
                  >
                    <div
                      class="hidden md:flex flex-col absolute left-0 p-1 m-0 md:m-2"
                    >
                      <span
                        class="w-3 h-3 m-1 rounded-full border border-[#757575] ${e.color}"
                      ></span>
                    </div>
  
                    <div class="flex gap-2 flex-col">
                      <img
                        alt="${e.alt}"
                        class="mx-auto rounded-t-xl"
                        src="${e.linkImage}"
                      />
  
                      <div
                        class="flex flex-col justify-around flex-1 p-2 text-center"
                      >
                        <span
                          class="text-xs text-[#a3a3a3] mb-0 md:mb-2 hidden md:block font-[shabnam] leading-[18px]"
                          >${e.category}</span
                        >
                        <h3
                          class="text-sm md:text-sm text-[#000000de] font-[shabnam] leading-[28px] font-[400] line-clamp-1 group-hover:text-[#0a5abd]"
                        >
                          ${e.title}
                        </h3>
                      </div>
                    </div>
                    <div class="flex flex-col gap-2 px-2 md:px-4">
                      <div
                        class="text-center md:text-left text-[#a3a3a3] font-[shabnam-FD] font-[400] line-through text-sm h-5 leading-[20px]"
                      >
                        ${e.real}
                      </div>
                    </div>
  
                    <div
                      class="flex flex-row items-center md:justify-end justify-center md:text-left pb-2 md:pb-3 px-2 md:px-4"
                    >
                      <span
                        class="text-[#0a5abd] font-[shabnam-FD] font-bold text-xl"
                      >
                        ${e.price}
                      </span>
                      <span
                        class="text-[#0009] leading-[18px] font-[400] font-[shabnam] text-xs mr-1"
                        >${e.toman}</span
                      >
                    </div>
                  </a>
                </div>`:`<div class="w-[272px] swiper-slide relative">
                  <a
                    class="flex flex-col justify-between rounded-xl shadow-md bg-white mb-2 group"
                    href="${e.link}"
                  >
                    <div
                      class="hidden md:flex flex-col absolute left-0 p-1 m-0 md:m-2"
                    >
                      <span
                        class="w-3 h-3 m-1 rounded-full border border-[#757575] ${e.color}"
                      ></span>
                    </div>
  
                    <div class="flex gap-2 flex-col">
                      <img
                        alt="${e.alt}"
                        class="mx-auto rounded-t-xl"
                        src="${e.linkImage}"
                      />
  
                      <div
                        class="flex flex-col justify-around flex-1 p-2 text-center"
                      >
                        <span
                          class="text-xs text-[#a3a3a3] mb-0 md:mb-2 hidden md:block font-[shabnam] leading-[18px]"
                          >${e.category}</span
                        >
                        <h3
                          class="text-sm md:text-sm text-[#000000de] font-[shabnam] leading-[28px] font-[400] line-clamp-1 group-hover:text-[#0a5abd]"
                        >
                          ${e.title}
                        </h3>
                      </div>
                    </div>
                    <div class="flex items-center justify-center border-[#a3a3a3] font-[shabnam] font-[400] border-t bg-red-100 text-[#9b2c2c] text-sm rounded-b-xl py-5 leading-[21px]">
                      ناموجود
                    </div>
                  </a>
                </div>`}),document.querySelector("#slider4-title").innerHTML=s.join(""),document.querySelector("#slider4-swiper").innerHTML=a.join("")}catch(r){console.log(r)}new Swiper(".sliders-4",{slidesPerView:2.5,spaceBetween:20,loop:!0,navigation:{nextEl:".swiper-button-next4",prevEl:".swiper-button-prev4"},autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}})},S=async()=>{let s=[],a=[];try{let l=await(await fetch("https://amin-khodajoo.github.io/api-dastresi/db.json")).json();s=l.slider5.map(e=>{if(e.id==0)return`<span>${e.title}</span>`}),a=l.slider5.map(e=>{if(e.id!=0)return`<div class="swiper-slide w-[190.667px] h-[144px]">
                <a
                  class="flex flex-col items-center p-2 justify-center rounded-xl shadow-md bg-white my-4 hover:my-0 duration-300"
                  href="${e.link}"
                >
                  <img
                    src="${e.linkImage}"
                    class="w-24"
                    alt="${e.alt}"
                  />
                </a>
              </div>`}),document.querySelector("#slider5-title").innerHTML=s.join(""),document.querySelector("#slider5-swiper").innerHTML=a.join("")}catch(r){console.log(r)}new Swiper(".sliders-5",{slidesPerView:2.5,spaceBetween:20,loop:!0,navigation:{nextEl:".swiper-button-next5",prevEl:".swiper-button-prev5"},autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:3},768:{slidesPerView:5},1024:{slidesPerView:6}}})},E=async()=>{let s=[],a=[];try{let l=await(await fetch("https://amin-khodajoo.github.io/api-dastresi/db.json")).json();s=l.slider6.map(e=>{if(e.id==0)return`<span
              class="text-2xl leading-[36px] text-center font-[shabnam] font-bold text-[#757575]"
            >
             ${e.title}
            </span>
            <a
              href="${e.link}"
              class="flex text-base font-[shabnam] font-normal items-center text-[#757575]"
            >
              <span class="hidden md:block">${e.blog}</span>
              <span class="text-xl icon-arrow-square-left mr-2"></span>
            </a>`}),a=l.slider6.map(e=>{if(e.id!=0)return`<div class="swiper-slide max-w-[296px]">
              <a
                class="flex flex-col justify-between rounded-xl shadow-md bg-white mb-2 hover:text-[#0a5abd]"
                href="${e.link}"
              >
                <div class="flex flex-col">
                  <img
                    class="mx-auto w-auto rounded-xl mb-2"
                    alt="${e.alt}"
                    src="${e.linkImage}"
                  />

                  <div class="flex flex-col justify-around text-center">
                    <h3
                      class="leading-7 text-xs md:text-sm overflow-hidden font-[shabnam] h-16 px-4 flex items-center justify-center"
                    >
                      <span class="line-clamp-2">
                      ${e.body}
                        </span>
                    </h3>
                  </div>
                </div>
              </a>
            </div>`}),document.querySelector("#slider6-topic").innerHTML=s.join(""),document.querySelector("#slider6-swiper").innerHTML=a.join("")}catch(r){console.log(r)}new Swiper(".sliders-6",{spaceBetween:20,loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination6",clickable:!0},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}})},q=async()=>{try{let a=await(await fetch("https://amin-khodajoo.github.io/api-dastresi/db.json")).json();document.title=a.title.map(r=>`${r.title}`).join("")}catch(s){console.log(s)}},F=async()=>{let s=[],a=[];try{let l=await(await fetch("https://amin-khodajoo.github.io/api-dastresi/db.json")).json();s=l.why.map(e=>{if(e.id==0)return`<h3 class="text-2xl font-[shabnam] text-center font-bold text-[#000000de] mb-8">${e.title}</h3>`}),a=l.why.map(e=>{if(e.id!=0)return`<div class="flex flex-col flex-1 h-full justify-center items-center p-4">
                  <img class="w-16 mb-2" src="${e.linkImage}">
                  <p class="flex-1 text-center font-[shabnam] font-bold text-[#757575] mb-2">${e.title}</p>
                  <p class="text-center font-[shabnam] text-sm text-[#000000de] leading-7">${e.body}</p>
              </div>`}),document.querySelector("#topic-sec5").innerHTML=s.join(""),document.querySelector("#title-sec5").innerHTML=a.join("")}catch(r){console.log(r)}};async function M(){await q(),await v(),await g(),await m(),await w(),await $(),await j(),await k(),await L(),await S(),await E(),await F(),await y(),await b()}window.addEventListener("load",async()=>{const s=document.getElementById("loader-wrapper");await M(),await new Promise(a=>setTimeout(a,1e3)),s.style.display="none"});
