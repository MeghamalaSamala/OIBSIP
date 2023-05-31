<script>
     var lightbox = new SimpleLightbox(".stars-gallery a");
</script>
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
