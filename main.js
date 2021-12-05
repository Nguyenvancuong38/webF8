const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function start() {
    handleSearch();
    handleActiveNotice();
    handleCourseLearning();
    handleCourseWillLearn();
    handleSlide();
    handleNavigation();
    handleLearning();
    handleBtnPlus();
    // handleClickDocument();
}

start();

// Function handle header-search
function handleSearch () {
    const headerSearch = $('.header__search');
    const searchInput = $('.header__search-input');
    const searchComment = $('.header__search-comment')

    // when user focus in header search 
    headerSearch.addEventListener('focusin', addStyle);
    headerSearch.addEventListener('focusout', removeStyle);

    function addStyle() {
        headerSearch.classList.add('border-color--primary');
        searchComment.style.display = 'flex';
    }

    function removeStyle() {
        headerSearch.classList.remove('border-color--primary');
        searchComment.style.display = 'none';
    }

    // when user write in input search 
    searchInput.oninput = function (e) {
        const textUser = $('.header__search-comment-text')
        textUser.innerText = e.target.value;
    }

};

//Function handle header-active 
function handleActiveNotice() {
    const headerNotice = $('.header__active-icon')
    const noticeTable = $('.header__active-notice-table')
    const headerUser = $('.header__active-img')
    const userTable = $('.header__active-user-table')

    headerNotice.onclick = function() {
        noticeTable.classList.toggle('active');
        userTable.classList.remove('active');
    }

    headerNotice.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    headerUser.onclick = function() {
        userTable.classList.toggle('active');
        noticeTable.classList.remove('active');
    }

    headerUser.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    document.addEventListener('click', (e) => {
        if(noticeTable.matches('.active')) {
            if(e.target != noticeTable) {
                noticeTable.classList.remove('active');
            }
        }
        if(userTable.matches('.active')) {
            if(e.target != userTable) {
                userTable.classList.remove('active');
            }
        }
    })
}

// Function handle Courses learing 
function handleCourseLearning () {
    const courseFirst = $('.course-learning-first')
    const btnNext = $('.course-learning-btn-next')
    const btnPrev = $('.course-learning-btn-prev')
    const courses = $$('.course-learning')

    btnNext.onclick = function () {
        switch (courses.length) {
            case 10:
                switch (courseFirst.style.marginLeft) {
                    case '':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '-116%';
                        break;
                    case '-116%':
                        courseFirst.style.marginLeft = '-178%';
                        break;
                    case '-178%':
                        courseFirst.style.marginLeft = '-209%';
                        break;
                }
                break;
            case 9:
                switch (courseFirst.style.marginLeft) {
                    case '':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '-116%';
                        break;
                    case '-116%':
                        courseFirst.style.marginLeft = '-178%';
                        break;
                }
                break;
            case 8:
                switch (courseFirst.style.marginLeft) {
                    case '':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '-116%';
                        break;
                    case '-116%':
                        courseFirst.style.marginLeft = '-147%';
                        break;
                }
                break;
            case 7:
                switch (courseFirst.style.marginLeft) {
                    case '':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '-116%';
                        break;
                }
                break;
            case 6: 
                switch (courseFirst.style.marginLeft) {
                    case '':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '-85%';
                        break;
                }
                break;
            case 5: 
                switch (courseFirst.style.marginLeft) {
                    case '':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                }
                break;
            case 4: 
                switch (courseFirst.style.marginLeft) {
                    case '':
                        courseFirst.style.marginLeft = '-23%';
                        break;
                }
                break;
        }
    }

    btnPrev.onclick = function () {
        switch (courses.length) {
            case 10:
                switch (courseFirst.style.marginLeft) {
                    case '-209%':
                        courseFirst.style.marginLeft = '-178%';
                        break;
                    case '-178%':
                        courseFirst.style.marginLeft = '-116%';
                        break;
                    case '-116%':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '';
                        break;
                }
                break;
            case 9:
                switch (courseFirst.style.marginLeft) {
                    case '-178%':
                        courseFirst.style.marginLeft = '-116%';
                        break;
                    case '-116%':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '';
                        break;
                }
                break;
            case 8:
                switch (courseFirst.style.marginLeft) {
                    case '-147%':
                        courseFirst.style.marginLeft = '-116%';
                        break;
                    case '-116%':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '';
                        break;
                }
                break;
            case 7:
                switch (courseFirst.style.marginLeft) {
                    case '-116%':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '';
                        break;
                }
                break;
            case 6: 
                switch (courseFirst.style.marginLeft) {
                    case '-85%':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '';
                        break;
                }
                break;
            case 5: 
                switch (courseFirst.style.marginLeft) {
                    case '-54%':
                        courseFirst.style.marginLeft = '';
                        break;
                }
                break;
            case 4: 
                switch (courseFirst.style.marginLeft) {
                    case '-23%':
                        courseFirst.style.marginLeft = '';
                        break;
                }
                break;
        }
    }
}

// Funtion handle course will learn 
function handleCourseWillLearn () {
    const courseFirst = $('.course-willLearn-first')
    const coursesWillLearn = $$('.course-willLearn')
    const btnNext = $('.btnNext-course-willLearn')
    const btnPrev = $('.btnPrev-course-willLearn')

    btnNext.onclick = function () {
        switch (coursesWillLearn.length) {
            case 10:
                switch (courseFirst.style.marginLeft) {
                    case '':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '-116%';
                        break;
                    case '-116%':
                        courseFirst.style.marginLeft = '-178%';
                        break;
                    case '-178%':
                        courseFirst.style.marginLeft = '-209%';
                        break;
                }
                break;
            case 9:
                switch (courseFirst.style.marginLeft) {
                    case '':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '-116%';
                        break;
                    case '-116%':
                        courseFirst.style.marginLeft = '-178%';
                        break;
                }
                break;
            case 8:
                switch (courseFirst.style.marginLeft) {
                    case '':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '-116%';
                        break;
                    case '-116%':
                        courseFirst.style.marginLeft = '-147%';
                        break;
                }
                break;
            case 7:
                switch (courseFirst.style.marginLeft) {
                    case '':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '-116%';
                        break;
                }
                break;
            case 6: 
                switch (courseFirst.style.marginLeft) {
                    case '':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '-85%';
                        break;
                }
                break;
            case 5: 
                switch (courseFirst.style.marginLeft) {
                    case '':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                }
                break;
            case 4: 
                switch (courseFirst.style.marginLeft) {
                    case '':
                        courseFirst.style.marginLeft = '-23%';
                        break;
                }
                break;
        }
    }

    btnPrev.onclick = function () {
        switch (coursesWillLearn.length) {
            case 10:
                switch (courseFirst.style.marginLeft) {
                    case '-209%':
                        courseFirst.style.marginLeft = '-178%';
                        break;
                    case '-178%':
                        courseFirst.style.marginLeft = '-116%';
                        break;
                    case '-116%':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '';
                        break;
                }
                break;
            case 9:
                switch (courseFirst.style.marginLeft) {
                    case '-178%':
                        courseFirst.style.marginLeft = '-116%';
                        break;
                    case '-116%':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '';
                        break;
                }
                break;
            case 8:
                switch (courseFirst.style.marginLeft) {
                    case '-147%':
                        courseFirst.style.marginLeft = '-116%';
                        break;
                    case '-116%':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '';
                        break;
                }
                break;
            case 7:
                switch (courseFirst.style.marginLeft) {
                    case '-116%':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '';
                        break;
                }
                break;
            case 6: 
                switch (courseFirst.style.marginLeft) {
                    case '-85%':
                        courseFirst.style.marginLeft = '-54%';
                        break;
                    case '-54%':
                        courseFirst.style.marginLeft = '';
                        break;
                }
                break;
            case 5: 
                switch (courseFirst.style.marginLeft) {
                    case '-54%':
                        courseFirst.style.marginLeft = '';
                        break;
                }
                break;
            case 4: 
                switch (courseFirst.style.marginLeft) {
                    case '-23%':
                        courseFirst.style.marginLeft = '';
                        break;
                }
                break;
        }
    }
}

// Function handle show slides 
function handleSlide () {
    const slideContent = $('.container__content-slide')
    const slide = $('.container__content-slide-list')
    const btnNextSlide = $('.container__content-slide-btn--right')
    const btnPrevSlide = $('.container__content-slide-btn--left')
    let dotSlides = $$('.container__content-slide-dot')
    let slides = $$('.container__content-slide-item')
    let currentSlide = 1;
    let timeNextSlide = 5000;
    let slideId;

    const firstClone = slides[0].cloneNode(true)
    const lastClone = slides[slides.length - 1].cloneNode(true)

    firstClone.id = '.first-clone';
    lastClone.id = 'last-clone';

    slide.append(firstClone);
    slide.prepend(lastClone);

    const slideWidth = slides[currentSlide].clientWidth;

    slide.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
    dotSlides[currentSlide + 1].classList.add('container__content-slide-dot--active');

    const startSlide = () => {
        slideId = setInterval(() => {
            moveToNextSlide();
        }, timeNextSlide);
    }

    slide.addEventListener('transitionend', () => {
        let slides = $$('.container__content-slide-item');
        if(slides[currentSlide].id === firstClone.id) {
            slide.style.transition = 'none';
            currentSlide = 1;
            slide.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
        }

        if(slides[currentSlide].id === lastClone.id) {
            slide.style.transition = 'none';
            currentSlide = slides.length - 2;
            slide.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
        }
    })

    const moveToNextSlide = () => {
        let slides = $$('.container__content-slide-item');
        if (currentSlide >= slides.length -1) return;
        currentSlide++;
        slide.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
        slide.style.transition = '.7s';
        for(let i = 2; i < dotSlides.length + 2; i++) {
            if(i != currentSlide) {
                dotSlides[i - 2].classList.remove('container__content-slide-dot--active');
            } else {
                dotSlides[i - 2].classList.add('container__content-slide-dot--active');
            }
        }
    }

    const moveToPrevSlide = () => {
        if(currentSlide <= 0) return;
        currentSlide--;
        slide.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
        slide.style.transition = '.7s';
        for(let i = 0; i < dotSlides.length ; i++) {
            if(i != currentSlide) {
                dotSlides[i].classList.remove('container__content-slide-dot--active');
            } else {
                dotSlides[i].classList.add('container__content-slide-dot--active');
            }
        }
    }

    slideContent.addEventListener('mouseenter', () => {
        clearInterval(slideId);
    })

    slideContent.addEventListener('mouseleave', startSlide);

    btnNextSlide.addEventListener('click', moveToNextSlide)

    btnPrevSlide.addEventListener('click', moveToPrevSlide);

    dotSlides.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentSlide = i;
            slide.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
            slide.style.transition = '.7s';
            for(let i = 0; i < dotSlides.length; i++) {
                if(i != currentSlide) {
                    dotSlides[i].classList.remove('container__content-slide-dot--active');
                } else {
                    dotSlides[i].classList.add('container__content-slide-dot--active');
                }
            }
        })
    })

    startSlide();

    // // Set time out for function autoSlide 
    // var myTimer = setInterval(autoSlide, timeNextSlide);

    // // Reset Slides 
    // function resetSlide() {
    //     for(let i = 0; i < slides.length; i++) {
    //         slides[i].classList.remove('container__content-slide-item--active')
    //         dotSlides[i].classList.remove('container__content-slide-dot--active')
    //     }
    //     clearInterval(myTimer);
    //     myTimer = setInterval(autoSlide, timeNextSlide);
    // }

    // // start slide 
    // function startSlide() {
    //     resetSlide();
    //     slides[0].classList.add('container__content-slide-item--active')
    //     dotSlides[0].classList.add('container__content-slide-dot--active')
    // }

    // // Function Button Next 
    // function nextSlide() {
    //     resetSlide();
    //     slides[currentSlide + 1].classList.add('container__content-slide-item--active')
    //     dotSlides[currentSlide + 1].classList.add('container__content-slide-dot--active')
    //     currentSlide++;
    // }

    // // funcion Button Prev 
    // function prevSlide() {
    //     resetSlide();
    //     slides[currentSlide - 1].classList.add('container__content-slide-item--active')
    //     dotSlides[currentSlide - 1].classList.add('container__content-slide-dot--active')
    //     currentSlide--;
    // }

    // btnNextSlide.addEventListener('click', function() {
    //     if(currentSlide === slides.length - 1) {
    //         currentSlide = -1;
    //     }
    //     nextSlide();
    // })

    // btnPrevSlide.addEventListener('click', function() {
    //     if(currentSlide === 0) {
    //         currentSlide = slides.length;
    //     }
    //     prevSlide();
    // })

    // // Function when clicked dots 
    // function showSlideDot() {
    //     resetSlide();
    //     slides[currentSlide].classList.add('container__content-slide-item--active')
    //     dotSlides[currentSlide].classList.add('container__content-slide-dot--active')
    // }

    // dotSlides.forEach((dot, i) => {
    //     dot.addEventListener('click', function () {
    //         currentSlide = i;
    //         showSlideDot();
    //     })
    // })

    // function autoSlide() {
    //     resetSlide();
    //     currentSlide++;
    //     if(currentSlide === slides.length) {
    //         currentSlide = 0;
    //     }
    //     slides[currentSlide].classList.add('container__content-slide-item--active')
    //     dotSlides[currentSlide].classList.add('container__content-slide-dot--active')
    // }


    // startSlide();

}

// Function handle Navigation and Content 
function handleNavigation () {
    let navItems = $$('.navigation__list-link');
    let contentItems = $$('.content__item');
    let logoF8 = $('.header__logo-link');

    navItems.forEach((navItem, i) => {
        navItem.addEventListener('click', () => {
            resetNavAndContent();
            navItem.classList.add('navigation--active');
            contentItems[i].style.display = 'block';
            backHome(i);
        })
    })

    function resetNavAndContent() {
        for(let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('navigation--active');
            contentItems[i].style.display = 'none';
        }
    }

    function startNavAndContent() {
        let headerLogo = $('.header__logo-slogan')
        let headerBack = $('.header__logo-back')
        for(let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('navigation--active');
            contentItems[i].style.display = 'none';
        }
        navItems[0].classList.remove('navigation--active')
        contentItems[0].style.display = 'block';
        headerLogo.style.display = 'block';
        headerBack.style.display = 'none';
    }

    // Function handle button back 
    function backHome(i) {
        let headerLogo = $('.header__logo-slogan')
        let headerBack = $('.header__logo-back')
        
        if(i === 0) {
            headerLogo.style.display = 'block';
            headerBack.style.display = 'none';
        } else {
            headerLogo.style.display = 'none';
            headerBack.style.display = 'block';
            headerBack.addEventListener('click', () => {
                resetNavAndContent();
                navItems[0].classList.add('navigation--active');
                contentItems[0].style.display = 'block';
                headerLogo.style.display = 'block';
                headerBack.style.display = 'none';
            })
        }
    }

    function btnLogo() {
        startNavAndContent();
    }

    logoF8.addEventListener('click', btnLogo);

    startNavAndContent();

}

// Function all courses from API and post in the learing 
function handleLearning () {
    function getCourses (callback) {
        var courseApi = 'http://localhost:3000/courses';
        fetch(courseApi) 
            .then( response => response.json())
            .then(callback)
            .catch(noticeError());
    }
    
    function renderCourses(courses) {
        let courseLearning = $('.learning__item')
        let courseWillLearn = $('.willLearning__item')
        let arrayLearning = [];
        let arrayWillLearn = [];
    
        courses.map(function(course) {
            if(course.status === true) {
                arrayLearning.push(`<a href="${course.link}" class="container__content-course-link margin--bottom col-3">
                         <div class="container__content-course-item-avatar">
                             <img src="${course.image}" class="container__content-course-item-img">
                         </div>
                         <div class="container__content-course-item-description">
                            <h3 class="container__content-course-item-name">${course.name}</h3>
                        </div>
                     </a>`)
            } else {
                arrayWillLearn.push(`<a href="${course.link}" class="container__content-course-link margin--bottom col-3">
                        <div class="container__content-course-item-avatar">
                            <img src="${course.image}" class="container__content-course-item-img">
                        </div>
                        <div class="container__content-course-item-description">
                            <h3 class="container__content-course-item-name">${course.name}</h3>
                        </div>
                    </a>`)
            }
        })
    
        courseLearning.innerHTML = arrayLearning.join();
        courseWillLearn.innerHTML = arrayWillLearn.join();
    }
    
    function noticeError() {
        let containerLearning = $('.learning__item')
        let courseWillLearn = $('.willLearning__item')
        containerLearning.innerHTML = `<p class="notice--error">Sorry. Không có dữ liệu để hiển thị !</p>`;
        courseWillLearn.innerHTML = `<p class="notice--error">Sorry. Không có dữ liệu để hiển thị !</p>`;
    }

    getCourses(renderCourses);

}

// Function handle button plus 
function handleBtnPlus () {
    let btnPlus = $('.navigation__button-btn')
    let iconPlus = $('.navigation__button-plus')
    let btnOpen = $('.navigation__button-open')
    
    btnPlus.onclick = function() {
        iconPlus.classList.toggle('navigation__button-plus--active');
        iconPlus.classList.toggle('navigation__button-plus--hover');
        btnOpen.classList.toggle('navigation__button-open--active');
    }

    btnPlus.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    document.addEventListener('click', (e) => {
        if(btnOpen.matches('.navigation__button-open--active')) {
            if(e.target != btnOpen) {
                btnOpen.classList.remove('navigation__button-open--active');
                iconPlus.classList.remove('navigation__button-plus--active');
                iconPlus.classList.toggle('navigation__button-plus--hover');
            }
        }
    })
}
