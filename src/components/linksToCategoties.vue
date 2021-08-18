<template>
  <div class="boxes_padding">
    <div class="container">
      <div class="boxes">
        <div class="box">
          <div class="photo_wrap">
            <img src="../assets/images/girl.jpeg" alt="girl" />
          </div>
          <div class="description">
            <h3>MIND AND Seduction</h3>
            <div class="clothes_link">SPRING IMAGES</div>
            <router-link to="collectionCategory/women" class="btnn"
              >To the women's department &rarr;</router-link
            >
          </div>
        </div>
        <div class="box box_revers">
          <div class="photo_wrap">
            <img src="../assets/images/guy.jpeg" alt="guy" />
          </div>
          <div class="description description_blue">
            <h3>POWER AND FREEDOM</h3>
            <div class="clothes_link">PREPARE FOR SUMMER</div>
            <router-link :to="'collectionCategory/mens'" class="btnn"
              >To the men's department &rarr;</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.boxes_padding {
  padding: 100px 0 100px;

  .boxes {
    display: flex;
    flex-direction: column;
  }

  .box {
    display: flex;
  }

  .photo_wrap {
    width: 50%;
    img {
      width: 100%;
    }
  }
  .description {
    width: 50%;
    background-color: #ffe9e3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .clothes_link {
      font-size: 22px;
      margin-bottom: 40px;
      position: relative;

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 120%;
        left: 50%;
        transform: translate(-50%);
        background-color: #333;
        width: 50%;
        height: 2px;
      }
    }
  }
  .description_blue {
    background-color: #a3c7bd;
  }
}
.box_revers {
  flex-direction: row-reverse;
}

@media screen and (max-width: 900px) {
  .boxes_padding {
    padding: 60px 0;
  }
  .box {
    flex-direction: column;
    align-items: center;

    .photo_wrap {
      width: 80%;
      max-height: 400px;
    }
    .description {
      text-align: center;
      padding: 40px 5px;
      width: 80%;

      h3 {
        font-size: 22px;
      }
      .clothes_link {
        font-size: 20px;
      }
      .btnn {
        width: 80%;
        padding: 10px 20px;
      }
    }
  }
}
</style>