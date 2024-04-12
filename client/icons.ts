// import _1 from './icons/small/1.png'
// import _2 from './icons/small/2.png'
// import _3 from './icons/small/3.png'
// import _4 from './icons/small/4.png'
// import _5 from './icons/small/5.png'
// import _6 from './icons/small/6.png'
// import _7 from './icons/small/7.png'
// import _8 from './icons/small/8.png'

// const icons = {
//   1: _1,
//   2: _2,
//   3: _3,
//   4: _4,
//   5: _5,
//   6: _6,
//   7: _7,
//   8: _8,
// } as Record<string, string>

const icons = import.meta.glob('./icons/*.png', {
  // import: 'default',
  eager: true,
}) as Record<string, string>

export default icons
