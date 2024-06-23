import React from "react";
import Card from "./Card";

const Restaurant = () => {
    const resto = {
        img: "https://food-cms.grab.com/compressed_webp/merchants/3-CZMTKBDTT2XJAJ/hero/65641d0fcdc14d4a8961f56f0ead6fa5_1598847900883974941.webp",
        title: "ตี๋เย็นตาโฟรสเด็ด - ศาลาว่าการกรุงเทพฯ",
        type: "Cooked to Order",
    };
    const resto1 = {
        img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6NCJ3MHPE6DAA/hero/66fe46cbe9f545a1ac348d9b8a66e57b_1718268655917464617.webp",
        title: "อาหารตามสั่งหลังวัด - ชนะสงคราม",
        type: "Cooked to Order",
    };
    const resto2 = {
        img: "https://food-cms.grab.com/compressed_webp/merchants/3-C3VVA3CZCEUVPE/hero/898c280e-10fa-4487-b679-9357ae90cf0d__store_cover__2023__06__21__09__28__17.webp",
        title: "ยำแซ่บปากเจ่อ - ถนนไอทียู",
        type: "Cooked to Order",
    };
    const resto3 = {
        img: "https://food-cms.grab.com/compressed_webp/merchants/3-C3CXFAVFENAGTE/hero/f5bd492ad3b9411685163d9cd3252438_1645493394542478810.webp",
        title: "ชาคุมะ - บางลำพู บวรนิเวศ",
        type: "Coffee & Tea",
    };
    const resto4 = {
        img: "https://food-cms.grab.com/compressed_webp/merchants/3-C4LFTVLFLYJKEJ/hero/48ff79ff1d7a48f09aa03b254b59e8ab_1694678639584600512.webp",
        title: "Tamarin Tree Cafe - ซอยรามบุตรี",
        type: "Cooked to Order",
    };
    const resto5 = {
        img: "https://food-cms.grab.com/compressed_webp/merchants/3-C4LWPBX2JFWATN/hero/shutterstock_ed03d3a93e8244c2a43334506dbbaef5_1695627031553306855.webp",
        title: "ช่วนเล่อ ชาบูหมาล่าเผ็ดร้อน - เยาวราช",
        type: "Cooked to Order",
    };
    return (
        <div className="flex flex-wrap justify-center gap-4">
            <Card img={resto.img} title={resto.title} type={resto.type}/>
            <Card img={resto1.img} title={resto1.title} type={resto1.type}/>
            <Card img={resto2.img} title={resto2.title} type={resto2.type}/>
            <Card img={resto3.img} title={resto3.title} type={resto3.type}/>
            <Card img={resto4.img} title={resto4.title} type={resto4.type}/>
            <Card img={resto5.img} title={resto5.title} type={resto5.type}/>
        </div>
    );
};

export default Restaurant;