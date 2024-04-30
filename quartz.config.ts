import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "JwarRef",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "bushido-risen-sun.netlify.app",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#d4e4e4",
          lightgray: "#d5e5e5",
          gray: "#727272",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#953232",
          tertiary: "#84a59d",
          highlight: "rgba(93, 161, 174, 0.15)",
          // bluemunsell: #5296A3ff,
          // ashgray: #B5BAB3ff, // body bg
          // firebrick: #B91E25ff,
          // oldrose: #B66F73ff,
          // moonstone: #5EA2AFff,/* Color Theme Swatches in Hex */
          /*
          $light-1-hex: #B91E25; // bright red
          $light-2-hex: #B66F73; // light red
          $light-3-hex: #B5BAB3; // pale
          $light-4-hex: #3D6167; // dark teal
          $light-5-hex: #5296A3; // ligh teal
          */
        },
        darkMode: { 
          light: "#2c2720",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#d4c0a8", // links
          tertiary: "#383741",
          highlight: "rgba(143, 159, 169, 0.15)",
          // lion: #b59b6e // links
          // persian-red: #ca363c
          // burnt-umber: #902c22
          // bistre: #3b1e13 // body bg
          // pearl: #dfd7bd
          /*
          $light-1-hex: #B91E25; // sand
          $light-2-hex: #B66F73; // brown
          $light-3-hex: #B5BAB3; // dark red
          $light-4-hex: #3D6167; // light red
          $light-5-hex: #5296A3; // pale
          */
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.SubSymbols(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
