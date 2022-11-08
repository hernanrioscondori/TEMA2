import {loadGLTF} from "loader.js";
//import {mockWithVideo} from "camera-mock.js";
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
  //  mockWithVideo('tema2.mp4');

    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: 'targets.mind',
    });
    const {renderer, scene, camera} = mindarThree;

    const loader= new GLTFoader();
    loader.load("scene.gltf",(gltf) =>{
      const anchor = mindarThree.addAnchor(0);
    });

  

    
    

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
