import React, { useMemo } from "react";
import DropdownCSS from "./dropdown.module.css";

export const Dropdown = ({ isOpen }) => {
  const dropdownList = useMemo(() => {
    return [
      {
        title: "Makyaj",
        items: [
          "Yüz",
          "Goz",
          "Kaş",
          "Dudak",
          "Paletler",
          "Fırça ve Aksesuarlar",
        ],
      },
      {
        title: "Cilt Bakımı",
        items: [
          "Yüz",
          "El Bakımı",
          "Güneş Koruyucu ve Bakım",
          "Cilt Bakım Aksesuarları",
        ],
      },
      {
        title: "Kişil Bakım",
        items: ["Vücut Bakımı", "Banyo Ve Duş", "Ağız Bakımı", "Ayak Bakımı"],
      },
      {
        title: "Saç",
        items: [
          "Saç Bakımı",
          "Saç Şekillendirici",
          "Saç Aksesuarları",
          "Saç Şekillendirici",
        ],
      },
      {
        title: "Parfüm",
        items: ["Kadın Parfüm", "Erkek Parfüm", "Saç Parfüm", "Unisex Parfüm"],
      },
    ];
  }, []);
  return (
    <div className={DropdownCSS.dropdown}>
      {isOpen && (
        <div className={DropdownCSS.dropdownMenu}>
          {dropdownList.map((lists, i) => (
            <div className={DropdownCSS.dropdownList}>
              <div className={DropdownCSS.dropdownTitle}>{lists.title}</div>
              <div className={DropdownCSS.dropdownListItems}>
                {lists.items.map((item) => (
                  <div className={DropdownCSS.dropdownListItem}>
                    <a href="/#">{item}</a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
