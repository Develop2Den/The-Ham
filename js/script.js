"use strict";

    const textDiv =  document.querySelectorAll(".tab");
    const li = document.querySelectorAll(".tabs-nvg");

    function getShow(item) {
        document.querySelector('.tabs').addEventListener("click", (evt) => {
            let currentLink = evt.target.dataset.tabName;
                item.forEach((elem) => {
                    elem.classList.remove("is-active");
                    if(elem.dataset.tabName === currentLink){
                        elem.classList.add("is-active");
                    }
                });
            });
        }
    getShow(textDiv);
    getShow(li);


    function getShowSections(){
        const btn = document.querySelector(".load-more-btn");
         let allSections = Array.from(document.querySelectorAll(".img-section"));
         let ul = document.getElementById("workOptions");

      let halfSection = allSections.slice(12,24);
       halfSection.forEach((elem) => {
           elem.classList.add("unShow");
        // elem.style.display = "none";
       });

        btn.addEventListener("click",() => {
            halfSection.forEach((elem) => {
                setTimeout(() =>{
                   elem.classList.remove("unShow");
                   elem.style.display = "block";
                },500);
            });
            setTimeout(() => {
                if ( btn.classList.contains('show')) {
                    btn.classList.remove('show');
                    btn.classList.add('hidden');
                }
            },1500);
        });

        ul.addEventListener("click", (evt) => {
           let category = evt.target.id;
           function getIf(tab){
                   tab.filter((elem) => {
                       if(category === elem.className){
                           elem.style.display = "block";
                       }else if (category !== elem.dataset.tabName) {
                           elem.style.display = "none";
                       }else {
                           elem.style.display = "block";
                       }
                   });
               }
            getIf(allSections);
        });
    }
    getShowSections();


    $(function() {
        $('.text-description').hide().first().show();
        $('.team-member').hide().first().show();
        $('.member-photo').hide().first().show();


        $('.slider-photo').on("click",function(){
            $(this).addClass('active').siblings().removeClass('active');
            switchContent();
        })

        $('.slider-arrow.right').on("click",function(){
            let activeIndex = $('.slider-photo.active').index() - 1;
            let newIndex = (activeIndex === 3) ? 0 : activeIndex + 1;
            $(`.slider-photo:eq(${newIndex})`).addClass('active').siblings().removeClass('active');
            switchContent();
        })

        $('.slider-arrow.left').on("click",function(){
            let activeIndex = $('.slider-photo.active').index() - 1;
            let newIndex = (activeIndex === 0) ? 3 : activeIndex - 1;
            $(`.slider-photo:eq(${newIndex})`).addClass('active').siblings().removeClass('active');
            switchContent();
        })

        function switchContent () {
            let activeIndex =  $('.slider-photo.active').index() - 1;
            $(`.text-description:eq(${activeIndex})`).show().siblings('.text-description').hide();
            $(`.team-member:eq(${activeIndex})`).show().siblings('.team-member').hide();
            $(`.member-photo:eq(${activeIndex})`).show().siblings('.member-photo').hide();
        }
    });