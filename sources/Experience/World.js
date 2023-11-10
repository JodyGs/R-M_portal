import * as THREE from 'three'
import Experience from './Experience.js'
import Portal from './Portal.js'

export default class World {
    constructor(_options) {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resources.on('groupEnd', (_group) => {
            if (_group.name === 'base') {
                this.setPortal()
            }
        })
    }

    setDummy() {
        this.resources.items.loTexture.encoding = THREE.sRGBEncoding

        const cube = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ map: this.resources.items.loTexture })
        )
        this.scene.add(cube)
    }

    setPortal() {
        this.portal = new Portal()
    }

    resize() {
    }

    update() {
    }

    destroy() {
    }
}