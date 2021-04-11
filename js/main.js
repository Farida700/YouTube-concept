const swiper = new Swiper(".channel_slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".channel-button-next",
    prevEl: ".channel-button-prev",
  },
});
const firstSwiper = new Swiper(".first_channel_slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1600: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 2,
    },
    navigation: {
      nextEl: ".first-channel-button-next",
      prevEl: ".first-channel-button-prev",
    },
  },
});
const secondSwiper = new Swiper(".second_channel_slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: ".second-channel-button-next",
    prevEl: ".second-channel-button-prev",
  },
});

const searchBtn = document.querySelector('.mobile_search');
const mobileSearch = document.querySelector('input_group');
searchBtn.addEventListener('click', () => {
    mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 640){
    swiper.destroy();
    firstSwiper.destroy();
    secondSwiper.destroy();
}
