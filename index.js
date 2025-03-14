const Person = {
    Basic_Information: {
        First_Name: "Mehrzad",
        Last_Name: "Nikzad",
        Gender: "Male",
        Age: "16",
        Address: {
            Country: "IRAN",
            province: "Mazandaran",
            City: "Sari",
            Street: "Danesh",
            Zip_Code: "123456789",
        },
        Phone_Number: "09114145324",
        Favorites: ["Car", "Game", "Computer"]
    },
    Professional_Information: {
        Skills: ["Programmer", "Gamer"],
        Programming_Languages: ["Lua", "Java Script", "HTML", "PHP", "MYSQL"]
    }
}

// Show Basic Info
console.log("\nShow Person Basic Informatrion\n");

const basicInfoKeys = Object.keys(Person.Basic_Information);

basicInfoKeys.forEach(key => {
    const value = Person.Basic_Information[key];
    if (typeof value === 'object') {
        console.log(`${key} : {`);
        Object.keys(value).forEach(addressKey => {
            console.log(`   ${addressKey}: ${value[addressKey]}`);
        });
        console.log("   }");
        
    } else {
        console.log(`${key}: ${value}\n`);
    }
});

// Show Professional Info
console.log("\n\n\nShow Person Professional Informatrion\n");

const ProfessionalInfoKeys = Object.keys(Person.Professional_Information);

ProfessionalInfoKeys.forEach(key => {
    const value = Person.Professional_Information[key];
    if (typeof value === 'object') {
        console.log(`${key} : {`);
        Object.keys(value).forEach(addressKey => {
            console.log(`   ${addressKey}: ${value[addressKey]}`);
        });
        console.log("   }");
        
    } else {
        console.log(`${key}: ${value}\n`);
    }
});

