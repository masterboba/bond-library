import { CHAIN_ID, CUSTOM_PRICE_FEEDS } from "../constants";
import { ProtocolDefinition } from "../public-types";

/* Protocol Template */
export default {
  name: "Borat Token", // Layer2DAO display name
  description: "Only for strong investor who like potassium and not fear bear.", // Brief L2DAO summary
  logoUrl: "https://assets.coingecko.com/coins/images/23699/large/Khp7Y4Sn.png?1645081048",

  // Relevant L2DAO Links
  links: {
    governanceVote: "https://borat.wtf",
    homepage: "https://borat.wtf",
    twitter: "https://twitter.com/boratwtf",
    github: "https://github.com/masterboba",
    discord: "https://discord.gg/r2E7VPBnxc",
  },

  issuerAddresses: {
    [CHAIN_ID.ETHEREUM_MAINNET]: [
      "0x63B9D272D68c3bbE0bd7b920667B76324b4310f1",
      "0x6d152170f3170cEBf2f9f91Fe49eC6568d784B44",
    ],
  },

  // Tokens specific to your protocol like your governance token or LPs
  // If you're looking to add a strategic asset, stablecoin or an otherwise common base please check the tokens directory
  tokens: [
    {
      // why use many word wen example do trick
      name: "Borat Token",
      symbol: "BORAT",
      logoUrl: "https://assets.coingecko.com/coins/images/23699/large/Khp7Y4Sn.png?1645081048",
      // Token contract addresses
      addresses: {
        [CHAIN_ID.ETHEREUM_MAINNET]: "0xb00b58d07d5fb10ae1ea6f9b47c3c723a9e8af2d",
      },
      purchaseLinks: {
        [CHAIN_ID.ETHEREUM_MAINNET]:
          "https://app.uniswap.org/#/swap?outputCurrency=0xb00b58d07d5fb10ae1ea6f9b47c3c723a9e8af2d",
      }, // Where to acquire your token
      priceSources: [
        // Check out our docs for supported price sources and their usage
        { source: "coingecko", apiId: "borat" }, // Lower number, higher priority
      ],
    },
    {
      name: "BORAT/ETH UniV2 LP",
      symbol: "BORAT-ETH-LP",
      lpType: SUPPORTED_LP_TYPES.UNISWAP_V2,
      addresses: {
        [CHAIN_ID.ETHEREUM_MAINNET]: "0x95f4d7C9Dd6029607B7756DbbfcaC00C078DB0f3",
      },
      token0Address: "0xb00b58d07d5fb10ae1ea6f9b47c3c723a9e8af2d",
      token1Address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      purchaseLinks: {
        [CHAIN_ID.ETHEREUM_MAINNET]: "https://app.uniswap.org/#/add/v2/0xb00b58d07d5fb10ae1ea6f9b47c3c723a9e8af2d/ETH",
      },
      priceSources: [],
    },
  ],
} as ProtocolDefinition;
