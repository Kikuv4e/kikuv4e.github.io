/**
 * Created by Kiko on 10/4/2015.
 */




function createWeightSwing(scene, theProduct, angle){
    var object = new CreateObjects(scene);
    var finalObject = new THREE.Object3D();
    var finalObjectPro = new THREE.Object3D();
    object.createCylinder(2, 2, 25, 20, 20);
    object.currentObject.position.set(0, 12.5, 0);
    finalObject.add(object.currentObject);
    object.createCylinder(2, 2, 25, 20, 20);
    object.currentObject.position.set(25, 12.5, 0);
    finalObject.add(object.currentObject);
    object.createCylinder(2, 2, 15, 20, 20);
    object.currentObject.position.set(50, 7.5, 0);
    finalObject.add(object.currentObject);
    object.createCylinder(2, 2, 15, 20, 20);
    object.currentObject.position.set(-25, 7.5, 0);
    finalObject.add(object.currentObject);
    object.createCylinder(2, 2, 25, 20, 20);
    object.currentObject.position.set(13, 23, 0);
    object.currentObject.rotateZ(Math.PI/2)
    finalObject.add(object.currentObject);
    object.createCylinder(2, 2, 25, 20, 20);
    object.currentObject.position.set(38, 13, 0);
    object.currentObject.rotateZ(Math.PI/2)
    finalObject.add(object.currentObject);
    object.createCylinder(2, 2, 25, 20, 20);
    object.currentObject.position.set(-12, 13, 0);
    object.currentObject.rotateZ(Math.PI/2)
    finalObject.add(object.currentObject);
    scene.add(finalObject);
    object.createCylinder(2, 2, 80, 20, 20);
    object.currentObject.position.set(-12, 0, 0);
    object.currentObject.rotateX(Math.PI/2);
    finalObjectPro.add(object.currentObject);
    object.createCircle(9   , 20);
    object.currentObject.position.set(-12,  2.2, 39);
    object.currentObject.rotateX(Math.PI/2);
    finalObjectPro.add(object.currentObject);
    object.createCircle(9   , 20);
    object.currentObject.position.set(-12, 2.2, -39);
    object.currentObject.rotateX(Math.PI/2);
    finalObjectPro.add(object.currentObject);
    var nextSwing, thirdSwing;
    nextSwing = new THREE.Object3D();
    thirdSwing = new THREE.Object3D();
    nextSwing = finalObjectPro.clone();
    thirdSwing = finalObjectPro.clone();
    finalObjectPro.rotateX(angle);
    finalObjectPro.position.set(0, 15, 0);
    nextSwing.position.set(25, 25, 0);
    thirdSwing.position.set(50, 15, 0);
    thirdSwing.rotateX(angle);
    nextSwing.rotateX(angle);
    theProduct.add(finalObject, finalObjectPro, nextSwing, thirdSwing);
}

function createMultipleWeightSwings(scene, theProduct, angle){
    var first = new THREE.Object3D();
    var second = new THREE.Object3D();
    createWeightSwing(scene, first, angle);
    second = first.clone();
    first.position.set(292, 3.5, 8);
    first.rotateY(Math.PI/2);
    theProduct.add(first);
    second.position.set(-292, 3.5, 8);
    second.rotateY(Math.PI/2);
    theProduct.add(second);
}
