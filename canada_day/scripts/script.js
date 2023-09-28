// Include the NativeUI and Textures modules 

const NativeUI = require('NativeUI'); 
const Scene = require('Scene'); 
const Textures = require('Textures');


// Access the opject using the get method 

const faceMesh0 = Scene.root.find('faceMesh0');
const faceMesh1 = Scene.root.find('faceMesh1');
//const faceMesh2 = Scene.root.find('faceMesh2');
//const faceMesh3 = Scene.root.find('faceMesh3');
//const faceMesh4 = Scene.root.find('faceMesh4');
//const faceMesh5 = Scene.root.find('faceMesh5');

// Create a reference to the picker 

const picker = NativeUI.picker; 

// Set up the configuration for the picker 

 const index = 0;

 const configuration = { 

 selectedIndex: index,

 items: [ 
 {image_texture: Textures.get('texture0')}, 
 {image_texture: Textures.get('texture1')}
 //{image_texture: Textures.get('texture2')},
 //{image_texture: Textures.get('texture3')},
// {image_texture: Textures.get('texture4')},
 //{image_texture: Textures.get('texture4')}
 ]

};

// Configure the picker 

picker.configure(configuration);

// Set the picker's visibility to true 
// This property is false by default

picker.visible = true;


//Subscribing to the selectedIndex property of the picker 

picker.selectedIndex.monitor().subscribe(function (index)
{
    if (index.newValue == 0) {

        faceMesh0.hidden = false;
        faceMesh1.hidden = true;
        //faceMesh2.hidden = true;
        //faceMesh3.hidden = true;
        //faceMesh4.hidden = true;
        //faceMesh5.hidden = true;

    }

    else if (index.newValue == 1) {

        faceMesh0.hidden = true;
        faceMesh1.hidden = false;
        //faceMesh2.hidden = true;
        //faceMesh3.hidden = true;
        //faceMesh4.hidden = true;
        //faceMesh5.hidden = true;

    }

    /*else if (index.newValue == 2) {

        faceMesh0.hidden = true;
        faceMesh1.hidden = true;
        faceMesh2.hidden = false;
        faceMesh3.hidden = true;
        faceMesh4.hidden = true;
        faceMesh5.hidden = true;

    }

    else if (index.newValue == 3) {

        faceMesh0.hidden = true;
        faceMesh1.hidden = true;
        faceMesh2.hidden = true;
        faceMesh3.hidden = false;
        faceMesh4.hidden = true;
        faceMesh5.hidden = true;

    }

    else if (index.newValue == 4) {

        faceMesh0.hidden = true;
        faceMesh1.hidden = true;
        faceMesh2.hidden = true;
        faceMesh3.hidden = true;
        faceMesh4.hidden = false;
        faceMesh5.hidden = true;

    }


    else if (index.newValue == 5) {

        faceMesh0.hidden = true;
        faceMesh1.hidden = true;
        faceMesh2.hidden = true;
        faceMesh3.hidden = true;
        faceMesh4.hidden = true;
        faceMesh5.hidden = false;

    }*/
      
 }); 