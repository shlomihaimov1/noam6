import React, { useEffect } from 'react';

// CSS
import './css/home.css';

export default function Home() {

    // Runs once
    useEffect(() => {
        // Set evet listener for animation on scroll
        window.addEventListener('scroll', () => {
            checkElementLocation();
          });
      },[]);

    // Only when scroll to object fade in
    function checkElementLocation() {
        // Get all element with scroll class
        let fadeOnScrolls = document.getElementsByClassName("fade-in-on-scroll");
        
        // Go through them
        for(let fadeOnScroll of fadeOnScrolls)
        {
            // Get heights of screen and object (top&bottom)
            let top_of_element = fadeOnScroll.offsetTop;
            let bottom_of_element = fadeOnScroll.offsetTop + fadeOnScroll.clientHeight;
            let bottom_of_screen = window.scrollY + window.innerHeight;
            let top_of_screen = window.scrollY;
        
            // Check where scroll view as oppose to object
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !fadeOnScroll.classList.contains("is-visible")) {
                // Activate fade 
                fadeOnScroll.classList.add("is-visible");
            }
        }

        // Get all element with scroll class
        let fadeOnScrollPics = document.getElementsByClassName("fade-in-on-scroll-pics");

        // Go through them
        for(let fadeOnScrollPic of fadeOnScrollPics)
        {
            // Get heights of screen and object (top&bottom)
            let top_of_element = fadeOnScrollPic.offsetTop;
            let bottom_of_element = fadeOnScrollPic.offsetTop + fadeOnScrollPic.clientHeight;
            let bottom_of_screen = window.scrollY + window.innerHeight;
            let top_of_screen = window.scrollY;
        
            // Check where scroll view as oppose to object
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !fadeOnScrollPic.classList.contains("is-visible")) {
                // Activate fade 
                fadeOnScrollPic.classList.add("is-visible");
            }
        }

        // Get all element with scroll class
        let listScrolls = document.getElementsByClassName("rolldown-lists");
        
        // Go through them
        for(let listScroll of listScrolls)
        {
            // Get heights of screen and object (top&bottom)
            let top_of_element = listScroll.offsetTop;
            let bottom_of_element = listScroll.offsetTop + listScroll.clientHeight;
            let bottom_of_screen = window.scrollY + window.innerHeight;
            let top_of_screen = window.scrollY;
        
            // Check where scroll view as oppose to object
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                // Activate fade 
                
                setTimeout(function () {
                    listScroll.classList.add('rolldown-list');
                }, 1);
            }
        }
    }  
      

    return (
        <div>
            <section id='First-Section' className='first-section'>
                <div className='logo-wrapper'>
                    <img src='./images/logo.png' alt='logo' className='logo'></img>
                </div>

                <div className='first-section-content'>
                    <div className='home-content-wrapper'>
                        <div className='home-title-wrapper'>
                            <h1 className='home-title'>אתר אינטרנט  <br/> בקליק</h1>
                        </div>

                        <div className='home-button-wrapper'>
                            <button className='home-button'> אני רוצה עכשיו אתר </button>
                        </div>
                    </div>

                    <div className='main-pic-wrapper'>
                        <img src='./images/mainpic.png' alt='main-pic' className='main-pic'></img>
                    </div>
                </div>
            </section>

            <section id='Second-Section' className='fade-in-on-scroll second-section'>
                <div className='second-section-content'>
                    <div>
                        <h1 className='second-section-text'>
                            <span className='second-section-text-logo'>WEBITT </span>
                            <span>שלוש שניות ויש לך אתר.</span>
                        </h1>
                    </div>
                    
                    <div>
                        <p className='second-section-sub-text'>אז איך זה עובד?</p>
                    </div>
                </div>
            </section>

            <section id='Third-Section' className='step-section'>
                <div className='step-section-content'>
                    <div id='step1-image' className='step-img-wrapper fade-in-on-scroll-pics'>
                        <img className='step-img float-object' src='./images/step01.png'></img>
                    </div>

                    <div className='step-content fade-in-on-scroll list'>
                        <p className='step-describtion'>בחרו תבנית שתרצו שעליה ישב האתר והתוכן</p>
                    </div>
                </div>

                <div className='step-section-content'>
                    <div id='step2-image' className='step-img-wrapper fade-in-on-scroll-pics'>
                        <img className='step-img float-object' src='./images/step02.png'></img>
                    </div>

                    <div className='step-content fade-in-on-scroll list'>
                        <p className='step-describtion'>ענו על כמה שאלות, העלו תמונות וגם את הלוגו</p>
                    </div>
                </div>
            </section>

            <section id='Fourth-Section' className='step-section'>
                <div className='step-section-content'>
                    <div id='step3-image' className='step-img-wrapper fade-in-on-scroll-pics'>
                        <img className='step-img float-object' src='./images/step03.png'></img>
                    </div>

                    <div className='step-content fade-in-on-scroll list'>
                        <p className='step-describtion'>בחרו כתובת אינטרנט לעסק</p>
                    </div>
                </div>

                <div className='step-section-content'>
                    <div id='step4-image' className='step-img-wrapper fade-in-on-scroll-pics'>
                        <img className='step-img float-object' src='./images/step04.png'></img>
                    </div>

                    <div className='step-content fade-in-on-scroll list'>
                        <p className='step-describtion'>בחרו חבילת שיווק לפי הצורך</p>
                    </div>
                </div>
            </section>

            <section id='Fifth-Section' className='step-section'>
                <div className='step-section-content'>
                    <div id='step5-image' className='step-img-wrapper fade-in-on-scroll-pics'>
                        <img className='step-img float-object' src='./images/step05.png'></img>
                    </div>

                    <div className='step-content fade-in-on-scroll list'>
                        <p className='step-describtion'>עכשיו רק נשאר להנות מהתוצאות</p>
                    </div>
                </div>
            </section>

            <section id='Sixth-Section' className='sixth-section'>
                <div className='sixth-section-content'>
                    <p className='why-us-title fade-in-on-scroll-pics'>הטכנולוגיה שלנו היא הדרך הטובה ביותר ליצור אתרים ברגע. אתרים במגוון מטרות ועיצובים.</p>

                    <ul className="rolldown-lists" id="why-use-list">
                        <li>
                            <p className='list-cell'>אפשרות לקדם את האתר</p>
                        </li>
                        <li>
                            <p className='list-cell'>רכישת כתובת אתר אישית</p>
                        </li>
                        <li>
                            <p className='list-cell'>עיצוב יחודי עבור כל עסק</p>
                        </li>
                        <li>
                            <p className='list-cell'>מיקום העסק במפות</p>
                        </li>
                        <li>
                            <p className='list-cell'>שירות לקוחות זמין</p>
                        </li>
                    </ul> 
                </div>
            </section>

            <section id='Last-Section' className='last-section'>
                <div className='last-section-wrapper'>
                    <div className='contact-logo-wrapper'>
                        <div className='contact-logo-wrapper-wrapper'>
                            <img src='./images/logo.png' alt='logo' className='contact-logo'></img>
                        </div>
                    </div>

                    <div className='contact-text-wrapper'>
                        <h1 className='contact-title'>צור קשר</h1>
                        
                        <div>
                            <p>303030303</p>
                            <p>barkfc@gmail.com</p>
                        </div>

                        <div className='icons'>
                            <a href='' className='icon-link' target="_blank"><img src='./icons/whatsapp-icon.png' className='icon'></img></a>
                            <a href='' className='icon-link' target="_blank"><img src='./icons/facebook-icon.png' className='icon'></img></a>
                            <a href='' className='icon-link' target="_blank"><img src='./icons/instagram-icon.png' className='icon'></img></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}