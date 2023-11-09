

document.addEventListener('alpine:init', () => {
  Alpine.data('pano', () => ({
      show: 'overview',
      viewer: null,
      showPano(firstScene) {
        this.show = "panorama";
        this.viewer = pannellum.viewer('panorama', {   
          "default": {
              "firstScene": firstScene,
              "author": "--",
              "sceneFadeDuration": 1000
          },
        
          "scenes": {
              "office": {
                  "title": "Office",
                  "hfov": 110,
                  "pitch": -3,
                  "yaw": 117,
                  "type": "equirectangular",
                  "panorama": "./sample.jpeg",
                  "autoLoad": true,
                  "hotSpots": [
                      {
                          "pitch": -2.1,
                          "yaw": 132.9,
                          "type": "scene",
                          "text": "Outdoors",
                          "sceneId": "outside"
                      },
                      {
                          "pitch": 0.6,
                          "yaw": 256.9,
                          "type": "scene",
                          "text": "Room",
                          "sceneId": "room"
                      }
                  ]
              },
        
              "outside": {
                  "title": "Outdoors",
                  "hfov": 110,
                  "yaw": 5,
                  "type": "equirectangular",
                  "panorama": "./outside.jpg",
                  "autoLoad": true,
                  "hotSpots": [
                      {
                          "pitch": -15,
                          "yaw": -20,
                          "type": "scene",
                          "text": "Office",
                          "sceneId": "office",
                          "targetYaw": -23,
                          "targetPitch": 2
                      }
                  ]
              },
        
              "room": {
                  "title": "Room",
                  "hfov": 110,
                  "yaw": 5,
                  "type": "equirectangular",
                  "panorama": "./room.jpeg",
                  "autoLoad": true,
                  "hotSpots": [
                      {
                          "pitch": 0.6,
                          "yaw": 80.1,
                          "type": "scene",
                          "text": "Office",
                          "sceneId": "office",
                          "targetYaw": -23,
                          "targetPitch": 2
                      },
                      {
                          "pitch": 0.6,
                          "yaw": -60,
                          "type": "scene",
                          "text": "Outdoors",
                          "sceneId": "outside",
                          "targetYaw": -23,
                          "targetPitch": 2
                      }
                  ]
              }
          }
        });
      }
  }))
})