import 'styled-components'
const _ = colors;

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors:{
      link: string,
      icon: string,
      background: string,
      title: string,
      subTitle: string,
      header: string,
      // ... outras propriedades de cor, se aplicável
    },
  }
}