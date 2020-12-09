// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`

export default px2vw
