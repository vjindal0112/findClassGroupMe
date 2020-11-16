import React, { useState, onChange } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import { Input } from "./styles";

const options1 = [
  { name: "AERO ST 1A - Liscombe", link: "https://youtube.com" },
  { name: "AERO ST 20A - Liscombe", link: "https://youtube.com" },
  { name: "AERO ST 130A - Jones", link: "https://youtube.com" },
  { name: "AERO ST 140A - Fowler", link: "https://youtube.com" },
  { name: "AF AMER 1 - Pierre", link: "https://youtube.com" },
];

const SelectBar = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <Input
        type="input"
        placeholder="Find my class"
        onChange={(e) => setQuery(e.target.value)}
      />
      {query != ""
        ? options
            .filter((obj) =>
              obj.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((obj, index) => (
              <div key={index}>
                {index < 6 ? (
                  <ListItem
                    noGroupMe={obj.NoGroupMe}
                    key={index}
                    className={obj.name}
                    classLink={obj.link}
                  />
                ) : null}
              </div>
            ))
        : null}
      <br />
    </>
  );
};

export default SelectBar;

const options = [
  {
    name: "CHEM 130",
    link: "https://groupme.com/join_group/61906424/us2Na09e",
    NoGroupMe: false,
  },
  {
    name: "CHEM 125",
    link: "https://groupme.com/join_group/61552874/2gqmyaWM",
    NoGroupMe: false,
  },
  {
    name: "ENGR 101",
    link: "https://groupme.com/join_group/61886996/0LzRWjYK",
    NoGroupMe: false,
  },
  {
    name: "ENGR 151",
    link: "https://groupme.com/join_group/61889238/LewhKKai",
    NoGroupMe: false,
  },
  {
    name: "ENGR 110",
    link: "https://groupme.com/join_group/61886982/UdJn6E14",
    NoGroupMe: false,
  },
  {
    name: "PSYCH 111",
    link: "https://groupme.com/join_group/61877218/0Ty8JsUX",
    NoGroupMe: false,
  },
  {
    name: "SPANISH 231",
    link: "https://groupme.com/join_group/61878757/Kovht9P7",
    NoGroupMe: false,
  },
  {
    name: "UROP 24'",
    link: "https://groupme.com/join_group/60186173/kmmbIhGk",
    NoGroupMe: false,
  },
  {
    name: "STATS 250",
    link: "https://groupme.com/join_group/61551187/x3GEkuYN",
    NoGroupMe: false,
  },
  {
    name: "ENGLISH 125",
    link: "https://groupme.com/join_group/61884246/DXAlwryZ",
    NoGroupMe: false,
  },
  {
    name: "PSYCH 270",
    link: "https://groupme.com/join_group/61989233/zIpFTSV0",
    NoGroupMe: false,
  },
  {
    name: "HONORS 230",
    link: "https://groupme.com/join_group/62160628/JJpQIY1m",
    NoGroupMe: false,
  },
  {
    name: "BIOLOGY 173",
    link: "https://groupme.com/join_group/61885466/CC4f1ych",
    NoGroupMe: false,
  },
  {
    name: "CHEM 210",
    link: "https://groupme.com/join_group/63001535/KymhuXeN",
    NoGroupMe: false,
  },
  {
    name: "HISTORY 195",
    link: "https://groupme.com/join_group/62824231/OK8KOE2W",
    NoGroupMe: false,
  },
  {
    name: "CHEM 211",
    link: "https://groupme.com/join_group/62046569/K8VbWz7S",
    NoGroupMe: false,
  },
  {
    name: "MATH 116",
    link: "https://groupme.com/join_group/61866146/uO0Wa7EI",
    NoGroupMe: false,
  },
  {
    name: "HEBREW 202 - Segal",
    link: "https://groupme.com/join_group/62107245/5fGtonOX",
    NoGroupMe: false,
  },
  {
    name: "EECS 281",
    link: "https://groupme.com/join_group/61934714/3ipvueiQ",
    NoGroupMe: false,
  },
  {
    name: "HEBREW 201 - Aaronson",
    link: "https://groupme.com/join_group/62094438/fYKkOOKF",
    NoGroupMe: false,
  },
  {
    name: "PSYCH 240 - Ellis",
    link: "https://groupme.com/join_group/62000453/ZjDmGJ3w",
    NoGroupMe: false,
  },
  {
    name: "PHIL 250 - Manley",
    link: "https://groupme.com/join_group/61943494/mO3hWB39",
    NoGroupMe: false,
  },
  {
    name: "MATH 115",
    link: "https://groupme.com/join_group/61890486/u47cRDep",
    NoGroupMe: false,
  },
  {
    name: "COGSCI 200",
    link: "https://groupme.com/join_group/62532985/N9Ghoz1t",
    NoGroupMe: false,
  },
  {
    name: "RC SPANISH 194",
    link: "https://groupme.com/join_group/61995708/0RdFbbSp",
    NoGroupMe: false,
  },
  {
    name: "ECON 101 - Caldwell",
    link: "https://groupme.com/join_group/61936037/glyS8Fzr",
    NoGroupMe: false,
  },
  {
    name: "EECS 183",
    link: "https://groupme.com/join_group/61886286/zzaQWz8C",
    NoGroupMe: false,
  },
  {
    name: "〽ich Engineering '24",
    link: "https://groupme.com/join_group/57527148/a9Y1nlCB",
    NoGroupMe: false,
  },
  {
    name: "ARCH 201",
    link: "https://groupme.com/join_group/61929456/rkSumLJA",
    NoGroupMe: false,
  },
  {
    name: "HONORS 232",
    link: "https://web.groupme.com/join_group/62631305/mVoBRKxn",
    NoGroupMe: false,
  },
  {
    name: "BIOLOGY 105",
    link: "https://groupme.com/join_group/62161605/TqQspltS",
    NoGroupMe: false,
  },
  {
    name: "POLSCI 111",
    link: "https://groupme.com/join_group/61991306/AEi1uyvp",
    NoGroupMe: false,
  },
  {
    name: "PSYCH 120 - Section 5",
    link: "https://groupme.com/join_group/62487504/tXu4UHNs",
    NoGroupMe: false,
  },
  {
    name: "STATS 250 - Miller",
    link: "https://groupme.com/join_group/61999394/w6psGX4Q",
    NoGroupMe: false,
  },
  {
    name: "POLSCI 101 - Disch",
    link: "https://groupme.com/join_group/62044137/bUGexeZ2",
    NoGroupMe: false,
  },
  {
    name: "AMCULT 341/HISTORY 343",
    link: "https://groupme.com/join_group/62056754/zU3whv7l",
    NoGroupMe: false,
  },
  {
    name: "Michigan Ross Class of 2024",
    link: "https://groupme.com/join_group/63216458/hYAniUuU",
    NoGroupMe: false,
  },
  {
    name: "MATH 215",
    link: "https://groupme.com/join_group/61584966/paQoKqe9",
    NoGroupMe: false,
  },
  {
    name: "ENGR 101 - Juett 9am",
    link: "https://groupme.com/join_group/61929365/F5VkdhCv",
    NoGroupMe: false,
  },
  {
    name: "ENGR 100 - 310",
    link: "https://groupme.com/join_group/61956726/8kjGF4k0",
    NoGroupMe: false,
  },
  {
    name: "CLCIV 101",
    link: "https://groupme.com/join_group/61917011/1VNn0l06",
    NoGroupMe: false,
  },
  {
    name: "ECON 101 - Zamzow",
    link: "https://groupme.com/join_group/61965071/OghKGouf",
    NoGroupMe: false,
  },
  {
    name: "STATS 412 - Fink",
    link: "https://groupme.com/join_group/61954882/9QkJCtGQ",
    NoGroupMe: false,
  },
  {
    name: "CHEM 210 - Allen",
    link: "https://groupme.com/join_group/62311888/3My5MONa",
    NoGroupMe: false,
  },
  {
    name: "MATH 417 - Ho",
    link: "https://groupme.com/join_group/61932317/W7v6mn1R",
    NoGroupMe: false,
  },
];
