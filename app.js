if (!CSS.supports("animation-timeline: view()")) {
  const MARKS = document.querySelectorAll("mark");
  const OPTS = {
    threshold: 1.0,
  };
  const HANDLE = (entries) => {
    entries.forEach((entry) => {
      entry.target.style.setProperty(
        "--highlighted",
        entry.isIntersecting ? 1 : 0
      );
    });
  };
  const OBSERVER = new IntersectionObserver(HANDLE, OPTS);
  MARKS.forEach((M) => OBSERVER.observe(M));
}

