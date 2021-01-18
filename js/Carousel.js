/**
 * The constructor function that takes a Carousel object as an argument and creates a slider for it.
 * 
 * @param {HTMLDivElement} carousel the carousel element div container that will contain the slider
 * 
 * @author Shanand Shrestha
 */
function Carousel(carousel) {
    const container = carousel;
    const imageArray = Array.from(container.children);
    const navigationLeft = document.createElement('img');
    const navigationRight = document.createElement('img');
    const indicator = document.createElement('div');
    const navContainer = document.createElement('div');
    const imageSize = imageArray.length;
    const IMAGE_WIDTH = container.offsetWidth;
    const imagePositionArray = [{}];
    let indicators;
    let index = 0;
    let transition = 1000;
    let holdTime = 1000;
    let shift = 0;
    /**
     * add forward and back button on the carousels
     */
    const addNavigation = function () {
        navContainer.setAttribute('class', 'nav-container');
        navigationLeft.setAttribute('src', '../images/btn-left.svg');
        navigationLeft.setAttribute('class', 'btn-left');
        navigationLeft.setAttribute('alt', 'move left');
        navigationRight.setAttribute('src', '../images/btn-right.svg');
        navigationRight.setAttribute('class', 'btn-right');
        navigationRight.setAttribute('alt', 'move right');
        navContainer.appendChild(navigationLeft);
        navContainer.appendChild(navigationRight);
        container.appendChild(navContainer);
    }
    /**
     * add the indicators on the carousels
     */
    const addIndicators = function () {
        indicator.setAttribute('class', 'indicator-list');
        for (let i = 0; i < imageArray.length; i++) {
            const indicatorList = document.createElement('div');
            indicatorList.setAttribute('data-index', i);
            indicatorList.setAttribute('class', 'indicator-list-content');
            indicator.appendChild(indicatorList);
        }
        container.appendChild(indicator);
    }

    const setImagePosition = function () {
        imageArray.forEach((element, i) => {
            element.style.left = `${shift}px`;
            imagePositionArray[i] = {
                'position': `${shift}px`
            }
            shift += IMAGE_WIDTH;
        });
    }

    const slideImages = function (targetIndex) {
        imageArray[index].style.left = '1000px';
        imageArray[targetIndex].style.left = 0 + 'px';
        // let interval = setInterval(function () {
        //     let px = 1000;

        //     px += 50;
        // }, transition / 60);

        indicators[index].classList.remove('active');
        indicators[targetIndex].classList.add('active');
        index = targetIndex;
        // setTimeout(clearInterval(interval), holdTime);
    };
    const moveRight = function () {
        return (index + 1) % imageSize;
    };
    const moveLeft = function () {
        return (index - 1 + imageSize) % imageSize;
    };
    /**
     * set the initial slide image and active dots
     */
    this.init = function () {
        setImagePosition();
        addNavigation();
        addIndicators();
        indicators = document.querySelectorAll('.indicator-list-content');
        indicators[0].classList.add('active');
        navigationLeft.addEventListener('click', () => {
            let nextIndex = moveLeft();
            slideImages(nextIndex);
        });
        navigationRight.addEventListener('click', () => {
            let nextIndex = moveRight();
            slideImages(nextIndex);
        });
        indicators.forEach(dot => {
            dot.addEventListener('click', function (e) {
                slideImages(e.target.dataset.index);
                // e.target.classList.add('active')
            });
        });
    };
    /**
     * start the carousel
     */
    this.start = function () {

    };
}

export default Carousel;