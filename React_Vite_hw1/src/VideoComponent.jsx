import Video from './video/Top Magnus Carlsen v Daniil Dubov 1.mp4'
const VideoComponent = () => {
  return (
    <div>
      <video src={Video} width="320" height="240" controls/>
    </div>
  )
}

export default VideoComponent

