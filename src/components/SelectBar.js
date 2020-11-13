import React, { useState, onChange } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const options = [
  {
    name: "CHEM 130",
    link: "https://groupme.com/join_group/61906424/us2Na09e",
  },
  {
    name: "CHEM 125",
    link: "https://groupme.com/join_group/61552874/2gqmyaWM",
  },
  {
    name: "ENGR 101",
    link: "https://groupme.com/join_group/61886996/0LzRWjYK",
  },
  {
    name: "ENGR 151",
    link: "https://groupme.com/join_group/61889238/LewhKKai",
  },
  {
    name: "ENGR 110",
    link: "https://groupme.com/join_group/61886982/UdJn6E14",
  },
  {
    name: "PSYCH 111",
    link: "https://groupme.com/join_group/61877218/0Ty8JsUX",
  },
  {
    name: "SPANISH 231",
    link: "https://groupme.com/join_group/61878757/Kovht9P7",
  },
  {
    name: "UROP 24'",
    link: "https://groupme.com/join_group/60186173/kmmbIhGk",
  },
  {
    name: "STATS 250",
    link: "https://groupme.com/join_group/61551187/x3GEkuYN",
  },
  {
    name: "ENGLISH 125",
    link: "https://groupme.com/join_group/61884246/DXAlwryZ",
  },
  {
    name: "PSYCH 270",
    link: "https://groupme.com/join_group/61989233/zIpFTSV0",
  },
  {
    name: "Honors 230",
    link: "https://groupme.com/join_group/62160628/JJpQIY1m",
  },
  {
    name: "Biology 173",
    link: "https://groupme.com/join_group/61885466/CC4f1ych",
  },
  {
    name: "CHEM 210",
    link: "https://groupme.com/join_group/63001535/KymhuXeN",
  },
  {
    name: "HISTORY 195",
    link: "https://groupme.com/join_group/62824231/OK8KOE2W",
  },
  {
    name: "CHEM 211",
    link: "https://groupme.com/join_group/62046569/K8VbWz7S",
  },
  {
    name: "MATH 116",
    link: "https://groupme.com/join_group/61866146/uO0Wa7EI",
  },
  {
    name: "HEBREW 202 - Segal",
    link: "https://groupme.com/join_group/62107245/5fGtonOX",
  },
  {
    name: "EECS 281",
    link: "https://groupme.com/join_group/61934714/3ipvueiQ",
  },
  {
    name: "HEBREW 201 - Aaronson",
    link: "https://groupme.com/join_group/62094438/fYKkOOKF",
  },
  {
    name: "PSYCH 240 - Ellis",
    link: "https://groupme.com/join_group/62000453/ZjDmGJ3w",
  },
  {
    name: "PHIL 250 - Manley",
    link: "https://groupme.com/join_group/61943494/mO3hWB39",
  },
  {
    name: "MATH 115",
    link: "https://groupme.com/join_group/61890486/u47cRDep",
  },
  {
    name: "COGSCI 200",
    link: "https://groupme.com/join_group/62532985/N9Ghoz1t",
  },
  {
    name: "RC SPANISH 194",
    link: "https://groupme.com/join_group/61995708/0RdFbbSp",
  },
  {
    name: "ECON 101 - Caldwell",
    link: "https://groupme.com/join_group/61936037/glyS8Fzr",
  },
  {
    name: "EECS 183",
    link: "https://groupme.com/join_group/61886286/zzaQWz8C",
  },
  {
    name: "〽ich Engineering '24",
    link: "https://groupme.com/join_group/57527148/a9Y1nlCB",
  },
  {
    name: "ARCH 201",
    link: "https://groupme.com/join_group/61929456/rkSumLJA",
  },
  {
    name: "HONORS 232",
    link: "https://web.groupme.com/join_group/62631305/mVoBRKxn",
  },
  {
    name: "BIOLOGY 105",
    link: "https://groupme.com/join_group/62161605/TqQspltS",
  },
  {
    name: "POLSCI 111",
    link: "https://groupme.com/join_group/61991306/AEi1uyvp",
  },
  {
    name: "PSYCH 120 - Section 5",
    link: "https://groupme.com/join_group/62487504/tXu4UHNs",
  },
  {
    name: "STATS 250 - Miller",
    link: "https://groupme.com/join_group/61999394/w6psGX4Q",
  },
  {
    name: "POLSCI 101 - Disch",
    link: "https://groupme.com/join_group/62044137/bUGexeZ2",
  },
  {
    name: "AMCULT 341/HISTORY 343",
    link: "https://groupme.com/join_group/62056754/zU3whv7l",
  },
  {
    name: "Michigan Ross Class of 2024",
    link: "https://groupme.com/join_group/63216458/hYAniUuU",
  },
  {
    name: "Math 215",
    link: "https://groupme.com/join_group/61584966/paQoKqe9",
  },
  {
    name: "ENGR 101 - Juett 9am",
    link: "https://groupme.com/join_group/61929365/F5VkdhCv",
  },
  {
    name: "ENGR 100 - 310",
    link: "https://groupme.com/join_group/61956726/8kjGF4k0",
  },
  {
    name: "CLCIV 101",
    link: "https://groupme.com/join_group/61917011/1VNn0l06",
  },
  {
    name: "Econ 101 - Zamzow",
    link: "https://groupme.com/join_group/61965071/OghKGouf",
  },
  {
    name: "Stats 412 - Fink",
    link: "https://groupme.com/join_group/61954882/9QkJCtGQ",
  },
  {
    name: "Chem 210 - Allen",
    link: "https://groupme.com/join_group/62311888/3My5MONa",
  },
  {
    name: "Math 417 - Ho",
    link: "https://groupme.com/join_group/61932317/W7v6mn1R",
  },
  {
    name: "ANTHRCUL 101",
    link: "https://groupme.com/join_group/64031843/0q1cC50n",
  },
  { name: "BA 100", link: "https://groupme.com/join_group/64031875/rXdkRKG8" },
  {
    name: "BIOLCHEM 212",
    link: "https://groupme.com/join_group/64031927/eJbhU6bj",
  },
  {
    name: "BIOLOGY 171",
    link: "https://groupme.com/join_group/64031954/IyOWD3B9",
  },
  {
    name: "BIOLOGY 172",
    link: "https://groupme.com/join_group/64032026/R3Mh4e6F",
  },
  {
    name: "COMM 101",
    link: "https://groupme.com/join_group/64032035/jH9OwlWD",
  },
  {
    name: "COMM 102",
    link: "https://groupme.com/join_group/64032055/agDLFDD3",
  },
  {
    name: "COMPLIT 141",
    link: "https://groupme.com/join_group/64032066/NOkUwRZQ",
  },
  {
    name: "EECS 203",
    link: "https://groupme.com/join_group/64032082/M16xtuX8",
  },
  {
    name: "ENGLISH 124",
    link: "https://groupme.com/join_group/64032299/syjX3Trj",
  },
  {
    name: "INTLSTD 101",
    link: "https://groupme.com/join_group/64032339/Ll3F6FVc",
  },
  {
    name: "MATH 105",
    link: "https://groupme.com/join_group/64032634/JhVXhAMM",
  },
  {
    name: "MATH 156",
    link: "https://groupme.com/join_group/64032649/uCu2weiJ",
  },
  {
    name: "MATH 214",
    link: "https://groupme.com/join_group/64032662/29R9zVPu",
  },
  {
    name: "MATH 216",
    link: "https://groupme.com/join_group/64032672/RkStd8Ic",
  },
  {
    name: "PHYSICS 140",
    link: "https://groupme.com/join_group/64032691/3zUYBgwz",
  },
  {
    name: "PHYSICS 240",
    link: "https://groupme.com/join_group/64032700/K93HYuJD",
  },
  {
    name: "POLSCI 140",
    link: "https://groupme.com/join_group/64032712/cvC11pn1",
  },
  {
    name: "POLSCI 160",
    link: "https://groupme.com/join_group/64032723/JvVMKkzL",
  },
  { name: "SOC 100", link: "https://groupme.com/join_group/64032734/lEPWGlQF" },
  {
    name: "SPANISH 103",
    link: "https://groupme.com/join_group/64032739/SVprZqkI",
  },
  {
    name: "SPANISH 232",
    link: "https://groupme.com/join_group/64032749/jSbUCpw7",
  },
];

const Input = styled.input`
  border: 1px solid #05aff0;
  font-size: 16px;
  padding: 12px;
  background-color: #fcfcfc;
  width: 40%;
  display: flex;
  margin: 0 auto;
  :focus {
    border-radius: 0px;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const SelectBar = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <Input
        type="input"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      {query != ""
        ? options.map((obj, index) => (
            <>
              {obj.name.toLowerCase().includes(query.toLowerCase()) ? (
                <ListItem className={obj.name} classLink={obj.link} />
              ) : null}
            </>
          ))
        : null}
      <br />
    </>
  );
};

export default SelectBar;
