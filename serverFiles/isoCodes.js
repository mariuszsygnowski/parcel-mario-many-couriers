module.exports = {
  iso3ToIso2: isoCode3 => {
    const output = isoCodesArray.find(e => {
      return e.alpha2_code === isoCode3;
    });

    return output.alpha3_code;
  }
};
const isoCodesArray = [
  {
    name: "Afghanistan",
    alpha2_code: "AF",
    alpha3_code: "AFG"
  },
  {
    name: "��land Islands",
    alpha2_code: "AX",
    alpha3_code: "ALA"
  },
  {
    name: "Albania",
    alpha2_code: "AL",
    alpha3_code: "ALB"
  },
  {
    name: "Algeria",
    alpha2_code: "DZ",
    alpha3_code: "DZA"
  },
  {
    name: "American Samoa",
    alpha2_code: "AS",
    alpha3_code: "ASM"
  },
  {
    name: "Andorra",
    alpha2_code: "AD",
    alpha3_code: "AND"
  },
  {
    name: "Angola",
    alpha2_code: "AO",
    alpha3_code: "AGO"
  },
  {
    name: "Anguilla",
    alpha2_code: "AI",
    alpha3_code: "AIA"
  },
  {
    name: "Antarctica",
    alpha2_code: "AQ",
    alpha3_code: "ATA"
  },
  {
    name: "Antigua and Barbuda",
    alpha2_code: "AG",
    alpha3_code: "ATG"
  },
  {
    name: "Argentina",
    alpha2_code: "AR",
    alpha3_code: "ARG"
  },
  {
    name: "Armenia",
    alpha2_code: "AM",
    alpha3_code: "ARM"
  },
  {
    name: "Aruba",
    alpha2_code: "AW",
    alpha3_code: "ABW"
  },
  {
    name: "Australia",
    alpha2_code: "AU",
    alpha3_code: "AUS"
  },
  {
    name: "Austria",
    alpha2_code: "AT",
    alpha3_code: "AUT"
  },
  {
    name: "Azerbaijan",
    alpha2_code: "AZ",
    alpha3_code: "AZE"
  },
  {
    name: "Bahamas",
    alpha2_code: "BS",
    alpha3_code: "BHS"
  },
  {
    name: "Bahrain",
    alpha2_code: "BH",
    alpha3_code: "BHR"
  },
  {
    name: "Bangladesh",
    alpha2_code: "BD",
    alpha3_code: "BGD"
  },
  {
    name: "Barbados",
    alpha2_code: "BB",
    alpha3_code: "BRB"
  },
  {
    name: "Belarus",
    alpha2_code: "BY",
    alpha3_code: "BLR"
  },
  {
    name: "Belgium",
    alpha2_code: "BE",
    alpha3_code: "BEL"
  },
  {
    name: "Belize",
    alpha2_code: "BZ",
    alpha3_code: "BLZ"
  },
  {
    name: "Benin",
    alpha2_code: "BJ",
    alpha3_code: "BEN"
  },
  {
    name: "Bermuda",
    alpha2_code: "BM",
    alpha3_code: "BMU"
  },
  {
    name: "Bhutan",
    alpha2_code: "BT",
    alpha3_code: "BTN"
  },
  {
    name: "Bolivia (Plurinational State of)",
    alpha2_code: "BO",
    alpha3_code: "BOL"
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    alpha2_code: "BQ",
    alpha3_code: "BES"
  },
  {
    name: "Bosnia and Herzegovina",
    alpha2_code: "BA",
    alpha3_code: "BIH"
  },
  {
    name: "Botswana",
    alpha2_code: "BW",
    alpha3_code: "BWA"
  },
  {
    name: "Bouvet Island",
    alpha2_code: "BV",
    alpha3_code: "BVT"
  },
  {
    name: "Brazil",
    alpha2_code: "BR",
    alpha3_code: "BRA"
  },
  {
    name: "British Indian Ocean Territory",
    alpha2_code: "IO",
    alpha3_code: "IOT"
  },
  {
    name: "Brunei Darussalam",
    alpha2_code: "BN",
    alpha3_code: "BRN"
  },
  {
    name: "Bulgaria",
    alpha2_code: "BG",
    alpha3_code: "BGR"
  },
  {
    name: "Burkina Faso",
    alpha2_code: "BF",
    alpha3_code: "BFA"
  },
  {
    name: "Burundi",
    alpha2_code: "BI",
    alpha3_code: "BDI"
  },
  {
    name: "Cabo Verde",
    alpha2_code: "CV",
    alpha3_code: "CPV"
  },
  {
    name: "Cambodia",
    alpha2_code: "KH",
    alpha3_code: "KHM"
  },
  {
    name: "Cameroon",
    alpha2_code: "CM",
    alpha3_code: "CMR"
  },
  {
    name: "Canada",
    alpha2_code: "CA",
    alpha3_code: "CAN"
  },
  {
    name: "Cayman Islands",
    alpha2_code: "KY",
    alpha3_code: "CYM"
  },
  {
    name: "Central African Republic",
    alpha2_code: "CF",
    alpha3_code: "CAF"
  },
  {
    name: "Chad",
    alpha2_code: "TD",
    alpha3_code: "TCD"
  },
  {
    name: "Chile",
    alpha2_code: "CL",
    alpha3_code: "CHL"
  },
  {
    name: "China",
    alpha2_code: "CN",
    alpha3_code: "CHN"
  },
  {
    name: "Christmas Island",
    alpha2_code: "CX",
    alpha3_code: "CXR"
  },
  {
    name: "Cocos (Keeling) Islands",
    alpha2_code: "CC",
    alpha3_code: "CCK"
  },
  {
    name: "Colombia",
    alpha2_code: "CO",
    alpha3_code: "COL"
  },
  {
    name: "Comoros",
    alpha2_code: "KM",
    alpha3_code: "COM"
  },
  {
    name: "Congo",
    alpha2_code: "CG",
    alpha3_code: "COG"
  },
  {
    name: "Congo (Democratic Republic of the)",
    alpha2_code: "CD",
    alpha3_code: "COD"
  },
  {
    name: "Cook Islands",
    alpha2_code: "CK",
    alpha3_code: "COK"
  },
  {
    name: "Costa Rica",
    alpha2_code: "CR",
    alpha3_code: "CRI"
  },
  {
    name: "C��te d'Ivoire",
    alpha2_code: "CI",
    alpha3_code: "CIV"
  },
  {
    name: "Croatia",
    alpha2_code: "HR",
    alpha3_code: "HRV"
  },
  {
    name: "Cuba",
    alpha2_code: "CU",
    alpha3_code: "CUB"
  },
  {
    name: "Cura��ao",
    alpha2_code: "CW",
    alpha3_code: "CUW"
  },
  {
    name: "Cyprus",
    alpha2_code: "CY",
    alpha3_code: "CYP"
  },
  {
    name: "Czechia",
    alpha2_code: "CZ",
    alpha3_code: "CZE"
  },
  {
    name: "Denmark",
    alpha2_code: "DK",
    alpha3_code: "DNK"
  },
  {
    name: "Djibouti",
    alpha2_code: "DJ",
    alpha3_code: "DJI"
  },
  {
    name: "Dominica",
    alpha2_code: "DM",
    alpha3_code: "DMA"
  },
  {
    name: "Dominican Republic",
    alpha2_code: "DO",
    alpha3_code: "DOM"
  },
  {
    name: "Ecuador",
    alpha2_code: "EC",
    alpha3_code: "ECU"
  },
  {
    name: "Egypt",
    alpha2_code: "EG",
    alpha3_code: "EGY"
  },
  {
    name: "El Salvador",
    alpha2_code: "SV",
    alpha3_code: "SLV"
  },
  {
    name: "Equatorial Guinea",
    alpha2_code: "GQ",
    alpha3_code: "GNQ"
  },
  {
    name: "Eritrea",
    alpha2_code: "ER",
    alpha3_code: "ERI"
  },
  {
    name: "Estonia",
    alpha2_code: "EE",
    alpha3_code: "EST"
  },
  {
    name: "Ethiopia",
    alpha2_code: "ET",
    alpha3_code: "ETH"
  },
  {
    name: "Falkland Islands (Malvinas)",
    alpha2_code: "FK",
    alpha3_code: "FLK"
  },
  {
    name: "Faroe Islands",
    alpha2_code: "FO",
    alpha3_code: "FRO"
  },
  {
    name: "Fiji",
    alpha2_code: "FJ",
    alpha3_code: "FJI"
  },
  {
    name: "Finland",
    alpha2_code: "FI",
    alpha3_code: "FIN"
  },
  {
    name: "France",
    alpha2_code: "FR",
    alpha3_code: "FRA"
  },
  {
    name: "French Guiana",
    alpha2_code: "GF",
    alpha3_code: "GUF"
  },
  {
    name: "French Polynesia",
    alpha2_code: "PF",
    alpha3_code: "PYF"
  },
  {
    name: "French Southern Territories",
    alpha2_code: "TF",
    alpha3_code: "ATF"
  },
  {
    name: "Gabon",
    alpha2_code: "GA",
    alpha3_code: "GAB"
  },
  {
    name: "Gambia",
    alpha2_code: "GM",
    alpha3_code: "GMB"
  },
  {
    name: "Georgia",
    alpha2_code: "GE",
    alpha3_code: "GEO"
  },
  {
    name: "Germany",
    alpha2_code: "DE",
    alpha3_code: "DEU"
  },
  {
    name: "Ghana",
    alpha2_code: "GH",
    alpha3_code: "GHA"
  },
  {
    name: "Gibraltar",
    alpha2_code: "GI",
    alpha3_code: "GIB"
  },
  {
    name: "Greece",
    alpha2_code: "GR",
    alpha3_code: "GRC"
  },
  {
    name: "Greenland",
    alpha2_code: "GL",
    alpha3_code: "GRL"
  },
  {
    name: "Grenada",
    alpha2_code: "GD",
    alpha3_code: "GRD"
  },
  {
    name: "Guadeloupe",
    alpha2_code: "GP",
    alpha3_code: "GLP"
  },
  {
    name: "Guam",
    alpha2_code: "GU",
    alpha3_code: "GUM"
  },
  {
    name: "Guatemala",
    alpha2_code: "GT",
    alpha3_code: "GTM"
  },
  {
    name: "Guernsey",
    alpha2_code: "GG",
    alpha3_code: "GGY"
  },
  {
    name: "Guinea",
    alpha2_code: "GN",
    alpha3_code: "GIN"
  },
  {
    name: "Guinea-Bissau",
    alpha2_code: "GW",
    alpha3_code: "GNB"
  },
  {
    name: "Guyana",
    alpha2_code: "GY",
    alpha3_code: "GUY"
  },
  {
    name: "Haiti",
    alpha2_code: "HT",
    alpha3_code: "HTI"
  },
  {
    name: "Heard Island and McDonald Islands",
    alpha2_code: "HM",
    alpha3_code: "HMD"
  },
  {
    name: "Holy See",
    alpha2_code: "VA",
    alpha3_code: "VAT"
  },
  {
    name: "Honduras",
    alpha2_code: "HN",
    alpha3_code: "HND"
  },
  {
    name: "Hong Kong",
    alpha2_code: "HK",
    alpha3_code: "HKG"
  },
  {
    name: "Hungary",
    alpha2_code: "HU",
    alpha3_code: "HUN"
  },
  {
    name: "Iceland",
    alpha2_code: "IS",
    alpha3_code: "ISL"
  },
  {
    name: "India",
    alpha2_code: "IN",
    alpha3_code: "IND"
  },
  {
    name: "Indonesia",
    alpha2_code: "ID",
    alpha3_code: "IDN"
  },
  {
    name: "Iran (Islamic Republic of)",
    alpha2_code: "IR",
    alpha3_code: "IRN"
  },
  {
    name: "Iraq",
    alpha2_code: "IQ",
    alpha3_code: "IRQ"
  },
  {
    name: "Ireland",
    alpha2_code: "IE",
    alpha3_code: "IRL"
  },
  {
    name: "Isle of Man",
    alpha2_code: "IM",
    alpha3_code: "IMN"
  },
  {
    name: "Israel",
    alpha2_code: "IL",
    alpha3_code: "ISR"
  },
  {
    name: "Italy",
    alpha2_code: "IT",
    alpha3_code: "ITA"
  },
  {
    name: "Jamaica",
    alpha2_code: "JM",
    alpha3_code: "JAM"
  },
  {
    name: "Japan",
    alpha2_code: "JP",
    alpha3_code: "JPN"
  },
  {
    name: "Jersey",
    alpha2_code: "JE",
    alpha3_code: "JEY"
  },
  {
    name: "Jordan",
    alpha2_code: "JO",
    alpha3_code: "JOR"
  },
  {
    name: "Kazakhstan",
    alpha2_code: "KZ",
    alpha3_code: "KAZ"
  },
  {
    name: "Kenya",
    alpha2_code: "KE",
    alpha3_code: "KEN"
  },
  {
    name: "Kiribati",
    alpha2_code: "KI",
    alpha3_code: "KIR"
  },
  {
    name: "Korea (Democratic People's Republic of)",
    alpha2_code: "KP",
    alpha3_code: "PRK"
  },
  {
    name: "Korea (Republic of)",
    alpha2_code: "KR",
    alpha3_code: "KOR"
  },
  {
    name: "Kuwait",
    alpha2_code: "KW",
    alpha3_code: "KWT"
  },
  {
    name: "Kyrgyzstan",
    alpha2_code: "KG",
    alpha3_code: "KGZ"
  },
  {
    name: "Lao People's Democratic Republic",
    alpha2_code: "LA",
    alpha3_code: "LAO"
  },
  {
    name: "Latvia",
    alpha2_code: "LV",
    alpha3_code: "LVA"
  },
  {
    name: "Lebanon",
    alpha2_code: "LB",
    alpha3_code: "LBN"
  },
  {
    name: "Lesotho",
    alpha2_code: "LS",
    alpha3_code: "LSO"
  },
  {
    name: "Liberia",
    alpha2_code: "LR",
    alpha3_code: "LBR"
  },
  {
    name: "Libya",
    alpha2_code: "LY",
    alpha3_code: "LBY"
  },
  {
    name: "Liechtenstein",
    alpha2_code: "LI",
    alpha3_code: "LIE"
  },
  {
    name: "Lithuania",
    alpha2_code: "LT",
    alpha3_code: "LTU"
  },
  {
    name: "Luxembourg",
    alpha2_code: "LU",
    alpha3_code: "LUX"
  },
  {
    name: "Macao",
    alpha2_code: "MO",
    alpha3_code: "MAC"
  },
  {
    name: "Macedonia (the former Yugoslav Republic of)",
    alpha2_code: "MK",
    alpha3_code: "MKD"
  },
  {
    name: "Madagascar",
    alpha2_code: "MG",
    alpha3_code: "MDG"
  },
  {
    name: "Malawi",
    alpha2_code: "MW",
    alpha3_code: "MWI"
  },
  {
    name: "Malaysia",
    alpha2_code: "MY",
    alpha3_code: "MYS"
  },
  {
    name: "Maldives",
    alpha2_code: "MV",
    alpha3_code: "MDV"
  },
  {
    name: "Mali",
    alpha2_code: "ML",
    alpha3_code: "MLI"
  },
  {
    name: "Malta",
    alpha2_code: "MT",
    alpha3_code: "MLT"
  },
  {
    name: "Marshall Islands",
    alpha2_code: "MH",
    alpha3_code: "MHL"
  },
  {
    name: "Martinique",
    alpha2_code: "MQ",
    alpha3_code: "MTQ"
  },
  {
    name: "Mauritania",
    alpha2_code: "MR",
    alpha3_code: "MRT"
  },
  {
    name: "Mauritius",
    alpha2_code: "MU",
    alpha3_code: "MUS"
  },
  {
    name: "Mayotte",
    alpha2_code: "YT",
    alpha3_code: "MYT"
  },
  {
    name: "Mexico",
    alpha2_code: "MX",
    alpha3_code: "MEX"
  },
  {
    name: "Micronesia (Federated States of)",
    alpha2_code: "FM",
    alpha3_code: "FSM"
  },
  {
    name: "Moldova (Republic of)",
    alpha2_code: "MD",
    alpha3_code: "MDA"
  },
  {
    name: "Monaco",
    alpha2_code: "MC",
    alpha3_code: "MCO"
  },
  {
    name: "Mongolia",
    alpha2_code: "MN",
    alpha3_code: "MNG"
  },
  {
    name: "Montenegro",
    alpha2_code: "ME",
    alpha3_code: "MNE"
  },
  {
    name: "Montserrat",
    alpha2_code: "MS",
    alpha3_code: "MSR"
  },
  {
    name: "Morocco",
    alpha2_code: "MA",
    alpha3_code: "MAR"
  },
  {
    name: "Mozambique",
    alpha2_code: "MZ",
    alpha3_code: "MOZ"
  },
  {
    name: "Myanmar",
    alpha2_code: "MM",
    alpha3_code: "MMR"
  },
  {
    name: "Namibia",
    alpha2_code: "NA",
    alpha3_code: "NAM"
  },
  {
    name: "Nauru",
    alpha2_code: "NR",
    alpha3_code: "NRU"
  },
  {
    name: "Nepal",
    alpha2_code: "NP",
    alpha3_code: "NPL"
  },
  {
    name: "Netherlands",
    alpha2_code: "NL",
    alpha3_code: "NLD"
  },
  {
    name: "New Caledonia",
    alpha2_code: "NC",
    alpha3_code: "NCL"
  },
  {
    name: "New Zealand",
    alpha2_code: "NZ",
    alpha3_code: "NZL"
  },
  {
    name: "Nicaragua",
    alpha2_code: "NI",
    alpha3_code: "NIC"
  },
  {
    name: "Niger",
    alpha2_code: "NE",
    alpha3_code: "NER"
  },
  {
    name: "Nigeria",
    alpha2_code: "NG",
    alpha3_code: "NGA"
  },
  {
    name: "Niue",
    alpha2_code: "NU",
    alpha3_code: "NIU"
  },
  {
    name: "Norfolk Island",
    alpha2_code: "NF",
    alpha3_code: "NFK"
  },
  {
    name: "Northern Mariana Islands",
    alpha2_code: "MP",
    alpha3_code: "MNP"
  },
  {
    name: "Norway",
    alpha2_code: "NO",
    alpha3_code: "NOR"
  },
  {
    name: "Oman",
    alpha2_code: "OM",
    alpha3_code: "OMN"
  },
  {
    name: "Pakistan",
    alpha2_code: "PK",
    alpha3_code: "PAK"
  },
  {
    name: "Palau",
    alpha2_code: "PW",
    alpha3_code: "PLW"
  },
  {
    name: "Palestine, State of",
    alpha2_code: "PS",
    alpha3_code: "PSE"
  },
  {
    name: "Panama",
    alpha2_code: "PA",
    alpha3_code: "PAN"
  },
  {
    name: "Papua New Guinea",
    alpha2_code: "PG",
    alpha3_code: "PNG"
  },
  {
    name: "Paraguay",
    alpha2_code: "PY",
    alpha3_code: "PRY"
  },
  {
    name: "Peru",
    alpha2_code: "PE",
    alpha3_code: "PER"
  },
  {
    name: "Philippines",
    alpha2_code: "PH",
    alpha3_code: "PHL"
  },
  {
    name: "Pitcairn",
    alpha2_code: "PN",
    alpha3_code: "PCN"
  },
  {
    name: "Poland",
    alpha2_code: "PL",
    alpha3_code: "POL"
  },
  {
    name: "Portugal",
    alpha2_code: "PT",
    alpha3_code: "PRT"
  },
  {
    name: "Puerto Rico",
    alpha2_code: "PR",
    alpha3_code: "PRI"
  },
  {
    name: "Qatar",
    alpha2_code: "QA",
    alpha3_code: "QAT"
  },
  {
    name: "R��union",
    alpha2_code: "RE",
    alpha3_code: "REU"
  },
  {
    name: "Romania",
    alpha2_code: "RO",
    alpha3_code: "ROU"
  },
  {
    name: "Russian Federation",
    alpha2_code: "RU",
    alpha3_code: "RUS"
  },
  {
    name: "Rwanda",
    alpha2_code: "RW",
    alpha3_code: "RWA"
  },
  {
    name: "Saint Barth��lemy",
    alpha2_code: "BL",
    alpha3_code: "BLM"
  },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    alpha2_code: "SH",
    alpha3_code: "SHN"
  },
  {
    name: "Saint Kitts and Nevis",
    alpha2_code: "KN",
    alpha3_code: "KNA"
  },
  {
    name: "Saint Lucia",
    alpha2_code: "LC",
    alpha3_code: "LCA"
  },
  {
    name: "Saint Martin (French part)",
    alpha2_code: "MF",
    alpha3_code: "MAF"
  },
  {
    name: "Saint Pierre and Miquelon",
    alpha2_code: "PM",
    alpha3_code: "SPM"
  },
  {
    name: "Saint Vincent and the Grenadines",
    alpha2_code: "VC",
    alpha3_code: "VCT"
  },
  {
    name: "Samoa",
    alpha2_code: "WS",
    alpha3_code: "WSM"
  },
  {
    name: "San Marino",
    alpha2_code: "SM",
    alpha3_code: "SMR"
  },
  {
    name: "Sao Tome and Principe",
    alpha2_code: "ST",
    alpha3_code: "STP"
  },
  {
    name: "Saudi Arabia",
    alpha2_code: "SA",
    alpha3_code: "SAU"
  },
  {
    name: "Senegal",
    alpha2_code: "SN",
    alpha3_code: "SEN"
  },
  {
    name: "Serbia",
    alpha2_code: "RS",
    alpha3_code: "SRB"
  },
  {
    name: "Seychelles",
    alpha2_code: "SC",
    alpha3_code: "SYC"
  },
  {
    name: "Sierra Leone",
    alpha2_code: "SL",
    alpha3_code: "SLE"
  },
  {
    name: "Singapore",
    alpha2_code: "SG",
    alpha3_code: "SGP"
  },
  {
    name: "Sint Maarten (Dutch part)",
    alpha2_code: "SX",
    alpha3_code: "SXM"
  },
  {
    name: "Slovakia",
    alpha2_code: "SK",
    alpha3_code: "SVK"
  },
  {
    name: "Slovenia",
    alpha2_code: "SI",
    alpha3_code: "SVN"
  },
  {
    name: "Solomon Islands",
    alpha2_code: "SB",
    alpha3_code: "SLB"
  },
  {
    name: "Somalia",
    alpha2_code: "SO",
    alpha3_code: "SOM"
  },
  {
    name: "South Africa",
    alpha2_code: "ZA",
    alpha3_code: "ZAF"
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    alpha2_code: "GS",
    alpha3_code: "SGS"
  },
  {
    name: "South Sudan",
    alpha2_code: "SS",
    alpha3_code: "SSD"
  },
  {
    name: "Spain",
    alpha2_code: "ES",
    alpha3_code: "ESP"
  },
  {
    name: "Sri Lanka",
    alpha2_code: "LK",
    alpha3_code: "LKA"
  },
  {
    name: "Sudan",
    alpha2_code: "SD",
    alpha3_code: "SDN"
  },
  {
    name: "Suriname",
    alpha2_code: "SR",
    alpha3_code: "SUR"
  },
  {
    name: "Svalbard and Jan Mayen",
    alpha2_code: "SJ",
    alpha3_code: "SJM"
  },
  {
    name: "Swaziland",
    alpha2_code: "SZ",
    alpha3_code: "SWZ"
  },
  {
    name: "Sweden",
    alpha2_code: "SE",
    alpha3_code: "SWE"
  },
  {
    name: "Switzerland",
    alpha2_code: "CH",
    alpha3_code: "CHE"
  },
  {
    name: "Syrian Arab Republic",
    alpha2_code: "SY",
    alpha3_code: "SYR"
  },
  {
    name: "Taiwan, Province of China [a]",
    alpha2_code: "TW",
    alpha3_code: "TWN"
  },
  {
    name: "Tajikistan",
    alpha2_code: "TJ",
    alpha3_code: "TJK"
  },
  {
    name: "Tanzania, United Republic of",
    alpha2_code: "TZ",
    alpha3_code: "TZA"
  },
  {
    name: "Thailand",
    alpha2_code: "TH",
    alpha3_code: "THA"
  },
  {
    name: "Timor-Leste",
    alpha2_code: "TL",
    alpha3_code: "TLS"
  },
  {
    name: "Togo",
    alpha2_code: "TG",
    alpha3_code: "TGO"
  },
  {
    name: "Tokelau",
    alpha2_code: "TK",
    alpha3_code: "TKL"
  },
  {
    name: "Tonga",
    alpha2_code: "TO",
    alpha3_code: "TON"
  },
  {
    name: "Trinidad and Tobago",
    alpha2_code: "TT",
    alpha3_code: "TTO"
  },
  {
    name: "Tunisia",
    alpha2_code: "TN",
    alpha3_code: "TUN"
  },
  {
    name: "Turkey",
    alpha2_code: "TR",
    alpha3_code: "TUR"
  },
  {
    name: "Turkmenistan",
    alpha2_code: "TM",
    alpha3_code: "TKM"
  },
  {
    name: "Turks and Caicos Islands",
    alpha2_code: "TC",
    alpha3_code: "TCA"
  },
  {
    name: "Tuvalu",
    alpha2_code: "TV",
    alpha3_code: "TUV"
  },
  {
    name: "Uganda",
    alpha2_code: "UG",
    alpha3_code: "UGA"
  },
  {
    name: "Ukraine",
    alpha2_code: "UA",
    alpha3_code: "UKR"
  },
  {
    name: "United Arab Emirates",
    alpha2_code: "AE",
    alpha3_code: "ARE"
  },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    alpha2_code: "GB",
    alpha3_code: "GBR"
  },
  {
    name: "United States of America",
    alpha2_code: "US",
    alpha3_code: "USA"
  },
  {
    name: "United States Minor Outlying Islands",
    alpha2_code: "UM",
    alpha3_code: "UMI"
  },
  {
    name: "Uruguay",
    alpha2_code: "UY",
    alpha3_code: "URY"
  },
  {
    name: "Uzbekistan",
    alpha2_code: "UZ",
    alpha3_code: "UZB"
  },
  {
    name: "Vanuatu",
    alpha2_code: "VU",
    alpha3_code: "VUT"
  },
  {
    name: "Venezuela (Bolivarian Republic of)",
    alpha2_code: "VE",
    alpha3_code: "VEN"
  },
  {
    name: "Viet Nam",
    alpha2_code: "VN",
    alpha3_code: "VNM"
  },
  {
    name: "Virgin Islands (British)",
    alpha2_code: "VG",
    alpha3_code: "VGB"
  },
  {
    name: "Virgin Islands (U.S.)",
    alpha2_code: "VI",
    alpha3_code: "VIR"
  },
  {
    name: "Wallis and Futuna",
    alpha2_code: "WF",
    alpha3_code: "WLF"
  },
  {
    name: "Western Sahara",
    alpha2_code: "EH",
    alpha3_code: "ESH"
  },
  {
    name: "Yemen",
    alpha2_code: "YE",
    alpha3_code: "YEM"
  },
  {
    name: "Zambia",
    alpha2_code: "ZM",
    alpha3_code: "ZMB"
  },
  {
    name: "Zimbabwe",
    alpha2_code: "ZW",
    alpha3_code: "ZWE"
  }
];
