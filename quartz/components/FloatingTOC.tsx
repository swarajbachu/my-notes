import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface Options {
  layout: "modern" | "legacy"
}

const defaultOptions: Options = {
  layout: "modern",
}

export default ((opts?: Partial<Options>) => {
  const options: Options = { ...defaultOptions, ...opts }

  const FloatingTOC: QuartzComponent = ({
    fileData,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    if (!fileData.toc || fileData.toc.length === 0) {
      return null
    }

    return (
      <div class={classNames(displayClass, "floating-toc")}>
        <button
          type="button"
          id="floating-toc-trigger"
          class="floating-toc-trigger"
          aria-label="Toggle table of contents"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
        </button>

        <div id="floating-toc-modal" class="floating-toc-modal" style="display: none;">
          <div class="floating-toc-header">
            <h3>Table of Contents</h3>
            <button
              type="button"
              id="floating-toc-close"
              class="floating-toc-close"
              aria-label="Close table of contents"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="floating-toc-content">
            <ul class="floating-toc-list">
              {fileData.toc.map((tocEntry) => (
                <li
                  key={tocEntry.slug}
                  class={`floating-toc-item depth-${tocEntry.depth}`}
                  data-depth={tocEntry.depth}
                >
                  <a href={`#${tocEntry.slug}`} data-for={tocEntry.slug}>
                    <span class="floating-toc-indicator"></span>
                    <span class="floating-toc-text">{tocEntry.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  FloatingTOC.css = "floatingToc.scss"
  FloatingTOC.afterDOMLoaded = "floatingToc.inline"

  return FloatingTOC
}) satisfies QuartzComponentConstructor
