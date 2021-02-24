import React from "react";
import "./404.css";

const PageNotFound = () => {
  return (
    <div class="mainbox">
      <div class="err">404</div>
      {/* <div class="far fa-question-circle fa-spin">0</div>
      <div class="err2">4</div> */}
      <div class="msg">
        Rất tiếc trang bạn tìm kiếm không tồn tại
        <p>
          Trở về{" "}
          <a class="home" href="/home">
            Trang chủ
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
