/**
 * Created by Kiko on 10/8/2015.
 */


function createLamp(scene, final){
    var object = new CreateObjects(scene);
    object.createCylinder(4, 4, 231, 20, 20);
    object.currentObject.position.set(-38, 231/2, 108);
    final.add(object.currentObject);
    object.createTorus(10, 4, 20, 20, Math.PI/2);
    object.currentObject.position.set(-38, 232, 117);
    object.currentObject.rotateY(Math.PI/2);
    final.add(object.currentObject);
    object.createSphere(7, 16, 21, 3, 6.3, 3, 1.5);
    object.currentObject.position.set(-39 + 1, 232 + 10 + 1, 117 + 6.4);
    object.currentObject.rotateX(Math.PI/2);
    final.add(object.currentObject);
    object.createSphere(3, 16, 21, 3, 6.3, 3, Math.PI*2);
    object.currentObject.position.set(-39 + 1, 241, 119);
    object.currentObject.material.color.setHex(0x0000ff);
    final.add(object.currentObject);
    final.position.set(0, 0, -12);
}
