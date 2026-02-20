function setupSignature() {
  const container = document.querySelector(".signature-container")
  if (!container) return

  container.classList.remove("animate")
  const paths = container.querySelectorAll<SVGPathElement>(".signature-path")
  const dot = container.querySelector<SVGCircleElement>(".signature-dot")

  const TOTAL_DURATION = 2.5 // seconds
  const EASE = "cubic-bezier(0.4, 0, 0.2, 1)"

  // Calculate total length of all paths
  let totalLength = 0
  const lengths: number[] = []
  paths.forEach((path) => {
    const len = path.getTotalLength()
    lengths.push(len)
    totalLength += len
  })

  // Set up each path with proportional timing
  let cumulativeDelay = 0
  paths.forEach((path, i) => {
    const len = lengths[i]
    const duration = (len / totalLength) * TOTAL_DURATION
    path.style.strokeDasharray = `${len}`
    path.style.strokeDashoffset = `${len}`
    path.style.setProperty("--delay", `${cumulativeDelay}s`)
    path.style.setProperty("--duration", `${duration}s`)
    path.style.setProperty("--easing", EASE)
    cumulativeDelay += duration
  })

  // Dot appears at its position in the sequence
  if (dot) {
    dot.style.setProperty("--delay", `${cumulativeDelay * 0.5}s`)
  }

  // Trigger animation
  requestAnimationFrame(() => container.classList.add("animate"))
}

document.addEventListener("nav", () => setupSignature())
