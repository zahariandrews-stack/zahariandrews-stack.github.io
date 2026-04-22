$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();
createPlatform(250, 650, 125, 20)
createPlatform(500, 525, 100, 20)
createPlatform(250, 400, 100, 20)
createPlatform(600, 300, 100, 20)
createPlatform(1050, 450, 50, 20)


    // TODO 2 - Create Platforms
createCollectable("database" , 290, 600, 10, 0.5)
createCollectable("database" , 620, 160, 10, 0.5)
createCollectable("database" , 1050, 95, 10, 0.5)

    // TODO 3 - Create Collectables
createCannon("left", 500,900)
createCannon("top", 950,700)
createCannon("top", 600,725)
createCannon("right", 500,900)
createCannon("left", 500,900)


    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }
  registerSetup(setup);
});
