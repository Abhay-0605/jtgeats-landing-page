const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const video = document.getElementById('mainVideo');
const playOverlay = document.getElementById('playOverlay');
const videoWrapper = document.getElementById('videoWrapper');
const modalOverlay = document.getElementById('modalOverlay');
const requestDishBtn = document.getElementById('requestDishBtn');
const modalClose = document.getElementById('modalClose');
const modalCancel = document.getElementById('modalCancel');
const modalSubmit = document.getElementById('modalSubmit');

const cardWidth = 277 + 27;
let currentIndex = 0;
const maxIndex = track.children.length - 3;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  track.style.transition = 'transform 0.4s ease';
  prevBtn.style.opacity = currentIndex === 0 ? '0.4' : '1';
  nextBtn.style.opacity = currentIndex >= maxIndex ? '0.4' : '1';
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

updateCarousel();

videoWrapper.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playOverlay.classList.add('hidden');
  } else {
    video.pause();
    playOverlay.classList.remove('hidden');
  }
});

function openModal() {
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

requestDishBtn.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
modalCancel.addEventListener('click', closeModal);
modalSubmit.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});