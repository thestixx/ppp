import React from 'react';


const Banner = () => {
   const stle1 ={
      background: "transparent",
      padding: "0",
      margin: "0px",
      automarginTop: "0",
      marginBottom: "0"
   }
   const style2 = {
      zIndex: "10",
      textTransform: "capitalize",
      fontFamily: "Jost, sansserif"
   }
   const style3 = {
      zIndex: "11",
      fontFamily: "Jost, sansserif"
      }
   const style4 = {
      zIndex: "9",
      backgroundColor: "#0096ff",
      fontFamily: "Jost, sansserif",
   
      }
      const style5 = {
         zIndex: "12",
         textTransform: "capitalize",
         fontFamily: "Jost, sansserif"
      }
      const style6 = {
         zIndex: "8",
         backgroundColor: "#002155",
         fontFamily: "Jost, sansserif"
      }
      const style7 = {
         zIndex: "10",
         fontFamily: "Jost, sansserif"
      }
      const style8 = {
         zIndex: "12",
         fontFamily: "Jost, sansserif"
      }

    return(
    <>
    <p className="rs-p-wp-fix"></p>
      <rs-module-wrap id="rev_slider_6_1_wrapper" data-alias="slider-1-1-1" data-source="gallery"
         style={stle1}>
         <rs-module id="rev_slider_6_1" style={{display:"none"}} data-version="6.2.2">
            <rs-slides>
               <rs-slide data-key="rs-18" data-title="Slide" data-thumb="rev-slider/assets/banner-2-50x100.jpg"
                  data-anim="ei:d;eo:d;s:600;r:0;t:fade;sl:0;">
                  <img src="images/bg/dam.jpg" title="banner-2" width="1920" height="1080" className="rev-slidebg" alt="banner"
                     data-no-retina />
                  {/* <!--
                     --> */}
                  <rs-layer id="slider-6-slide-18-layer-2" data-type="text" data-color="#f9f6ee" data-rsp_ch="on"
                     data-xy="xo:50px,40px,30px,15px;y:m;yo:-17px,-13px,0,-2px;"
                     data-text="w:normal;s:92,72,56,42;l:92,72,60,48;fw:600;" data-frame_0="x:50,39,29,17;"
                     data-frame_1="st:900;sp:1000;" data-frame_999="o:0;st:w;"
                     style={style2}>We are inviting Investors<br />
                     to partner with us.
                  </rs-layer>
                  {/* <!--
                     --> */}
                  <rs-layer id="slider-6-slide-18-layer-3" data-type="text" data-color="#f9f6ee" data-rsp_ch="on"
                     data-xy="xo:50px,40px,30px,15px;y:m;yo:118px,92px,28px,37px;"
                     data-text="w:normal;s:16,12,16,11;l:32,25,32,22;" data-dim="minh:0px,none,none,none;"
                     data-vbility="t,t,f,f" data-frame_0="x:50,39,29,17;" data-frame_1="st:1200;sp:1000;"
                     data-frame_999="o:0;st:w;"  style= {style3}> The government wants to harness private
                      investment and technical know-how to overcome financial constraints and deliver <br/>high-quality dams that meet the country's water and energy needs.
                  </rs-layer>
                  {/* <!--
                     --> */}
                     <a href="/" >
                  <rs-layer id="slider-6-slide-18-layer-4" url="/" className="rev-btn" data-type="button" data-rsp_ch="on"
                     data-xy="xo:50px,40px,30px,15px;y:m;yo:214px,168px,115px,84px;"
                     data-text="w:normal;s:16,12,16,16;l:32,25,32,30;" data-dim="minh:0px,none,none,none;"
                     data-padding="t:12,9,7,4;r:32,25,19,12;b:12,9,7,4;l:32,25,19,12;" data-frame_0="x:50,39,29,17;"
                     data-frame_1="st:1500;sp:1000;" data-frame_999="o:0;st:w;"
                     data-frame_hover="bgc:#002155;bor:0px,0px,0px,0px;sp:200;e:power1.inOut;"
                     style={style4}>Explore More
                  </rs-layer>
                  </a>
                  {/* <!--  z-index:9;background-color:#ff5e14;font-family:Jost, sans-serif;"
                     --> */}
                     
                  <rs-layer id="slider-6-slide-18-layer-5" data-type="text" data-color="#f9f6ee" data-rsp_ch="on"
                     data-xy="xo:50px,40px,30px,15px;y:m;yo:-127px,-100px,-87px,-74px;"
                     data-text="w:normal;s:16,12,16,16;l:30,23,26,24;fw:600;" data-padding="l:10,8,6,4;"
                     data-border="bos:solid;boc:#ff631b;bow:0,0,0,2px;" data-frame_0="x:50,39,29,17;"
                     data-frame_1="st:600;sp:1000;" data-frame_999="o:0;st:w;"
                     style={style5}>Providing alternatives in Great Experience in
                     Bulding.
                  </rs-layer>
                  {/* <!--
                     --> */}
                       {/* <a href="/" >
                  <rs-layer id="slider-6-slide-18-layer-6" url="/aboutus" className="rev-btn" data-type="button" data-rsp_ch="on"
                     data-xy="xo:245px,189px,193px,154px;y:m;yo:214px,168px,115px,84px;"
                     data-text="w:normal;s:16,12,16,16;l:32,25,32,30;" data-dim="minh:0px,none,none,none;"
                     data-padding="t:12,9,7,4;r:32,25,19,12;b:12,9,7,4;l:32,25,19,12;" data-frame_0="x:50,39,29,17;"
                     data-frame_1="st:1800;sp:1000;" data-frame_999="o:0;st:w;"
                     data-frame_hover="bgc:#ff5e14;bor:0px,0px,0px,0px;sp:200;e:power1.inOut;"
                     style={style6}>Get In Touch<br />
                  </rs-layer>
                  </a> */}
                  {/* <!--   style="z-index:8;background-color:#f9f6ee;font-family:Jost, sans-serif;"
                     --> */}
               </rs-slide>
               <rs-slide data-key="rs-16" data-title="Slide" data-thumb="rev-slider/assets/banner-3-50x100.jpg"
                  data-anim="ei:d;eo:d;s:600;r:0;t:fade;sl:0;">
                  <img src="images/bg/dam4.jpg" alt="banner" title="banner-3" width="1920" height="1080" className="rev-slidebg"
                     data-no-retina/>
                  {/* <!--
                     --> */}
                  <rs-layer id="slider-6-slide-16-layer-2" data-type="text" data-color="#f9f6ee" data-rsp_ch="on"
                     data-xy="xo:45px,40px,30px,15px;y:m;yo:-17px,-13px,0,-22px;"
                     data-text="w:normal;s:92,72,72,50;l:92,72,72,50;fw:600;" data-frame_0="x:50,39,29,17;"
                     data-frame_1="st:900;sp:1000;" data-frame_999="o:0;st:w;"
                     style= {style7}>Partnerships with Long<br />
                     Term Benefits
                  </rs-layer>
                  {/* <!--
                     --> */}
                  <rs-layer id="slider-6-slide-16-layer-3" data-type="text" data-color="#f9f6ee" data-rsp_ch="on"
                     data-xy="xo:45px,40px,30px,15px;y:m;yo:108px,95px,76px,45px;"
                     data-text="w:normal;s:16,16,16,11;l:32,32,32,24;" data-dim="minh:0px,none,none,none;"
                     data-vbility="t,t,f,f" data-frame_0="x:50,39,29,17;" data-frame_1="st:1200;sp:1000;"
                     data-frame_999="o:0;st:w;"  style= {style3}>By engaging the private sector, 
                     the government aims to leverage their expertise, resources, and efficiency to accelerate the <br/>implementation of dam projects, which are vital for sustainable economic growth and development.
                  </rs-layer>
                  {/* <!--
                     --> */}
                       <a href="/" >
                  <rs-layer id="slider-6-slide-16-layer-4" url="/aboutus" className="rev-btn" data-type="button" data-rsp_ch="on"
                     data-xy="xo:45px,40px,30px,15px;y:m;yo:204px,180px,125px,63px;"
                     data-text="w:normal;s:16;l:32,30,32,30;" data-dim="minh:0px,none,none,none;"
                     data-padding="t:12,9,7,4;r:32,25,19,12;b:12,9,7,4;l:32,25,19,12;" data-frame_0="x:50,39,29,17;"
                     data-frame_1="st:1500;sp:1000;" data-frame_999="o:0;st:w;"
                     data-frame_hover="bgc:#002155;bor:0px,0px,0px,0px;sp:200;e:power1.inOut;"
                     style={style4}>View Projects
                  </rs-layer>
                  </a>
                  {/* <!--     style="z-index:9;background-color:#ff5e14;font-family:Jost, sans-serif;"
                     --> */}
                  <rs-layer id="slider-6-slide-16-layer-5" data-type="text" data-color="#ff631b" data-rsp_ch="on"
                     data-xy="xo:50px,40px,30px,15px;y:m;yo:-137px,-107px,-97px,-100px;"
                     data-text="w:normal;s:16;l:30,32,32,30;fw:600;" data-padding="l:10,8,6,4;"
                     data-border="bos:solid;boc:#f9f6ee;bow:0,0,0,2px;" data-frame_0="x:50,39,29,17;"
                     data-frame_1="st:600;sp:1000;" data-frame_999="o:0;st:w;"
                     style= {style8}>Great Experience In Building.
                  </rs-layer>
                  {/* <!--
                     --> */}
                       {/* <a href="/" >
                  <rs-layer id="slider-6-slide-16-layer-6" url="/aboutus" className="rev-btn" data-type="button" data-rsp_ch="on"
                     data-xy="xo:220px,199px,170px,144px;y:m;yo:204px,180px,125px,63px;"
                     data-text="w:normal;s:16;l:32,30,32,30;" data-dim="minh:0px,none,none,none;"
                     data-padding="t:12,9,7,4;r:32,25,19,12;b:12,9,7,4;l:32,25,19,12;" data-frame_0="x:50,39,29,17;"
                     data-frame_1="st:1800;sp:1000;" data-frame_999="o:0;st:w;"
                     data-frame_hover="bgc:#ff5e14;bor:0px,0px,0px,0px;sp:200;e:power1.inOut;"
                     style={style6}>Get In Touch<br />
                  </rs-layer>
                  </a> */}
                  {/* <!--    style="z-index:8;background-color:#f9f6ee;font-family:Jost, sans-serif;"
                     --> */}
               </rs-slide>
               <rs-slide data-key="rs-17" data-title="Slide" data-thumb="rev-slider/assets/banner-50x100.jpg"
                  data-anim="ei:d;eo:d;s:600;r:0;t:fade;sl:0;">
                  <img src="images/bg/dam3.jpg" alt="banner" title="banner" width="1920" height="1080" className="rev-slidebg"
                     data-no-retina/>
                  {/* <!--
                     --> */}
                  <rs-layer id="slider-6-slide-17-layer-2" data-type="text" data-color="#f9f6ee" data-rsp_ch="on"
                     data-xy="x:r;xo:50px,40px,30px,15px;y:m;yo:-17px,-13px,0,-3px;"
                     data-text="w:normal;s:92,72,62,42;l:92,72,62,42;fw:600;a:right;" data-frame_0="x:50,39,29,17;"
                     data-frame_1="st:900;sp:1000;" data-frame_999="o:0;st:w;"
                     style={style2}>Promoting Investment <br /> and Economic 
                     Growth
                  </rs-layer>
                  {/* <!--
                     --> */}
                  <rs-layer id="slider-6-slide-17-layer-3" data-type="text" data-color="#f9f6ee" data-rsp_ch="on"
                     data-xy="x:r;xo:50px,40px,30px,15px;y:m;yo:108px,85px,48px,39px;"
                     data-text="w:normal;s:16,12,16,11;l:32,25,32,22;a:right;" data-dim="minh:0px,none,none,none;"
                     data-vbility="t,t,f,f" data-frame_0="x:50,39,29,17;" data-frame_1="st:1200;sp:1000;"
                     data-frame_999="o:0;st:w;" style= {style3}>Water is a key and critical componet in Agricultture which the Government of Kenya has prioritised and
                     as a key sector of economic growth.
                  </rs-layer>
                  {/* <!--
                     --> */}
                       <a href="/" >
                  <rs-layer id="slider-6-slide-17-layer-4" url="/aboutus" className="rev-btn" data-type="button" data-rsp_ch="on"
                     data-xy="x:r;xo:50px,40px,30px,15px;y:m;yo:204px,160px,125px,83px;"
                     data-text="w:normal;s:16,12,16,16;l:32,25,32,30;a:center;" data-dim="minh:0px,none,none,none;"
                     data-padding="t:12,9,7,4;r:32,25,19,12;b:12,9,7,4;l:32,25,19,12;" data-frame_0="x:50,39,29,17;"
                     data-frame_1="st:1500;sp:1000;" data-frame_999="o:0;st:w;"
                     data-frame_hover="bgc:#002155;bor:0px,0px,0px,0px;sp:200;e:power1.inOut;"
                     style={style4}>Explore More<br />
                  </rs-layer>
                  </a>
                  {/* <!--     style="z-index:9;background-color:#ff5e14;font-family:Jost, sans-serif;"
                     --> */}
                  {/* <rs-layer id="slider-6-slide-17-layer-5" data-type="text" data-color="#f9f6ee" data-rsp_ch="on"
                     data-xy="x:r;xo:50px,40px,30px,15px;y:m;yo:-137px,-107px,-87px,-76px;"
                     data-text="w:normal;s:16,12,16,16;l:30,23,32,24;fw:600;" data-padding="l:10,8,6,4;"
                     data-border="bos:solid;boc:#ff631b;bow:0,0,0,2px;" data-frame_0="x:50,39,29,17;"
                     data-frame_1="st:600;sp:1000;" data-frame_999="o:0;st:w;"
                     style={style5}>Great Experience in
                     Bulding.
                  </rs-layer> */}
                  {/* <!--
                     --> */}
                       <a href="/" >
                  <rs-layer id="slider-6-slide-17-layer-6" url="/aboutus" className="rev-btn" data-type="button" data-rsp_ch="on"
                     data-xy="x:r;xo:246px,190px,187px,159px;y:m;yo:204px,160px,125px,83px;"
                     data-text="w:normal;s:16,12,16,16;l:32,25,32,30;a:center;" data-dim="minh:0px,none,none,none;"
                     data-padding="t:12,9,7,4;r:32,25,19,12;b:12,9,7,4;l:32,25,19,12;" data-frame_0="x:50,39,29,17;"
                     data-frame_1="st:1800;sp:1000;" data-frame_999="o:0;st:w;"
                     data-frame_hover="bgc:#0096ff;bor:0px,0px,0px,0px;sp:200;e:power1.inOut;"
                     style={style6} >Get In Touch<br />
                  </rs-layer>
                  </a>
                {/*   <!---   style="z-index:8;background-color:#f9f6ee;font-family:Jost, sans-serif;"  -> */}
               </rs-slide>
            </rs-slides>
            <rs-progress className="rs-bottom" style={{visibility: "hidden !important"}}></rs-progress>
         </rs-module>
      </rs-module-wrap>
      </>
    );

}
export default Banner;