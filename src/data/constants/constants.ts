import { naviType } from "../type/type";
import { eventListType } from "../type/type";

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
        date: "2024年11月28日（木）",
        title: "モノづくりコラボフォーラム2024",
        subtitle: "～ NEXT製造業の交差点ークロスロードー ～",
        status: "開催終了",
        linktext: "アーカイブを見る",
        link: "https://www.factorx.jp/event/index.html"
    }
]