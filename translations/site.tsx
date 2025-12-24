// Inspired by https://github.com/vercel/swr-site/blob/main/Translation<string>s/text.js

import { Translation } from "./types"

export const titleTextMap: Translation<string> = {
    en: "ZZ Method",
}

export const defaultDescriptionMap: Translation<string> = {
    en: "Guide to the ZZ Speedsolving Method",
}

export const feedbackLinkMap: Translation<string> = {
    en: "Question? Give us feedback →",
}

export const editTextMap: Translation<string> = {
    en: "Edit this page",
}

export const tableOfContentsMap: Translation<string> = {
    en: "On This Page",
}

export const backToTopMap: Translation<string> = {
    en: "Scroll to top",
}

export const searchPlaceholderMap: Translation<string> = {
    en: "Search documentation...",
}

export const logoTextMap: Translation<string> = {
    en: "ZZ Method",
}

export const authorsMap: Translation<(authors: string) => string> = {
    en: (authors: string) => `By ${authors}`,
}

export const gitTimestampMap: Translation<string> = {
    en: "Last updated on",
}

const CrystalCuberLink = () => (<a
    href="https://www.youtube.com/@crystalcuber"
    target="_blank"
    rel="noopener"
>
    <strong>crystalcuber</strong>
</a>)

const CubingJsLink = () => (<a href="https://js.cubing.net/cubing/" target="_blank" rel="noopener">
    <code>cubing.js</code>
</a>)

export const footerMap: Translation<React.ReactNode> = {
    en: <p>Created by <CrystalCuberLink />. Powered by <CubingJsLink /></p>,
}
