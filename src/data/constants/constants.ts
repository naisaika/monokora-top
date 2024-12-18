import { naviType } from "../type/type";
import { eventListType } from "../type/type";
import { basicDataType } from "../type/type";

export const NAVI_LISTS: naviType[] = [
    { 
        id: 0, 
        img: "/assets/img/icon/about.png",
        text: "モノコラとは？"
    },
    { 
        id: 1, 
        img: "/assets/img/icon/schedule.png",
        img2: "/assets/img/icon/schedule-blue.png",
        text: "イベント予定"
    },
    { 
        id: 2, 
        img: "/assets/img/icon/archive.png",
        text: "交流会アーカイブ"
    },
    { 
        id: 3, 
        img: "/assets/img/icon/contact.png",
        img2: "/assets/img/icon/contact-blue.png",
        text: "お問い合わせ"
    }
]

export const EVENT_LISTS: eventListType[] = [
    { 
        id: 0,
        date: "2025年",
        title: "モノづくりコラボフォーラム2025",
        status: "開催予定",
        linktext: "開催準備中"
    },
    { 
        id: 1,
        date: "2024.11.28（木）",
        title: "モノづくりコラボフォーラム2024",
        subtitle: "～ NEXT製造業の交差点ークロスロードー ～",
        status: "開催終了",
        linktext: "アーカイブを見る",
        link: "https://www.factorx.jp/event/index.html"
    }
]


export const BASIC_DATA:basicDataType[] = [
    { 
        id: 0, 
        img: "/assets/img/archive/monokora2024.jpg", 
        year: 2024, 
        yeartext: "2024年",
        link: "https://www.factorx.jp/event/index.html",
        linktext: "アーカイブを見る" 
    },
    // { 
    //     id: 1, 
    //     img: "/assets/img/archive/monokora2025.png", 
    //     year: 2025, 
    //     yeartext: "2025年",
    //     link: "https://www.factorx.jp/event/index.html",
    //     linktext: "アーカイブを見る" 
    // },
    // { 
    //     id: 2, 
    //     img: "/assets/img/archive/monokora2026.png", 
    //     year: 2025, 
    //     yeartext: "2025年",
    //     link: "https://www.factorx.jp/event/index.html",
    //     linktext: "アーカイブを見る" 
    // },
    // { 
    //     id: 3, 
    //     img: "/assets/img/archive/monokora2027.png", 
    //     year: 2026, 
    //     yeartext: "2026年",
    //     link: "https://www.factorx.jp/event/index.html",
    //     linktext: "アーカイブを見る" 
    // }
];