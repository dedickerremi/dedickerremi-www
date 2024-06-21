"use client"

import { render } from "@/src/three"
import { useEffect, useRef } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import { ArcballControls } from "three/examples/jsm/controls/ArcballControls.js"

export const Scene: React.FC = () => {
  const containerRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const canvas = containerRef.current
      if (!canvas) throw new Error("Canvas not found")

      const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
      const fov = 75
      const aspect = 2 // the canvas default
      const near = 0.1
      const far = 5
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
      camera.position.z = 2

      const scene = new THREE.Scene()

      const boxWidth = 1
      const boxHeight = 1
      const boxDepth = 1
      const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)

      const material = new THREE.MeshPhongMaterial({
        color: 0x44aa88,
        name: "cube",
      })

      const cube = new THREE.Mesh(geometry, material)
      cube.name = "cube"
      // scene.add(cube)

      const controls = new ArcballControls(camera, renderer.domElement, scene)
      controls.update()

      controls.addEventListener("change", function () {
        renderer.render(scene, camera)
      })

      const color = 0xffffff
      const intensity = 3
      const light = new THREE.DirectionalLight(color, intensity)
      light.position.set(-1, 2, 4)
      scene.add(light)

      renderer.setPixelRatio(window.devicePixelRatio)

      const loader = new GLTFLoader()

      // Load a glTF resource
      loader.load(
        // resource URL
        "/vessel/scene.gltf",
        // called when the resource is loaded
        function (gltf) {
          scene.add(gltf.scene)

          gltf.animations // Array<THREE.AnimationClip>
          gltf.scene // THREE.Group
          gltf.scenes // Array<THREE.Group>
          gltf.cameras // Array<THREE.Camera>
          gltf.asset // Object
        },
        // called while loading is progressing
        function (xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
        },
        // called when loading has errors
        function (error) {
          console.error(error)
          console.log("An error happened")
        }
      )

      requestAnimationFrame(render({ scene, camera, renderer }))
    }
  }, [])

  return <canvas ref={containerRef} className="w-full h-[90vh]" />
}
