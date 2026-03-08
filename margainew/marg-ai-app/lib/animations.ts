// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 }
}

export const scaleIn = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 0 },
  transition: { type: "spring", stiffness: 200, damping: 15 }
}

export const slideInRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
  transition: { type: "spring", stiffness: 100, damping: 20 }
}

export const bounceIn = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: { 
    type: "spring", 
    stiffness: 260, 
    damping: 20,
    duration: 0.6
  }
}

export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export const shake = {
  animate: {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.5 }
  }
}

export const confetti = {
  initial: { y: -20, opacity: 0 },
  animate: { 
    y: 100, 
    opacity: [0, 1, 1, 0],
    rotate: [0, 360],
    transition: { duration: 1.5, ease: "easeOut" }
  }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

// Celebration function for score-based animations
export const celebrateScore = (score: number) => {
  // You can add custom celebration logic here
  // For now, this is a placeholder that can be extended
  if (score >= 90) {
    console.log("🎉 Excellent score!")
  } else if (score >= 70) {
    console.log("👏 Great job!")
  } else {
    console.log("💪 Keep going!")
  }
}
