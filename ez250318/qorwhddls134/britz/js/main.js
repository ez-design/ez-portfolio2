$(document).ready(function(){
    /**************** visual : start ****************/
    if ($('.visual .circle').length) {
        gsap.registerPlugin(ScrollTrigger);
    
        const pc = matchMedia("screen and (min-width:1025px)");
        const mobile = matchMedia("screen and (max-width:768px)");
    
        let clipSize, fontSize;
    
        if (pc.matches) {
            clipSize = "circle(100vw)";
            fontSize = "60px";
        } else if (mobile.matches) {
            clipSize = "circle(100dvh)";
            fontSize = "25px";
        } else {
            clipSize = "circle(100dvh)";
            fontSize = "40px";
        }

        const company_typo = gsap.timeline({
            scrollTrigger: {
                trigger: ".visual .circle",
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true
            }
        });
    
        company_typo
            .to('.visual .circle .visual_bg', {
                clipPath: clipSize,
                duration: 0.7
            }, "group")
            .to('.visual .circle .visual_txt span', {
                fontSize: fontSize,
                duration: 0.7
            }, "group");
    }
    
    /**************** visual : end ****************/

    /************************* britz : start *************************/

    let scrolling
    let win_h

    let b_txt = $('.britz .list')
    let txt_top
    let txt_start
    let txt_end
    let txt_scroll
    

    scroll_chk()
    resize_chk()
    txt_resize()

    $(window).scroll(function() {
        //스크롤 할때 마다 계속
        scroll_chk()
        txt_resize()
    })

    $(window).resize(function() {
        //브라우저가 리자이즈 될때마다
        resize_chk()
    })

    function scroll_chk() {
        scrolling = $(window).scrollTop()
        // console.log('스크롤', scrolling)
    }

    function resize_chk() {
        win_h = $(window).height()
        // console.log('브라우저 높이', win_h)
    }

    function txt_resize() {
        txt_top = document.querySelector(".britz .list").offsetTop
        // console.log(txt_top)
        txt_start = txt_top - (win_h * 0.5)
        // console.log(txt_start)
        txt_end = txt_top + b_txt.height() - win_h
        // console.log(txt_end)
        txt_scroll = (scrolling - txt_start) / (txt_end - txt_start) * 100
        // console.log(txt_scroll)

        if (txt_start > scrolling) {
            //시작 전
        } else {
            gsap.registerPlugin(ScrollTrigger);

            const txtItems = document.querySelectorAll('.britz .txt');

                ScrollTrigger.create({
                trigger: '.britz .list',
                start: 'top 40%',
                end: 'bottom bottom',
                scrub: 0.1,
                onUpdate: () => {
                    let closest = null;
                    let minDist = Infinity;

                    txtItems.forEach((item) => {
                    const rect = item.getBoundingClientRect();
                    const itemCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(window.innerHeight / 2 - itemCenter);

                    if (distance < minDist) {
                        minDist = distance;
                        closest = item;
                    }
                    });

                    txtItems.forEach((item) => item.classList.remove('on'));
                    if (closest) closest.classList.add('on');
                }
            });
        }
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".britz .photo", {
        width: "100%",
        height: "100%",
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
            trigger: ".britz .photo",
            start: "top bottom",
            end: "top 20%",
            scrub: true,
        }
    });

    ScrollTrigger.matchMedia({
        "(min-width: 1301px)": function () {
          gsap.to(".britz .photo_txt", {
            opacity: 1,
            fontSize: "35px",
            ease: "none",
            scrollTrigger: {
              trigger: ".britz .photo",
              start: "top 70%",
              end: "top 20%",
              scrub: true,
            }
          });
        },
      
        "(min-width: 1025px) and (max-width: 1300px)": function () {
          gsap.to(".britz .photo_txt", {
            opacity: 1,
            fontSize: "25px",
            ease: "none",
            scrollTrigger: {
              trigger: ".britz .photo",
              start: "top 70%",
              end: "top 20%",
              scrub: true,
            }
          });
        },
        "(min-width: 769px) and (max-width: 1024px)": function () {
          gsap.to(".britz .photo_txt", {
            opacity: 1,
            fontSize: "20px",
            ease: "none",
            scrollTrigger: {
              trigger: ".britz .photo",
              start: "top 70%",
              end: "top 20%",
              scrub: true,
            }
          });
        },
      
        "(max-width: 768px)": function () {
          gsap.to(".britz .photo_txt", {
            opacity: 1,
            fontSize: "16px",
            ease: "none",
            scrollTrigger: {
              trigger: ".britz .photo",
              start: "top 70%",
              end: "top 20%",
              scrub: true,
            }
          });
        }
      });

    /************************* britz : end *************************/

    /*************** business : start ***************/

    let pageWrapper = document.querySelector(".business_box");
    let items = document.querySelector(".business .list ul");
    let localItems = gsap.utils.toArray(".business .list ul li");
    let mm = gsap.matchMedia();
    let distance = () => {
        let lastItemBounds = localItems[localItems.length-1].getBoundingClientRect(),
            containerBounds = items.getBoundingClientRect();
        return Math.max(0, lastItemBounds.right - containerBounds.right);
    };
    mm.add("(min-width: 769px)", () => {
        gsap.to(localItems, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
                trigger: items,
                start: "center center",
                pinnedContainer: pageWrapper,
                end: () => "+=" + distance(),
                pin: pageWrapper,
                scrub: true,
                invalidateOnRefresh: true 
            }
        })
    })

    /*************** business : end ***************/

    gsap.registerPlugin(ScrollTrigger);

    gsap.set('.product .tit_wrap .tit', { scale: 3 });

    ScrollTrigger.create({
        trigger: ".product .tit_wrap",
        start: "top top",
        endTrigger: ".product .pr_wrap",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        // markers: true,
    });

    gsap.to('.product .tit_wrap .tit', {
        scale: 1,
        scrollTrigger: {
            trigger: '.product .tit_wrap',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        }
    });

    gsap.to('.product .tit_wrap .tit h2', {
        color: 'rgba(255,255,255,0.6)',
        scrollTrigger: {
          trigger: '.product .pr_wrap',
          start: 'top center',
          end: 'top center',
          scrub: 1,
        }
    });

    gsap.registerPlugin(ScrollTrigger);

    const elements = document.querySelectorAll('.prbx');

    elements.forEach((el, index) => {
        // 오른쪽 등장 대상
        const isRight = el.classList.contains('pr01') || el.classList.contains('pr03');

        gsap.fromTo(el,
        {
            x: isRight ? 50 : -50, // 오른쪽이면 50px, 아니면 -50px (왼쪽)
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none'
            },
            delay: index * 0.1 // 순차적으로 등장
        }
        );
    });

});