var mobiles = {
    iphone: {
      iphone7: {
        processor: "Snapdragon 8 Gen 2",
        memory: {
          ram: 12,
          storage: 512,
        },
        brand:"iphone",
        camera: {
          rear: {
            main: 200,
            ultrawide: 12,
            telephoto: 10,
            telephotoPeriscope: 10,
          },
          front: 10,
        },
        battery: "5000 mAH",
        operatingSystem: "Android 13",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        image: "https://images.unsplash.com/photo-1671073437657-acdd1ca6c11d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
      },
      iphone8: {
        processor: "Snapdragon 12 Gen 5",
        memory: {
          ram: 8,
          storage: 256,
        },
        brand:"iphone",
        camera: {
          rear: {
            main: 180,
            ultrawide: 15,
            telephoto: 10,
            telephotoPeriscope: 20,
          },
          front: 12,
        },
        battery: "8000 mAH",
        operatingSystem: "iphone 8",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        image: "https://static-01.daraz.pk/p/f4454cda848fa9c7ff428098d17ed9bb.jpg"
      },
      iphone8plus: {
        processor: "Snapdragon 5 Gen 6",
        memory: {
          ram: 8,
          storage: 128,
        },
        brand:"iphone",

        camera: {
          rear: {
            main: 160,
            ultrawide: 18,
            telephoto: 10,
            telephotoPeriscope: 8,
          },
          front: 16,
        },
        battery: "5000 mAH",
        operatingSystem: "iphone 8",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfi2tJGMRmyidpMge5igBYVyfXP9jKext0g&s"
      },
      iphoneX: {
        processor: "Snapdragon 5 Gen 4",
        memory: {
          ram: 8,
          storage: 256,
        },
        brand:"iphone",

        camera: {
          rear: {
            main: 130,
            ultrawide: 16,
            telephoto: 10,
            telephotoPeriscope: 18,
          },
          front: 14,
        },
        battery: "6000 mAH",
        operatingSystem: "iphone X",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        image: "https://images-cdn.ubuy.co.in/65414af8fd4858736a695a7e-pre-owned-apple-iphone-x-256gb-factory.jpg"
      },
      iphone11: {
        processor: "Snapdragon 7 Gen 9",
        memory: {
          ram: 16,
          storage: 512,
        },
        camera: {
          rear: {
            main: 150,
            ultrawide: 24,
            telephoto: 16,
            telephotoPeriscope: 10,
          },
          front: 20,
        },
        brand:"iphone",
        battery: "10000 mAH",
        operatingSystem: "iphone 11",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        image: "https://regen.pk/cdn/shop/files/REGEN-iPhone11-Backfront-Purple-Pakistan.png?v=1684752662"
      },
    },
    xiomi: {
      redmiA2: {
        modelName: "Mi 12 Pro",
        display: {
          size: "6.73 inches",
          resolution: "3200 x 1440",
          panelType: "AMOLED",
          refreshRate: 120,
        },
        
        processor: "Snapdragon 8 Gen 1",
        memory: {
          ram: 8,
          storage: 256,
        },
        brand:"xiomi",
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: "4600mAh",
        operatingSystem: "Android 12",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        image: "https://www.electrogas.pk/cdn/shop/files/Xiaomi-Redmi-A2-Plus-64GB-Built-in-3GB-RAM-2.jpg?v=1698181668"
      },
      redmi10: {
        modelName: "Mi 8 Pro",
        display: {
          size: "5.73 Inches",
          resolution: "3000 x 1320",
          panelType: "AMOLED",
          refreshRate: 100,
        },
        processor: "Snapdragon 7 Gen 5",
        memory: {
          ram: 12,
          storage: 256,
        },
        brand:"xiomi",
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: "5000mAh",
        operatingSystem: "Android 11",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-10-.jpg"
      },
      redmi11: {
        modelName: "Mi 14 Pro",
        display: {
          size: "6.0 inches",
          resolution: "3000 x 1240",
          panelType: "AMOLED",
          refreshRate: 150,
        },
        
        processor: "Snapdragon 8 Gen 4",
        memory: {
          ram: 12,
          storage: 512,
        },
        brand:"xiomi",
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: "8000 mAh",
        operatingSystem: "Android 12",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        image: "https://cheapprice.pk/image/cache/catalog/xiaomi-redmi-note-11-pro-6gb-500x500.jpg"
      },
      redmi12: {
        modelName: "Mi 12 Pro",
        display: {
          size: "7.4 inches",
          resolution: "3200 x 1440",
          panelType: "AMOLED",
          refreshRate: 180,
        },
        
        processor: "Snapdragon 12 Gen 1",
        memory: {
          ram: 12,
          storage: 512,
        },
        brand:"xiomi",
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: "8000mAh",
        operatingSystem: "Android 13",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeR-ykjxZ0d8PUmrNdnhZMclCRYl4Z1JEBQQ&s"
      },
      redmi13: {
        modelName: "Mi 14 Pro",
        display: {
          size: "8.03 inches",
          resolution: "4200 x 1540",
          panelType: "AMOLED",
          refreshRate: 100,
        },
        
        processor: "Snapdragon 8 Gen 6",
        memory: {
          ram: 12,
          storage: 256,
        },
        brand:"xiomi",
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: "10000mAh",
        operatingSystem: "Android 13",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        image: "https://shop.lapntab.com/wp-content/uploads/2024/06/Redmi-13-4.webp"
      },
      redmi13C: {
        modelName: "Mi 14 Pro",
        display: {
          size: "8.43 inches",
          resolution: "4200 x 1340",
          panelType: "AMOLED",
          refreshRate: 100,
        },
        processor: "Snapdragon 9 Gen 5",
        memory: {
          ram: 12,
          storage: 512,
        },
        brand:"xiomi",
        camera: {
          rear: {
            main: "50MP",
            ultrawide: "50MP",
            telephoto: "48MP",
          },
          front: "32MP",
        },
        battery: "10000mAh",
        operatingSystem: "Android 13",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        image: "https://leyjao.pk/images/thumbnails/1223/1000/detailed/618/Xiaomi-Redmi-13C.webp"
      },
    },
    realme: {
      realmiNote50: {
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "6.5 inches",
          resolution: "FHD+ (1080 x 2400 pixels)",
          type: "AMOLED",
        },
        
        processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
        memory: {
          ram: "8GB",
          storage: "128GB",
        },
        brand: "Realme",
        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "16MP",
          },
        },
        battery: {
          capacity: "5000mAh",
          fastCharging: "65W",
        },
        operatingSystem: "Android 12",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
        image: "https://mobiles360.pk/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fmr7anzoty%2FRealme%2Frealme-note-50.jpeg&w=3840&q=100"
      },
      realmiC67: {
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "6.7 inches",
          resolution: "FHD+ (1280 x 2100 pixels)",
          type: "AMOLED",
        },
        processor: "Qualcomm Snapdragon 6 Gen 4", // Replace with specific processor
        memory: {
          ram: "8GB",
          storage: "256GB",
        },
        brand: "Realme",
        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "14MP",
          },
        },
        battery: {
          capacity: "5000mAh",
          fastCharging: "65W",
        },
        operatingSystem: "Android 11",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYDnl8sGr_i1QOycTzUHQ89vTgTLxq4xVvgQ&s"
      },
      realmiC53: {
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "7.1 inches",
          resolution: "FHD+ (1180 x 2500 pixels)",
          type: "AMOLED",
        },
        processor: "Qualcomm Snapdragon 8 Gen 6", // Replace with specific processor
        memory: {
          ram: "12GB",
          storage: "128GB",
        },
        brand: "Realme",
        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "18MP",
          },
        },
        battery: {
          capacity: "8000mAh",
          fastCharging: "65W",
        },
        operatingSystem: "Android 12",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
        image: "https://buyelectro.pk/wp-content/uploads/2024/12/realme-c53-pakistan-Buyelcetro-Black.webp"
      },
      realmi9: {
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "7.2 inches",
          resolution: "FHD+ (1180 x 2200 pixels)",
          type: "AMOLED",
        },
        processor: "Qualcomm Snapdragon 9 Gen 6", // Replace with specific processor
        memory: {
          ram: "12GB",
          storage: "256GB",
        },
        brand: "Realme",
        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "24MP",
          },
        },
        battery: {
          capacity: "10000mAh",
          fastCharging: "75W",
        },
        operatingSystem: "Android 12",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
        image: "https://www.winstore.pk/cdn/shop/products/mbAl4LjreD.jpg?v=1659350297"
      },
      realmi9i: {
        model: " hypothetical model ", // Replace with specific model name
        display: {
          size: "6.9 inches",
          resolution: "FHD+ (1480 x 2400 pixels)",
          type: "AMOLED",
        },

        processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
        memory: {
          ram: "12GB",
          storage: "512GB",
        },
        brand: "Realme",
        camera: {
          rear: {
            resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
          },
          front: {
            resolution: "16MP",
          },
        },
        battery: {
          capacity: "2000mAh",
          fastCharging: "70W",
        },
        operatingSystem: "Android 13",
        specialFeatures: [
          "In-display fingerprint sensor",
          "3.5mm headphone jack",
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsguMikOR25y5rt5i8T0ZoRmjUWeY2M6XItw&s"
      },
    },
    samsung: {
      samsung_Galaxy_S24: {
        model: "Galaxy S24 Ultra", // Replace with specific model
        // Display
        displaySize: "6.8 Inches", // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
        
        // Processor & Memory
        processor: "Snapdragon 8 Gen 2", // Replace with actual processor
        memory: {
          ram: 12,
          storage: 512,
        },
        
        brand: "Samsung",
        // Cameras
        rearCamera: {
          megapixel: 108,
          features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        batteryCapacity: '5000mAh', // mAh
        fastCharging: "45W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 14",
  
        // Additional Specs (Optional)
        fingerprintSensor: "fingerprintSensor",
        waterResistance: "IP68",
        expandableStorage: "No",
        image: "https://bnwcollections.com/uploads/products/1720162484S24-bnw_11zon.webp"
      },
      samsung_Galaxy_S51: {
        model: "Galaxy S51 Pro", // Replace with specific model
        
        // Display
        displaySize: "7.2 Inches", // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
        
        // Processor & Memory
        processor: "Snapdragon 9 Gen 4", // Replace with actual processor
        memory: {
          ram: 8,
          storage: 128,
        },
        brand: "Samsung",
  
        // Cameras
        rearCamera: {
          megapixel: 112,
          features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        batteryCapacity: '8000mAh', // mAh
        fastCharging: "45W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 11",
  
        // Additional Specs (Optional)
        fingerprintSensor: "fingerprintSensor",
        waterResistance: "IP68",
        expandableStorage: "No",
        image: "https://sonic.ge/dyn/ElQQnnan52YdeLAFFf7nmerst-QA7Fe-l3ScXSV9Y_8/bg:fff/rs:fit:220:0/plain/images/products/original/973c229c-fa67-49de-bc09-b1ee4bd3516d.jpg@jpg"
      },
      samsung_Galaxy_Prime: {
        model: "Galaxy Prime Ultra", // Replace with specific model
        
        // Display
        displaySize: "7.4 Inches", // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
        
        // Processor & Memory
        processor: "Snapdragon 8 Gen 10", // Replace with actual processor
        memory: {
            ram: 4,
            storage: 64,
          },
  
        brand: "Samsung",
        // Cameras
        rearCamera: {
          megapixel: 108,
          features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        batteryCapacity: "5000mAh", 
        fastCharging: "45W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 13",
  
        // Additional Specs (Optional)
        fingerprintSensor: "fingerprintSensor",
        waterResistance: "IP68",
        expandableStorage: "No",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmbvndSNDQSfK69w_5I2mNw3-vXI1B8aGoQ&s"
      },
      samsung_Galaxy_S46: {
        model: "Galaxy S46 Ultra", // Replace with specific model
        
        // Display
        displaySize: "5.11 Inches", // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
  
        // Processor & Memory
        processor: "Snapdragon 8 Gen 2", // Replace with actual processor
        memory: {
          ram: 6,
          storage: 64,
        },
        brand: "Samsung",
  
        // Cameras
        rearCamera: {
          megapixel: 108,
          features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        batteryCapacity: "20000mAh", // mAh
        fastCharging: "65W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 14",
  
        // Additional Specs (Optional)
        fingerprintSensor: "fingerprintSensor",
        waterResistance: "IP68",
        expandableStorage: "No",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZmbvndSNDQSfK69w_5I2mNw3-vXI1B8aGoQ&s"
      },
      samsung_Galaxy_S77: {
        model: "Galaxy S77 Ultra", // Replace with specific model
        
        // Display
        displaySize: "8.5 Inches", // Inches
        displayResolution: "3088x1440",
        displayType: "AMOLED",
  
        // Processor & Memory
        processor: "Snapdragon 12 Gen 24", // Replace with actual processor
        memory: {
          ram: 12,
          storage: 512,
        },
        brand: "Samsung",
  
        // Cameras
        rearCamera: {
          megapixel: 158,
          features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
        },
        frontCamera: {
          megapixel: 40,
        },
  
        // Battery
        batteryCapacity: "20000mAh", // mAh
        fastCharging: "85W Super Fast Charging",
  
        // Operating System
        operatingSystem: "Android 14",
  
        // Additional Specs (Optional)
        fingerprintSensor: "fingerprintSensor",
        waterResistance: "IP68",
        expandableStorage: "No",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6EGUDoFN4oAvqmYfqwGfEc7rCgPZmTIAhdQ&s"
      },
    },
  }
  
  let currentBrand = ""
  let mobileModelName = ""
  let mobileDetails = ""
  let a = ''

  function AddBrandList() {
    let brandNameKey = Object.keys(mobiles)
    
    let selectBrand = document.querySelector('#brand')
    selectBrand.setAttribute('onchange', 'getValue(this)');
    
    brandNameKey.forEach((brandName) => {
      let createTag1 = document.createElement('option')
      createTag1.textContent = brandName;
      selectBrand.appendChild(createTag1);
    })
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    AddBrandList();
  });

  // get mobile brand name from selectBrand
  function getValue(selectBrand) {
    currentBrand = selectBrand.value;
     
    let mobileName = Object.keys(mobiles[currentBrand])

    let selectModel = document.querySelector('#model')
    
    let innerTag = document.querySelectorAll("#model>option")

    let arrayLenght = innerTag.length

    if (arrayLenght > 0) {
      for(let i = 1; i < innerTag.length; i++){
          innerTag[i].remove()         
      }
    }

    selectModel.setAttribute('onchange', 'getMobileModelValue(this)');
    
    mobileName.forEach((modelName) =>{
      let createTag2 = document.createElement('option')
      createTag2.textContent = modelName
      selectModel.appendChild(createTag2)
    })
  }
  
  function getMobileModelValue(selectModel) {
     mobileModelName = selectModel.value;

     mobileDetails = mobiles[currentBrand][mobileModelName]
     console.log(mobileDetails)
      a = objectValue(mobileDetails)
    }
    
    // Create mobile model detail list  
    function objectValue(model) {
        let keys = [];
        
        if (model === null || typeof model !== 'object') {
            return model; 
        }
        
        if (Array.isArray(model)) {
            model.forEach((item) => {
                let subValue = objectValue(item); 
                keys.push(` ${subValue}`);
            });
        } else {
            for (let key in model) {
                if (model.hasOwnProperty(key)) {
                    if (key !== 'image') {
                        let subValue = objectValue(model[key]);
                        keys.push(`${key}: ${subValue}`);
                    }
                }
                if (key === 'image') {
                    let subValue = objectValue(model[key]);
                    keys.push(`${subValue}`);
                }
            }
        }
        
        return keys;
    }
    let button = document.querySelector('#searchBtn')
    // Create mobile Details card function call
    button.addEventListener('click',() => mobileCard(a))
    
    // Create mobile Details card function
    function mobileCard(a) {
    let image = document.querySelector('#image')
    
    let h1 = document.querySelector('#heading')
    h1.innerText = "Description:"
    
    let description = document.querySelector('#innertext')
    description.innerHTML = ''

    for(let i in a){
        let b = a[i]
        console.log(b)
        if (!b.startsWith('https://')) {
            description.innerHTML +=`<h2>${a[i]}<h2/>` 
            
        }else{
            image.src = a[i]
        }  
    }  
  }
