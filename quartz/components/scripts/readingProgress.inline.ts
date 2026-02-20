document.addEventListener("nav", () => {
  const progressBar = document.getElementById("reading-progress-bar")
  if (!progressBar) return

  let ticking = false

  function updateProgress() {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    if (docHeight <= 0) {
      progressBar!.style.width = "0%"
      return
    }
    const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100)
    progressBar!.style.width = `${scrollPercent}%`
    ticking = false
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateProgress)
      ticking = true
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true })
  window.addCleanup(() => window.removeEventListener("scroll", onScroll))

  // Set initial state
  updateProgress()
})
