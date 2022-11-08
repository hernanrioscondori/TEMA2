import {GLTFLoader} from "GLTFLoader.js";
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
 const anchor = mindarThree.addAnchor(0);
    const loader= new GLTFoader();
    loader.load("scene.gltf",(gltf) =>{
     anchor.group.add(gltf.scene);
    });

  

    
    

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
