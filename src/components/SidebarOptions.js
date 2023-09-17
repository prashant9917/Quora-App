import { Add } from "@material-ui/icons";
import React from "react";
import "./SidebarOption.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&w=1000&q=80"
          alt=""
        />
        <p>Computer</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.istockphoto.com/id/1418476287/photo/businessman-analyzing-companys-financial-balance-sheet-working-with-digital-augmented-reality.webp?b=1&s=170667a&w=0&k=20&c=AurjFYGLfh8-rkyvrr_u2hBHP2Eqaj39Gri8kl_Q7e8="
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"
          alt=""
        />
        <p>News</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.istockphoto.com/id/1136317339/photo/sports-equipment-on-floor.jpg?s=612x612&w=0&k=20&c=-aI8u_Se89IC-HJZYH724ei5z-bIcSvRW6qUwyMtRyE="
          alt=""
        />
        <p>Sports</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.xxl.thumbs.canstockphoto.com/music-energy-clipping-path-xxl-music-energy-clipping-path-for-easy-placing-your-text-behind-stock-photograph_csp0593999.jpg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.odmps.org/updates/wp-content/uploads/2022/01/3651141-scaled.jpg"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://t4.ftcdn.net/jpg/04/42/21/53/360_F_442215355_AjiR6ogucq3vPzjFAAEfwbPXYGqYVAap.jpg"
          alt=""
        />
        <p>Games</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/premium-vector/movie-cinema-premiere-background_41737-251.jpg"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.webp?b=1&s=170667a&w=0&k=20&c=iJp6e2C-l2lRmyG3ColHMpXe0QYrPnrfQQc2O6PsYC4="
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/006/817/039/small/educational-equipment-boards-and-books-education-concept-with-copy-space-photo.jpg"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
