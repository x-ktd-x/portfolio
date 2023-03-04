

// 各項目を開く
const items = Array.from(document.querySelectorAll('.about-item'));

items.forEach((item) => {
    item.addEventListener('click', function() {
      this.classList.toggle('open');
    });
});

