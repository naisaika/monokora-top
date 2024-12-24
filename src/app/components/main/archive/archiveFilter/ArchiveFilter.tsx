"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from './ArchiveFilter.module.scss'
import { basicDataType } from "@/data/type/type";
import { BASIC_DATA } from "@/data/constants/constants";
import { ArchiveBtn } from "@/app/components/parts/archiveBtn/ArchiveBtn";

export const ArchiveFilter = () => {

    const [filteredData, setFilteredData] = useState(BASIC_DATA);
    const [selectedYear, setSelectedYear] = useState("");
    const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (selectedYear) {
      const filtered = BASIC_DATA.filter(
        (item) =>
          item.year === parseInt(selectedYear)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(BASIC_DATA);
    }
  }, [selectedYear]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickYear = (year: string) => {
    setDropdownOpen(false);
    setSelectedYear(year)
  }

  const groupedData = filteredData.reduce<Record<string, basicDataType[]>>((acc, item) => {
    if (!acc[item.yeartext]) {
      acc[item.yeartext] = [];
    }
    acc[item.yeartext].push(item);
    return acc;
  }, {});

  return (
    <div className={styles.filterSection}>
      <div  className={`${styles.filterContainer} ${isDropdownOpen ? styles.open : ""}`}>
        <button type="button" onClick={() => toggleDropdown()} className={styles.filterYear}>
          {selectedYear ? `${selectedYear}年` : "閲覧したい年を選択"}
        </button>
        <ul className={styles.dropdownMenu}>
          <li onClick={() => handleClickYear("")} className={styles.dropdownMenu__item}>すべて選択</li>
          <li onClick={() => handleClickYear("2024")} className={styles.dropdownMenu__item}>2024年</li>
          {/* 追加する場合はここに年を記載 */}
        </ul>
      </div>
      {Object.keys(groupedData).length > 0 ? (
        Object.keys(groupedData).map((yeartext) => (
          <div key={yeartext} className={styles.listContainer}>
            <p className={styles.year}>{yeartext}</p>
            {groupedData[yeartext].map((item) => (
              <div key={item.id} className={styles.listItem}>
                <Image
                  src={item.img}
                  alt={`icon-${item.id}`}
                  width={480}
                  height={120}
                  priority
                  className={styles.listItem__img}
                />
                <ArchiveBtn link={item.link} linkText={item.linktext}/>
              </div>
            ))}
          </div>
          ))
        ) : (
          <p>該当するアーカイブがありません。</p>
        )}
    </div>
  );
}