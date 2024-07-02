class Controller {
    constructor() {
  
      this.trailLengthElement = document.getElementById("trailLength");
      this.trailLength = this.trailLengthElement.valueAsNumber;
      this.trailLengthElement.addEventListener("change", (e) => {
        this.trailLength = (e.target.valueAsNumber);
      })
  
      this.resolutionElement = document.getElementById("resolution");
      this.resolution = this.resolutionElement.valueAsNumber;
      this.resolutionElement.addEventListener("change", (e) => {
        this.resolution = (e.target.valueAsNumber);
        noLoop();
        setup();
      })

      this.thresholdElement = document.getElementById("threshold");
      this.threshold = this.thresholdElement.valueAsNumber / 100;
      this.thresholdElement.addEventListener("change", (e) => {
        this.threshold = (e.target.valueAsNumber / 100);
        noLoop();
        setup();
      })
  
      this.onOffElement = document.getElementById("onOff");
      this.onOffElement.checked = true;
      this.onOff = this.onOffElement.checked;
      this.onOffElement.addEventListener("change", (e) => {
        this.onOff = (e.target.checked);
  
      })
  
  
      this.uploadedImage = "/CP2077_Samurai_Logo.webp";
      this.uploadImageElement = document.querySelector("input[type=file]");
      this.uploadImageElement.addEventListener("change", (e) => {
        const file = this.uploadImageElement.files[0];
        const reader = new FileReader();
  
        reader.addEventListener(
          "load",
          () => {
            // convert image file to base64 string
            controller.uploadedImage = reader.result;
            setup();
          },
          false
        );
  
        if (file) {
          reader.readAsDataURL(file);
        }
      })
    }
  
  }