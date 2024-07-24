var lastScrollTop = 0;
        navbar = document.querySelector(".navbar");
        navbarAndro = document.querySelector(".andro");
    window.addEventListener("scroll", function(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTop > lastScrollTop){
            navbar.style.top="-80px";
            navbarAndro.style.top="-80px";
        }else{
            navbar.style.top="0";
            navbarAndro.style.top="0";
        }
        lastScrollTop = scrollTop;
    })

    let menuToggle = document.querySelector('.menuToggle');
        let navigation = document.querySelector('.navro');
    
        menuToggle.onclick = function(){
            navigation.classList.toggle('active')
        }
        