window.onload = function () {

    header = document.getElementById("header")
    header.innerHTML =
        `<header>
        <div class="container">
          <div class="logoimg">
            <img src="./image/LOGO24.png">
          </div>
          <div class="nav-top">
            <div class="d-flex justify-content-end">
              <ul class="nav d-flex flex-row me-">
                <li class="nav-item me-3 me-lg-0">
                  <form class="input-group">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                      aria-describedby="search-addon" />
                    <div class="input-group-text">
    
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-search" viewBox="0 0 16 16">
                        <path
                          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                      </svg>
                    </div>
                  </form>
                <li class="nav-item me-3 me-lg-0">
                  <a class="nav-link text-dark" style="font-size:20px;"href="shop-shop-cart.html"><i class="fas fa-cog mx-1"></i> 購物車<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-fill ms-1 mb-2" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
                      <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg></a>
                </li>
    
                <li class="nav-item dropdown">
                  <a class="nav-link  text-dark" style="font-size:20px;"href="member-index.html" id="navbarDropdown" role="button"
                    data-mdb-toggle="dropdown" aria-expanded="false"> <i class="fas fa-user mx-1"></i> 會員登入 <svg
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                      class="bi bi-person-fill" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg></a>
                  <!-- Dropdown menu -->
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
          
    
                    <li>
                   
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
    
    
        <!-- <div class="container"> -->
        <div class="container-fluid">
          <div class="black-bar">
            <ul class="nav-bt nav justify-content-end">
              <li class="nav-item  justify-content-end fs-5 fw-semibold">
                <a class="nav-link text-white fs-4" href="index.html">首頁</a>
              </li>
              </li>
              <li class="nav-item fs-5 fw-semibold">
                <a class="nav-link text-white fs-4" href="product-stickers.html">金屬貼</a>
              </li>
              </li>
              <li class="nav-item fs-5 fw-semibold">
                <a class="nav-link text-white fs-4 " href="product-accessory.html">特效件</a>
              </li>
              <li class="nav-item fs-5 fw-semibold">
                <a class="nav-link text-white fs-4 " href="product-base.html">地台</a>
              </li>
              <li class="nav-item fs-5 fw-semibold">
                <a class="nav-link text-white fs-4 " href="product-tool.html">工具及周邊商品</a>
              </li>
              <li class="nav-item fs-5 fw-semibold">
                <a class="nav-link text-white fs-4 " href="contact-us.html">聯絡我們</a>
              </li>
            </ul>
          </div>
        </div>
      </header>`;
    
    footer = document.getElementById("footer")
    footer.innerHTML =
    `<footer>
    <div>
      <div class="container">
        <img class="logoimg-bt " src="./image/LOGO24.png" style="width: 200px; height: auto;">
      </div>
      <div class="container-fluid container-low">
        <!-- <div class="">2024</div> -->
  
        <!-- <div class="borderfr"> -->
  
        <div class="contactmail fs-5 ">聯絡信箱：aygedsld@gmail.com</div>
        <div class="copyright fs-6 ">
          COPYRIGHT © TOYSYEH. ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  </footer>`
    }