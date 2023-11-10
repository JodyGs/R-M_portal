import * as THREE from 'three'
import Experience from './Experience'
import vertexShader from './shaders/portalMain/vertex.glsl'
import fragmentShader from './shaders/portalMain/fragment.glsl'

export default class Portal {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene

    this.group = new THREE.Group()
    this.scene.add(this.group)

    this.setMain()
  }

  setMain() {
    this.main = {}
    this.main.geometry = new THREE.PlaneGeometry(3, 3, 1, 1)
    this.main.material = new THREE.ShaderMaterial(
      {
        vertexShader,
        fragmentShader,
      }
    )
    this.main.mesh = new THREE.Mesh(this.main.geometry, this.main.material)

    this.group.add(this.main.mesh)
  }
}