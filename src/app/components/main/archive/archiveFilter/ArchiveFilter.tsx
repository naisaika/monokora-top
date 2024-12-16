"use client";

import { useState, useEffect } from "react";

const basicData = [
  { id: 1, icon: "icon1.png", year: 2024, month: 11 },
  { id: 2, icon: "icon2.png", year: 2024, month: 12 },
  { id: 3, icon: "icon3.png", year: 2023, month: 1 },
];


export const ArchiveFilter = () => {

    const [filteredData, setFilteredData] = useState(basicData); // 初期状態で全データを表示
    const [selectedYear, setSelectedYear] = useState(""); // 選択した年
    const [selectedMonth, setSelectedMonth] = useState(""); // 選択した月

      // 年月の選択が変わった際の絞り込み
  useEffect(() => {
    if (selectedYear && selectedMonth) {
      const filtered = basicData.filter(
        (item) =>
          item.year === parseInt(selectedYear) &&
          item.month === parseInt(selectedMonth)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(basicData); // 年月が未選択の場合は全データを表示
    }
  }, [selectedYear, selectedMonth]);

  return (
    <div>
      <h1>年月でアイコンを絞り込む</h1>
      <div>
        {/* 年のドロップダウン */}
        <select
            aria-label="年を選択"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
        >
            <option value="">年を選択</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
        </select>

        {/* 月のドロップダウン */}
        <select
            aria-label="月を選択"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="">月を選択</option>
          <option value="1">1月</option>
          <option value="2">2月</option>
          <option value="11">11月</option>
          <option value="12">12月</option>
        </select>
      </div>

      {/* 絞り込んだデータの表示 */}
      <div>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id}>
              <img src={`/${item.icon}`} alt={`icon-${item.id}`} />
            </div>
          ))
        ) : (
          <p>該当するデータがありません。</p>
        )}
      </div>
    </div>
  );
}