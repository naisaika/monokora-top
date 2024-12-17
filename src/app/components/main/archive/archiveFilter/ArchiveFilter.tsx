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

  const groupedData = filteredData.reduce<Record<string, basicDataType[]>>((acc, item) => {
    if (!acc[item.yeartext]) {
      acc[item.yeartext] = [];
    }
    acc[item.yeartext].push(item);
    return acc;
  }, {});

  return (
    <div className={styles.filterSection}>
      <div className={styles.filterContainer}>
        <select
            aria-label="年を選択"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className={styles.filterYear}
        >
            <option value="">閲覧したい年を選択</option>
            <option value="2026">2026年</option>
            <option value="2025">2025年</option>
            <option value="2024">2024年</option>
        </select>
      </div>
     
        {Object.keys(groupedData).length > 0 ? (
          Object.keys(groupedData).map((yeartext) => (
            <div key={yeartext} className={styles.listContainer}>
              <p className={styles.year}>{yeartext}</p>
              <div>
                {groupedData[yeartext].map((item) => (
                  <div key={item.id} className={styles.listItem}>
                    <Image
                      src={item.img}
                      alt={`icon-${item.id}`}
                      width={480}
                      height={120}
                      priority
                    />
                    <ArchiveBtn link={item.link} linkText={item.linktext}/>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>該当するアーカイブがありません。</p>
        )}
      
    </div>
  );
}