import { IOptions, RecursivePartial } from 'tsparticles-engine'

export const optionsParticles: RecursivePartial<IOptions> = {
  background: {
    color: {
      value: '#10002B'
    }
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onHover: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      push: {
        quantity: 4
      },
      repulse: {
        distance: 65,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff'
    },
    links: {
      color: '#E0AAFF',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce'
      },
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 600
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: ''
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
  detectRetina: true
}