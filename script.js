const intro = document.getElementById("intro");
const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");
const kineticWords = Array.from(document.querySelectorAll(".kinetic-word"));
const splitNodes = document.querySelectorAll(".split");
const revealNodes = document.querySelectorAll(".reveal, .split");
const counterNodes = document.querySelectorAll(".stat-number");
const parallaxNodes = document.querySelectorAll(".parallax");
const tiltNodes = document.querySelectorAll("[data-tilt]");

let kineticIndex = 0;

function closeIntro() {
  setTimeout(() => {
    intro.classList.add("hidden");
  }, 1850);
}

function initCursor() {
  let ringX = 0;
  let ringY = 0;

  window.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;

    cursorDot.style.left = `${clientX}px`;
    cursorDot.style.top = `${clientY}px`;

    ringX += (clientX - ringX) * 0.18;
    ringY += (clientY - ringY) * 0.18;
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;
  });

  const interactiveSelectors = "a, button, .trick-list li, .media-card";
  document.querySelectorAll(interactiveSelectors).forEach((node) => {
    node.addEventListener("mouseenter", () => {
      cursorRing.style.width = "64px";
      cursorRing.style.height = "64px";
      cursorRing.style.borderColor = "#00d4ff";
    });
    node.addEventListener("mouseleave", () => {
      cursorRing.style.width = "36px";
      cursorRing.style.height = "36px";
      cursorRing.style.borderColor = "#ff2a2a";
    });
  });
}

function cycleKineticWords() {
  if (!kineticWords.length) {
    return;
  }

  setInterval(() => {
    kineticWords[kineticIndex].classList.remove("active");
    kineticIndex = (kineticIndex + 1) % kineticWords.length;
    kineticWords[kineticIndex].classList.add("active");
  }, 1300);
}

function splitText() {
  splitNodes.forEach((node) => {
    if (node.dataset.splitApplied === "true") {
      return;
    }

    // Only process text nodes — skip elements that contain child elements
    const hasChildElements = Array.from(node.childNodes).some(
      (n) => n.nodeType === Node.ELEMENT_NODE && n.tagName !== "BR"
    );
    if (hasChildElements) {
      node.dataset.splitApplied = "true";
      return;
    }

    const text = node.textContent;
    const chars = Array.from(text).map((char, index) => {
      if (char === " ") {
        return `<span class="char" style="transition-delay:${index * 18}ms">&nbsp;</span>`;
      }
      return `<span class="char" style="transition-delay:${index * 18}ms">${char}</span>`;
    });

    node.innerHTML = chars.join("");
    node.dataset.splitApplied = "true";
  });
}

function initRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -5% 0px"
    }
  );

  revealNodes.forEach((node) => observer.observe(node));
}

function animateCounter(node) {
  const target = Number(node.dataset.target || 0);
  let value = 0;
  const start = performance.now();
  const duration = 1100;

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    value = Math.round(target * eased);
    node.textContent = String(value);

    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

function initCounterObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.dataset.animated !== "true") {
          animateCounter(entry.target);
          entry.target.dataset.animated = "true";
        }
      });
    },
    { threshold: 0.65 }
  );

  counterNodes.forEach((node) => observer.observe(node));
}

function initParallax() {
  const updateParallax = () => {
    const scrollY = window.scrollY;
    parallaxNodes.forEach((node) => {
      const speed = Number(node.dataset.speed || 0.1);
      const y = Math.round(scrollY * speed);
      node.style.transform = `translateY(${y}px)`;
    });
  };

  window.addEventListener("scroll", updateParallax, { passive: true });
  updateParallax();
}

function initTilt() {
  tiltNodes.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -8;
      const rotateY = ((x / rect.width) - 0.5) * 10;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    });
  });
}

function init() {
  closeIntro();
  splitText();
  initRevealObserver();
  initCounterObserver();
  cycleKineticWords();
  initParallax();
  initTilt();

  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    initCursor();
  }
}

document.addEventListener("DOMContentLoaded", init);
