<template>
  <div>
    <!-- 輪播 -->
    <article>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            class="active"
            type="button"
            aria-current="true"
            aria-label="Slide 1"
            data-bs-slide-to="0"
            data-bs-target="#carouselExampleIndicators"
          ></button>
          <button
            type="button"
            aria-label="Slide 2"
            data-bs-slide-to="1"
            data-bs-target="#carouselExampleIndicators"
          ></button>
          <button
            type="button"
            aria-label="Slide 3"
            data-bs-slide-to="2"
            data-bs-target="#carouselExampleIndicators"
          ></button>
        </div>
        <div class="carousel-inner position-relative">
          <div class="carousel-item active banner-outer">
            <div class="d-block banner-img"></div>
            <div class="banner-middle-content">
              <div class="middle-content-title text-white">高雄</div>
              <div class="middle-content-title text-white">豪華住宿之選</div>
              <div class="text-white banner-slogn">
                我們致力於為您提供無與倫比的奢華體驗與優質服務
              </div>
              <button
                class="banner-button d-flex justify-content-end align-items-center"
                type="button"
              >
                <div class="banner-button-text">立即訂房</div>
                <div class="banner-button-line"></div>
              </button>
            </div>
            <div class="banner-left-content text-primary-dark">
              <div class="zh-title">享樂酒店</div>
              <div class="en-title">Enjoyment Luxury Hotel</div>
              <div class="line"></div>
            </div>
            <div class="banner-right-content"></div>
          </div>
          <!-- <div class="carousel-item">
          <img src="/img/desktop/HeroImg.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="/img/desktop/HeroImg.png" class="d-block w-100" alt="...">
        </div> -->
        </div>
      </div>
    </article>

    <!-- 最新消息 -->
    <article class="bg-goose-yellow position-relative news-outer">
      <div class="news-top-absolute"></div>
      <div class="news-bottom-absolute"></div>

      <div class="container news-content">
        <div class="row">
          <div class="col-12 col-md-2">
            <img src="/img/desktop/news.png" alt="" />
          </div>
          <div class="col-12 col-md-10">
            <div class="card card-outer">
              <div>
                <div class="news-img-one"></div>
              </div>
              <div class="card-body d-flex justify-content-start align-items-center">
                <div class="card-content">
                  <div class="card-title">秋季旅遊，豪華享受方案</div>
                  <p class="card-text">
                    秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-2"></div>
          <div class="col-12 col-md-10">
            <div class="card card-outer">
              <div>
                <div class="news-img-two"></div>
              </div>
              <div class="card-body d-flex justify-content-start align-items-center">
                <div class="card-content">
                  <div class="card-title">輕鬆住房專案</div>
                  <p class="card-text">
                    我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-2"></div>
          <div class="col-12 col-md-10">
            <div class="card card-outer">
              <div>
                <div class="news-img-three"></div>
              </div>
              <div class="card-body d-flex justify-content-start align-items-center">
                <div class="card-content">
                  <div class="card-title">耶誕快樂，住房送禮</div>
                  <p class="card-text">
                    聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- 關於我們 -->
    <article class="bg-deep about-outer position-relative">
      <div class="about-img"></div>
      <div class="text-white about-main">
        <div class="about-img-text"></div>
        <div class="about-content">
          <p class="about-content-text">
            享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
            我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
          </p>
          <p class="about-content-text">
            我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
            我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
          </p>
          <p class="about-content-text">
            在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
          </p>
          <p class="about-content-text">
            享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
          </p>
        </div>
      </div>
    </article>

    <!-- 房型 -->
    <article class="position-relative room-outer">
      <img class="position-absolute deco-top" src="/img/desktop/deco-1.png" alt="" />
      <img class="position-absolute deco-bottom" src="/img/desktop/deco-2.png" alt="" />
      <img class="position-absolute room-margin" src="/img/desktop/roomImg.png" alt="" />
      <div class="container">
        <div class="row">
          <div class="col-6"></div>
          <div class="col-6 text-light room-content">
            <h2 class="room-title">尊爵雙人房</h2>
            <div class="fs-7">
              享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
            </div>
            <h3 class="room-price">NT$ 10,000</h3>
            <button class="btn room-button" type="button">
              查看更多
              <img class="room-button-line" src="/img/desktop/line.png" alt="" />
            </button>
            <div class="d-flex justify-content-end">
              <img src="/img/desktop/leftButton.png" alt="" />
              <img src="/img/desktop/rightButton.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- 佳餚美饌 -->
    <article class="bg-goose-yellow position-relative food-outer">
      <img class="food-deco" src="/img/desktop/deco-3.png" alt="" />
      <img class="position-absolute food-dot" src="/img/desktop/dot.png" alt="" />
      <img class="position-absolute food-title-absolute" src="/img/desktop/foodName.png" alt="" />

      <div class="position-absolute food-card-box">
        <div class="card-content">
          <img class="position-relative" src="/img/desktop/food-1.png" alt="" />
          <div class="card-bg position-absolute py-4">
            <div class="d-flex mb-4">
              <h5 class="ms-4">海霸</h5>
              <div class="ms-auto me-4">
                <div class="fs-7 card-week">SUN-MON</div>
                <div class="fs-7">11:00 - 20:30</div>
              </div>
            </div>
            <div class="mx-4">
              <div class="fs-7 card-directions">
                以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。
              </div>
            </div>
          </div>
        </div>

        <div class="card-content">
          <img class="position-relative" src="/img/desktop/food-2.png" alt="" />
          <div class="card-bg position-absolute py-4">
            <div class="d-flex mb-4">
              <h5 class="ms-4">日食</h5>
              <div class="ms-auto me-4">
                <div class="fs-7 card-week">SUN-MON</div>
                <div class="fs-7">17:00 - 22:00</div>
              </div>
            </div>
            <div class="mx-4">
              <div class="fs-7 card-directions">
                為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。
              </div>
            </div>
          </div>
        </div>

        <div class="card-content">
          <img class="position-relative" src="/img/desktop/food-3.png" alt="" />
          <div class="card-bg position-absolute py-4">
            <div class="d-flex mb-4">
              <h5 class="ms-4">山臻</h5>
              <div class="ms-auto me-4">
                <div class="fs-7 card-week">SUN-MON</div>
                <div class="fs-7">11:30 - 20:30</div>
              </div>
            </div>
            <div class="mx-4">
              <div class="fs-7 card-directions">
                帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。
              </div>
            </div>
          </div>
        </div>

        <div class="card-content">
          <img class="position-relative" src="/img/desktop/food-4.png" alt="" />
          <div class="card-bg position-absolute py-4">
            <div class="d-flex mb-4">
              <h5 class="ms-4">月永</h5>
              <div class="ms-auto me-4">
                <div class="fs-7 card-week">SUN-MON</div>
                <div class="fs-7">11:00 - 20:00</div>
              </div>
            </div>
            <div class="mx-4">
              <div class="fs-7 card-directions">
                從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。
              </div>
            </div>
          </div>
        </div>

        <div class="card-content">
          <img class="position-relative" src="/img/desktop/food-5.png" alt="" />
          <div class="card-bg position-absolute py-4">
            <div class="d-flex mb-4">
              <h5 class="ms-4">天潮</h5>
              <div class="ms-auto me-4">
                <div class="fs-7 card-week">SUN-MON</div>
                <div class="fs-7">14:00 - 19:30</div>
              </div>
            </div>
            <div class="mx-4">
              <div class="fs-7 card-directions">
                我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- 交通方式 -->
    <article class="bg-deep position-relative traffic-outer">
      <div class="container">
        <div class="row">
          <div class="col-3 traffic-name"></div>
          <div class="col-9"></div>
          <div class="col-3 mb-3"></div>
          <div class="col-9"></div>
          <div class="col-12 traffic-map">
            <img src="/img/desktop/map.png" alt="" />
          </div>
          <div class="col-4">
            <img class="mb-3" src="/img/desktop/car.png" alt="" />
            <h5 class="text-white mb-2">自行開車</h5>
            <div class="fs-7 text-white">
              如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
            </div>
          </div>
          <div class="col-4">
            <img class="mb-3" src="/img/desktop/train.png" alt="" />
            <h5 class="text-white mb-2">高鐵/火車</h5>
            <div class="fs-7 text-white">
              如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
            </div>
          </div>
          <div class="col-4">
            <img class="mb-3" src="/img/desktop/luxurycar.png" alt="" />
            <h5 class="text-white mb-2">禮賓車服務</h5>
            <div class="fs-7 text-white">
              承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567
            </div>
          </div>
        </div>
      </div>
      <img class="traffic-deco" src="/img/desktop/deco-4.png" alt="" />
    </article>
  </div>
</template>

<script lang="ts" setup>
// import { useCommonStore } from '@/stores/common'
// const commonStore = useCommonStore()
// const { x, y } = useMouse()

// const { locale, setLocaleCookie } = useI18n()

// const chengeLanguage = () => {
//   const localeCode = locale.value === 'en' ? 'zh' : 'en'
//   locale.value = localeCode
//   setLocaleCookie(localeCode)
// }
</script>

<style lang="scss" scoped>
.bg-deep {
  background-color: #140f0aff;
}

.bg-goose-yellow {
  width: 1920px;
  background-color: #f7f2ee;
}

.banner-outer {
  .banner-img {
    width: 100%;
    height: 1080px;
    background-image: url('/img/desktop/HeroImg.png');
    filter: brightness(60%);
  }

  .banner-middle-content {
    position: absolute;
    top: 332px;
    left: 868px;

    .middle-content-title {
      font-size: 100px;
    }

    .banner-slogn {
      font-size: 32px;
      margin-bottom: 60px;
    }

    .banner-button {
      font-size: 24px;
      width: 772px;
      height: 116px;
      border: none;
      border-radius: 8px;
      background-color: #fff;

      &:hover {
        background-color: #7b6651;
      }

      .banner-button-text {
        margin-right: 16px;
      }

      .banner-button-line {
        width: 120px;
        height: 1px;
        background-image: url('/img/desktop/line.png');
      }
    }
  }

  .banner-left-content {
    position: absolute;
    top: 512px;
    left: 80px;

    .zh-title {
      font-size: 40px;
    }

    .en-title {
      font-size: 24px;
    }

    .line {
      width: 636px;
      margin-top: 40px;
      border-top: solid #be9c7c 2px;
    }
  }

  .banner-right-content {
    position: absolute;
    top: 236px;
    left: 916px;
    width: 924px;
    height: 668px;
    opacity: 0.5;
    border: solid 1px #f5f7f9;
    border-bottom: none;
    border-left: none;
    border-radius: 80px;
    background-image: linear-gradient(to bottom, #fff 0%, #fff 30%);
  }

  @media (max-width: 768px) {
    .banner-img {
      background-image: url('/img/mobile/HeroImg.png');
      background-repeat: no-repeat;
      background-size: cover;
    }

    .banner-left-content {
      top: 200px;
      left: 100px;
      display: flex;
      align-content: flex-start;
      flex-direction: column;
      justify-content: center;

      .zh-title {
        font-size: 28px;
        font-weight: 700;
        margin-left: 70px;
      }

      .en-title {
        font-size: 24px;
        font-weight: 700;
      }

      .line {
        position: absolute;
        left: 50%;
        width: 0;
        height: 100%;
        margin-top: 175px;
        border-left: 2px solid #be9c7c;
      }
    }

    .banner-right-content {
      top: 430px;
      left: 110px;
      width: 291px;
      height: 420px;
    }

    .banner-middle-content {
      top: 510px;
      left: 30px;

      .middle-content-title {
        font-size: 48px;
      }

      .banner-slogn {
        font-size: 16px;
        margin-bottom: 60px;
      }

      .banner-button {
        font-size: 16px;
        width: 309px;
        height: 64px;

        .banner-button-text {
          margin-right: 16px;
        }

        .banner-button-line {
          width: 80px;
          height: 1px;
          background-image: url('/img/mobile/line.png');
        }
      }
    }
  }
}

.news-outer {
  .news-top-absolute {
    position: absolute;
    top: 100px;
    left: 1540px;
    width: 200px;
    height: 200px;
    background-image: url('/img/desktop/dot.png');
  }

  .news-bottom-absolute {
    position: absolute;
    z-index: 9;
    top: 1082px;
    left: 200px;
    width: 200px;
    height: 200px;
    background-image: url('/img/desktop/dot.png');
  }

  .news-content {
    padding-top: 120px;
    padding-bottom: 120px;

    .card-outer {
      display: flex;
      margin-bottom: 40px;

      .news-img-one {
        width: 474px;
        height: 294px;
        background-image: url('/img/desktop/newsImg-1.png');
        background-repeat: no-repeat;
        background-size: cover;
      }

      .news-img-two {
        width: 474px;
        height: 294px;
        background-image: url('/img/desktop/newsImg-2.png');
        background-repeat: no-repeat;
        background-size: cover;
      }

      .news-img-three {
        width: 474px;
        height: 294px;
        background-image: url('/img/desktop/newsImg-3.png');
        background-repeat: no-repeat;
        background-size: cover;
      }

      .card-content {
        margin-left: 12px;

        .card-title {
          font-size: 24px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .news-top-absolute {
      position: absolute;
      top: 40px;
      left: 251px;
      width: 100px;
      height: 100px;
      background-image: url('/img/mobile/dot.png');
    }

    .news-bottom-absolute {
      top: 1900px;
      left: 24px;
      width: 100px;
      height: 100px;
      background-image: url('/img/mobile/dot.png');
    }

    .news-content {
      padding-top: 120px;
      padding-bottom: 120px;

      .card-outer {
        display: block;
        margin-top: 40px;
        margin-bottom: 40px;

        .news-img-one {
          width: 351px;
          margin-bottom: 24px;
          background-image: url('/img/mobile/newsImg-1.png');
          background-repeat: no-repeat;
          background-size: cover;
        }

        .news-img-two {
          width: 351px;
          margin-bottom: 24px;
          background-image: url('/img/mobile/newsImg-2.png');
          background-repeat: no-repeat;
          background-size: cover;
        }

        .news-img-three {
          width: 351px;
          margin-bottom: 24px;
          background-image: url('/img/mobile/newsImg-3.png');
          background-repeat: no-repeat;
          background-size: cover;
        }

        .card-content {
          width: 360px;
          margin-left: 0;

          .card-title {
            font-size: 28px;
            line-height: 33px;
            margin-bottom: 8px;
            letter-spacing: 5%;
          }

          .card-text {
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 2%;
          }
        }
      }
    }
  }
}

.about-outer {
  padding-top: 120px;
  padding-bottom: 200px;

  .about-img {
    width: 1920px;
    height: 672px;
    background-image: url('/img/desktop/about.png');
  }

  .about-main {
    position: absolute;
    top: 200px;
    left: 564px;
    opacity: 0.8;
    border: 1px solid #fff;
    border-top: none;
    border-right: none;
    border-radius: 80px 80px 0 80px;
    background-image: linear-gradient(to bottom, #140f0a 0%, #be9c7c 80%);

    .about-content {
      width: 884px;
      margin-top: 80px;
      margin-left: 80px;

      .about-content-text {
        margin-bottom: 40px;
      }
    }

    .about-img-text {
      width: 304px;
      height: 120px;
      margin-top: 80px;
      margin-left: 80px;
      background-image: url('/img/desktop/aboutName.png');
    }
  }

  @media (max-width: 768px) {
    .about-img {
      width: 375px;
      height: 594px;
      background-image: url('/img/mobile/about.png');
    }

    .about-main {
      top: 160px;
      left: 40px;
      opacity: 0.8;
      border: 1px solid #fff;
      border-top: none;
      border-right: none;
      border-radius: 40px 40px 0 40px;
      background-image: linear-gradient(to bottom, #140f0a 0%, #be9c7c 80%);

      .about-content {
        width: 267px;
        margin-top: 40px;
        margin-left: 24px;

        .about-content-text {
          font-size: 14px;
          margin-bottom: 40px;
        }
      }

      .about-img-text {
        width: 267px;
        height: 80px;
        margin-top: 24px;
        margin-left: 24px;
        background-image: url('/img/mobile/aboutName.png');
      }
    }
  }
}

.room-outer {
  height: 1140px;
  background-color: #140f0aff;

  .deco-top {
    top: 180px;
    left: 860px;
  }

  .deco-bottom {
    top: 463px;
  }

  .room-margin {
    margin-top: 120px;
  }

  .room-content {
    margin-top: 602px;

    .room-title {
      margin-bottom: 16px;
    }

    .room-price {
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .room-button {
      font-size: 24px;
      width: 628px;
      height: 116px;
      margin-bottom: 40px;
      text-align: end;
      background-color: #fff;

      &:hover {
        background-color: #7b6651;
      }

      .room-button-line {
        margin-left: 16px;
      }
    }
  }
}

.food-outer {
  .food-deco {
    z-index: 9;
    margin-top: 55px;
    margin-left: 4px;
  }

  .food-dot {
    z-index: 9;
    right: 80px;
    bottom: 880px;
    width: 200px;
    height: 200px;
  }

  .food-title-absolute {
    top: 120px;
    left: 312px;
  }

  .food-card-box {
    top: 320px;
    left: 312px;
    overflow-y: auto;
    width: 1600px;
    height: 600px;
    white-space: nowrap;

    ::-webkit-scrollbar {
      display: none;
    }

    .card-content {
      display: inline-block;
      width: 416px;
      height: 600px;
      margin-right: 24px;
      color: #fff;
      border-radius: 8px;

      .card-bg {
        top: 403px;
        width: 416px;
        opacity: 0.8;
        background: linear-gradient(to bottom, #000 0%, #140f0a 0%);

        .card-week {
          margin-right: 16px;
        }

        .card-directions {
          white-space: normal;
        }
      }
    }
  }
}

.traffic-outer {
  padding-top: 120px;

  .traffic-name {
    margin-bottom: 80px;
  }

  .traffic-map {
    margin-bottom: 40px;
  }

  .traffic-deco {
    margin-top: 80px;
  }
}
</style>
