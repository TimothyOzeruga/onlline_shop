<template>
  <div class="bg_gallery">
    <div class="container">
      <div class="gallery" id="lightgallery">
        <div class="gallery_img img1">
          <img
            src="https://cdn.dressa.com.ua/ostrov-cache/top_banner/1624954991/platye.jpg"
            alt="gallery_photo"
          />
        </div>
        <div class="gallery_img">
          <img
            src="https://cdn.dressa.com.ua/ostrov-cache/top_banner/1624955363/natur-tkati.jpg"
            alt="gallery_photo"
          />
        </div>
        <div class="gallery_img">
          <img
            src="https://cdn.dressa.com.ua/ostrov-cache/top_banner/1624955189/print.jpg"
            alt="gallery_photo"
          />
        </div>
        <div class="gallery_img">
          <img
            src="https://cdn.dressa.com.ua/ostrov-cache/top_banner/1625128713/batal1.jpg"
            alt="gallery_photo"
          />
        </div>
      </div>
    </div>
  </div>
</template>
    
<style lang="scss">
.bg_gallery {
  padding: 100px 0 50px;
}
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .gallery_img {
    width: calc(50% - 10px);
    margin-bottom: 20px;

    img {
      width: 100%;
    }
  }
}
@media screen and (max-width: 650px) {
  .bg_gallery {
    padding-top: 50px;
  }
  .gallery {
    flex-direction: column;
    align-items: center;

    .gallery_img {
      width: 90%;
    }
  }
}
</style>

<script>
export default {};
</script>
