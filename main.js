/*You tube player */
const youTubePlayerButton = document.getElementById("youTubeWatch");
const youTubePlayerCloser = document.getElementById("youTubePlayerCloser");
const youTubePlayer = document.getElementById("youTubePlayer");
youTubePlayerButton.addEventListener("click", () => {
	youTubePlayer.classList.add("active");
});
youTubePlayerCloser.addEventListener("click", () => {
	youTubePlayer.classList.remove("active");
});

/*Navbar hamburger */
const closeMenu = document.getElementById("closeMenu");
const openMenu = document.getElementById("openMenu");
const backOnMenu = document.getElementById("backOnMenu");
const Navbar = document.getElementById("NavBar");
openMenu.addEventListener("click", () => {
	Navbar.classList.add("active-nav");
	backOnMenu.classList.add("active");
});
closeMenu.addEventListener("click", () => {
	Navbar.style.animation = "close-nav ease 0.5s";
	Navbar.classList.remove("active-nav");
	backOnMenu.classList.remove("active");
});
backOnMenu.addEventListener("click", () => {
	Navbar.classList.remove("active-nav");
	backOnMenu.classList.remove("active");
});

/*scroll counter*/
const scrollElement = document.getElementById("count-on-scroll");
const scrollOffset = 100;
let countNumber95 = document.getElementById("count-num-95");
let countNumber115 = document.getElementById("count-num-115");
let countNumber8 = document.getElementById("count-num-8");
let countNumber12 = document.getElementById("count-num-12");

const elementInView = (el, offset = 10) => {
	const elementBottom = el.getBoundingClientRect().bottom;

	return (
		elementBottom >=
		(window.innerHeight || document.documentElement.clientHeight) + offset
	);
};

const animateValue = (obj, start, end, duration) => {
	let startTimestamp = null;
	const step = (timestamp) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		obj.innerHTML = Math.floor(progress * (end - start) + start);
		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};
	window.requestAnimationFrame(step);
};
const countFunction = () => {
	scrollElement.classList.add("scrolled");

	animateValue(countNumber95, 0, 95, 3000);
	animateValue(countNumber115, 0, 115, 3000);
	animateValue(countNumber8, 0, 8, 3000);
	animateValue(countNumber12, 0, 12, 3000);
};

const handleScrollAnimation = () => {
	if (elementInView(scrollElement, scrollOffset)) {
		console.log("scroll");
		countFunction();
	}
};
window.addEventListener("scroll", () => {
	handleScrollAnimation();
});

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

window.addEventListener("scroll", () => {
	//check if mediaQuery exists and if the value for mediaQuery does not match 'reduce', return the scrollAnimation.
	if (mediaQuery && !mediaQuery.matches) {
		handleScrollAnimation();
	}
});

//Testimonials slider
const wrapper = document.getElementById("wrapper");
const slideContainer = document.getElementById("slideShow");
const slide = document.getElementsByClassName("slide");

/*if we need next/prev buttons*/
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let interval = 3000;
let slideId;
let index = 1;

let x = 1;

const slideWidth = slide[0].clientWidth;
slide[index].classList.add("opacity-1");
slideContainer.style.transform = `translateX(${-slideWidth * index}px)`;

const moveToNextSlide = () => {
	if (index >= slide.length - 1) return;
	index++;
	x = index;

	for (var i = 0; i < slide.length; i++) {
		slide[i].classList.remove("opacity-1");
	}
	slideContainer.style.transition = ".7s ease-out";
	slideContainer.style.transform = `translateX(${-slideWidth * index}px)`;
};
const moveToPreviousSlide = () => {
	if (index <= 0) return;
	index--;
	x = index;
	slideContainer.style.transition = ".7s ease-out";
	slideContainer.style.transform = `translateX(${-slideWidth * index}px)`;
};

const startSlide = () => {
	slideId = setInterval(() => {
		moveToNextSlide();
	}, interval);
};
slideContainer.addEventListener("transitionend", () => {
	if (index === slide.length - 1 || index === 0) {
		x = 1;
	}

	slide[x].classList.add("opacity-1");
	if (slide[index].id === "firstClone") {
		slideContainer.style.transition = "none";
		index = slide.length - index;
		slideContainer.style.transform = `translateX(${-slideWidth * index}px)`;
	}

	if (slide[index].id === "lastClone") {
		slideContainer.style.transition = "none";
		index = slide.length - 2;
		slideContainer.style.transform = `translateX(${-slideWidth * index}px)`;
	}
});

wrapper.addEventListener("mouseenter", () => {
	clearInterval(slideId);
});
wrapper.addEventListener("mouseleave", startSlide);
nextBtn.addEventListener("click", moveToNextSlide);

prevBtn.addEventListener("click", moveToPreviousSlide);

prevBtn.addEventListener("mouseleave", startSlide);
startSlide();

//blog post slider

const blogWrapper = document.getElementById("blogWrapper");

const blogSlideContainer = document.getElementById("blogSlideShow");

const blogSlide = document.getElementsByClassName("blog-slide");

const blogNextBtn = document.getElementById("blogNextBtn");
const blogPrevBtn = document.getElementById("blogPrevBtn");

let blogInterval = 4000;
let blogSlideId;
let blogIndex = 1;

let y = 1;

const blogSlideWidth = blogSlide[0].clientWidth;
blogSlide[blogIndex].classList.add("blog-opacity-1");
blogSlideContainer.style.transform = `translateX(${
	-blogSlideWidth * blogIndex
}px)`;

const moveToNextBlogSlide = () => {
	if (blogIndex >= blogSlide.length - 1) return;
	blogIndex++;
	y = blogIndex;

	for (var i = 0; i < blogSlide.length; i++) {
		blogSlide[i].classList.remove("blog-opacity-1");
	}
	blogSlideContainer.style.transition = ".7s ease-out";
	blogSlideContainer.style.transform = `translateX(${
		-blogSlideWidth * blogIndex
	}px)`;
};
const moveToPreviousBlogSlide = () => {
	if (blogIndex <= 0) return;
	blogIndex--;
	y = blogIndex;
	blogSlideContainer.style.transition = ".7s ease-out";
	blogSlideContainer.style.transform = `translateX(${
		-blogSlideWidth * blogIndex
	}px)`;
};

const startBlogSlide = () => {
	blogSlideId = setInterval(() => {
		moveToNextBlogSlide();
	}, blogInterval);
};
blogSlideContainer.addEventListener("transitionend", () => {
	console.log("end");
	if (blogIndex === blogSlide.length - 1 || blogIndex === 0) {
		y = 1;
	}

	blogSlide[y].classList.add("blog-opacity-1");
	if (blogSlide[blogIndex].id === "blogFirstClone") {
		blogSlideContainer.style.transition = "none";
		blogIndex = blogSlide.length - blogIndex;
		blogSlideContainer.style.transform = `translateX(${
			-blogSlideWidth * blogIndex
		}px)`;
	}

	if (blogSlide[blogIndex].id === "blogLastClone") {
		blogSlideContainer.style.transition = "none";
		blogIndex = blogSlide.length - 2;
		blogSlideContainer.style.transform = `translateX(${
			-blogSlideWidth * blogIndex
		}px)`;
	}
});

blogWrapper.addEventListener("mouseenter", () => {
	clearInterval(blogSlideId);
});
blogWrapper.addEventListener("mouseleave", startBlogSlide);
blogNextBtn.addEventListener("click", moveToNextBlogSlide);

blogPrevBtn.addEventListener("click", moveToPreviousBlogSlide);

startBlogSlide();

// interval = 4000;
// const slideContainer1 = document.querySelector(".slide-cont1");
// const slide1 = document.querySelector(".slides1");
// // const nextBtn = document.getElementById("next-btn");
// // const prevBtn = document.getElementById("prev-btn");

// let slides1 = document.querySelectorAll(".slide1");
// let index1 = 1;
// let slideId1;

// const firstClone1 = slides1[0].cloneNode(true);
// const lastClone1 = slides1[slides.length - 1].cloneNode(true);

// firstClone1.id = "first-clone1";
// lastClone1.id = "last-clone1";

// slide1.append(firstClone1);
// slide1.prepend(lastClone1);

// const slideWidth1 = slides1[index1].clientWidth;

// slide1.style.transform = `translateX(${-slideWidth1 * index1}px)`;

// const startSlide1 = () => {
// 	slideId1 = setInterval(() => {
// 		moveToNextSlide1();
// 	}, interval);
// };

// const getSlides1 = () => document.querySelectorAll(".slide1");

// slide1.addEventListener("transitionend", () => {
// 	slides1 = getSlides1();
// 	if (slides1[index1].id === firstClone1.id) {
// 		slide1.style.transition = "none";
// 		index1 = 1;
// 		slide1.style.transform = `translateX(${-slideWidth1 * index1}px)`;
// 	}

// 	if (slides1[index1].id === lastClone1.id) {
// 		slide1.style.transition = "none";
// 		index1 = slides1.length - 2;
// 		slide1.style.transform = `translateX(${-slideWidth1 * index1}px)`;
// 	}
// });

// const moveToNextSlide1 = () => {
// 	slides1 = getSlides1();
// 	if (index1 >= slides1.length - 1) return;
// 	index1++;
// 	slide1.style.transition = ".7s ease-out";
// 	slide1.style.transform = `translateX(${-slideWidth1 * index1}px)`;
// };

// const moveToPreviousSlide1 = () => {
// 	if (index1 <= 0) return;
// 	index1--;
// 	slide1.style.transition = ".7s ease-out";
// 	slide1.style.transform = `translateX(${-slideWidth1 * index1}px)`;
// };

// slideContainer1.addEventListener("mouseenter", () => {
// 	clearInterval(slideId1);
// });

// slideContainer1.addEventListener("mouseleave", startSlide1);
// // nextBtn.addEventListener("click", moveToNextSlide1);
// // prevBtn.addEventListener("click", moveToPreviousSlide1);

// startSlide1();
