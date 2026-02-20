import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/readingProgress.scss"
// @ts-ignore
import script from "./scripts/readingProgress.inline"

export default (() => {
  const ReadingProgress: QuartzComponent = (_props: QuartzComponentProps) => {
    return (
      <div id="reading-progress">
        <div id="reading-progress-bar"></div>
      </div>
    )
  }

  ReadingProgress.css = style
  ReadingProgress.afterDOMLoaded = script

  return ReadingProgress
}) satisfies QuartzComponentConstructor
