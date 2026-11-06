/**
 * ==========================================================================
 * Heritage Clutch — Realistic 3D Scroll-Driven Editorial Experience (app.js)
 * Features:
 *   1. Continuous Scroll-Driven 3D Perspective & Floating Poise Engine (rAF)
 *   2. 3D Flip & Specular Tilt Hero Stage with Real Black / Gold Cutouts
 *   3. Pinned 3D Depth Stack for the 5 Instructional Illustrations
 *   4. Scroll-Unfolding 3D Video Demonstration Stage & Chapter Shortcuts
 *   5. Multi-Velocity 3D Parallax Saree Gallery & Lightbox
 *   6. English / Kannada (ಕನ್ನಡ) Language Switcher & Print Sheet
 * ==========================================================================
 */

/* --------------------------------------------------------------------------
   1. Bilingual Dictionary (English & Kannada)
   -------------------------------------------------------------------------- */
const TRANSLATIONS = {
  en: {
    navInstructions: 'Instructions',
    navVideo: 'Video',
    navGallery: 'Gallery',

    heroOverline: 'The Gandabherunda Collection',
    heroHeadline: 'Your Clutch. Beautifully Simple.',
    heroSubtitle:
      'Learn the gentle five-step way to open, close, and care for your handcrafted heritage clutch.',
    finishBlack: 'Black Clutch',
    finishGold: 'Gold Clutch',
    ctaViewGuide: 'View the guide',
    ctaWatchVideo: 'Watch video',

    heritageBannerTitle: 'A Motif From Karnataka’s Royal Past',
    heritageBannerCopy:
      'Crowned with the sculpted Gandabherunda emblem and secured by a precision top clasp designed to release with a single gentle forward touch.',

    guideOverline: 'Care & Handling Instructions',
    guideHeading: 'How to Open & Close Your Clutch',

    step1Title: 'Step 1 — Locate the Clasp',
    step1Desc:
      'Find the small gold clasp positioned at the upper edge of the clutch, directly above the Gandabherunda motif.',
    step2Title: 'Step 2 — Hold the Clutch Steady',
    step2Desc:
      'Support the clutch comfortably with one hand and place your index finger gently on the clasp.',
    step3Title: 'Step 3 — Push Toward the Motif',
    step3Desc:
      'Push the clasp lightly toward the motif-facing side to release the lock.',
    step3Caution: 'Do not twist, pull upward or apply excessive pressure.',
    step4Title: 'Step 4 — Open Gently',
    step4Desc:
      'Once released, open the clutch smoothly while keeping the base supported in your palm.',
    step5Title: 'Step 5 — Close Until It Clicks',
    step5Desc:
      'Align both sides carefully and press gently until the clasp secures without force.',

    videoOverline: 'Real-Time Demonstration',
    videoHeading: 'Watch How It Opens',
    videoNote: 'Demonstrated with the Black Clutch.',
    chapterStart: 'Start',
    chapterOpening: 'Opening',
    chapterClosing: 'Closing',

    galleryOverline: 'Gold, Silk & Heritage',
    galleryHeading: 'Carried with the Saree',
    galleryCap1Title: 'Mysore Silk & Zari Drape',
    galleryCap1Sub: 'Full-length ceremonial pairing',
    galleryCap2Title: 'Poised in Both Hands',
    galleryCap2Sub: 'Balanced proportions in the palm',
    galleryCap3Title: 'The Gandabherunda Suite',
    galleryCap3Sub: 'Paired with the matching saree motif',

    reminderOverline: 'The Essential Care Note',
    finalReminder: '“Push gently toward the motif. Never force the clasp.”',
    replayVideo: 'Replay video',
    printGuide: 'Print guide',

    footerTagline:
      'An enduring expression of Karnataka’s royal heritage, crafted for poised everyday and ceremonial keeping.',
    footerGuideHeading: 'Guide',
    footerFinishesHeading: 'Finishes',
    footerOrigin: 'The Gandabherunda Collection · Karnataka'
  },
  kn: {
    navInstructions: 'ಸೂಚನೆಗಳು',
    navVideo: 'ವೀಡಿಯೊ',
    navGallery: 'ಗ್ಯಾಲರಿ',

    heroOverline: 'ಗಂಡಭೇರುಂಡ ಸಂಗ್ರಹ',
    heroHeadline: 'ನಿಮ್ಮ ಕ್ಲಚ್. ಸುಂದರವಾಗಿ ಸರಳ.',
    heroSubtitle:
      'ನಿಮ್ಮ ಪಾರಂಪರಿಕ ಕ್ಲಚ್ ಅನ್ನು ಮೃದುವಾಗಿ ತೆರೆಯುವ ಮತ್ತು ಮುಚ್ಚುವ ಐದು ಸರಳ ಹಂತಗಳನ್ನು ತಿಳಿಯಿರಿ.',
    finishBlack: 'ಕಪ್ಪು ಕ್ಲಚ್',
    finishGold: 'ಚಿನ್ನದ ಕ್ಲಚ್',
    ctaViewGuide: 'ಮಾರ್ಗದರ್ಶಿ ನೋಡಿ',
    ctaWatchVideo: 'ವೀಡಿಯೊ ನೋಡಿ',

    heritageBannerTitle: 'ಕರ್ನಾಟಕದ ರಾಜ ಪರಂಪರೆಯ ಲಾಂಛನ',
    heritageBannerCopy:
      'ಗಂಡಭೇರುಂಡ ಲಾಂಛನದಿಂದ ಅಲಂಕೃತಗೊಂಡಿರುವ ಈ ಕ್ಲಚ್, ಮೇಲ್ಭಾಗದ ಚಿನ್ನದ ಕ್ಲಾಸ್ಪ್ ಅನ್ನು ಮೃದುವಾಗಿ ಮುಂದಕ್ಕೆ ತಳ್ಳಿದಾಗ ಸುಲಭವಾಗಿ ತೆರೆಯುವಂತೆ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.',

    guideOverline: 'ಬಳಕೆ ಮತ್ತು ಆರೈಕೆ ಸೂಚನೆಗಳು',
    guideHeading: 'ಕ್ಲಚ್ ತೆರೆಯುವ ಮತ್ತು ಮುಚ್ಚುವ ವಿಧಾನ',

    step1Title: 'ಹಂತ 1 — ಕ್ಲಾಸ್ಪ್ ಗುರುತಿಸಿ',
    step1Desc:
      'ಕ್ಲಚ್‌ನ ಮೇಲ್ಭಾಗದ ಅಂಚಿನಲ್ಲಿ, ಗಂಡಭೇರುಂಡ ಲಾಂಛನದ ನೇರ ಮೇಲಿರುವ ಸಣ್ಣ ಚಿನ್ನದ ಕ್ಲಾಸ್ಪ್ ಅನ್ನು ಗಮನಿಸಿ.',
    step2Title: 'ಹಂತ 2 — ಕ್ಲಚ್ ಅನ್ನು ಸ್ಥಿರವಾಗಿ ಹಿಡಿಯಿರಿ',
    step2Desc:
      'ಒಂದು ಕೈಯಲ್ಲಿ ಕ್ಲಚ್‌ಗೆ ಆಧಾರ ನೀಡಿ, ಇನ್ನೊಂದು ಕೈಯ ತೋರುಬೆರಳನ್ನು ಕ್ಲಾಸ್ಪ್ ಮೇಲೆ ಮೃದುವಾಗಿ ಇರಿಸಿ.',
    step3Title: 'ಹಂತ 3 — ಲಾಂಛನದ ಕಡೆಗೆ ತಳ್ಳಿರಿ',
    step3Desc:
      'ಲಾಕ್ ಬಿಡುಗಡೆಯಾಗಲು ಕ್ಲಾಸ್ಪ್ ಅನ್ನು ಮುಂಭಾಗದ ಲಾಂಛನದ ಕಡೆಗೆ ಹಗುರವಾಗಿ ತಳ್ಳಿರಿ.',
    step3Caution: 'ತಿರುಗಿಸಬೇಡಿ, ಮೇಲಕ್ಕೆ ಎಳೆಯಬೇಡಿ ಅಥವಾ ಹೆಚ್ಚಿನ ಒತ್ತಡ ಹಾಕಬೇಡಿ.',
    step4Title: 'ಹಂತ 4 — ನಿಧಾನವಾಗಿ ತೆರೆಯಿರಿ',
    step4Desc:
      'ಲಾಕ್ ಬಿಡುಗಡೆಯಾದ ನಂತರ, ಕ್ಲಚ್‌ಗೆ ಆಧಾರ ನೀಡುತ್ತಾ ನಿಧಾನವಾಗಿ ತೆರೆಯಿರಿ.',
    step5Title: 'ಹಂತ 5 — ಕ್ಲಿಕ್ ಆಗುವವರೆಗೆ ಮೃದುವಾಗಿ ಮುಚ್ಚಿರಿ',
    step5Desc:
      'ಎರಡೂ ಬದಿಗಳನ್ನು ಸರಿಯಾಗಿ ಜೋಡಿಸಿ, ಬಲಪ್ರಯೋಗವಿಲ್ಲದೆ ಕ್ಲಾಸ್ಪ್ ಭದ್ರವಾಗುವವರೆಗೆ ಮೃದುವಾಗಿ ಒತ್ತಿರಿ.',

    videoOverline: 'ನೈಜ ಪ್ರದರ್ಶನ',
    videoHeading: 'ತೆರೆಯುವ ವಿಧಾನವನ್ನು ವೀಕ್ಷಿಸಿ',
    videoNote: 'ಕಪ್ಪು ಕ್ಲಚ್‌ನೊಂದಿಗೆ ಪ್ರದರ್ಶಿಸಲಾಗಿದೆ.',
    chapterStart: 'ಪ್ರಾರಂಭ',
    chapterOpening: 'ತೆರೆಯುವಿಕೆ',
    chapterClosing: 'ಮುಚ್ಚುವಿಕೆ',

    galleryOverline: 'ಚಿನ್ನ, ರೇಷ್ಮೆ ಮತ್ತು ಪರಂಪರೆ',
    galleryHeading: 'ಸೀರೆಯೊಂದಿಗೆ ನೋಟ',
    galleryCap1Title: 'ಮೈಸೂರು ರೇಷ್ಮೆ ಮತ್ತು ಜರಿ ಸೀರೆ',
    galleryCap1Sub: 'ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಗೆಯೊಂದಿಗೆ ಪೂರ್ಣ ನೋಟ',
    galleryCap2Title: 'ಎರಡೂ ಕೈಗಳಲ್ಲಿ ನಾಜೂಕಾದ ಹಿಡಿತ',
    galleryCap2Sub: 'ಅಂಗೈಯಲ್ಲಿ ಸಮತೋಲಿತ ವಿನ್ಯಾಸ',
    galleryCap3Title: 'ಗಂಡಭೇರುಂಡ ಜೋಡಿ ವಿನ್ಯಾಸ',
    galleryCap3Sub: 'ಸೀರೆಯ ಆಭರಣದೊಂದಿಗೆ ಹೊಂದಾಣಿಕೆ',

    reminderOverline: 'ಮುಖ್ಯ ಆರೈಕೆ ಸೂಚನೆ',
    finalReminder: '“ಲಾಂಛನದ ಕಡೆಗೆ ಮೃದುವಾಗಿ ತಳ್ಳಿರಿ. ಕ್ಲಾಸ್ಪ್ ಅನ್ನು ಎಂದಿಗೂ ಬಲವಂತವಾಗಿ ಒತ್ತಬೇಡಿ.”',
    replayVideo: 'ವೀಡಿಯೊ ಮತ್ತೆ ಪ್ಲೇ ಮಾಡಿ',
    printGuide: 'ಮಾರ್ಗದರ್ಶಿ ಮುದ್ರಿಸಿ',

    footerTagline:
      'ಕರ್ನಾಟಕದ ರಾಜ ಪರಂಪರೆಯ ಶಾಶ್ವತ ಅಭಿವ್ಯಕ್ತಿ — ವಿಶೇಷ ಸಮಾರಂಭಗಳಿಗಾಗಿ ನಾಜೂಕಾಗಿ ರೂಪಿಸಲಾಗಿದೆ.',
    footerGuideHeading: 'ಮಾರ್ಗದರ್ಶಿ',
    footerFinishesHeading: 'ವಿನ್ಯಾಸಗಳು',
    footerOrigin: 'ಗಂಡಭೇರುಂಡ ಸಂಗ್ರಹ · ಕರ್ನಾಟಕ'
  }
};

/* --------------------------------------------------------------------------
   2. Application Entry Point
   -------------------------------------------------------------------------- */
export function initAlpClutchGuide() {
  document.body.classList.remove('is-loading');
  initFinishSwitcher();
  initScrollStepChoreography();
  initContinuous3dScrollEngine();
  initPointer3dTilt();
  initLanguageSwitcher();
  initVideoPlayer();
  initGalleryLightbox();
  initNavigationAndUtilities();
}

/* --------------------------------------------------------------------------
   3. Black / Gold 3D Flip Finish Switcher + URL / Footer Sync
   -------------------------------------------------------------------------- */
function initFinishSwitcher() {
  const finishButtons = document.querySelectorAll('[data-finish-btn]');
  const footerFinishLinks = document.querySelectorAll('[data-footer-finish]');
  const productLayers = document.querySelectorAll('[data-finish-layer]');

  if (!finishButtons.length || !productLayers.length) return;

  function setFinish(selectedFinish) {
    finishButtons.forEach((btn) => {
      const isMatch = btn.getAttribute('data-finish-btn') === selectedFinish;
      btn.classList.toggle('is-active', isMatch);
      btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
    });

    productLayers.forEach((layer) => {
      const isMatch = layer.getAttribute('data-finish-layer') === selectedFinish;
      layer.classList.toggle('is-active', isMatch);
      layer.setAttribute('aria-hidden', isMatch ? 'false' : 'true');
    });
  }

  finishButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetFinish = btn.getAttribute('data-finish-btn');
      if (targetFinish) setFinish(targetFinish);
    });
  });

  footerFinishLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const targetFinish = link.getAttribute('data-footer-finish');
      if (targetFinish) setFinish(targetFinish);
    });
  });

  // Support QR-code deep links such as ?finish=gold or ?finish=black
  try {
    const params = new URLSearchParams(window.location.search);
    const initialFinish = params.get('finish')?.toLowerCase();
    if (initialFinish === 'gold' || initialFinish === 'black') {
      setFinish(initialFinish);
    }
  } catch {
    // Ignore URL parsing issues
  }
}

/* --------------------------------------------------------------------------
   4. Scroll-Linked 5-Step 3D Depth Stack Choreography
   -------------------------------------------------------------------------- */
function initScrollStepChoreography() {
  const steps = Array.from(document.querySelectorAll('.guide-step[data-step]'));
  const frames = Array.from(document.querySelectorAll('.guide-3d-frame[data-step-frame]'));
  const progressBars = Array.from(document.querySelectorAll('[data-step-bar]'));

  if (!steps.length || !frames.length) return;

  function activateStep(stepIdStr) {
    const activeNum = Number(stepIdStr);

    steps.forEach((stepEl) => {
      const isMatch = Number(stepEl.getAttribute('data-step')) === activeNum;
      stepEl.classList.toggle('is-active', isMatch);
    });

    frames.forEach((frameEl) => {
      const frameNum = Number(frameEl.getAttribute('data-step-frame'));
      frameEl.classList.toggle('is-active', frameNum === activeNum);
      frameEl.classList.toggle('is-prev', frameNum < activeNum);
    });

    progressBars.forEach((barEl) => {
      const barNum = Number(barEl.getAttribute('data-step-bar'));
      barEl.classList.toggle('is-active', barNum <= activeNum);
    });
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = entry.target.getAttribute('data-step');
            if (stepId) activateStep(stepId);
          }
        });
      },
      {
        root: null,
        rootMargin: '-32% 0px -42% 0px',
        threshold: 0.05
      }
    );

    steps.forEach((stepEl) => observer.observe(stepEl));
  }

  steps.forEach((stepEl) => {
    stepEl.addEventListener('click', () => {
      const stepId = stepEl.getAttribute('data-step');
      if (stepId) {
        activateStep(stepId);
        if (window.innerWidth > 1024) {
          stepEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });

    stepEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        stepEl.click();
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Continuous Scroll-Driven 3D Spatial Engine & Floating Poise (rAF)
   -------------------------------------------------------------------------- */
function initContinuous3dScrollEngine() {
  const progressFill = document.getElementById('scroll-progress-fill');
  const heroTrack = document.getElementById('hero-track');
  const heroRig = document.getElementById('hero-3d-rig');
  const heroCopy = document.getElementById('hero-copy-block');
  const heroShadow = document.getElementById('hero-3d-shadow');
  const videoSection = document.getElementById('video');
  const video3dFrame = document.getElementById('video-3d-frame');
  const parallaxItems = Array.from(document.querySelectorAll('[data-parallax-speed]'));

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let pointerX = 0;
  let pointerY = 0;
  let targetPointerX = 0;
  let targetPointerY = 0;

  // Frame-accurate scroll velocity & inertial weight state
  let lastScrollY = window.scrollY || window.pageYOffset || 0;
  let lastFrameTime = performance.now();
  let smoothedScrollVelocity = 0;
  let weightedLagY = 0;

  const heroStage = document.getElementById('hero-3d-stage');
  const glint = document.getElementById('hero-specular-glint');

  if (heroStage) {
    heroStage.addEventListener('pointermove', (e) => {
      const rect = heroStage.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetPointerX = nx;
      targetPointerY = ny;

      if (glint) {
        glint.style.setProperty('--glint-x', `${((nx + 0.5) * 100).toFixed(1)}%`);
        glint.style.setProperty('--glint-y', `${((ny + 0.5) * 100).toFixed(1)}%`);
      }
    });

    heroStage.addEventListener('pointerleave', () => {
      targetPointerX = 0;
      targetPointerY = 0;
    });
  }

  function updateScroll3dFrame(now = performance.now()) {
    const dt = Math.min(0.064, Math.max(0.004, (now - lastFrameTime) / 1000));
    lastFrameTime = now;

    const scrollY = window.scrollY || window.pageYOffset;
    const scrollDelta = scrollY - lastScrollY;
    lastScrollY = scrollY;

    // Compute frame-accurate scroll speed (px/sec) with exponential damping
    const rawVelocity = scrollDelta / dt;
    const velAlpha = 1 - Math.exp(-10 * dt);
    smoothedScrollVelocity += (rawVelocity - smoothedScrollVelocity) * velAlpha;

    // Convert scroll speed into a subtle weighted inertial Y-axis lag (clamped ±20px)
    const targetLagY = Math.max(-20, Math.min(20, smoothedScrollVelocity * 0.012));
    const lagAlpha = 1 - Math.exp(-8.5 * dt);
    weightedLagY += (targetLagY - weightedLagY) * lagAlpha;

    const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const globalProgress = Math.min(1, Math.max(0, scrollY / docHeight));

    if (progressFill) {
      progressFill.style.transform = `scaleX(${globalProgress.toFixed(4)})`;
    }

    // Smooth pointer interpolation
    const pointerAlpha = 1 - Math.exp(-9 * dt);
    pointerX += (targetPointerX - pointerX) * pointerAlpha;
    pointerY += (targetPointerY - pointerY) * pointerAlpha;

    // Continuous subtle floating poise (works across both desktop & mobile)
    const floatY = Math.sin(now * 0.0017) * 4.5;
    const floatRotY = Math.cos(now * 0.0012) * 1.8;
    const floatRotX = Math.sin(now * 0.0014) * 1.1;

    // 1. Hero 3D Scroll Levitation, Weighted Y-Axis Inertia & Perspective Offset
    if (heroTrack && heroRig) {
      const isDesktop = window.innerWidth > 768;
      const rect = heroTrack.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height * 0.65)));

      // Shift stage Y-axis perspective origin subtly with scroll position & speed for grounded mass
      if (heroStage) {
        const perspectiveOriginY = 50 + progress * 10 + weightedLagY * 0.45;
        heroStage.style.perspectiveOrigin = `50% ${perspectiveOriginY.toFixed(2)}%`;
      }

      const scrollRotX = (isDesktop ? progress * 9 : progress * 4) + weightedLagY * -0.2 + floatRotX;
      const scrollRotY = (isDesktop ? progress * -12 : progress * -5) + weightedLagY * 0.14 + floatRotY;
      const groundedYOffset = (isDesktop ? progress * -14 : 0) + weightedLagY * (isDesktop ? 1 : 0.45) + floatY;
      const scrollScale = 1 - (isDesktop ? progress * 0.04 : 0);

      const totalRotX = scrollRotX - pointerY * 11;
      const totalRotY = scrollRotY + pointerX * 14;

      heroRig.style.transform = `translate3d(0, ${groundedYOffset.toFixed(2)}px, 0) rotateX(${totalRotX.toFixed(2)}deg) rotateY(${totalRotY.toFixed(2)}deg) scale(${scrollScale.toFixed(3)})`;

      if (heroShadow) {
        const weightCompression = Math.max(
          0.74,
          Math.min(1.12, 1 - progress * 0.14 + (weightedLagY + floatY) * 0.007)
        );
        const shadowX = pointerX * -18;
        const shadowY = Math.max(-6, Math.min(8, weightedLagY * 0.26));
        heroShadow.style.transform = `translate3d(${shadowX.toFixed(1)}px, ${shadowY.toFixed(1)}px, -60px) rotateX(75deg) scale(${weightCompression.toFixed(3)})`;
        heroShadow.style.opacity = String(
          Math.max(0.45, Math.min(0.95, 0.78 - progress * 0.18 + weightedLagY * 0.006))
        );
      }

      if (heroCopy && isDesktop && window.innerWidth > 1024) {
        const copyY = progress * -24 + weightedLagY * 0.32;
        heroCopy.style.transform = `translate3d(0, ${copyY.toFixed(2)}px, 0)`;
        heroCopy.style.opacity = String(Math.max(0.3, 1 - progress * 0.8));
      } else if (heroCopy) {
        heroCopy.style.transform = '';
        heroCopy.style.opacity = '';
      }
    }

    // 2. Video Section Scroll-Unfolding 3D Perspective
    if (videoSection && video3dFrame && window.innerWidth > 768) {
      const vRect = videoSection.getBoundingClientRect();
      const viewportCenter = window.innerHeight * 0.55;
      const dist = Math.max(0, (vRect.top - viewportCenter * 0.35) / window.innerHeight);
      const clamped = Math.min(1, Math.max(0, dist));
      const tiltX = clamped * 12;
      const scale = 1 - clamped * 0.06;
      video3dFrame.style.transform = `perspective(1400px) rotateX(${tiltX.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
    } else if (video3dFrame) {
      video3dFrame.style.transform = '';
    }

    // 3. Multi-Velocity 3D Parallax on Saree Editorial Gallery
    if (window.innerWidth > 900) {
      parallaxItems.forEach((item) => {
        const speed = parseFloat(item.getAttribute('data-parallax-speed') || '0');
        const rect = item.getBoundingClientRect();
        const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
        const yShift = centerOffset * speed;
        item.dataset.parallaxY = yShift.toFixed(1);
        const tiltTransform = item.dataset.tiltTransform || '';
        item.style.transform = `translate3d(0, ${yShift.toFixed(1)}px, 0) ${tiltTransform}`;
      });
    } else {
      parallaxItems.forEach((item) => {
        item.style.transform = '';
      });
    }

    requestAnimationFrame(updateScroll3dFrame);
  }

  requestAnimationFrame(updateScroll3dFrame);
}

/* --------------------------------------------------------------------------
   6. Interactive 3D Tilt on Gallery Cards
   -------------------------------------------------------------------------- */
function initPointer3dTilt() {
  const tiltCards = document.querySelectorAll('[data-tilt-card]');

  tiltCards.forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      if (window.innerWidth < 1024) return;
      const rect = card.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      const rotY = nx * 8;
      const rotX = -ny * 6;
      card.dataset.tiltTransform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
    });

    card.addEventListener('pointerleave', () => {
      card.dataset.tiltTransform = '';
    });
  });
}

/* --------------------------------------------------------------------------
   7. English / Kannada Language Switcher
   -------------------------------------------------------------------------- */
function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll('[data-lang-switch]');
  const translatableElements = document.querySelectorAll('[data-i18n]');

  if (!langButtons.length) return;

  function applyLanguage(langCode) {
    const dictionary = TRANSLATIONS[langCode] || TRANSLATIONS.en;
    document.documentElement.lang = langCode;

    translatableElements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key && dictionary[key]) {
        el.textContent = dictionary[key];
      }
    });

    langButtons.forEach((btn) => {
      const isMatch = btn.getAttribute('data-lang-switch') === langCode;
      btn.classList.toggle('is-active', isMatch);
      btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
    });
  }

  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang-switch');
      if (selectedLang) applyLanguage(selectedLang);
    });
  });
}

/* --------------------------------------------------------------------------
   8. Video Demonstration Player & Chapter Navigation
   -------------------------------------------------------------------------- */
function initVideoPlayer() {
  const videoStage = document.getElementById('video-stage');
  const video = document.getElementById('clutch-demo-video');
  const playToggleBtn = document.getElementById('video-play-toggle');
  const centerPlayBtn = document.getElementById('video-center-play');
  const playIcon = document.getElementById('icon-play');
  const pauseIcon = document.getElementById('icon-pause');
  const seekSlider = document.getElementById('video-seek');
  const timeDisplay = document.getElementById('video-time');
  const muteToggleBtn = document.getElementById('video-mute-toggle');
  const volumeIcon = document.getElementById('icon-volume');
  const muteIcon = document.getElementById('icon-mute');
  const fullscreenBtn = document.getElementById('video-fullscreen-toggle');
  const chapterButtons = Array.from(document.querySelectorAll('[data-video-chapter]'));

  if (!video || !videoStage) return;

  function formatSeconds(sec) {
    if (!Number.isFinite(sec) || sec < 0) return '0:00';
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  function updatePlaybackUI() {
    const isPlaying = !video.paused && !video.ended;
    videoStage.classList.toggle('is-playing', isPlaying);

    if (playIcon && pauseIcon) {
      playIcon.style.display = isPlaying ? 'none' : 'block';
      pauseIcon.style.display = isPlaying ? 'block' : 'none';
    }

    if (playToggleBtn) {
      playToggleBtn.setAttribute('aria-label', isPlaying ? 'Pause video' : 'Play video');
    }
  }

  function updateTimeAndChapters() {
    const current = video.currentTime || 0;
    const duration = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 34;

    if (seekSlider) {
      const percent = Math.min(100, Math.max(0, (current / duration) * 100));
      seekSlider.value = String(percent);
    }

    if (timeDisplay) {
      timeDisplay.textContent = `${formatSeconds(current)} / ${formatSeconds(duration)}`;
    }

    let activeChapterTime = '0';
    if (current >= 17) {
      activeChapterTime = '17';
    } else if (current >= 8) {
      activeChapterTime = '8';
    }

    chapterButtons.forEach((btn) => {
      const isMatch = btn.getAttribute('data-video-chapter') === activeChapterTime;
      btn.classList.toggle('is-active', isMatch);
    });
  }

  function togglePlay() {
    if (video.paused || video.ended) {
      video.play().catch(() => {
        video.muted = true;
        updateMuteUI();
        video.play().catch(() => {});
      });
    } else {
      video.pause();
    }
  }

  function updateMuteUI() {
    const isMuted = video.muted || video.volume === 0;
    if (volumeIcon && muteIcon) {
      volumeIcon.style.display = isMuted ? 'none' : 'block';
      muteIcon.style.display = isMuted ? 'block' : 'none';
    }
  }

  video.addEventListener('play', updatePlaybackUI);
  video.addEventListener('pause', updatePlaybackUI);
  video.addEventListener('ended', updatePlaybackUI);
  video.addEventListener('loadedmetadata', updateTimeAndChapters);
  video.addEventListener('timeupdate', updateTimeAndChapters);
  video.addEventListener('click', togglePlay);

  if (playToggleBtn) playToggleBtn.addEventListener('click', togglePlay);
  if (centerPlayBtn) centerPlayBtn.addEventListener('click', togglePlay);

  if (seekSlider) {
    seekSlider.addEventListener('input', () => {
      const duration = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 34;
      video.currentTime = (parseFloat(seekSlider.value) / 100) * duration;
      updateTimeAndChapters();
    });
  }

  if (muteToggleBtn) {
    muteToggleBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      updateMuteUI();
    });
  }

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      } else if (videoStage.requestFullscreen) {
        videoStage.requestFullscreen().catch(() => {});
      } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
      }
    });
  }

  chapterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      video.currentTime = parseFloat(btn.getAttribute('data-video-chapter') || '0');
      updateTimeAndChapters();
      video.play().catch(() => {});
    });
  });

  updatePlaybackUI();
  updateMuteUI();
  updateTimeAndChapters();
}

/* --------------------------------------------------------------------------
   9. Editorial Gallery Lightbox
   -------------------------------------------------------------------------- */
function initGalleryLightbox() {
  const galleryTriggers = Array.from(document.querySelectorAll('[data-gallery-index]'));
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!galleryTriggers.length || !lightbox || !lightboxImg) return;

  let currentIndex = 0;

  function showSlide(index) {
    const total = galleryTriggers.length;
    currentIndex = (index + total) % total;
    const sourceImg = galleryTriggers[currentIndex].querySelector('img');
    if (sourceImg) {
      lightboxImg.src = sourceImg.currentSrc || sourceImg.src;
      lightboxImg.alt = sourceImg.alt || 'Heritage clutch editorial portrait';
    }
  }

  function openLightbox(index) {
    showSlide(index);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  galleryTriggers.forEach((trigger, idx) => {
    trigger.addEventListener('click', () => openLightbox(idx));
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showSlide(currentIndex - 1);
    if (e.key === 'ArrowRight') showSlide(currentIndex + 1);
  });
}

/* --------------------------------------------------------------------------
   10. Navigation Highlighting, Replay & Print
   -------------------------------------------------------------------------- */
function initNavigationAndUtilities() {
  const replayBtn = document.getElementById('replay-video-btn');
  const printBtn = document.getElementById('print-guide-btn');
  const video = document.getElementById('clutch-demo-video');
  const videoSection = document.getElementById('video');
  const navLinks = Array.from(document.querySelectorAll('.primary-nav .nav-link'));
  const observedSections = ['instructions', 'video', 'gallery']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (replayBtn) {
    replayBtn.addEventListener('click', (e) => {
      e.preventDefault();
      videoSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }

  if ('IntersectionObserver' in window && observedSections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    observedSections.forEach((sec) => sectionObserver.observe(sec));
  }
}

/* Auto-boot */
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAlpClutchGuide);
  } else {
    initAlpClutchGuide();
  }
}
