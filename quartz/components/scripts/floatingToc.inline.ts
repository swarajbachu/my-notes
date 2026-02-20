const MOBILE_BREAKPOINT = 600

function setupFloatingTOC() {
  const trigger = document.getElementById("floating-toc-trigger")
  const modal = document.getElementById("floating-toc-modal")
  const closeBtn = document.getElementById("floating-toc-close")
  const container = document.querySelector(".floating-toc")

  if (!trigger || !modal || !closeBtn || !container) {
    return
  }

  // Toggle modal visibility
  function toggleModal() {
    const isVisible = modal.style.display !== "none"
    modal.style.display = isVisible ? "none" : "block"
    trigger.setAttribute("aria-expanded", (!isVisible).toString())
  }

  function closeModal() {
    modal.style.display = "none"
    trigger.setAttribute("aria-expanded", "false")
  }

  // Event listeners
  trigger.addEventListener("click", toggleModal)
  closeBtn.addEventListener("click", closeModal)

  // Close on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display !== "none") {
      closeModal()
    }
  })

  // Close when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })

  // Close when clicking a TOC link
  const tocLinks = modal.querySelectorAll(".floating-toc-list a")
  tocLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(closeModal, 100) // Small delay for smooth scroll
    })
  })

  // IntersectionObserver for active section tracking
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const slug = entry.target.id
        const tocEntryElement = modal.querySelector(`a[data-for="${slug}"]`)
        const windowHeight = entry.rootBounds?.height

        if (windowHeight && tocEntryElement) {
          if (entry.boundingClientRect.y < windowHeight) {
            tocEntryElement.classList.add("in-view")
          } else {
            tocEntryElement.classList.remove("in-view")
          }
        }
      }

      // Find the topmost visible heading and mark it as active
      const allTocLinks = Array.from(modal.querySelectorAll(".floating-toc-list a"))
      const inViewLinks = allTocLinks.filter((link) => link.classList.contains("in-view"))

      // Remove active class from all
      allTocLinks.forEach((link) => link.classList.remove("active"))

      // Add active class to the last in-view item (closest to top of viewport)
      if (inViewLinks.length > 0) {
        inViewLinks[inViewLinks.length - 1].classList.add("active")
      }
    },
    {
      rootMargin: "-20px 0px -20px 0px",
      threshold: 0,
    },
  )

  // Observe all headings
  const headings = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
  headings.forEach((heading) => observer.observe(heading))

  // Hide on mobile if needed
  function handleResize() {
    if (window.innerWidth < MOBILE_BREAKPOINT) {
      container.classList.add("mobile-hidden")
    } else {
      container.classList.remove("mobile-hidden")
    }
  }

  handleResize()
  window.addEventListener("resize", handleResize)
}

// Setup on page load
document.addEventListener("nav", () => {
  setupFloatingTOC()
})

// Setup immediately if already loaded
if (document.readyState === "complete" || document.readyState === "interactive") {
  setupFloatingTOC()
}
