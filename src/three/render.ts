import { Camera, Renderer, Scene } from "three"

export const render = ({
  scene,
  camera,
  renderer,
}: {
  scene: Scene
  camera: Camera
  renderer: Renderer
}) =>
  function render(time: number) {
    time *= 0.001 // convert time to seconds
    const objects = scene.children
    objects.forEach((obj) => {
      if (obj.name === "cube") {
        obj.rotation.x = time / 2
        obj.rotation.y = time / 2
      }
    })
    // console.info("objects", objects)
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
