document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.banner-prev');
    const nextBtn = document.querySelector('.banner-next');
    
    let currentIndex = 0;
    let timer = null;

    // 切换到指定幻灯片
    function showSlide(index) {
        // 移除所有active类
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // 添加新的active类
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentIndex = index;
    }

    // 下一张
    function nextSlide() {
        let next = (currentIndex + 1) % slides.length;
        showSlide(next);
    }

    // 上一张
    function prevSlide() {
        let prev = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prev);
    }

    // 自动播放
    function startAutoPlay() {
        timer = setInterval(nextSlide, 3000);
    }

    function stopAutoPlay() {
        clearInterval(timer);
    }

    // 事件监听
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopAutoPlay();
            startAutoPlay();
        });
    });

    // 鼠标悬停控制
    const bannerWrapper = document.querySelector('.banner-wrapper');
    bannerWrapper.addEventListener('mouseenter', stopAutoPlay);
    bannerWrapper.addEventListener('mouseleave', startAutoPlay);

    // 开始自动播放
    startAutoPlay();
}); 