export interface naviType {
    id: number;
    img: string;
    img2?: string;
    text: string;
}

export interface eventListType {
    id: number;
    date: string;
    title: string;
    subtitle?: string;
    status: string;
    linktext: string;
    link?: string;
}

export interface basicDataType {
    id: number;
    img: string;
    year: number;
    yeartext: string;
    link: string;
    linktext: string;
  }