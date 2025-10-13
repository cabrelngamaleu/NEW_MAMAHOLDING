declare module 'react-player' {
  import { Component } from 'react'
  
  interface ReactPlayerProps {
    url: string
    playing?: boolean
    controls?: boolean
    width?: string | number
    height?: string | number
    config?: any
  }
  
  export default class ReactPlayer extends Component<ReactPlayerProps> {}
}
